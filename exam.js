

function Mission1(arr){
    
    let evenNumbers = arr.filter(function(element) {
        return element % 2 === 0;
  });
  return evenNumbers
}

 
function Mission2(text, element) {
    let arr = text.split(" ");
return arr.reduce((ele, arrayEle) =>
(arrayEle.length == element ? ele + 1 : ele), 0);
};

console.log(Mission2(text, 4));

function Mission5(arr1,arr2){
    const obj = {}
    for(i=0; i <arr1.length; i++){
        obj[arr1[i]] = arr2[i]      
    }
    return obj
}
function Mission6(n){
    if(n<2){
      return n
    }else{
      return Mission6(n-1) + Mission6(n-2);
    }
  } 
  
 module.exports ={
    Mission1,
    Mission2,
    Mission5,
    Mission6

 }