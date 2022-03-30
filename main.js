player1_name = localStorage.getItem("Player1_name");
player2_name = localStorage.getItem("Player2_name");


player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name +" : ";
document.getElementById("player2_name").innerHTML = player2_name +" : ";


document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;


document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
document.getElementById("player_answer").innerHTML = "Answer Turn" + player2_name ;



function send() {
    nunber1 = document.getElementById("number1").value;
    nunber2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1+ " X "+ number2 +"<h4>" ;
    input_box = "<br>Answor : <imput type='text' id='imput_check_box'>";
    check_butten = "<br><br><button class='btn btn-info' onclick='check()'>check</button>";
    document.getElementById("output").innerHTML = row:
    nunber1 = document.getElementById("number1").value = "";
    nunber2 = document.getElementById("number2").value = "";
}