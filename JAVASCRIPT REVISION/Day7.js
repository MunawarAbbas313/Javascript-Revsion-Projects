// Arrays in Javascript

let myArr = [1,2,3,4,5];
console.log(myArr);

let myarr2 = myArr;
myarr2[2] = "Munawar";
console.log(myarr2);
console.log(myArr);
// As per rules of reference it perfroms shallow copy 
// chnages in one array caus changes in original array due to same reference 

//Slice and Siplce Methods
const Myarr = [1,2,3,4,5,6];

// Slice
// copy and returns a section from array
// slice("starting", "Ending (not Included)")
const Myarr2 = Myarr.slice(1,3);
console.log("A", Myarr);
console.log(Myarr2);


// Splice
// Cuts and return the section of Array 
// splice("start", "end")
// Here both are Inlcuded but the starting and eding point is cutted from orginal array 

const Myarr3 = Myarr.splice(1,4);
console.log("B", Myarr);
console.log(Myarr3);

 

