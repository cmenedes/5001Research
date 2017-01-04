
var numWrong = 0;
var numCorrect = 0;
var totalPoints = 0;
var bonus = 0;
var correct = 0;

var alphabet = ['A','B','C','D'];
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
		//alert("recognized file type");
    }
    if (typeof fileref!="undefined"){
        document.getElementsByTagName("head")[0].appendChild(fileref);
		//alert("loaded file");
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
function displayQuestion(i) { 

	numCorrect = 0;
	bonus = 0;
	var bgColor = data.boxes[i].color;
	document.body.style.background = bgColor; //set background color according to color of box selected
	//document.getElementById("quiz").style.background = bgColor;
	$('#levels').hide();
	$('#q1').show();
	$('#ans1').show();
	$('#backbutton').css( 'display', 'none' );
	//$('#questions').show();
	//iterates through questions per box
	for(var j = 0; j < data.boxes[i].questions.length; j++){

		numWrong = 0;
		//alert("Question " + (j + 1) + " " + data.boxes[i].questions[j].clue);



		$('#quiz').show();

		var d = document.getElementById("quiz");
		var h = document.getElementById("q" + (j+1));
		var ans = document.getElementById("ans" + (j+1));
		var p = document.getElementById("points");
		if(j > 0){
			h.setAttribute("class", "question hidden");
			ans.setAttribute("class", "answer hidden");
		}
		h.innerHTML = (j + 1) + ") " + data.boxes[i].questions[j].clue;



		$('#nextbutton').css( 'pointer-events', 'none' );
		$('#backbutton').css( 'pointer-events', 'none' );
		var next = document.getElementById('nextbutton');
		next.setAttribute( 'class', 'buttons' );
		var back = document.getElementById('backbutton');
		back.setAttribute( 'class', 'buttons' );
		//iterates through choices
    	for (var k = 0; k < data.boxes[i].questions[j].choices.length; k++) {
    		//var choice = document.createElement("span");
      		//cell.outerHTML = "<td href='#' onclick = 'showQuestion(" + i +"," +j + ")' id='cell_" + i+j + "'>" + "$" + data.categories[j].questions[i].value + "</td>";

      		
      		var S = "";

      		var funct = "";
			var split = data.boxes[i].color.split('.');
			
      		if (data.boxes[i].questions[j].answer == k)
      		{
      			
				console.log("out of function" + numCorrect);
      			//funct = "correctAnswer(q" + j +  "a" + k + ")";
      			funct = "correctAnswer(q" + j +  "a" + k + ", "+ i  + ")";
      			var choiceID = document.getElementById("'q" + j +  "a" + k + "'");
      			$(choiceID).css( 'pointer-events', 'none' );
      		}
      		else
      		{
      			funct = "wrongAnswer(q" + j +  "a" + k + ")";
      		}// }
      		S = S + "<div href='#' class = 'choices' id = 'q" + j +  "a" + k + "' onclick='"+ funct +"'> (" + alphabet[k] + ") " + data.boxes[i].questions[j].choices[k] + "</div>" + "<br>";
      		//console.log(data.boxes[i].questions[j].choices[k]);
      		ans.innerHTML += S;

    	}//end k	
	}//end j
		console.log("in show answer: "+ numCorrect);
    	//p.innerHTML += "Points: " + numCorrect;

}
/* these 2 functions will be used for replacing closed box with open box */
//returns nth index of a pattern in a text
String.prototype.nthIndexOf = function(pattern, n) {
    var i = -1;

    while (n-- && i++ < this.length) {
        i = this.indexOf(pattern, i);
        if (i < 0) break;
    }

    return i;
}
//inserts text at a given index
String.prototype.insertAt=function(index, string) { 
  return this.substr(0, index) + string + this.substr(index);
}

function wrongAnswer(divID)
{
	correct = 0;

	//alert("wrong"); //testing function
	console.log("wrong");
	console.log("correct: " + correct);
	numWrong++;
	console.log("num wrong: "+ numWrong);
	//turn red\

	//$(divID).hide();
	$(divID).css({ "background-color": 'red'});
	$(divID).css( 'pointer-events', 'none' );
	//$(divID).css( 'cursor', 'auto' );
	//var ch = document.getElementById(divID);
	//ch.setAttribute('style','background-color:red');

	$('#nextbutton').css( 'pointer-events', 'none' );
	if(correct == 1) //if correct is already selected, they can move on in case they select wrong after
		$('#nextbutton').css( 'pointer-events', 'auto' );

	
	

	switch(numWrong){
		case 0:
			bonus = 2;
			break;
		case 1:
			bonus = 1;
			break;
		case 2:
			bonus = 0;
			break;
		case 3:
			bonus = -1;
			break;
	}
	console.log(bonus);
	/*if(numWrong >= 2){
      	alert("Too many wrong");
      	reset(); } */
      	//if(numWrong == 3)

	var p = document.getElementById("points");
	p.innerHTML = "Number Correct " + numCorrect + "/" + "2";
	var pt = document.getElementById("pts");
	//totalPoints += bonus + 1;
	//pt.innerHTML = "Points: " + totalPoints;


	//Take away points
	//hide wrong answer
}

function correctAnswer(divID, i)
{
	correct = 1;
	numCorrect++;
	console.log("i in correct: " + i);
		
	switch(numWrong){
		case 0:
			bonus = 2;
			break;
		case 1:
			bonus = 1;
			break;
		case 2:
			bonus = 0;
			break;
		case 3:
			bonus = -1;
			break;
	}
	console.log("Number wrong: " + numWrong);
	console.log("Bonus: " + bonus);

	totalPoints += bonus + 1;
	console.log("Total Points: " + totalPoints);
	numWrong = 0;
	
	//alert("Correct"); //testing function
	//alert("Num Correct: " + numCorrect);
	//alert("Total Points: " + totalPoints);
	console.log("Correct");
	//alert(divID);

	id = document.getElementById(divID);
	$(divID).css( 'background-color', 'green');
	var next = document.getElementById('nextbutton');
	next.setAttribute( 'class', 'buttons blink_me' );
	//$('#backbutton').show();
	//sleep(5000);
	
	/*but = document.getElementById('#nextbutton');
	$('#nextbutton').css( 'pointer-events', 'cursor' );
	$( '#nextbutton' ).click(function() {
  alert( "Handler for .click() called." );
});*/
	/*document.getElementById("nextbutton").onclick = function() {
			
	$('#q2').show();
	$('#ans2').show();
	$('#q1').hide();
	$('#ans1').hide();

	};*/
	$('#nextbutton').css( 'pointer-events', 'auto' );
	
	
	var p = document.getElementById("points");
	var pt = document.getElementById("pts");
	p.innerHTML = "Number Correct " + numCorrect + "/" + "2";
	pt.innerHTML = "Points: " + totalPoints;
	var currentbox = document.getElementById(data.boxes[i].color);

	if($('#q2').is(":visible") && numCorrect >= 2 ) {
		console.log("is visible");
		$('#backbutton').show();
		var imageSrc = data.boxes[i].img;
		var openBox = imageSrc.insertAt(imageSrc.nthIndexOf('/', 2) + 1, 'o');
		if(i < data.boxes.length - 1) {
			var nextbox = document.getElementById(data.boxes[i+1].color);
			nextbox.setAttribute("class", "");

		}
		if(i == data.boxes.length - 1){
			var pl = document.getElementById("play");
			pl.innerHTML = "Mini Boxes Completed! You are a star!";
		}
		currentbox.setAttribute('src', openBox);//sets to open box
		currentbox.setAttribute("style","pointer-events:none");//can't click on it
		var back = document.getElementById('backbutton');
		
		back.setAttribute( 'class', 'buttons blink_me' );//button blinks when you answer both
		next.setAttribute('class', 'buttons');
		$('#nextbutton').css( 'pointer-events', 'none' );
		back.setAttribute("style","pointer-events:auto");

		//set box to grayscale/locked
		//reset();
	}

	//turn green
	//Show Next Question
	//Call function to reset everything
	//go back to level div
}


function sleep(miliseconds) {
   var currentTime = new Date().getTime();

   while (currentTime + miliseconds >= new Date().getTime()) {
   }
}
//clear content of questions and answers, hide the divs
function reset(){
	$('#quiz').hide();
	$('#levels').show();
	$('#q2').contents().remove();
	$('#ans2').contents().remove();
	$('#q1').contents().remove();
	$('#ans1').contents().remove();
	$('#q2').hide();
	$('#ans2').hide();
	$('#q1').hide();
	$('#ans1').hide();
	document.body.style.background = "black";
	var p = document.getElementById("points");
	p.innerHTML = "Points: ";
	
}

function loadBoxes(){
	for(var i = 0; i < data.boxes.length; i++){
		//
		//document.getElementById('box').innerHTML += data.boxes[i].img;
		var image = document.createElement("img");
		image.setAttribute('src', data.boxes[i].img);
		image.setAttribute('id', data.boxes[i].color);
		image.setAttribute('onclick', "displayQuestion(" + i + ")");
		if(i > 0){
			//image.setAttribute("style", "pointer-events:none");
			//image.setAttribute("style", "filter: grayscale(100%)");
			image.setAttribute("class", "locked");
		}
		else
			image.setAttribute("class", "");
		//image.setAttribute('left', i*100);
		var div = document.getElementById("levels");
		div.appendChild(image);
		
	}
}

function setup(){

	$('#quiz').hide();
		$('#q2').hide();
		$('#ans2').hide();

		document.getElementById("main").onclick = function() {
			$('#main').hide(); 
			$('#directions').show();
		};
		document.getElementById("playbutton").onclick = function() {
			$('#directions').hide(); 
			$('#levels').show();
			loadBoxes();
		};
		document.getElementById("backbutton").onclick = function() {

			reset();

		};
		document.getElementById("nextbutton").onclick = function() {
			
			numWrong = 0;
			$('#q2').show();
			$('#ans2').show();
			$('#q1').hide();
			$('#ans1').hide();
			$('#nextbutton').css( 'pointer-events', 'none' );
			//$('#backbutton').css( 'pointer-events', 'none' );//unclickable
			//$('#backbutton').css( 'display', 'none' );
			var next = document.getElementById('nextbutton');
			next.setAttribute( 'class', 'buttons' );//sets nextbutton to default class
			var back = document.getElementById('backbutton');
			back.setAttribute( 'class', 'buttons' );//sets nextbutton to default class
			

		};
}