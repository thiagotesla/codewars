//In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. 
// If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. 
// If there are no good ideas, as is often the case, return 'Fail!'.


function well(x) {

    let goodN = Number(x.filter(x => x === 'good').length)
    if (goodN === 0) {
        return 'Fail!'
    } else if (goodN >= 0 && goodN <= 2) {
        return 'Publish!'
    } else {
        return 'I smell a series!'
    }
}
