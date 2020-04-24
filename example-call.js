// function cArray(size) {
//     var offset = Module._malloc(size * 8);
//     Module.HEAPF64.set(new Float64Array(size), offset / 8);
//     return {
//         "data": Module.HEAPF64.subarray(offset / 8, offset / 8 + size),
//         "offset": offset
//     }
// }
//
// totalLength = 50;
// inputArray1 = cArray(totalLength);
// inputArray2 = cArray(totalLength);
// inputArray3 = cArray(totalLength);
// inputArray4 = cArray(totalLength);
//
// for(let i = 0; i < totalLength; i++) {
//     inputArray1.data[i] = Math.random() * 100;
//     inputArray2.data[i] = Math.random() * 100;
//     inputArray3.data[i] = Math.random() * 100;
//     inputArray4.data[i] = Math.random() * 100;
// }
//
// outputArray = cArray(totalLength);
//
// TA_CORREL = Module.cwrap('TA_CORREL',
//     'number',
//     ['number', 'number', '[number]', 'number', 'number', '[number]']);
//
// console.log(
//     TA_CORREL(0, totalLength - 1, inputArray1.offset, inputArray2.offset, 4, 0, totalLength - 1, outputArray.offset)
// );
//
// //result = new Float32Array(dataHeap.buffer, dataHeap.byteOffset, dataHeap.length);
//
// console.log(outputArray.data);
//
// Module._free(inputArray1.offset);
// Module._free(inputArray2.offset);
// Module._free(inputArray3.offset);
// Module._free(inputArray4.offset);
// Module._free(outputArray.offset);
//
require('./build/main')
    .then((funcs) => {
        const totalLength = 50;
        const inputArray1 = new Array(totalLength);
        const inputArray2 = new Array(totalLength);
        const inputArray3 = new Array(totalLength);
        const inputArray4 = new Array(totalLength);

        for (let i = 0; i < totalLength; i++) {
            inputArray1[i] = Math.random() * 100;
            inputArray2[i] = Math.random() * 100;
            inputArray3[i] = Math.random() * 100;
            inputArray4[i] = Math.random() * 100;
        }

        const result = funcs.CORREL({
            startIdx: 0,
            begIdx: totalLength - 1,
            inReal0: inputArray1,
            inReal1: inputArray2,
            optInTimePeriod: 5
        });

        console.log(
            result
        );
    });

require('./build/main')
    .then((funcs) => {
        console.log(
            JSON.stringify(funcs.describeFunctions(), null, 2)
        )
    });
