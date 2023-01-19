player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player2_name").innerHTML=player2_name+" : ";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question Turn: "+player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn: "+player2_name;

function send() 
{
    getWord=document.getElementById("word").value;
    word = getWord.toLowerCase();
    console.log(word);
    char1 = word.charAt(1);
    console.log(char1);
    halflength = Math.floor(word.length/2);
    char2 = word.charAt(halflength);
    console.log(char2);
    lastindex = word.length-1;
    char3 = word.charAt(lastindex);
    console.log(char3);
    rep1 = word.replace(char1, "_");
    rep2 = rep1.replace(char2, "_");
    rep3 = rep2.replace(char3, "_");
    console.log(rep3);
    question = "<h4 id='word_display'>Q. "+rep3+"</h4>";
    answer = "<br>Answer : <input id='input_checkbox' type='text'>";
    check = "<br><br><button id='check_btn' class='btn btn-info' onclick='check()'>Check</button>";
    row = question+answer+check;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").innerHTML="";
};


