const ModuleCompiler = require('../build/talib.wrapped.min');
const wrapTalibFunction = require('./wrap-talib-function');

const ModulePromise = ModuleCompiler();

require('./common-for-xml');

const xmlPromise = require('../constants/ta-func-api.xml');

module.exports = Promise.all([
    ModulePromise,
    xmlPromise
])
    .then(([Module, tafuncApiXML]) => {
        const talibFunctions = tafuncApiXML.FinancialFunctions.FinancialFunction;

        const descriptions ={};

        return talibFunctions.reduce((result, current) => {
            const {funcName, wrappedFunction, wrappedFunctionLookback, description} = wrapTalibFunction(Module, current);
            result[funcName] = wrappedFunction;
            result[funcName + 'Lookback'] = wrappedFunctionLookback;

            descriptions[funcName] = description;

            return result;
        }, {
            describeFunctions: () => descriptions
        });
    });
