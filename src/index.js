// import "./styles.css";
// function func1 (str){
//   return str;
// }

// console.log(func1('function1 is called'));

// const func2 = (str) =>{
//   return str;
// }

// console.log(func2("aaaaaa"));

//分割代入

// const myprofile ={
//   name : "aaa",
//   age : 24
// }

// const message = `name: ${myprofile.name},age:${myprofile.age}`;

// console.log(message);

// const {name, age} = myprofile;

// const message2 = `name: ${name},age:${age}`;

// console.log(message2);

//配列の分割代入

// const myprofile = ["aaa",24];

// const [name,age] = myprofile;

// const message3 = `name: ${name},age:${age}`;

// console.log(message3);

// //スプレッド構文

// const a = [1,2,3,4,5];
// const b = [6,7,8,9,10];
// const c = [...a,...b];
// c[3]= 0;
// console.log('c:',...c);
// console.log('a:',...a);

//mapやfilterをつかった処理

// const nameArr = ["sato","yamada","tanaka"];

// for(let i = 0; i< nameArr.length; i++){
//   console.log(nameArr[i]);
// }

// const nameMap = nameArr.map( (name) => {return name;});

// console.log(nameMap);

// nameMap.filter((name) => {
//   if(name == "yamada" ){
//     console.log(name+" is called");
//   }
// })

// const check = (num1 = 0, num2 = 0) => {return num1 + num2 > 100 ? '100を超えてる' : '許可'}

// console.log(check(200));
