let number = (Number)(Math.floor((Math.random() * 20) + 1));
let change = document.querySelector(".message");
let score = Number(document.querySelector(".score").innerHTML);
document.querySelector(".check").addEventListener('click', function(){
    let inp = (Number)(document.querySelector(".guess").value);
    if(score>0){    
        if(!inp){
            change.textContent = "Please Enter Number⌨";
        }
        if(inp !== number){
            change.textContent = (number < inp) ? "Number is greater📉" : "Number is smaller📈";
            score--; 
        }
        else{
            change.textContent = "Your guess is correct🎊";
            document.querySelector(".number").innerHTML = number;
            document.querySelector("body").style.backgroundColor = "green";
            var hs = document.querySelector(".highscore");
            if(score > (Number)(hs.innerHTML)){
            hs.innerHTML = score;
            }
        }
        if(score == 0){
            document.querySelector(".message").textContent = "You lost the game💥";
            document.querySelector(".number").textContent = number;
        }
        document.querySelector(".score").textContent = score;
    }
}
);
document.querySelector(".again").addEventListener('click', function(){
    // location.reload();
    document.querySelector("body").style.backgroundColor = "black";
    change.textContent = "start guessing";
    document.querySelector(".score").innerHTML = 20;
    score = 20;
    document.querySelector(".number").innerHTML = '?';
    number = Math.floor((Math.random() * 20) + 1)
    document.querySelector(".guess").value = '';
});