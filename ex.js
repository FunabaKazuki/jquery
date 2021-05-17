console.log("船場一希");
var lastName="ふなば";
var firstName="かずき";
console.log(lastName);
console.log(firstName);
let age = 65;
if(age<20){
    console.log("未成年です");
}else if(age>=20){
    console.log("成人です");
}


if(age<=4&&age>=0){
    console.log("幼年期");
}else if(age>=5&&age<=14){
    console.log("少年期");
}else if(age>=15&&age<=24){
    console.log("青年期");
}else if(age>=25&&age<=44){
    console.log("壮年期");
}else if(age>=45&&age<=64){
    console.log("中年期");
}else if(age>=65){
    console.log("更年期");
}

let t=0;
for(let i=1;i<=10;i++){
    t+=i;
}
console.log(t);

//5-2
for(let a = 1;a<=9;a++){
    let d;
    for(let b = 1;b<=9;b++){
        let c= a*b;

    }
    console.log();
}




let args=[1,2,3,4,5,6,7,8,9,10];
let e6=0;
for(let i =0 ;i<args.length;i++){
    e6 = e6 + args[i];
    if(args[i]%2==1){
        console.log(args[i]);        
    }
}

console.log(e6);

let aa=0
for(let e62 of args){
    aa+=e62;
    if(e62%2==1){
        console.log(e62);        
    }
}
console.log(aa);
let e7 = {
"⽇本" : "東京",
"スリランカ" : "スリジャヤワルダナプラコッテ",
"タイ":"クルンテープ・マハーナコーン・アモーンラッタナコーシン・マヒンタラアユッタヤー・マハーディロッカポップ・ノッパラッターナラーチャタニーブリーロム・ウドンラーチャニウェットマハーサターン・アモーンラピーンアワターンサティット・サッカタットティヤウィサヌカムプラシット"
};
console.log(e7["⽇本"]);
console.log(e7["タイ"]);

e7["タイ"]="バンコク";
console.log(e7["タイ"]);

//5-2
for(let a = 1;a<=9;a++){
    let d=" ";
    for(let b = 1;b<=9;b++){
        let c= String(a*b);
        if(c<=9){
            d=d+" ";    
        }
        d=d+c+" ";
        
        

    }
    console.log(d);
}