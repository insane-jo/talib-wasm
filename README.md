# talib-wasm
An emscripten wrapper around TA-LIB, that allows you to use technical analysis library from [ta-lib.org](https://ta-lib.org) with webpack or inside node.js.

Supports typescript types.

[![Support developer](readme-assets/buymeacoffee.png)](https://buymeacoff.ee/oItObEGUm)

## Installation
To install the most recent release from npm, run:

```npm install talib-wasm --save```

## Examples
### Simple usage
```javascript
require('talib-wasm')
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
```
Output:
```
{ 
    outReal: Float64Array [
        -0.6928388933464642,
        -0.5839394251640864,
        -0.14373076952669628,
        0.6790200559640114,
        0.8465738940590309,
        0.28576183066199495,
        ...
    ],
    returnCode: 0,
    returnCodeName: 'TA_SUCCESS'
}
```
### Get all function definitions
```
require('talib-wasm')
    .then((funcs) => {
        console.log(
            JSON.stringify(funcs.describeFunctions(), null, 2)
        )
    });
```
Output:
```
{
  "ACOS": {
    "RequiredInputArguments": [
      {
        "name": "inReal",
        "defaultValue": null
      }
    ],
    "OptionalInputArguments": [],
    "OutputArguments": [
      {
        "name": "outReal"
      }
    ]
  },
  "AD": {
    "RequiredInputArguments": [
      {
        "name": "High",
        "defaultValue": null
      },
      {
        "name": "Low",
        "defaultValue": null
      },
      {
        "name": "Close",
        "defaultValue": null
      },
      {
        "name": "Volume",
        "defaultValue": null
      }
    ],
    "OptionalInputArguments": [],
    "OutputArguments": [
      {
        "name": "outReal"
      }
    ]
  },
  "ADD": {
    "RequiredInputArguments": [
      {
        "name": "inReal0",
        "defaultValue": null
      },
      {
        "name": "inReal1",
        "defaultValue": null
      }
    ],
    "OptionalInputArguments": [],
    "OutputArguments": [
      {
        "name": "outReal"
      }
    ]
  },
  ...
}
```
### MA Types
Some indicators require or accept a optInMAType property:
```
SMA   = 0
EMA   = 1
WMA   = 2
DEMA  = 3
TEMA  = 4
TRIMA = 5
KAMA  = 6
MAMA  = 7
T3    = 8
```

## Local build

You need manually install [emscripten](https://emscripten.org/) to build this package.

```
npm run build
```

## Modules versions

### Version 3.0.0
* Result arrays now not contain blank fields at the end. Length of result array in version 2.x can be different with version 3.x
* Result arrays now are not Float64Array.
* Fixed memory leaks on functions calls.
* Added `lookback` functions to get lookback info. Very useful to get difference between input and output arrays lengths.
* Talib C++ sources from ta-lib.org now in project.
* Added tests (uses jest).

```
emcc (Emscripten gcc/clang-like replacement + linker emulating GNU ld) 2.0.10
clang version 12.0.0 (/opt/s/w/ir/cache/git/chromium.googlesource.com-external-github.com-llvm-llvm--project 445289aa63e1b82b9eea6497fb2d0443813a9d4e)
node (EMSDK_NODE) version - 15.3.0
python (EMSDK_PYTHON) version - 3.8.5
```


### Versions 2.0.1 - 2.0.6
Added main.d.ts file for typescript typings support.
```
emcc (Emscripten gcc/clang-like replacement + linker emulating GNU ld) 2.0.0
clang version 12.0.0
talib version - 1.1.3
node (EMSDK_NODE) version - 14.8.0
python (EMSDK_PYTHON) version - 3.8.5
```

### Version 2.0.0
Switch to emscripten v2.0.0
```
emcc (Emscripten gcc/clang-like replacement + linker emulating GNU ld) 2.0.0
clang version 12.0.0
talib version - 1.1.3
node (EMSDK_NODE) version - 14.8.0
python (EMSDK_PYTHON) version - 3.8.5
```

### Version 1.1.3
```
emcc (Emscripten gcc/clang-like replacement + linker emulating GNU ld) 1.40.1
talib - 1.1.3
node - 14.7.0
```

### Version 1.1.2
```
emcc (Emscripten gcc/clang-like replacement + linker emulating GNU ld) 1.39.18
talib - 1.1.3
node - 14.5.0
```

### Version 1.1.1
```
emcc (Emscripten gcc/clang-like replacement + linker emulating GNU ld) 1.39.14
talib - 1.1.3
node - 14.2.0
```

### Version 1.1.0
```
emcc (Emscripten gcc/clang-like replacement + linker emulating GNU ld) 1.39.13
talib - 1.1.3
node - 14.0.0
```

### Version 1.0.6
```
emcc - (Emscripten gcc/clang-like replacement + linker emulating GNU ld) 1.39.6
talib - 1.1.3
node - 13.7.0
```

### Version 1.0.5
```
emcc - (Emscripten gcc/clang-like replacement) 1.39.3
talib - 1.1.3
node - 13.2.0
```

### Version 1.0.4
```
emcc - (Emscripten gcc/clang-like replacement) 1.39.1
talib - 1.1.3
node - 13.0.1
```

### Version 1.0.3
```
emcc - (Emscripten gcc/clang-like replacement) 1.38.44
talib - 1.1.2
node - 12.10.0
binaryen - 89
```


## Support developer
**_If you like this package - support me on [Buy me a coffee](https://buymeacoff.ee/oItObEGUm)._**
