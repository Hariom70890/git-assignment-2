let N=15;
for(let i=1;i<=N;i++){
if(N%i==0){
count++;
}
}

if(count<=2){
console.log("prime number");
}
else{
console.log("not a prime number);
}