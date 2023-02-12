/**
 * スプレッド構文
 */
//配列の展開
// const arr1 = [1,2];
// console.log(arr1);

// console.log(...arr1);

// const sumFunc = (num1,num2) => console.log(num1 + num2);
// console.log(sumFunc(arr1[0], arr1[1]));
// sumFunc(...arr1);

//まとめる
// const arr2 = [1,2,3,4,5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(arr3);

//配列のコピーや結合
// const arr4 = [10,20];
// const arr5 = [30,40];
// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

/**
 * mapやfilterといった配列の処理
 */
// const arr1 = ["tanaka", "watanabe", "satou"];
// for (let index = 0; index < arr1.length; index++) {
//   console.log(`${index}番目は${arr1[index]}です`);
// }

// const arr2 = arr1.map((name) => {
//   return name;
// });
// console.log(arr2);

// arr1.map((name, index)=> console.log(`${index}番目は${name}です`));

// const numarr=[1,2,3,4,5];
// const newNumArr = numarr.filter((num)=>{
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = arr1.map((name) => {
//   if (name === "watanabe") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? `100を超えています` : `許容範囲内です`;
// };
// console.log(checkSum(1, 10));

const gg = "ez";
const afterWinResult = (text) => {
  console.log(`gg${text}`);
};

afterWinResult(gg);
