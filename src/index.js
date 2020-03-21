const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

// function code(expr) {
//     expr = expr.toLowerCase();
//     let exprArr = expr.split('');
//     let codedStr = '';
//     for (let i = 0; i < exprArr.length; i++) {
//         for (let key in MORSE_TABLE) {
//             if (exprArr[i] == MORSE_TABLE[key]) {
//                 let char = key.split('');
//                 let charCoded = '';
//                 for (let i=0; i < char.length; i++) {
//                 	switch (char[i]) {
//                   	case '.':
//                     	charCoded += '10';
//                       break;
//                     case '-':
//                     	charCoded += '11';
//                       break;
//                   	default:
//                     	break;
//                   }
//                 }
//                 while (charCoded.length < 10) {
//                  charCoded = '0' + charCoded;
//                 }
//                 codedStr += charCoded;
//                 break;
//             } else if (exprArr[i] == ' ') {
//             	codedStr += '**********';
//               break;
//             }
//         }
//     }
//     return codedStr;
// }

function decode(expr) {
    let amountOfLetters = expr.length / 10;
    let startPoint = 0;
    let endPoint = 10;
    let arrOfCodes = [];
    let morseArr = [];
    let decodedStr = '';

    sliceInputCodeToLetters();

    for (let i = 0; i < arrOfCodes.length; i++) {
        removePaddedZerosFromLetters(i);
        decodeNumbersToDotsAndDashes(i);
        decodeMorseStringIntoReadable(i);
    }

    function sliceInputCodeToLetters() {
        for (let i = 0; i < amountOfLetters; i++) {
            arrOfCodes[i] = expr.slice(startPoint, endPoint);
            startPoint += 10;
            endPoint +=10;
        }
    }

    function removePaddedZerosFromLetters(i) {
        for (let j = 0; j < arrOfCodes[i].length; j++ ) {
            if (arrOfCodes[i][j] == '0') {
                 arrOfCodes[i] = arrOfCodes[i].slice(1);
                 j--;
            } else {
                break;
            }
        }
    }

    function decodeNumbersToDotsAndDashes(i) {
        for (let j = 0; j < arrOfCodes[i].length; j += 2) {
            if (!morseArr[i]) morseArr[i] = '';
            if (arrOfCodes[i].slice(j, 1) == '*') {
                morseArr[i] = ' ';
                break;
            }
            morseArr[i] += arrOfCodes[i].slice(j, j + 2) == '10' ? '.' : '-';
        }
    }
    
    function decodeMorseStringIntoReadable(i) {
        if (morseArr[i] == ' ') {
            decodedStr += ' ';    
        } else {
          for (let key in MORSE_TABLE) {
            if (morseArr[i] == key) {
              decodedStr += MORSE_TABLE[key];
              break;
            }
          }
        }
    }
    
    
    return decodedStr;
}



module.exports = {
    decode
}