let str="123g321";
 
 bag="";
for(let i=str.length-1;i>=0;i--){
bag+=str[i];
}
    if(str!==bag){
       console.log("Give str is not palindrome");
    }
 else{
console.log("Give str is palindrome");
}