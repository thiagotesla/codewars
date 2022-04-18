// Write a function that will check if two given characters are the same case.

function sameCase(a, b){

    const aLetter = /[ A-Za-z]/.test(a)
    const bLetter = /[ A-Za-z]/.test(b)
    const aUpper = /[A-Z]/.test(a)
    const bUpper = /[A-Z]/.test(b)
    const aLower = /[a-z]/.test(a)
    const bLower = /[a-z]/.test(b)

    if(aLetter && bLetter){
        if(aUpper && bUpper || (aLower && bLower)){
            return 1
        }
        return 0   
    }
    return -1;
}
