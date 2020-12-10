enum MATypeEnum {
    SMA = "0",
    EMA = "1",
    WMA = "2",
    DEMA = "3",
    TEMA = "4",
    TRIMA = "5",
    KAMA = "6",
    MAMA = "7",
    T3 = "8"
}

enum TAReturnCodes {
    TA_SUCCESS,
    TA_LIB_NOT_INITIALIZE,
    TA_BAD_PARAM,
    TA_ALLOC_ERR,
    TA_GROUP_NOT_FOUND,
    TA_FUNC_NOT_FOUND,
    TA_INVALID_HANDLE,
    TA_INVALID_PARAM_HOLDER,
    TA_INVALID_PARAM_HOLDER_TYPE,
    TA_INVALID_PARAM_FUNCTION,
    TA_INPUT_NOT_ALL_INITIALIZE,
    TA_OUTPUT_NOT_ALL_INITIALIZE,
    TA_OUT_OF_RANGE_START_INDEX,
    TA_OUT_OF_RANGE_END_INDEX,
    TA_INVALID_LIST_TYPE,
    TA_BAD_OBJECT,
    TA_NOT_SUPPORTED,
    TA_INTERNAL_ERROR,
    TA_UNKNOWN_ERR = 0xFFFF
}

interface ITACalculationResult {
    [p: string]: number[];
}

interface ITACalculationReturnValue {
    returnCode: TAReturnCodes;
    returnCodeName: keyof typeof TAReturnCodes;
}

type TAResult = ITACalculationResult & ITACalculationReturnValue;

