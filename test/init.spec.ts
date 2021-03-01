import TAPromise from "../build/main";

describe("Basic tests", () => {
  it("Has describe function", async () => {
    const TAFunctions = await TAPromise;

    expect(TAFunctions.describeFunctions).toBeDefined();
  });

  it("Has basic descriptions", async () => {
    const TAFunctions = await TAPromise;

    const description = TAFunctions.describeFunctions();
    expect(description.SMA).toBeDefined();
  });

  describe("TA functions test", () => {
    it("Nested TA functions", async () => {
      const TAFunctions = await TAPromise;

      const inputArrayHigh = [];
      const inputArrayLow = [];
      const inputArrayClose = [];

      for (let index = 0; index < 50; index++) {
        inputArrayLow.push(100 + index);
        inputArrayHigh.push(200 + index);
        inputArrayClose.push(300 + index);
      }

      const resultMA = await TAFunctions.MA({
        inReal: inputArrayClose,
        optInTimePeriod: 3,
      });

      expect(resultMA.outReal.length).not.toEqual(0);
      expect(resultMA.outReal[0]).not.toEqual(0);

      const resultStochF = await TAFunctions.STOCHF({
        High: inputArrayHigh,
        Low: inputArrayLow,
        Close: inputArrayClose,
      });

      expect(resultStochF.outFastD).not.toEqual(0);
      expect(resultStochF.outFastK).not.toEqual(0);
      expect(resultStochF.outFastD[0]).not.toEqual(0);
      expect(resultStochF.outFastK[0]).not.toEqual(0);

      const resultStoch = await TAFunctions.STOCH({
        High: inputArrayHigh,
        Low: inputArrayLow,
        Close: inputArrayClose,
      });

      expect(resultStoch.outSlowD).not.toEqual(0);
      expect(resultStoch.outSlowK).not.toEqual(0);
      expect(resultStoch.outSlowD[0]).not.toEqual(0);
      expect(resultStoch.outSlowK[0]).not.toEqual(0);
    });

    it("SMA test with different input options", async () => {
      const TAFunctions = await TAPromise;

      const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

      const result1 = TAFunctions.SMA({
        startIdx: 0,
        inReal: inputArray,
        optInTimePeriod: 2,
      }).outReal;

      const result2 = TAFunctions.SMA({
        startIdx: 0,
        inReal: inputArray,
        optInTimePeriod: 3,
      }).outReal;

      expect(result1).not.toEqual(result2);

      expect(result1).toEqual([1.5, 2.5, 3.5, 4.5, 5.5, 6.5, 7.5, 8.5, 9.5]);

      expect(result2).toEqual([2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it("SMA lookback test with different input options", async () => {
      const TAFunctions = await TAPromise;

      expect(TAFunctions.SMALookback({ optInTimePeriod: 4 })).toBe(3);
      expect(TAFunctions.SMALookback({ optInTimePeriod: 2 })).toBe(1);
    });
  });

  describe("Calling without optional parameters", () => {
    it("Pass at least one optional parameter", async () => {
      const TAFunctions = await TAPromise;

      const defaultCallResult = TAFunctions.STDDEVLookback({
        optInTimePeriod: 12,
        optInDeviations: 1,
      });

      expect(TAFunctions.STDDEVLookback({ optInTimePeriod: 12 })).toBe(
        defaultCallResult
      );
    });

    it("No optional parameters passed", async () => {
      const TAFunctions = await TAPromise;

      const defaultCallResult = TAFunctions.STDDEVLookback({
        optInTimePeriod: 5,
        optInDeviations: 1,
      });
      expect(TAFunctions.STDDEVLookback({})).toBe(defaultCallResult);
    });
  });
});
