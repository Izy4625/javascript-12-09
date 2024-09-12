

function Mission1(arr){
    
    let evenNumbers = arr.filter(function(element) {
        return element % 2 === 0;
  });
  return evenNumbers
}

 const text = "hey hoer sdfkjh jhgf iuyt"
function Mission2(text) {
    let arr = text.split(" ");
return arr.reduce((ele, arrayEle) =>
(arrayEle.length == 4 ? ele + 1 : ele), 0);
};

function Mission3(twoDArr){
    let arr = []
    return arr.concat(...twoDArr);
}

function Mission5(arr1,arr2){
    const obj = {}
    for(i=0; i <arr1.length; i++){
        obj[arr1[i]] = arr2[i]      
    }
    return obj
}

 module.exports ={
    Mission1,
    Mission2,
    Mission3,
    Mission5,
   

 }