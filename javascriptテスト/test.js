console.log("船場");


let firstName = "kazuki"; 
let lastName = "funaba";
console.log(firstName+" "+lastName);


console.log("小計");
console.log(200*3+250*4);
console.log("消費税");
console.log((200*3+250*4)*0.1);
console.log("合計金額");
console.log(((200*3+250*4)+(200*3+250*4)*0.1));


let testScore = -1;
if(testScore>=0&&testScore<=79){
    console.log("追試です");
}else if(testScore>=80&&testScore<=120){
    console.log("合格です");
}else{
    console.log("存在しない点数です");
}


let a=0;
for(i=1;i<=100;i++){
    a+=i;
}
console.log(a);