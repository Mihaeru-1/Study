//Javascript基本知識まとめ

////変数定義////
let customerName = "jelly";
customerName = "merry";
console.log(customerName);


////定数定義+テンプレートリテラり出力////
const clerkName = "jack";
console.log("店員さんの名前は" + clerkName + "です");
console.log(`店員さんの名前は${clerkName}です`);


////条件分岐(if、switch)////
if (clerkName==="snake"){
    console.log("彼の名前はスネークです。");
} else if(clerkName==="jack"){
    console.log(`彼の名前は${clerkName}です。`);
} else{
    console.log("彼の名前は不明です");
}

switch(clerkName){
    case "snake":
    console.log("彼の名前hはスネークです");
    break;

    case "black":
    console.log("彼の名前はブラックです");
    break;

    default:
    console.log("彼の名前は不明です、お前は誰だ！");
    break;
}

////繰り返し(while、for)////
let number = 0;
while (number <= 5){
    console.log(number);
    number ++;
}

for(let number2 = 10; number2 <=15; number2++){
    console.log(number2);
}

////配列とオブジェクト////
const pcParts = ["cpu","hdd","memory","cdDrive"];
console.log(pcParts[0]);
console.log(`PCのパーツの数は${pcParts.length}です`);
for(let n = 0; n<pcParts.length; n++){
    console.log(pcParts[n])
}


const fruit = {name:"メロン", price:3000};
console.log(`${fruit.name}の値段は${fruit.price}です`);


////配列の中にオブジェクト////
const map = [
    {name:"京都",place:"関西"},
    {name:"東京"}
];
for (let i = 0; map.length<3; i++){
    let area = map[i];
    console.log(`${area.name}は${area.place}にあります`);
    if (area.place||area.name === undefined){
        console.log("存在しない地方があるねぇ・・・");
        break;
    } else{
      ;//何もしないおー＾＾
    }
}

////クラスとインスタンス、コンストラクタ、メソッド////
class Name{
  constructor(name,age){
    console.log("んなああああああ");
    this.Name = name;
    this.Age = age;
    this.EU = "Hello";
    this.JP = "こんにちは"
  }
  greet(){
    console.log("挨拶は基本です!");
  }

}
const greeting = new Name("アゴンゲリオン",24);
console.log(greeting.EU);
console.log(greeting.Name);
greeting.greet();

////継承////
class Animal{
  greet(){
    console.log("やあああああ");
  }
  info(){
    this.greet();
  }
}

class Dog extends Animal{
}

const dog = new Dog;
dog.greet();

////オーバーライド////
class first{
  conmstructor(){
    console.log("やあ")
  }

}
class second{
  constructor(){
    super()
    console.log("俺が本物だ")
  }
}
