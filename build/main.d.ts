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
        endIdx?: number,
        inReal: number[],

    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    ACOSLookback(opts: {

    }): number,
    AD(opts: {
        startIdx?: number,
        endIdx?: number,
        High: number[],
        Low: number[],
        Close: number[],
        Volume: number[],

    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    ADLookback(opts: {

    }): number,
    ADD(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal0: number[],
        inReal1: number[],

    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    ADDLookback(opts: {

    }): number,
    ADOSC(opts: {
        startIdx?: number,
        endIdx?: number,
        High: number[],
        Low: number[],
        Close: number[],
        Volume: number[],
        optInFastPeriod?: number,
        optInSlowPeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    ADOSCLookback(opts: {
        optInFastPeriod?: number,
        optInSlowPeriod?: number,
    }): number,
    ADX(opts: {
        startIdx?: number,
        endIdx?: number,
        High: number[],
        Low: number[],
        Close: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    ADXLookback(opts: {
        optInTimePeriod?: number,
    }): number,
    ADXR(opts: {
        startIdx?: number,
        endIdx?: number,
        High: number[],
        Low: number[],
        Close: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    ADXRLookback(opts: {
        optInTimePeriod?: number,
    }): number,
    APO(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal: number[],
        optInFastPeriod?: number,
        optInSlowPeriod?: number,
        optInMAType?: MATypeEnum,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    APOLookback(opts: {
        optInFastPeriod?: number,
        optInSlowPeriod?: number,
        optInMAType?: MATypeEnum,
    }): number,
    AROON(opts: {
        startIdx?: number,
        endIdx?: number,
        High: number[],
        Low: number[],
        optInTimePeriod?: number,
    }): {
        outAroonDown: number[],outAroonUp: number[]
    } & ITACalculationReturnValue

    AROONLookback(opts: {
        optInTimePeriod?: number,
    }): number,
    AROONOSC(opts: {
        startIdx?: number,
        endIdx?: number,
        High: number[],
        Low: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    AROONOSCLookback(opts: {
        optInTimePeriod?: number,
    }): number,
    ASIN(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal: number[],

    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    ASINLookback(opts: {

    }): number,
    ATAN(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal: number[],

    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    ATANLookback(opts: {

    }): number,
    ATR(opts: {
        startIdx?: number,
        endIdx?: number,
        High: number[],
        Low: number[],
        Close: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    ATRLookback(opts: {
        optInTimePeriod?: number,
    }): number,
    AVGPRICE(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    AVGPRICELookback(opts: {

    }): number,
    BBANDS(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
        optInDeviationsup?: number,
        optInDeviationsdown?: number,
        optInMAType?: MATypeEnum,
    }): {
        outRealUpperBand: number[],outRealMiddleBand: number[],outRealLowerBand: number[]
    } & ITACalculationReturnValue

    BBANDSLookback(opts: {
        optInTimePeriod?: number,
        optInDeviationsup?: number,
        optInDeviationsdown?: number,
        optInMAType?: MATypeEnum,
    }): number,
    BETA(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal0: number[],
        inReal1: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    BETALookback(opts: {
        optInTimePeriod?: number,
    }): number,
    BOP(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    BOPLookback(opts: {

    }): number,
    CCI(opts: {
        startIdx?: number,
        endIdx?: number,
        High: number[],
        Low: number[],
        Close: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    CCILookback(opts: {
        optInTimePeriod?: number,
    }): number,
    CDL2CROWS(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    CDL2CROWSLookback(opts: {

    }): number,
    CDL3BLACKCROWS(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    CDL3BLACKCROWSLookback(opts: {

    }): number,
    CDL3INSIDE(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    CDL3INSIDELookback(opts: {

    }): number,
    CDL3LINESTRIKE(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    CDL3LINESTRIKELookback(opts: {

    }): number,
    CDL3OUTSIDE(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    CDL3OUTSIDELookback(opts: {

    }): number,
    CDL3STARSINSOUTH(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    CDL3STARSINSOUTHLookback(opts: {

    }): number,
    CDL3WHITESOLDIERS(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    CDL3WHITESOLDIERSLookback(opts: {

    }): number,
    CDLABANDONEDBABY(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],
        optInPenetration?: number,
    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    CDLABANDONEDBABYLookback(opts: {
        optInPenetration?: number,
    }): number,
    CDLADVANCEBLOCK(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    CDLADVANCEBLOCKLookback(opts: {

    }): number,
    CDLBELTHOLD(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    CDLBELTHOLDLookback(opts: {

    }): number,
    CDLBREAKAWAY(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    CDLBREAKAWAYLookback(opts: {

    }): number,
    CDLCLOSINGMARUBOZU(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    CDLCLOSINGMARUBOZULookback(opts: {

    }): number,
    CDLCONCEALBABYSWALL(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    CDLCONCEALBABYSWALLLookback(opts: {

    }): number,
    CDLCOUNTERATTACK(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    CDLCOUNTERATTACKLookback(opts: {

    }): number,
    CDLDARKCLOUDCOVER(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],
        optInPenetration?: number,
    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    CDLDARKCLOUDCOVERLookback(opts: {
        optInPenetration?: number,
    }): number,
    CDLDOJI(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    CDLDOJILookback(opts: {

    }): number,
    CDLDOJISTAR(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    CDLDOJISTARLookback(opts: {

    }): number,
    CDLDRAGONFLYDOJI(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    CDLDRAGONFLYDOJILookback(opts: {

    }): number,
    CDLENGULFING(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    CDLENGULFINGLookback(opts: {

    }): number,
    CDLEVENINGDOJISTAR(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],
        optInPenetration?: number,
    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    CDLEVENINGDOJISTARLookback(opts: {
        optInPenetration?: number,
    }): number,
    CDLEVENINGSTAR(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],
        optInPenetration?: number,
    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    CDLEVENINGSTARLookback(opts: {
        optInPenetration?: number,
    }): number,
    CDLGAPSIDESIDEWHITE(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    CDLGAPSIDESIDEWHITELookback(opts: {

    }): number,
    CDLGRAVESTONEDOJI(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    CDLGRAVESTONEDOJILookback(opts: {

    }): number,
    CDLHAMMER(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    CDLHAMMERLookback(opts: {

    }): number,
    CDLHANGINGMAN(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    CDLHANGINGMANLookback(opts: {

    }): number,
    CDLHARAMI(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    CDLHARAMILookback(opts: {

    }): number,
    CDLHARAMICROSS(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    CDLHARAMICROSSLookback(opts: {

    }): number,
    CDLHIGHWAVE(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    CDLHIGHWAVELookback(opts: {

    }): number,
    CDLHIKKAKE(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    CDLHIKKAKELookback(opts: {

    }): number,
    CDLHIKKAKEMOD(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    CDLHIKKAKEMODLookback(opts: {

    }): number,
    CDLHOMINGPIGEON(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    CDLHOMINGPIGEONLookback(opts: {

    }): number,
    CDLIDENTICAL3CROWS(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    CDLIDENTICAL3CROWSLookback(opts: {

    }): number,
    CDLINNECK(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    CDLINNECKLookback(opts: {

    }): number,
    CDLINVERTEDHAMMER(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    CDLINVERTEDHAMMERLookback(opts: {

    }): number,
    CDLKICKING(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    CDLKICKINGLookback(opts: {

    }): number,
    CDLKICKINGBYLENGTH(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    CDLKICKINGBYLENGTHLookback(opts: {

    }): number,
    CDLLADDERBOTTOM(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    CDLLADDERBOTTOMLookback(opts: {

    }): number,
    CDLLONGLEGGEDDOJI(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    CDLLONGLEGGEDDOJILookback(opts: {

    }): number,
    CDLLONGLINE(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    CDLLONGLINELookback(opts: {

    }): number,
    CDLMARUBOZU(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    CDLMARUBOZULookback(opts: {

    }): number,
    CDLMATCHINGLOW(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    CDLMATCHINGLOWLookback(opts: {

    }): number,
    CDLMATHOLD(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],
        optInPenetration?: number,
    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    CDLMATHOLDLookback(opts: {
        optInPenetration?: number,
    }): number,
    CDLMORNINGDOJISTAR(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],
        optInPenetration?: number,
    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    CDLMORNINGDOJISTARLookback(opts: {
        optInPenetration?: number,
    }): number,
    CDLMORNINGSTAR(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],
        optInPenetration?: number,
    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    CDLMORNINGSTARLookback(opts: {
        optInPenetration?: number,
    }): number,
    CDLONNECK(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    CDLONNECKLookback(opts: {

    }): number,
    CDLPIERCING(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    CDLPIERCINGLookback(opts: {

    }): number,
    CDLRICKSHAWMAN(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    CDLRICKSHAWMANLookback(opts: {

    }): number,
    CDLRISEFALL3METHODS(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    CDLRISEFALL3METHODSLookback(opts: {

    }): number,
    CDLSEPARATINGLINES(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    CDLSEPARATINGLINESLookback(opts: {

    }): number,
    CDLSHOOTINGSTAR(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    CDLSHOOTINGSTARLookback(opts: {

    }): number,
    CDLSHORTLINE(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    CDLSHORTLINELookback(opts: {

    }): number,
    CDLSPINNINGTOP(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    CDLSPINNINGTOPLookback(opts: {

    }): number,
    CDLSTALLEDPATTERN(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    CDLSTALLEDPATTERNLookback(opts: {

    }): number,
    CDLSTICKSANDWICH(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    CDLSTICKSANDWICHLookback(opts: {

    }): number,
    CDLTAKURI(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    CDLTAKURILookback(opts: {

    }): number,
    CDLTASUKIGAP(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    CDLTASUKIGAPLookback(opts: {

    }): number,
    CDLTHRUSTING(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    CDLTHRUSTINGLookback(opts: {

    }): number,
    CDLTRISTAR(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    CDLTRISTARLookback(opts: {

    }): number,
    CDLUNIQUE3RIVER(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    CDLUNIQUE3RIVERLookback(opts: {

    }): number,
    CDLUPSIDEGAP2CROWS(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    CDLUPSIDEGAP2CROWSLookback(opts: {

    }): number,
    CDLXSIDEGAP3METHODS(opts: {
        startIdx?: number,
        endIdx?: number,
        Open: number[],
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    CDLXSIDEGAP3METHODSLookback(opts: {

    }): number,
    CEIL(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal: number[],

    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    CEILLookback(opts: {

    }): number,
    CMO(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    CMOLookback(opts: {
        optInTimePeriod?: number,
    }): number,
    CORREL(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal0: number[],
        inReal1: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    CORRELLookback(opts: {
        optInTimePeriod?: number,
    }): number,
    COS(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal: number[],

    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    COSLookback(opts: {

    }): number,
    COSH(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal: number[],

    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    COSHLookback(opts: {

    }): number,
    DEMA(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    DEMALookback(opts: {
        optInTimePeriod?: number,
    }): number,
    DIV(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal0: number[],
        inReal1: number[],

    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    DIVLookback(opts: {

    }): number,
    DX(opts: {
        startIdx?: number,
        endIdx?: number,
        High: number[],
        Low: number[],
        Close: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    DXLookback(opts: {
        optInTimePeriod?: number,
    }): number,
    EMA(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    EMALookback(opts: {
        optInTimePeriod?: number,
    }): number,
    EXP(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal: number[],

    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    EXPLookback(opts: {

    }): number,
    FLOOR(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal: number[],

    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    FLOORLookback(opts: {

    }): number,
    HT_DCPERIOD(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal: number[],

    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    HT_DCPERIODLookback(opts: {

    }): number,
    HT_DCPHASE(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal: number[],

    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    HT_DCPHASELookback(opts: {

    }): number,
    HT_PHASOR(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal: number[],

    }): {
        outInPhase: number[],outQuadrature: number[]
    } & ITACalculationReturnValue

    HT_PHASORLookback(opts: {

    }): number,
    HT_SINE(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal: number[],

    }): {
        outSine: number[],outLeadSine: number[]
    } & ITACalculationReturnValue

    HT_SINELookback(opts: {

    }): number,
    HT_TRENDLINE(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal: number[],

    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    HT_TRENDLINELookback(opts: {

    }): number,
    HT_TRENDMODE(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal: number[],

    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    HT_TRENDMODELookback(opts: {

    }): number,
    KAMA(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    KAMALookback(opts: {
        optInTimePeriod?: number,
    }): number,
    LINEARREG(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    LINEARREGLookback(opts: {
        optInTimePeriod?: number,
    }): number,
    LINEARREG_ANGLE(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    LINEARREG_ANGLELookback(opts: {
        optInTimePeriod?: number,
    }): number,
    LINEARREG_INTERCEPT(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    LINEARREG_INTERCEPTLookback(opts: {
        optInTimePeriod?: number,
    }): number,
    LINEARREG_SLOPE(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    LINEARREG_SLOPELookback(opts: {
        optInTimePeriod?: number,
    }): number,
    LN(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal: number[],

    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    LNLookback(opts: {

    }): number,
    LOG10(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal: number[],

    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    LOG10Lookback(opts: {

    }): number,
    MA(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
        optInMAType?: MATypeEnum,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    MALookback(opts: {
        optInTimePeriod?: number,
        optInMAType?: MATypeEnum,
    }): number,
    MACD(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal: number[],
        optInFastPeriod?: number,
        optInSlowPeriod?: number,
        optInSignalPeriod?: number,
    }): {
        outMACD: number[],outMACDSignal: number[],outMACDHist: number[]
    } & ITACalculationReturnValue

    MACDLookback(opts: {
        optInFastPeriod?: number,
        optInSlowPeriod?: number,
        optInSignalPeriod?: number,
    }): number,
    MACDEXT(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal: number[],
        optInFastPeriod?: number,
        optInFastMA?: MATypeEnum,
        optInSlowPeriod?: number,
        optInSlowMA?: MATypeEnum,
        optInSignalPeriod?: number,
        optInSignalMA?: MATypeEnum,
    }): {
        outMACD: number[],outMACDSignal: number[],outMACDHist: number[]
    } & ITACalculationReturnValue

    MACDEXTLookback(opts: {
        optInFastPeriod?: number,
        optInFastMA?: MATypeEnum,
        optInSlowPeriod?: number,
        optInSlowMA?: MATypeEnum,
        optInSignalPeriod?: number,
        optInSignalMA?: MATypeEnum,
    }): number,
    MACDFIX(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal: number[],
        optInSignalPeriod?: number,
    }): {
        outMACD: number[],outMACDSignal: number[],outMACDHist: number[]
    } & ITACalculationReturnValue

    MACDFIXLookback(opts: {
        optInSignalPeriod?: number,
    }): number,
    MAMA(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal: number[],
        optInFastLimit?: number,
        optInSlowLimit?: number,
    }): {
        outMAMA: number[],outFAMA: number[]
    } & ITACalculationReturnValue

    MAMALookback(opts: {
        optInFastLimit?: number,
        optInSlowLimit?: number,
    }): number,
    MAVP(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal: number[],
        inPeriods: number[],
        optInMinimumPeriod?: number,
        optInMaximumPeriod?: number,
        optInMAType?: MATypeEnum,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    MAVPLookback(opts: {
        optInMinimumPeriod?: number,
        optInMaximumPeriod?: number,
        optInMAType?: MATypeEnum,
    }): number,
    MAX(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    MAXLookback(opts: {
        optInTimePeriod?: number,
    }): number,
    MAXINDEX(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    MAXINDEXLookback(opts: {
        optInTimePeriod?: number,
    }): number,
    MEDPRICE(opts: {
        startIdx?: number,
        endIdx?: number,
        High: number[],
        Low: number[],

    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    MEDPRICELookback(opts: {

    }): number,
    MFI(opts: {
        startIdx?: number,
        endIdx?: number,
        High: number[],
        Low: number[],
        Close: number[],
        Volume: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    MFILookback(opts: {
        optInTimePeriod?: number,
    }): number,
    MIDPOINT(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    MIDPOINTLookback(opts: {
        optInTimePeriod?: number,
    }): number,
    MIDPRICE(opts: {
        startIdx?: number,
        endIdx?: number,
        High: number[],
        Low: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    MIDPRICELookback(opts: {
        optInTimePeriod?: number,
    }): number,
    MIN(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    MINLookback(opts: {
        optInTimePeriod?: number,
    }): number,
    MININDEX(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
    }): {
        outInteger: number[]
    } & ITACalculationReturnValue

    MININDEXLookback(opts: {
        optInTimePeriod?: number,
    }): number,
    MINMAX(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
    }): {
        outMin: number[],outMax: number[]
    } & ITACalculationReturnValue

    MINMAXLookback(opts: {
        optInTimePeriod?: number,
    }): number,
    MINMAXINDEX(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
    }): {
        outMinIdx: number[],outMaxIdx: number[]
    } & ITACalculationReturnValue

    MINMAXINDEXLookback(opts: {
        optInTimePeriod?: number,
    }): number,
    MINUS_DI(opts: {
        startIdx?: number,
        endIdx?: number,
        High: number[],
        Low: number[],
        Close: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    MINUS_DILookback(opts: {
        optInTimePeriod?: number,
    }): number,
    MINUS_DM(opts: {
        startIdx?: number,
        endIdx?: number,
        High: number[],
        Low: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    MINUS_DMLookback(opts: {
        optInTimePeriod?: number,
    }): number,
    MOM(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    MOMLookback(opts: {
        optInTimePeriod?: number,
    }): number,
    MULT(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal0: number[],
        inReal1: number[],

    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    MULTLookback(opts: {

    }): number,
    NATR(opts: {
        startIdx?: number,
        endIdx?: number,
        High: number[],
        Low: number[],
        Close: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    NATRLookback(opts: {
        optInTimePeriod?: number,
    }): number,
    OBV(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal: number[],
        Volume: number[],

    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    OBVLookback(opts: {

    }): number,
    PLUS_DI(opts: {
        startIdx?: number,
        endIdx?: number,
        High: number[],
        Low: number[],
        Close: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    PLUS_DILookback(opts: {
        optInTimePeriod?: number,
    }): number,
    PLUS_DM(opts: {
        startIdx?: number,
        endIdx?: number,
        High: number[],
        Low: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    PLUS_DMLookback(opts: {
        optInTimePeriod?: number,
    }): number,
    PPO(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal: number[],
        optInFastPeriod?: number,
        optInSlowPeriod?: number,
        optInMAType?: MATypeEnum,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    PPOLookback(opts: {
        optInFastPeriod?: number,
        optInSlowPeriod?: number,
        optInMAType?: MATypeEnum,
    }): number,
    ROC(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    ROCLookback(opts: {
        optInTimePeriod?: number,
    }): number,
    ROCP(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    ROCPLookback(opts: {
        optInTimePeriod?: number,
    }): number,
    ROCR(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    ROCRLookback(opts: {
        optInTimePeriod?: number,
    }): number,
    ROCR100(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    ROCR100Lookback(opts: {
        optInTimePeriod?: number,
    }): number,
    RSI(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    RSILookback(opts: {
        optInTimePeriod?: number,
    }): number,
    SAR(opts: {
        startIdx?: number,
        endIdx?: number,
        High: number[],
        Low: number[],
        optInAccelerationFactor?: number,
        optInAFMaximum?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    SARLookback(opts: {
        optInAccelerationFactor?: number,
        optInAFMaximum?: number,
    }): number,
    SAREXT(opts: {
        startIdx?: number,
        endIdx?: number,
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
    } & ITACalculationReturnValue

    SAREXTLookback(opts: {
        optInStartValue?: number,
        optInOffsetonReverse?: number,
        optInAFInitLong?: number,
        optInAFLong?: number,
        optInAFMaxLong?: number,
        optInAFInitShort?: number,
        optInAFShort?: number,
        optInAFMaxShort?: number,
    }): number,
    SIN(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal: number[],

    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    SINLookback(opts: {

    }): number,
    SINH(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal: number[],

    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    SINHLookback(opts: {

    }): number,
    SMA(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    SMALookback(opts: {
        optInTimePeriod?: number,
    }): number,
    SQRT(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal: number[],

    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    SQRTLookback(opts: {

    }): number,
    STDDEV(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
        optInDeviations?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    STDDEVLookback(opts: {
        optInTimePeriod?: number,
        optInDeviations?: number,
    }): number,
    STOCH(opts: {
        startIdx?: number,
        endIdx?: number,
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
    } & ITACalculationReturnValue

    STOCHLookback(opts: {
        optInFast_KPeriod?: number,
        optInSlow_KPeriod?: number,
        optInSlow_KMA?: MATypeEnum,
        optInSlow_DPeriod?: number,
        optInSlow_DMA?: MATypeEnum,
    }): number,
    STOCHF(opts: {
        startIdx?: number,
        endIdx?: number,
        High: number[],
        Low: number[],
        Close: number[],
        optInFast_KPeriod?: number,
        optInFast_DPeriod?: number,
        optInFast_DMA?: MATypeEnum,
    }): {
        outFastK: number[],outFastD: number[]
    } & ITACalculationReturnValue

    STOCHFLookback(opts: {
        optInFast_KPeriod?: number,
        optInFast_DPeriod?: number,
        optInFast_DMA?: MATypeEnum,
    }): number,
    STOCHRSI(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
        optInFast_KPeriod?: number,
        optInFast_DPeriod?: number,
        optInFast_DMA?: MATypeEnum,
    }): {
        outFastK: number[],outFastD: number[]
    } & ITACalculationReturnValue

    STOCHRSILookback(opts: {
        optInTimePeriod?: number,
        optInFast_KPeriod?: number,
        optInFast_DPeriod?: number,
        optInFast_DMA?: MATypeEnum,
    }): number,
    SUB(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal0: number[],
        inReal1: number[],

    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    SUBLookback(opts: {

    }): number,
    SUM(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    SUMLookback(opts: {
        optInTimePeriod?: number,
    }): number,
    T3(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
        optInVolumeFactor?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    T3Lookback(opts: {
        optInTimePeriod?: number,
        optInVolumeFactor?: number,
    }): number,
    TAN(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal: number[],

    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    TANLookback(opts: {

    }): number,
    TANH(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal: number[],

    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    TANHLookback(opts: {

    }): number,
    TEMA(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    TEMALookback(opts: {
        optInTimePeriod?: number,
    }): number,
    TRANGE(opts: {
        startIdx?: number,
        endIdx?: number,
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    TRANGELookback(opts: {

    }): number,
    TRIMA(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    TRIMALookback(opts: {
        optInTimePeriod?: number,
    }): number,
    TRIX(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    TRIXLookback(opts: {
        optInTimePeriod?: number,
    }): number,
    TSF(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    TSFLookback(opts: {
        optInTimePeriod?: number,
    }): number,
    TYPPRICE(opts: {
        startIdx?: number,
        endIdx?: number,
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    TYPPRICELookback(opts: {

    }): number,
    ULTOSC(opts: {
        startIdx?: number,
        endIdx?: number,
        High: number[],
        Low: number[],
        Close: number[],
        optInFirstPeriod?: number,
        optInSecondPeriod?: number,
        optInThirdPeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    ULTOSCLookback(opts: {
        optInFirstPeriod?: number,
        optInSecondPeriod?: number,
        optInThirdPeriod?: number,
    }): number,
    VAR(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
        optInDeviations?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    VARLookback(opts: {
        optInTimePeriod?: number,
        optInDeviations?: number,
    }): number,
    WCLPRICE(opts: {
        startIdx?: number,
        endIdx?: number,
        High: number[],
        Low: number[],
        Close: number[],

    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    WCLPRICELookback(opts: {

    }): number,
    WILLR(opts: {
        startIdx?: number,
        endIdx?: number,
        High: number[],
        Low: number[],
        Close: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    WILLRLookback(opts: {
        optInTimePeriod?: number,
    }): number,
    WMA(opts: {
        startIdx?: number,
        endIdx?: number,
        inReal: number[],
        optInTimePeriod?: number,
    }): {
        outReal: number[]
    } & ITACalculationReturnValue

    WMALookback(opts: {
        optInTimePeriod?: number,
    }): number,

    describeFunctions(): any;
};

const funcsPromise: Promise<TAFunctions>;

export = funcsPromise;
