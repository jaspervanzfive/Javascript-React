var body = document.querySelector("h1");
var isBlue= false;

setInterval(function(){
    if(isBlue){
        body.style.color= "red";
    ;
    }
    else
    body.style.color="green";
    ;
    isBlue=!isBlue;
},500);

const subract = (a,b) => {
    let answer =a-b
    answer=50;
};

console.log(subract(10,5)); 