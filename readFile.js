var timer;
var interval;
var seconds_left;
function loadjscssfile(filename, filetype){
    try{
    if (filetype=="js"){ //if filename is a external JavaScript file
        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", filename)
    }
    if (typeof fileref!="undefined"){
        document.getElementsByTagName("head")[0].appendChild(fileref);
		}
    }
    catch(err){
        alert("File could not be loaded properly!");
    }
}
function loadBG(){
    //will load jeopardy background only at intro
	if(window.location.search.substring(1) == ""){
	$('#mainpage').show(); 
	$('#dialog').hide(); 
	}
}
function selectLab(){
	$('#dialog').show();
	$('#mainpage').hide();
}
function init(tableid){
       LoadJeopardyBoard(tableid); 	   
}

function showAnswer(i,j, interval){
	clearInterval(interval);
    $('#answers').show();
    var answer = data.categories[j].questions[i].answer;
    document.getElementById('answers').innerHTML = answer; 

    document.getElementById('cell_'+i+j).innerHTML = "&nbsp";
    $('#cell_'+i+j).attr('onclick', '');
    $('#cell_'+i+j).attr('style', 'cursor:not-allowed');
	
}
            
function showQuestion(i,j){

$('#MainView').hide();//hide the main board
$('#questionsBoard').show();//show questions board

/* TIMER */
    seconds_left = 31;
    interval = setInterval(function() {
    document.getElementById('timer').innerHTML = "Time remaining: " + --seconds_left;

    if (seconds_left <= 0)
    {
        document.getElementById('timer').innerHTML = "Time Remaining: 0";
        showAnswer(i,j);//when time is up, show answer
    }
}, 1000);

var category = data.categories[j].name + " for " + data.categories[j].questions[i].value + " points";//display category
var question = data.categories[j].questions[i].clue;//display question for given cell
document.getElementById('category').innerHTML = category;
document.getElementById('questions').innerHTML = question;

var img = document.getElementById('image');
//if img var is not empty
if(data.categories[j].questions[i].img != ""){
    img.src = data.categories[j].questions[i].img;
    $('#images').show();
}
//else hide the image div
else{
    img.src="#";
    $('#images').hide();
}
    
//button events
bAnswer.onclick = function(){showAnswer(i,j,interval);};
boardB.onclick = function(){hideQuestion(interval);};

}

function hideQuestion(interval){
		clearInterval(interval);
        $('#answers').hide();//hide answer
        $('#questionsBoard').hide();//hide questions board
        $('#MainView').show();//show main board
}

function LoadJeopardyBoard(tableID) {
	var row = tableID.insertRow();
	for(var i = 0; i < data.categories.length; i++) {
		var cell = row.insertCell();//insert cell
		cell.outerHTML = "<th>" + data.categories[i].name; + "</th>";
	}
	for(var i = 0; i < data.categories[i].questions.length; i++) { //number of questions per category
		row = tableID.insertRow();
		for (var j = 0; j < data.categories.length; j++) { //number of categories
			var cell = row.insertCell();
            cell.outerHTML = "<td href='#' onclick = 'showQuestion(" + i +"," +j + ")' id='cell_" + i+j + "'>" + "$" + data.categories[j].questions[i].value + "</td>";
		}
	}
}