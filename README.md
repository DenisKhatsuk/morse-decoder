# Morse code decoder

## Task

Your task is to write function, that decodes Morse code and returns string.
Write your solution in `src/index.js`

---

**Input:** String. Its length is multiple of 10.   
- Each letter from alphabet encoded with `10` for `.` and `11` for `-`.   
- Each encoded **letter's length is 10**.   
- If the length of the encoded letter is **less then 10**, it `left padded` with `0`.   
- `Space` in string is `**********`.   
**Output:** String (decoded)

---

## Prepare and test

- Install [Node.js](https://nodejs.org/en/)
- Clone this repository: `https://github.com/romacher/morse-decoder.git`
- Go to folder `morse-decoder`
- Run `npm install` in command line
- Run `npm test` in command line
- You will see the number of passing and failing tests

## Submit to [rs app](https://app.rs.school)
1. Open [rs app](https://app.rs.school) and login
2. Go to [submit task page](https://app.rs.school/course/submit-task?course=rs-2019-q3)
3. Select your task (morse-decoder)
4. Press the submit button and enjoy

### Notes
1. We recommend you to use nodejs of version 10 or lower. If you using any of features that does not supported by node v10, score won't be submitted.
2. Please be sure that each of your test in limit of 30sec.
