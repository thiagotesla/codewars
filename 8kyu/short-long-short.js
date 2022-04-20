// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. 
// The strings will not be the same length, but they may be empty ( zero length ).


function solution(a, b){
  let lenA = a.length
  let lenB = b.length
  
  if(lenA>lenB){
    return b+a+b
  }
  return a+b+a
}
