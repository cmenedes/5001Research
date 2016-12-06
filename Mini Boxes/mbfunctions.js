/*function swapDivs(div1){

var d1 = document.getElementById(div1);

$(d1).hide();
$('#directions').show();
//alert(data.boxes[0].color);
}*/
var numWrong = 0;
var numCorrect = 0;
function swapDivs(div1, div2){

var d1 = document.getElementById(div1);
var d2 = document.getElementById(div1);
$(d1).hide();
$(d2).show();
//alert(data.boxes[0].color);
}
function init(){
	loadjscssfile("mbjson.js", "js");
}

function loadjscssfile(filename, filetype){
    try{
    if (filetype=="js"){ //if filename is a external JavaScript file
        var fileref=document.createElement('script');
        fileref.setAttribute("type","text/javascript");
        fileref.setAttribute("src", filename);
		alert("recognized file type");
    }
    if (typeof fileref!="undefined"){
        document.getElementsByTagName("head")[0].appendChild(fileref);
		alert("loaded file");
		}
    }
    catch(err){
        alert("File could not be loaded properly!");
    }
}
function validateRadio( obj,correct ){
    var result = 0;
    for(var i=0; i<obj.length; i++){
        if(obj[i].checked==true && obj[i].value==correct){
            result = 1;
        }
    }
    if(!result && obj.value == correct){
        result = 1;
    }
    return result
}

function loadQuestion(){
 
			//set temporary variable for creating radio buttons
			var radioButton;
 
			//clear out radio buttons from previous question
			document.getElementById('content').innerHTML = "";
 
			//loop through choices, and create radio buttons
			for(var i=0; i < quiz[currentQuestion]["choices"].length; i++){
 
				radioButton  = document.createElement('input');
				radioButton.type = 'radio';
				radioButton.name = 'quiz';
				radioButton.id = 'choice'+ (i+1);
				radioButton.value = quiz[currentQuestion]["choices"][i];
 
				//create label tag, which hold the actual text of the choices
				var label = document.createElement('label');
				label.setAttribute('for','choice'+ (i+1));
				label.innerHTML = quiz[currentQuestion]["choices"][i];
 
				//create a <br> tag to separate options
				var br = document.createElement('br');
 
				//attach them to content. Attach br tag, then label, then radio button
				document.getElementById('content').insertBefore(br);
				document.getElementById('content').insertBefore(label, br);
				document.getElementById('content').insertBefore(radioButton, label);
			}
 
			//load the question
			document.getElementById('question').innerHTML = quiz[currentQuestion]["question"];
 
			//setup score for first time
			if(currentQuestion == 0){
				document.getElementById('score').innerHTML = '<p>score: 0 right answers out of ' + quiz.length +' possible</p>';
			}
		}
function displayQuestion(i) { 


	numWrong = 0;
	numCorrect = 0;
	var bgColor = data.boxes[i].color;
	document.body.style.background = bgColor; //set background color according to color of box selected
	//document.getElementById("quiz").style.background = bgColor;
	$('#levels').hide();
	$('#q1').show();
	$('#ans1').show();
	//$('#questions').show();
	//iterates through questions per box
	for(var j = 0; j < data.boxes[i].questions.length; j++){


		alert("Question " + (j + 1) + " " + data.boxes[i].questions[j].clue);



		$('#quiz').show();
		var d = document.getElementById("quiz");
		var h = document.getElementById("q" + (j+1));
		var ans = document.getElementById("ans" + (j+1));
		if(j > 0){
			h.setAttribute("class", "question hidden");
			ans.setAttribute("class", "answer hidden");
		}
		h.innerHTML = "Question #" + (j + 1) + " " + data.boxes[i].questions[j].clue;



		
		//iterates through choices
    	for (var k = 0; k < data.boxes[i].questions[j].choices.length; k++) {
    		//var choice = document.createElement("span");
      		//cell.outerHTML = "<td href='#' onclick = 'showQuestion(" + i +"," +j + ")' id='cell_" + i+j + "'>" + "$" + data.categories[j].questions[i].value + "</td>";

      		
      		var S = "";

      		var funct = "";

      		//while(numWrong < 3){
      		if (data.boxes[i].questions[j].answer == k)
      		{
      			//console.log(k);

      			funct = "correctAnswer()";
      		}
      		else
      		{
      			funct = "wrongAnswer(q" + j +  "a" + k + ")";
      		}// }

      		S = S + "<div href='#' id = 'q" + j +  "a" + k + "' onclick='"+ funct +"'> (" + k + ") " + data.boxes[i].questions[j].choices[k] + "</div>"; 
      		//console.log(data.boxes[i].questions[j].choices[k]);
      		ans.innerHTML += S;

    	}//end k


	}//end j

}

function wrongAnswer(divID)
{
	alert("wrong"); //testing function
	console.log("wrong");
	numWrong++;
	//turn red
	$(divID).hide();


	//Take away points
	//hide wrong answer
}

function correctAnswer()
{
	numCorrect++;
	alert("Correct"); //testing function
	console.log("Correct");
	$('#q2').show();
	$('#ans2').show();
	$('#q1').hide();
	$('#ans1').hide();

	if($('#q2').is(":visible") && numCorrect >= 2 ) {
		console.log("is visible");
		$('#quiz').hide();
		//set box to grayscale/locked
		$('#levels').show();
		reset();
	}

	//turn green
	//Show Next Question
	//Call function to reset everything
	//go back to level div
}

//clear content of questions and answers, hide the divs
function reset(){
	$('#q2').contents().remove();
	$('#ans2').contents().remove();
	$('#q1').contents().remove();
	$('#ans1').contents().remove();
	$('#q2').hide();
	$('#ans2').hide();
	$('#q1').hide();
	$('#ans1').hide();
}

function loadBoxes(){
	for(var i = 0; i < data.boxes.length; i++){
		//
		//document.getElementById('box').innerHTML += data.boxes[i].img;
		var image = document.createElement("img");
		image.setAttribute('src', data.boxes[i].img);
		image.setAttribute('id', data.boxes[i].color);

		image.setAttribute('onclick', "displayQuestion(" + i + ")");

		//image.setAttribute('left', i*100);
		var div = document.getElementById("levels");
		div.appendChild(image);
		
		}
}