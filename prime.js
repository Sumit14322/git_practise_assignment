let num=15; 
let count=0;
    for(i=1;i<=num;i++){
        if(num%i==0 && num%num==0){
            count++;
        }
    }if(count==2){
        console.log("Its a Prime Number");
    }else{
        console.log("Its Not a Prime Number");
    }