//Write a function that returns a string in which firstname is swapped with last name.

function nameShuffler(str){
  let res = str.split(" ");
  
  return res[1]  + " " + res[0]
}
