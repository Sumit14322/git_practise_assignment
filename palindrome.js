let str="naman";
let N=str.length
bag="";
  for(i=N-1;i>=0;i--){
      bag+=str[i];
  }
  
  if(bag==str){
    console.log("Yes");
}else{
    console.log("No");
}