type TAFunctions = {
    ACOS(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],

    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    AD(opts: {
        startIdx?: number,
        begIdx?: number,
        High: number[],
        Low: number[],
        Close: number[],
        Volume: number[],

    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    ADD(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal0: number[],
        inReal1: number[],

    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    ADOSC(opts: {
        startIdx?: number,
        begIdx?: number,
        High: number[],
        Low: number[],
        Close: number[],
        Volume: number[],
        optInFastPeriod?: number,
        optInSlowPeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    ADX(opts: {
        startIdx?: number,
        begIdx?: number,
        High: number[],
        Low: number[],
        Close: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    ADXR(opts: {
        startIdx?: number,
        begIdx?: number,
        High: number[],
        Low: number[],
        Close: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    APO(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],
        optInFastPeriod?: number,
        optInSlowPeriod?: number,
        optInMAType?: MATypeEnum,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    AROON(opts: {
        startIdx?: number,
        begIdx?: number,
        High: number[],
        Low: number[],
        optInTimePeriod?: number,
    }): {
        outAroonDown: number[],outAroonUp: number[]
    } & ITACalculationReturnValue,
    AROONOSC(opts: {
        startIdx?: number,
        begIdx?: number,
        High: number[],
        Low: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    ASIN(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],

    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    ATAN(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],

    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    ATR(opts: {
        startIdx?: number,
        begIdx?: number,
        High: number[],
        Low: number[],
        Close: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    AVGPRICE(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    BBANDS(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
        optInDeviationsup?: number,
        optInDeviationsdown?: number,
        optInMAType?: MATypeEnum,
    }): {
        outRealUpperBand: number[],outRealMiddleBand: number[],outRealLowerBand: number[]
    } & ITACalculationReturnValue,
    BETA(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal0: number[],
        inReal1: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    BOP(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    CCI(opts: {
        startIdx?: number,
        begIdx?: number,
        High: number[],
        Low: number[],
        Close: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    CDL2CROWS(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    CDL3BLACKCROWS(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    CDL3INSIDE(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    CDL3LINESTRIKE(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    CDL3OUTSIDE(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    CDL3STARSINSOUTH(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    CDL3WHITESOLDIERS(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    CDLABANDONEDBABY(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],
        optInPenetration?: number,
    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    CDLADVANCEBLOCK(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    CDLBELTHOLD(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    CDLBREAKAWAY(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    CDLCLOSINGMARUBOZU(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    CDLCONCEALBABYSWALL(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    CDLCOUNTERATTACK(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    CDLDARKCLOUDCOVER(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],
        optInPenetration?: number,
    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    CDLDOJI(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    CDLDOJISTAR(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    CDLDRAGONFLYDOJI(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    CDLENGULFING(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    CDLEVENINGDOJISTAR(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],
        optInPenetration?: number,
    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    CDLEVENINGSTAR(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],
        optInPenetration?: number,
    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    CDLGAPSIDESIDEWHITE(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    CDLGRAVESTONEDOJI(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    CDLHAMMER(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    CDLHANGINGMAN(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    CDLHARAMI(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    CDLHARAMICROSS(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    CDLHIGHWAVE(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    CDLHIKKAKE(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    CDLHIKKAKEMOD(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    CDLHOMINGPIGEON(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    CDLIDENTICAL3CROWS(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    CDLINNECK(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    CDLINVERTEDHAMMER(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    CDLKICKING(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    CDLKICKINGBYLENGTH(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    CDLLADDERBOTTOM(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    CDLLONGLEGGEDDOJI(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    CDLLONGLINE(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    CDLMARUBOZU(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    CDLMATCHINGLOW(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    CDLMATHOLD(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],
        optInPenetration?: number,
    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    CDLMORNINGDOJISTAR(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],
        optInPenetration?: number,
    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    CDLMORNINGSTAR(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],
        optInPenetration?: number,
    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    CDLONNECK(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    CDLPIERCING(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    CDLRICKSHAWMAN(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    CDLRISEFALL3METHODS(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    CDLSEPARATINGLINES(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    CDLSHOOTINGSTAR(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    CDLSHORTLINE(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    CDLSPINNINGTOP(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    CDLSTALLEDPATTERN(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    CDLSTICKSANDWICH(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    CDLTAKURI(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    CDLTASUKIGAP(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    CDLTHRUSTING(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    CDLTRISTAR(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    CDLUNIQUE3RIVER(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    CDLUPSIDEGAP2CROWS(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    CDLXSIDEGAP3METHODS(opts: {
        startIdx?: number,
        begIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    CEIL(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],

    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    CMO(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    CORREL(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal0: number[],
        inReal1: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    COS(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],

    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    COSH(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],

    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    DEMA(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    DIV(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal0: number[],
        inReal1: number[],

    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    DX(opts: {
        startIdx?: number,
        begIdx?: number,
        High: number[],
        Low: number[],
        Close: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    EMA(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    EXP(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],

    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    FLOOR(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],

    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    HT_DCPERIOD(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],

    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    HT_DCPHASE(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],

    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    HT_PHASOR(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],

    }): {
        outInPhase: number[],outQuadrature: number[]
    } & ITACalculationReturnValue,
    HT_SINE(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],

    }): {
        outSine: number[],outLeadSine: number[]
    } & ITACalculationReturnValue,
    HT_TRENDLINE(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],

    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    HT_TRENDMODE(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    KAMA(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    LINEARREG(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    LINEARREG_ANGLE(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    LINEARREG_INTERCEPT(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    LINEARREG_SLOPE(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    LN(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],

    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    LOG10(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],

    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    MA(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
        optInMAType?: MATypeEnum,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    MACD(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],
        optInFastPeriod?: number,
        optInSlowPeriod?: number,
        optInSignalPeriod?: number,
    }): {
        outMACD: number[],outMACDSignal: number[],outMACDHist: number[]
    } & ITACalculationReturnValue,
    MACDEXT(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],
        optInFastPeriod?: number,
        optInFastMA?: MATypeEnum,
        optInSlowPeriod?: number,
        optInSlowMA?: MATypeEnum,
        optInSignalPeriod?: number,
        optInSignalMA?: MATypeEnum,
    }): {
        outMACD: number[],outMACDSignal: number[],outMACDHist: number[]
    } & ITACalculationReturnValue,
    MACDFIX(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],
        optInSignalPeriod?: number,
    }): {
        outMACD: number[],outMACDSignal: number[],outMACDHist: number[]
    } & ITACalculationReturnValue,
    MAMA(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],
        optInFastLimit?: number,
        optInSlowLimit?: number,
    }): {
        outMAMA: number[],outFAMA: number[]
    } & ITACalculationReturnValue,
    MAVP(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],
        inPeriods: number[],
        optInMinimumPeriod?: number,
        optInMaximumPeriod?: number,
        optInMAType?: MATypeEnum,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    MAX(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    MAXINDEX(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    MEDPRICE(opts: {
        startIdx?: number,
        begIdx?: number,
        High: number[],
        Low: number[],

    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    MFI(opts: {
        startIdx?: number,
        begIdx?: number,
        High: number[],
        Low: number[],
        Close: number[],
        Volume: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    MIDPOINT(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    MIDPRICE(opts: {
        startIdx?: number,
        begIdx?: number,
        High: number[],
        Low: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    MIN(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    MININDEX(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
    }): {
        outInteger: number[]
    } & ITACalculationReturnValue,
    MINMAX(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
    }): {
        outMin: number[],outMax: number[]
    } & ITACalculationReturnValue,
    MINMAXINDEX(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
    }): {
        outMinIdx: number[],outMaxIdx: number[]
    } & ITACalculationReturnValue,
    MINUS_DI(opts: {
        startIdx?: number,
        begIdx?: number,
        High: number[],
        Low: number[],
        Close: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    MINUS_DM(opts: {
        startIdx?: number,
        begIdx?: number,
        High: number[],
        Low: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    MOM(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    MULT(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal0: number[],
        inReal1: number[],

    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    NATR(opts: {
        startIdx?: number,
        begIdx?: number,
        High: number[],
        Low: number[],
        Close: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    OBV(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],
        Volume: number[],

    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    PLUS_DI(opts: {
        startIdx?: number,
        begIdx?: number,
        High: number[],
        Low: number[],
        Close: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    PLUS_DM(opts: {
        startIdx?: number,
        begIdx?: number,
        High: number[],
        Low: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    PPO(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],
        optInFastPeriod?: number,
        optInSlowPeriod?: number,
        optInMAType?: MATypeEnum,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    ROC(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    ROCP(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    ROCR(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    ROCR100(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    RSI(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    SAR(opts: {
        startIdx?: number,
        begIdx?: number,
        High: number[],
        Low: number[],
        optInAccelerationFactor?: number,
        optInAFMaximum?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    SAREXT(opts: {
        startIdx?: number,
        begIdx?: number,
        High: number[],
        Low: number[],
        optInStartValue?: number,
        optInOffsetonReverse?: number,
        optInAFInitLong?: number,
        optInAFLong?: number,
        optInAFMaxLong?: number,
        optInAFInitShort?: number,
        optInAFShort?: number,
        optInAFMaxShort?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    SIN(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],

    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    SINH(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],

    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    SMA(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    SQRT(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],

    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    STDDEV(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
        optInDeviations?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    STOCH(opts: {
        startIdx?: number,
        begIdx?: number,
        High: number[],
        Low: number[],
        Close: number[],
        optInFast_KPeriod?: number,
        optInSlow_KPeriod?: number,
        optInSlow_KMA?: MATypeEnum,
        optInSlow_DPeriod?: number,
        optInSlow_DMA?: MATypeEnum,
    }): {
        outSlowK: number[],outSlowD: number[]
    } & ITACalculationReturnValue,
    STOCHF(opts: {
        startIdx?: number,
        begIdx?: number,
        High: number[],
        Low: number[],
        Close: number[],
        optInFast_KPeriod?: number,
        optInFast_DPeriod?: number,
        optInFast_DMA?: MATypeEnum,
    }): {
        outFastK: number[],outFastD: number[]
    } & ITACalculationReturnValue,
    STOCHRSI(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
        optInFast_KPeriod?: number,
        optInFast_DPeriod?: number,
        optInFast_DMA?: MATypeEnum,
    }): {
        outFastK: number[],outFastD: number[]
    } & ITACalculationReturnValue,
    SUB(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal0: number[],
        inReal1: number[],

    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    SUM(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    T3(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
        optInVolumeFactor?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    TAN(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],

    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    TANH(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],

    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    TEMA(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    TRANGE(opts: {
        startIdx?: number,
        begIdx?: number,
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    TRIMA(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    TRIX(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    TSF(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    TYPPRICE(opts: {
        startIdx?: number,
        begIdx?: number,
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    ULTOSC(opts: {
        startIdx?: number,
        begIdx?: number,
        High: number[],
        Low: number[],
        Close: number[],
        optInFirstPeriod?: number,
        optInSecondPeriod?: number,
        optInThirdPeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    VAR(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
        optInDeviations?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    WCLPRICE(opts: {
        startIdx?: number,
        begIdx?: number,
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    WILLR(opts: {
        startIdx?: number,
        begIdx?: number,
        High: number[],
        Low: number[],
        Close: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue,
    WMA(opts: {
        startIdx?: number,
        begIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue,

    describeFunctions(): any;
};

const funcsPromise: Promise<TAFunctions>;

export = funcsPromise;
