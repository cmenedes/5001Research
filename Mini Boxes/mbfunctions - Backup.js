/*function swapDivs(div1){

var d1 = document.getElementById(div1);

$(d1).hide();
$('#directions').show();
//alert(data.boxes[0].color);
}*/
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


	var numWrong = 0;
	var bgColor = data.boxes[i].color;
	document.body.style.background = bgColor; //set background color according to color of box selected
	//document.getElementById("quiz").style.background = bgColor;
	console.log("hello");
	alert(bgColor);
	$('#levels').hide();
	
	//$('#questions').show();
	
	for(var j = 0; j < data.boxes[i].questions.length; j++){

		
		alert("Question " + (j + 1) + " " + data.boxes[i].questions[j].clue);
		







		//was trying to get this whole part to work but it didn't seem to
		/*var qElement = $('<div>', {
      id: 'question'
    });

    	var header = $('<h2>Question ' + (j + 1) + ':</h2>');
    	qElement.append(header);

    	var question = $('<p>').append(data.boxes[i].questions[j].clue);
    	qElement.append(question);
    
    	

    	$('#quiz').append(qElement);*/
		
		/*var f = document.createElement("form");
		f.setAttribute('method',"post");
		f.setAttribute('action',"submit.php");*/
		
		//create form for question
		/*var f = document.createElement("form");
		//f.setAttribute('method',"post");
		f.setAttribute('action',"submit.php");
		//f.setAttribute('onsubmit',"alert('hello')");
		//f.setAttribute('action',"demo_form.asp");
		f.setAttribute('id',"question" + j);
		*/
		
		$('#quiz').show();
		var quiz = document.getElementById('quiz');

		

		
		//alert(data.boxes[i].questions[j].choices.length);
		var d = document.createElement("div");
		d.setAttribute("id", "question" + j)
		//create header element for question
		var h = document.createElement("h3");
		h.setAttribute('id', "questionID");
		h.innerHTML = "Question #" + (j + 1) + " " + data.boxes[i].questions[j].clue;
		alert("correct answer:" + data.boxes[i].questions[j].answer);
		d.append(h);
		//d.appendChild(h);
		
		var divEl = document.getElementById(d);
		//alert("calling create radio");


		//var radioList = $('<ol>');
		var radioList = document.createElement("ol");
    	var item;
    	var input = '';
    	var input = document.createElement("input"); 

    	for (var k = 0; k < data.boxes[i].questions[j].choices.length; k++) {

      		//item = $('<li>');
      		item = document.createElement("li");
      		input.setAttribute("type", "radio");
      		input.setAttribute("name", "question" + j);
      		input.setAttribute("value", k+1);
      		input.setAttribute("id", k);
      		//input.setAttribute("checked", "false");
      		//input.setAttribute("onclick", function(){alert("clicked");})
      		//input.onclick = function() { alert("clicked");};
      		var inp = document.getElementById(input);
      		//input.setAttribute("onchange", "functio")
      		
      		
      		//item.setAttribute("type", "radio");
      		item.append(input);
      		item.innerHTML += data.boxes[i].questions[j].choices[k];
      		//input = '<input type="radio" name="answer" value=' + k + ' />';
      		//input += data.boxes[i].questions[j].choices[k];
      		
      		radioList.append(item);
      		//alert(data.boxes[i].questions[j].choices[k]);




			/*
      		radioButton  = document.createElement('input');
				radioButton.type = 'radio';
				radioButton.name = 'quiz' + j;
				radioButton.id = 'choice'+ (i+1);
				radioButton.value = data.boxes[i].questions[j].choices[k];

			var label = document.createElement('label');
				label.setAttribute('for','choice'+ (i+1));
				label.innerHTML = data.boxes[i].questions[j].choices[k];

				var br = document.createElement('br');
				document.getElementById("question" + j).insertBefore(br);
				document.getElementById("question" + j).insertBefore(label, br);
				document.getElementById("question" + j).insertBefore(radioButton, label); */
    	}

    	d.append(radioList);
    	var s = document.createElement("input"); 
			s.setAttribute('type',"button");
			s.setAttribute('value',"Submit" + j);
			s.setAttribute('id', "submit" + j);
		alert("J" + j);
			//s.setAttribute('onclick', checkAnswer(j));
		//d.append(s);
		radioList.append(s); 


		
		//var radioButtons = createRadios(i,j);
		//d.append(radioButtons)
    	//$(divEl).append(radioButtons);
		//$("question" + j).append(radioButtons);
		/*	for( var c = 0; c < data.boxes[i].questions[j].choices.length; c++){
		
				var x = document.createElement("input"); //create input element
				//create radio button
				x.setAttribute('type',"radio");
				//x.setAttribute('style',"display:block");
				x.setAttribute('id',"choice_" + (c + 1));
				x.setAttribute('name',j); 
				x.setAttribute('value',"choice" + c); 
				x.setAttribute('label',"choice" + c);
				
				//create p element for choice
				var choice = document.createElement('p');
				choice.innerHTML = data.boxes[i].questions[j].choices[c];
				//x.appendChild(choice);
				//var label = document.createElement('label');
				//label.appendChild(x);
				//label.appendChild("hello")
				
				//create input element for submit
			var s = document.createElement("input"); 
				s.setAttribute('type',"submit");
				s.setAttribute('value',"Submit");
				
			f.appendChild(x);//append radio to form
			f.appendChild(choice);//append choice to form
			
			//f.appendChild(label);
			//f.appendChild(s);
			}
			f.appendChild(s);//append submit to form
			document.getElementsByTagName('body')[0].appendChild(f);//append form to body
			//document.getElementById("question" + j).onsubmit = function() {alert("hello");};
			document.getElementById("question" + j).addEventListener("click", function(event){
			alert("Hello");
    event.preventDefault();
});
			*/
			$('#quiz').show();
			document.getElementsByTagName('body')[0].appendChild(d);
			alert(j);
			alert("correct anSwer:" + data.boxes[i].questions[j].choices[0]);
				document.getElementById("submit" + j).onclick = function() {
					alert("clicked on " + "submit" + j);
					alert("correct answer:" + data.boxes[i].questions[j].choices[0]);
					checkAnswer(j);
				};

//and some more input elements here
//and dont forget to add a submit button

		
    	


    	
    	//
    	//the commented out part is not tested. this loops through choices for a given question. sample logic for checking if an answer is correct
		/*for(var k = 0; k < data.boxes[i].questions[j].choices.length; k++){
			alert("Choice " + (k + 1) + " " + data.boxes[i].questions[j].choices[k]);
		}*/
		/*	buttonId.setAttribute('id', k + 1);
			var input = document.getElementById(k+1);
			while(numWrong < 2){
				if(input == data.boxes[i].questions[j].answer){
					alert("Correct!");
					$('#questions').hide();
					$('#levels').show();
				}
				else {
					numWrong++;
				}
			}
		} */
				
	}
	/* for testing purposes
	for(var j = 0; j < data.boxes[i].questions.length; j++){
		setClicks(j);
} */
}

