/**
 * #4 :: Export JS function "isGreaterThan" to check whether one number is greater than a given number
 * input: number (value)
 * input: number (threshold)
 * output: boolean
 * validate input: throw TypeError with message "expected number but received <type-of-argument>" if inputs are not numbers
 */
function isGreaterThan(firstnumber, secondnumber){
    const resultcomaprison = firstnumber > secondnumber;

    if(resultcomaprison=== true){
        return "The first number is major";
    }

    return "The second number is major";
}

export default isGreaterThan;