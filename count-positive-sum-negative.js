// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 
// 0 is neither positive nor negative.
// If the input array is empty or null, return an empty array.

function countPositivesSumNegatives(input) {

    let count = 0
    let sum = 0

    if (input == null || input.length == 0) {
        return []
    } else {
        for (let i = 0; i < input.length; i++)
            if (input[i] > 0) {
                count++
            } else {
                sum += input[i]
            }
        return [count, sum]
    }
}
