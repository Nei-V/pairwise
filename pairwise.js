function pairwise(arr, arg) {
    let originalString=document.getElementById("originalArrayString").value;
    let originalArray=originalString.split(",").map(Number);
    let sum=document.getElementById("target").value;
    console.log("original array",originalArray, "and the target sum is,",sum);
    let result=0;
    document.getElementById("result").innerHTML=result;
  return arg;
}

//document.getElementById("result").innerHTML=pairwise([1,4,2,3,0,5], 7);