var letters = document.getElementById('letters');
var el = document.createElement('p');
el.innerHTML = 'it works';
document.getElementById('main').appendChild(el);
setInterval(sendReq, 500 );
sendReq();

var currBest = "";
var currValue = 0;

function sendReq( ){
	var req = getLetters();
	chrome.extension.sendRequest({letters: req}, function( response ){
		if( response.word == "Words" ){
		}else{
			document.getElementById('word').value = response.word;

			if( response.word.length == req.length ){
			    el.innerHTML =  response.value + " USING ALL LETTERS";
			}else{
			    el.innerHTML = "score: " + response.value;
			}
		}
	});
}


function getLetters(){
	var curr = letters.firstChild;
	var str = ""; 
	while( curr != undefined ){
		str += curr.innerText.charAt(0);
		curr = curr.nextElementSibling;
	}
	return str;
}
