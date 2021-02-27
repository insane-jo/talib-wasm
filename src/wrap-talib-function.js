const taReturnCodes = require('../constants/ta-return-codes');

const ARRAY_TYPES = [
    'Double Array',
    'High',
    'Low',
    'Close',
    'Volume',
    'Open',
    'Integer Array'
];

function cArray(Module, sizeOrData) {
    const size = Array.isArray(sizeOrData) ? sizeOrData.length : sizeOrData;
    const offset = Module._malloc(size * 8);
    Module.HEAPF64.set(new Float64Array(sizeOrData), offset / 8);
    return {
        "data": Module.HEAPF64.subarray(offset / 8, offset / 8 + size),
        "offset": offset
    }
}

module.exports = (Module, functionDescr) => {
    let wrappedFunction;
    let wrappedFunctionLookback;

    const Abbreviation = functionDescr.Abbreviation[0];

    const callCwrapArgs = [];
    const callCwrapArgsLookback = [];

    const RequiredInputArguments = ((functionDescr.RequiredInputArguments || [])[0] || {
        RequiredInputArgument: []
    })
        .RequiredInputArgument
        .map((current) => {
            const typeIsArray = ARRAY_TYPES.indexOf(current.Type) !== -1;
            if (typeIsArray) {
                callCwrapArgs.push('[number]')
            } else {
                callCwrapArgs.push('number')
            }

            return {
                name: current.Name[0].replace(' ', ''),
                defaultValue: null,
                // typeIsArray
            };
        });

    const OptionalInputArguments = ((functionDescr.OptionalInputArguments || [])[0] || {
        OptionalInputArgument: []
    }).OptionalInputArgument
        .map((current) => {
            const typeIsArray = ARRAY_TYPES.indexOf(current.Type) !== -1;
            if (typeIsArray) {
                callCwrapArgs.push('[number]');
                callCwrapArgsLookback.push('[number]');
            } else {
                callCwrapArgs.push('number');
                callCwrapArgsLookback.push('number');
            }

            return {
                name: 'optIn' + current.Name[0].replace(' ', ''),
                defaultValue: +current.DefaultValue[0],
                // typeIsArray
            };
        });

    callCwrapArgs.push('number'); // outBegIdx
    callCwrapArgs.push('number'); // outNBElement

    const OutputArguments = ((functionDescr.OutputArguments || [])[0] || {
        OutputArgument: []
    }).OutputArgument
        .map((current) => {
            const typeIsArray = ARRAY_TYPES.indexOf(current.Type) !== -1;
            if (typeIsArray) {
                callCwrapArgs.push('[number]')
            } else {
                callCwrapArgs.push('number')
            }

            return {
                name: current.Name[0].replace(' ', ''),
                // typeIsArray
            };
        });

    const cwrapFunction = Module.cwrap(`TA_${Abbreviation}`,
        'number',
        callCwrapArgs
    );

    const cwrapFunctionLookback = Module.cwrap(`TA_${Abbreviation}_Lookback`,
        'number',
        callCwrapArgsLookback
    );

    wrappedFunction = (optionsToCall) => {
        const dataToCallFunction = {
            ...optionsToCall
        };

        //Check required input arguments
        RequiredInputArguments
            .forEach((ria) => {
                if (!optionsToCall[ria.name]) {
                    throw new Error(`Not passed required argument ${ria.name}`);
                }
            });

        OptionalInputArguments
            .forEach((oia) => {
                if (!dataToCallFunction[oia.name]) {
                    dataToCallFunction[oia.name] = oia.defaultValue;
                }
            });

        let {startIdx, endIdx} = optionsToCall;
        if (typeof startIdx === 'undefined') {
            startIdx = 0;
        }
        if (typeof endIdx === 'undefined') {
            endIdx = optionsToCall[
                RequiredInputArguments[0].name
            ].length - 1;
        }

        let argsToCall = [startIdx, endIdx];
        const argsToCallLookback = [];
        const arraysToRelease = [];

        RequiredInputArguments
            .forEach((ria) => {
                const dataToCall = dataToCallFunction[ria.name].slice(startIdx, endIdx + 1);
                let argArray = cArray(Module, dataToCall);
                // dataToCall.forEach((v, i) => argArray.data[i] = v);

                arraysToRelease.push(argArray);
                argsToCall.push(argArray.offset);
            });

        OptionalInputArguments
            .forEach((oia) => {
                argsToCall.push(
                    dataToCallFunction[oia.name]
                );
                argsToCallLookback.push(
                    dataToCallFunction[oia.name]
                );
            });

        const outBegIdxPointer = Module._malloc(8);
        const outNBElementPointer = Module._malloc(8);
        argsToCall.push(outBegIdxPointer); // outBegIdx
        argsToCall.push(outNBElementPointer); // outNBElement

        const outputArrays = OutputArguments
            .map((oa) => {
                let argArray = cArray(Module, endIdx - startIdx);

                arraysToRelease.push(argArray);
                argsToCall.push(argArray.offset);

                return {
                    array: argArray,
                    name: oa.name
                }
            });

        const returnCode = cwrapFunction(...argsToCall);
        const lookback = cwrapFunctionLookback(...argsToCallLookback);

        arraysToRelease.forEach((arr) => {
            Module._free(arr.offset / 8);
        });

        Module._free(outBegIdxPointer);
        Module._free(outNBElementPointer);

        const result = outputArrays
            .reduce((result, current) => {
                result[current.name] = Array.prototype.slice.call(current.array.data, 0, endIdx - lookback + 1);
                return result;
            }, {});

        result.returnCode = returnCode;
        result.returnCodeName = taReturnCodes[returnCode];

        return result;
    };

    wrappedFunctionLookback = (optionsToCall) => {
        const dataToCallFunction = {
            ...optionsToCall
        };

        OptionalInputArguments
            .forEach((oia) => {
                if (!dataToCallFunction[oia.name]) {
                    dataToCallFunction[oia.name] = oia.defaultValue;
                }
            });

        const argsToCallLookback = [];

        OptionalInputArguments
            .forEach((oia) => {
                argsToCallLookback.push(
                    dataToCallFunction[oia.name]
                );
            });

        return cwrapFunctionLookback(...argsToCallLookback);
    };

    return {
        funcName: Abbreviation,
        wrappedFunction,
        wrappedFunctionLookback,
        description: {
            RequiredInputArguments,
            OptionalInputArguments,
            OutputArguments
        }
    }
};
