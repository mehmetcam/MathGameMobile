let score = 0;


function dewamke(){
    
    //clickFunction();
    
    let chiffre1 = Math.ceil(Math.random() * 20) + 10;
    let chiffre2 = Math.ceil(Math.random() * 20) + 10;
    console.log(chiffre1,chiffre2)
    document.getElementById("chiffre1").innerHTML = chiffre1;
    document.getElementById("chiffre2").innerHTML = chiffre2;


    

    

    let operator = Math.ceil(Math.random()*4);

    if(operator == 1){


        document.getElementById("operator").innerHTML = "+";
        let resultat = chiffre1 + chiffre2;
        
        

        if(resultat < 2 && resultat > -2){
            document.getElementById("button4").innerText = resultat;
            document.getElementById("button1").innerHTML = Math.ceil(resultat*0.8);
            document.getElementById("button2").innerHTML = Math.ceil(resultat*1.9);
            document.getElementById("button3").innerHTML = Math.ceil(resultat*2.5);
        }

        else{
            document.getElementById("button4").innerText = resultat;
            document.getElementById("button1").innerHTML = Math.ceil(resultat*0.95);
            document.getElementById("button2").innerHTML = Math.ceil(resultat*1.1);
            document.getElementById("button3").innerHTML = Math.ceil(resultat*1.2);
        }
        
    }

    else if(operator == 2){

        document.getElementById("operator").innerHTML = "-";

        let resultat = chiffre1 - chiffre2;

        if(resultat != 0 && (resultat <2 && resultat > -2)){
            console.log("hata1")
            document.getElementById("button4").innerText = resultat;
            document.getElementById("button1").innerHTML = Math.ceil(resultat*2);
            document.getElementById("button2").innerHTML = Math.ceil(resultat*3);
            document.getElementById("button3").innerHTML = Math.ceil(resultat*4);
        }

        else if((resultat => 2 && resultat <=-2) && resultat != 0 ){
            console.log("hata2", resultat)
            document.getElementById("button4").innerText = resultat;
            document.getElementById("button1").innerHTML = Math.ceil(resultat*0.2);
            document.getElementById("button2").innerHTML = Math.ceil(resultat*1.8);
            document.getElementById("button3").innerHTML = Math.ceil(resultat*2.5);
        }

        else{
            console.log("hata3")
            document.getElementById("button4").innerText = resultat;
            document.getElementById("button1").innerHTML = Math.ceil(resultat)-1;
            document.getElementById("button2").innerHTML = Math.ceil(resultat)+1;
            document.getElementById("button3").innerHTML = Math.ceil(resultat)+2;
        }
            
      
    }


    else if(operator == 3){
        document.getElementById("operator").innerHTML = "*";
        let resultat = chiffre1 * chiffre2;
        
        document.getElementById("button4").innerText = resultat;  
        document.getElementById("button1").innerHTML = Math.ceil(resultat*0.6);
        document.getElementById("button2").innerHTML = Math.ceil(resultat*1.5);
        document.getElementById("button3").innerHTML = Math.ceil(resultat*1.7);    
    }

    else{
         document.getElementById("operator").innerHTML = "/";
         let resultat = chiffre1 / chiffre2; 
      
         if(resultat < 2 ){
            document.getElementById("button4").innerText = resultat.toFixed(2);
            document.getElementById("button1").innerHTML = Math.ceil(resultat*2);
            document.getElementById("button2").innerHTML = Math.ceil(resultat*4);
            document.getElementById("button3").innerHTML = Math.ceil(resultat*6);
        }

        else{
            document.getElementById("button4").innerText = resultat.toFixed(2);
            document.getElementById("button1").innerHTML = Math.ceil(resultat*1.2);
            document.getElementById("button2").innerHTML = Math.ceil(resultat*1.8);
            document.getElementById("button3").innerHTML = Math.ceil(resultat*2.5);
        }
          
     }


    // placer la bonne réponse

    let order = Math.ceil(Math.random()*2);

    if(order==1){
        document.getElementById("buttons").style.flexDirection = "row"
    }

    else{
        document.getElementById("buttons").style.flexDirection = "row-reverse"
    }

    let petitOrder = Math.ceil(Math.random()*2);

    if(petitOrder==1){
        document.getElementById("buttons2").style.flexDirection = "row"
    }

    else{
        document.getElementById("buttons2").style.flexDirection = "row-reverse"
    }


    // Ajouter 1 point 

    score++;

    document.getElementById("score").innerHTML = score;

    
}

    

let intervalID = null;
let counter = 60;
function timer(){

    const timer = document.getElementById("timer");

    console.log("naber")

    

    if (intervalID){
        return;
    }

    intervalID = setInterval(function timer(){

        counter = counter - 1;
        document.getElementById('timer').innerHTML = counter;

        if(counter <= 10 && document.getElementById("timer").classList != "timerAni"){
            document.getElementById("timer").classList.add("timerAni");
            
        }
        

        else if(counter == 0){
            GameOver();    
        }
    },1000);

}




function hata(){
    GameOver();
}

function GameOver(){

    if(score <= 5){
        alert("🐭 Game Over. Ton Score est "+score+". Veuillez contacter votre professeur de math")
    }
    else{
        alert(" 🐭 Game Over. Ton Score est "+score)
    }
    
    document.location.reload(true);

}