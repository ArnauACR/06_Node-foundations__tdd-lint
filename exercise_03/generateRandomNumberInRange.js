/**
 * #3 :: Export JS function "generateRandomNumberInRange" to generate a rounded random number depending on a limit
 * input: number (limit)
 * output: number
 * validate input: throw TypeError with message "expected number but received <type-of-argument>" if input is not a number
 */
function generateRandomNumberInRange(limit){
    const randomnumber = Math.floor(Math.random() * (limit + 1));

    return randomnumber;
}

export default generateRandomNumberInRange;