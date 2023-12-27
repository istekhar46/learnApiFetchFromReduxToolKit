/*
(Object.getOwnPropertyNames(Object.prototype));

const arr = ["m", "o", "n", "k", "e", "y"];

Array.prototype.MyForEach = function(callback){
  for(let i = 0; i < this.length; i++){
      callback(this[i],i ,this)
  };
};

arr.MyForEach((item, index, arr) => {
  console.log(item, index, arr)
});

const str = "monkey";

const reverseStr = str.split('').reverse().join('')

const count = ['hello', 'hello', 'world', 'world',]
const countObj = count.reduce((acc, cur) => {
  if(acc[cur]){
      acc[cur] += 1;
  }else{
      acc[cur] = 1;
  }
  return acc;
}, {})

const obj ={hello: 2, world: 2}
// console.log(obj["hello"])

count.forEach((item)=>{
  const count = {}
  if(count[item]){
      count[item] += 1;
  }else{
      count[item] = 1
  }
})

const num = [1,22,3,3,4,5,6,17,8,9,9,10]

const unique = [...new Set(num)];
const unique2 = num.filter((item, index)=> num.indexOf(item)=== index)

const secontMax= (arr)=>{

  arr.sort((a,b)=> a-b);
  console.log(arr)
  for(let i= arr.length-1; i>=0; i--){
      if(arr[i] !== arr[i-1]){
          return arr[i-1]
      }
  }
}


const maxNum = (num)=>  num.reduce((acc, cur) => acc > cur ? acc : cur  )




const arr = ['lets', 'learn', 'javascript'];
const str = "lets learn javascript"


//  console.log(arr.join(" "))

const arr2 = [1,2,3,4,5,6,17,8,9,10]

// console.log(arr2.reverse())

const rev =  arr2.reduceRight((acc,cur)=>{
  acc.push(cur)
  return acc;
},[])

console.log(rev)

const revArr = (arr2)=>{

  let reverseArr = []

  for(let j = arr2.length-1; j>=0; j-- ){
      
      reverseArr.push(arr2[j])
  }
  return reverseArr;
}

console.log(revArr(arr2))
const obj = {
  name: "John",
  age: 30,
}

const values = Object.values(obj);
console.log(values)
const EntriesArray = (obj)=>{
  const keys = Object.keys(obj);

  const res = keys.map((key)=>{
      const value = obj[key];
      return [key, value]
  })

  return res;   
}

console.log(EntriesArray(obj))  



const arr = [1,2,3,-4,-5,6,-17,-8,-9,10]

const LastThreeElem = (arr,n)=>{
  
   return  arr.slice(arr.length - n)

}

const noOfNeg = (arr)=>{
  let count = 0;
  for(let i =0; i< arr.length; i++){
      if(arr[i]<0){
          count ++;
      }
  }
  return count;
}
const neg = arr.filter((item)=> item < 0)
const neg1 = arr.reduce((acc,cur)=> cur < 0 ? acc + 1: acc,0)
console.log(neg1)


const arr = [1,2,3,4,5,6,17,8,9,10]

const sameElem = (arr)=>{
  return  arr.filter((item)=> typeof(item))
}

console.log(sameElem(arr))

const diffElemTypArr = [1,8,4,5];

console.log(diffElemTypArr.every((v,i,arr)=>  arr[0] === v))


const obj = {
  name: "John",
  age: 30,
  city: "New York"
}

Object.assign(obj,{county: "usa"})

const {name:firstName, age, city} = obj;
  console.log(firstName, age, city)

  
  const obj = {
      name: "John",
      age: 30,
      city: "New York"
    }

    const keys = Object.keys(obj);
const renameKeys = keys.map((key)=>{
    const rKey =  `NA ${key}`    
    return rKey
})

const val = keys.map((key)=>{
  const value = obj[key];
  return value
} )
// console.log(renameKeys)
// console.log(val)
const finalio = (arr1,arr2)=>{

  const res = arr1.map((key,index)=>  {
      const final = `${key}: ${arr2[index]}`;
      return final;

  })
  return res;
}

console.log(finalio(renameKeys,val))

const str = "hello- world- yooo - this-    is -   insaaannn";
//  console.log(str.split(' ').join(''))

const RemoveSpace = (str) =>{
  let unq = ''
  
  for(let i = 0; i< str.length; i++){
      if(str[i] !== ' '){
          unq += str[i]
      }
  }
        return unq;
  }

  const res = RemoveSpace(str);
  console.log(res)

  
  const rand = "030 34545 33045 54"
  const swap =(str, v1, v2)=>{
      let res = '';
      //? method 1
      // for(let i = 0 ; i<str.length; i++){
      //     if(str[i]=== '0' ){
      //         res += v2
      //     }
      //     else if(str[i] === v2){
      //         res += v1
      //     }else{
      //         res += str[i]
      //     }
      // }

      // return res;
      
      //? method 2

      return [...str].map((val)=> val === v1 ? v2 : val === v2 ? v1 : val).join('')
  }

  console.log(swap(rand, '0', '3'))

  
  
  class fam {
    constructor(name, age){
        this.name = name;
        this.age = age;
    };
    
     sayName() {
        console.log(`my name is ${this.name}`)
    }
}

const fam1 = new fam("john", 30);

fam1.sayName()



const str = "hello world";

str.split('').map((item) => console.log(item))

const fibRec = (n) => {
  if (n <= 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2)
}

let t1 = 0, t2 = 1, nextTerm;
const fib = (n) => {
  if (n <= 1) {
    return n;
  }
  for (let i = 2; i < n; i++) {
    nextTerm = t1 + t2;
    t1 = t2;
    t2 = nextTerm;
  }
}
*/
//? anagram

let str11 = "car", str22 = "rac";
// const anagram = (str1, str2) => {
//   return str1.split('').sort().join('') === str2.split('').sort().join('')
// }

// console.log(anagram(str1, str2))


//? two sum ,
//* target = 9
const arr = [2, 7, 11, 15];

const twoSum = (arr, target) => {

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j]
      }
    }
  }
}

const twoSum2 = (arr, target) => {

  var obj = {};

  for (let i = 0; i < arr.length; i++) {
    const diff = target - arr[i];
    if (obj[diff] !== undefined) {
      return [obj[diff], i]
    }
    obj[arr[i]] = i;
  }
}

const obj = {
  name: 1,
}
obj['ok'] = 0;

Object.assign(obj, { country: 'USA' })

console.log(obj)
// console.log(twoSum(arr, 9))

const twoSum3 = (arr, target) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] !== undefined) {
      return [obj[arr[i]], i]
    } else {
      obj[target - arr[i]] = i;
    }
  }

}

console.log(twoSum3(arr, 9))







