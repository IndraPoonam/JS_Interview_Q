// let a=[1,2,3,4,5,6,7,3,2,4];
// for(let i=0; i<a.length; i++){
//     for(let j=i+1; j<=a.length; j++){
//         if(a[i]==a[j]){
//             console.log("duplicate element is"+a[j]);
            
//         }
//     }
// }

// =========================fibo==================================
// let a=0 , b=1;
//         console.log(a ," ",b);
//         let c;
//         for(let i=1; i<=10; i++){
//             c=a+b;
//             console.log(" ",c);
//             a=b;
//             b=c;
//         }

// ============================palidrome-==============================
let a=propmt("enter a num");
let b=" ";
for(let i=a.length-1; i>=0; i--){
    b +=a[i]
};
if(a==b){
    console.log("it is palidrome")
}
else{
    
    console.log("it is not palidrome")
}