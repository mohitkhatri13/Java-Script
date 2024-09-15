/// note avoid using there types of conversions



// note always compare the two values which has same datatypes this comparison not give a proper result

console.log("2">1)// not valid

// case2 
console.log(null>0); ///false
console.log(null==0);//false
console.log(null>=0);//true
// why this happend -> the reason is that am equality check == and cpmparison > < >= <= worls differently 
// Comparison convert to a number treating it as a 0.THst's why (3) null>=0 is true and (1) null>0 is false
// in Js == and comparison works differently in js and both are different things

  
console.log(undefined>0);
console.log(undefined==0);
console.log(undefined>=0);
// but in case of undefined it return false everytime

// strict check ===
// it also check the datatype with the value
console.log("2"===2);