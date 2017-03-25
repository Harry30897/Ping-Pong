function onBodyLoad(){
	var one = document.getElementById("side1");
    var two = document.getElementById("side2");
    var table = document.getElementById("table");
    var ball = document.getElementById("ball");

    var x = 3;
    var y = 3;
    var id = null;

    document.addEventListener("keydown",function(event){
    	if(event.which == 87 ){
    		if( table.getBoundingClientRect().top != one.getBoundingClientRect().top)
    			one.style.top = one.getBoundingClientRect().top - 50 + "px";
    	}

    	else if(event.which == 83 ){
    		if( table.getBoundingClientRect().bottom != one.getBoundingClientRect().bottom)
    			one.style.top = one.getBoundingClientRect().top + 50 + "px";
    	}

    	else if(event.which == 38 ){
    		if( table.getBoundingClientRect().top != two.getBoundingClientRect().top)
    			two.style.top = two.getBoundingClientRect().top - 50 + "px";
    	}
    	else if(event.which == 40){
    		if( table.getBoundingClientRect().bottom != two.getBoundingClientRect().bottom)
    			two.style.top = two.getBoundingClientRect().top + 50 + "px";
    	}
    });
    id = setInterval(move,20);
    function move(){
    	var ballb = document.getElementById("ball");
    	var oneb = document.getElementById("side1");
    	var twob = document.getElementById("side2");

    	if(ballb.getBoundingClientRect().top < 0){
    		y = y*(-1);
    		console.log("1");
    	}
    	if(ballb.getBoundingClientRect().bottom > table.getBoundingClientRect().bottom){
    		y = y*(-1);
    		console.log("2");
    	}

    	if(oneb.getBoundingClientRect().right > ballb.getBoundingClientRect().left){
    		console.log("3a");
    		if(ballb.getBoundingClientRect().top + 25 > oneb.getBoundingClientRect().top && ballb.getBoundingClientRect().bottom - 25 < oneb.getBoundingClientRect().bottom){
    			x = x*(-1);
    			console.log("3");
    		}
    		else{
    			console.log("3g");
    			alert("Game Over");
    			clearInterval(id);
    		}
    	}	
    	else if(twob.getBoundingClientRect().left < ballb.getBoundingClientRect().right){
    		console.log("4a");
    		if(ballb.getBoundingClientRect().top + 25 > twob.getBoundingClientRect().top && ballb.getBoundingClientRect().bottom - 25 < twob.getBoundingClientRect().bottom){
    			x = x*(-1);
    			console.log("4");
    		}
    		else{
    			console.log("4g");
    			alert("Game Over");
    			clearInterval(id);
    		}
    	}

    	ball.style.top = ballb.getBoundingClientRect().top + y + "px";
    	ball.style.left = ballb.getBoundingClientRect().left + x + "px";		
    }

}




window.addEventListener("load", function(event) {
    onBodyLoad();
});

