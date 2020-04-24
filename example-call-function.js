require('./build/main')
    .then((funcs) => {
        const totalLength = 50;
        const inputArray1 = new Array(totalLength);
        const inputArray2 = new Array(totalLength);

        for (let i = 0; i < totalLength; i++) {
            inputArray1[i] = Math.random() * 100;
            inputArray2[i] = Math.random() * 100;
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