function setClicks(j){
	var sub = document.getElementById("submit" + j);
	sub.addEventListener("click", checkAnswer(j));

}
function checkAnswer(j){
	var el = document.getElementsByName("question0");
	var formValid = false;
	var i = 0;
		alert("in check answer");
		while (!formValid && i < el.length) {
        if (el[i].checked == true){
        	formValid = true;
        	alert("selected:" + el[i].value);
        	//alert("correct answer:" + data.boxes[i].questions[j].value[0]);
        	//if(el[i].value == data.boxes[i].questions[j].answer)
        	//	alert("correct answer boiiii");
        	 }
        i++;        
    }

    //if (!formValid) alert("Must check some option!");
    //return formValid;


/*
	    for (var radio in el) {
	        if (el[radio].checked) {
	            console.log(el[radio].value);  alert("Alert: el[radio].value");
	        }
	    }  */

}
function createRadios(i,j) {
	alert("creating radio " + j);
    var radioList = $('<ol>');
	//var radioList = document.createElement("ol");
    var item;
    var input = '';
    for (var k = 0; k < data.boxes[i].questions[j].choices.length; k++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + k + ' />';
      input += data.boxes[i].questions[j].choices[k];
      item.append(input);
      radioList.append(item);
      alert(data.boxes[i].questions[j].choices[k]);
    }
    return radioList;
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
		//image.onclick = function () { alert(data.boxes[i].color);};
		//$(data.boxes[i].color).onclick = function() { alert("yes");};
		//alert(data.boxes[i].color);
		
		//var image = document.getElementById('box');
		//image.src = data.boxes[i].img;
		//dynamically create img element
		}
}
function readData(){
	alert(data);
}