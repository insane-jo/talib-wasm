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

function cArray(Module, size) {
    const offset = Module._malloc(size * 8);
    Module.HEAPF64.set(new Float64Array(size), offset / 8);
    return {
        "data": Module.HEAPF64.subarray(offset / 8, offset / 8 + size),
        "offset": offset
    }
}

module.exports = (Module, functionDescr) => {
    let wrappedFunction;

    const Abbreviation = functionDescr.Abbreviation[0];

    const callCwrapArgs = [];

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
                callCwrapArgs.push('[number]')
            } else {
                callCwrapArgs.push('number')
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
        const arraysToRelease = [];

        RequiredInputArguments
            .forEach((ria) => {
                let argArray = cArray(Module, endIdx - startIdx);
                const dataToCall = dataToCallFunction[
                    ria.name
                ];
                dataToCall.forEach((v, i) => argArray.data[i] = v);

                arraysToRelease.push(argArray);
                argsToCall.push(argArray.offset);
            });

        OptionalInputArguments
            .forEach((oia) => {
                argsToCall.push(
                    dataToCallFunction[oia.name]
                );
            });

        argsToCall.push(0); // outBegIdx
        argsToCall.push(0); // outNBElement

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

        arraysToRelease.forEach((arr) => {
            Module._free(arr.offset);
        });

        const result = outputArrays
            .reduce((result, current) => {
                result[current.name] = current.array.data;
                return result;
            }, {});

        result.returnCode = returnCode;
        result.returnCodeName = taReturnCodes[returnCode];

        return result;
    };

    return {
        funcName: Abbreviation,
        wrappedFunction,
        description: {
            RequiredInputArguments,
            OptionalInputArguments,
            OutputArguments
        }
    }
};
