function printName(){
    console.log("hunaba");
}
printName();
function add(x,y){
    return x+y;
}
function sub(x,y){
    return x-y;
}
function multi(x,y){
    return x*y;
}
function div(x,y){
    return x%y;
}
console.log(add(5,3));
console.log(sub(5,3));
console.log(multi(5,3));
console.log(div(5,3));

let printNameVariable= function() {
     console.log("hunabakazuki");
}
printNameVariable();

let addVariable =function(x,y){
    return x+y;
}
let subVariable =function(x,y){
    return x-y;
}
let multiVariable =function(x,y){
    return x*y;
}
let adivVariable =function(x,y){
    return x%y;
}

console.log(addVariable(5,3));
console.log(subVariable(5,3));
console.log(multiVariable(5,3));
console.log(adivVariable(5,3));

var globalVal = 10; // ←グローバルスコープの変数
function func1() {
var localVal = 20; // ←ローカルスコープ(関数スコープ)の変数
console.log("globalVal:" + globalVal); // 10
console.log("localVal:" + localVal); // 20
}
func1();
console.log("globalVal:" + globalVal); // 10
//console.log("localVal:" + localVal); // エラー

var items = [
    { name: 'じゃがいも', price: 50, count: 3 },
    { name: 'にんじん', price: 60, count: 1 },
    { name: '豚肉', price: 200, count: 1 },
    { name: '玉ねぎ', price: 50, count: 2 }
  ];
// targetPriceより小計の高額な商品を出力
function higherPrice (targetPrice) {
    // ここにソースコードを追記しましょう
    for(let item of items){
        
        if(targetPrice<item["price"]*item["count"]){
            console.log(item["name"]);
        }
    }

  }
 
  
  higherPrice(120);

