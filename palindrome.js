let str="123g321";
let j=str.length;
let ans=true;
for(let i=0;i<=str.length;i++){
    if(str[i]!==str[j]){
       console.log("Not palindrome");
       ans="false";
       break;
       j--;
    }
}
if(ans==true){
console.log("palindrome");
}