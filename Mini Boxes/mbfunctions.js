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

function displayQuestion(i) { 


	var numWrong = 0;
	var bgColor = data.boxes[i].color;
	document.body.style.background = bgColor; //set background color according to color of box selected
	alert(bgColor);
	$('#levels').hide();
	
	//$('#questions').show();
	//var f = document.createElement("form");
	//f.setAttribute('method',"post");
	//f.setAttribute('action',"submit.php");
	for(var j = 0; j < data.boxes[i].questions.length; j++){

		
		alert("Question " + (j + 1) + " " + data.boxes[i].questions[j].clue);
		

		//was trying to get this whole part to work but it didn't seem to
		var qElement = $('<div>', {
      id: 'question'
    });

    	var header = $('<h2>Question ' + (j + 1) + ':</h2>');
    	qElement.append(header);

    	var question = $('<p>').append(data.boxes[i].questions[j].clue);
    	qElement.append(question);
    
    	var radioButtons = createRadios(i,j);
    	qElement.append(radioButtons);

    	$('#quiz').append(qElement);
    	$('#quiz').show();
    	//
    	//the commented out part is not tested. this loops through choices for a given question. sample logic for checking if an answer is correct
		for(var k = 0; k < data.boxes[i].questions[j].choices.length; k++){
			alert("Choice " + (k + 1) + " " + data.boxes[i].questions[j].choices[k]);
		}
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
}

function createRadios(i,j) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    for (var k = 0; k < data.boxes[i].questions[j].choices.length; k++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + k + ' />';
      input += data.boxes[i].questions[j].choices[k];
      item.append(input);
      radioList.append(item);
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