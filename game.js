P1Name=localStorage.getItem("P1Name");
P2Name=localStorage.getItem("P2Name");
console.log("Name for p1 that was found is "+P1Name);
console.log("Name for p2 that was found is "+P2Name);                                                                                      
P1score=0;
console.log("p1@origin:"+P1score);
P2score=0;
console.log("p2@origin:"+P2score);
questionP="P1"
answerP="P2"
function showQuestion(){
    document.getElementById("Output").style.display="inline-block";
    document.getElementById("input").style.display="none";
    Num1=document.getElementById("QuestionP1").value;
    console.log(Num1)
    Num2=document.getElementById("Question P3").value;
    ANSWR=parseInt(Num1)*parseInt(Num2);
    console.log(Num1+" times "+Num2+"="+ANSWR);
    document.getElementById("question").innerHTML="<h4>"+Num1+" X "+Num2+"</h4>";
}
function CheckA(){
    UserAnswer=document.getElementById("Answer").value;
    if(ANSWR==UserAnswer){
        if(answerP=="P2"){
        window.alert("YOU GOT IT CORRECT!YEAH!");
        console.log("old:"+P2score);
        P2score=P2score+1;
        document.getElementById("P2score").innerHTML= "<h4>"+P2Name+"'s score is "+P2score+"</h4>";
        console.log("new P2 Score:"+P2score);
        document.getElementById("input").style.display="inline-block";
        document.getElementById("Output").style.display="none";
        document.getElementById("QuestionP1").value=" ";
        document.getElementById("Question P3").value=" ";
        answerP="P1";
        questionP="P2"
        console.log("p1 will answer");
        document.getElementById("questionP").innerHTML=P2Name+" will ask a question"
        }
        else{
            console.log("old:"+P1score);
        P1score=P1score+1;
        window.alert("Oh no!Its wrong.Try better next time okay?The correct Answer is "+ANSWR+".This is because "+Num1+" Groups  of "+Num2+" would have "+ANSWR+" Units in them.");
        document.getElementById("P1score").innerHTML= "<h4>"+P1Name+"'s score is "+P1score+"</h4>";
        console.log("P1 New:"+P1score);
        answerP="P2";
        console.log("answer turn is P2's turn");
        }
    
    }
    else{
        if(questionP=="P1"){
        console.log("old:"+P1score);
        P1score=P1score+1;
        window.alert("Oh no!Its wrong.Try better next time okay?The correct Answer is "+ANSWR+".This is because "+Num1+" Groups  of "+Num2+" would have "+ANSWR+" Units in them.");
        document.getElementById("P1score").innerHTML= "<h4>"+P1Name+"'s score is "+P1score+"</h4>";
        console.log("P1 New:"+P1score);
        }
        else{
            console.log("old:"+P2score);
            P2score=P2score+1;
            window.alert("Oh no!Its wrong.Try better next time okay?The correct Answer is "+ANSWR+".This is because "+Num1+" Groups  of "+Num2+" would have "+ANSWR+" Units in them.");
            document.getElementById("P2score").innerHTML= "<h4>"+P2Name+"'s score is "+P2score+"</h4>";
            console.log("P2 New:"+P2score);
        }
        document.getElementById("output").style.display="none";
        document.getElementById("input").style.display="inline-block";
}
}
function getNames(){
    console.log("fetching names......");
    p1name=localStorage.getItem("P1Name");
    p2name=localStorage.getItem("P2Name");
    console.log("P1 name is....."+p1name);
    console.log("P2 name is....."+p2name);
    document.getElementById("P1score").innerHTML=p1name+",s Score:"+P1score;
    document.getElementById("P2score").innerHTML=p2name+",s Score"+P2score;
    document.getElementById("questionP").innerHTML=questionP+" eneter your question";
    document.getElementById("anwerP").innerHTML=answerP+" enter your answer ";
    
}
