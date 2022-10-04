/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
	console.log("Window loaded!");
	document.getElementById("encrypt-it").addEventListener("click", handleClick);
	document.getElementById("result").innerHTML = "";
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).
  
	function handleClick(){
		console.log("Click detected!");
		var textContent = document.getElementById("input-text").value;
		console.log(textContent +"");
		var resultContent = "";
		for(let i = 0; i<textContent.length; i++){
			resultContent = resultContent + String.fromCharCode(shiftCharacterCode(textContent.charCodeAt(i)));
		};
		document.getElementById("result").innerHTML = resultContent;
	};
	
	function shiftCharacterCode(subjectCharacter){
		var shiftValue = 1;
		
		if(document.getElementById("cipher-type").value === "random"){
			shiftValue = Math.random() * 26;
		}
		
		var shiftedValue = subjectCharacter+shiftValue;
		
		if(subjectCharacter >= 48 && subjectCharacter <=57){
			if(shiftedValue > 57){
				return((shiftedValue%58)+48);
			}
			else{
				return(shiftedValue);
			}
		}
		else if(subjectCharacter+shiftValue >= 65 && subjectCharacter <=90){
			if(shiftedValue > 90){
				return((shiftedValue%91)65);
			}
			else{
				return(shiftedValue);
			}

		}
		else if(subjectCharacter >= 97 && subjectCharacter <=122){
			if(shiftedValue > 122){
				return((shiftedValue%123)97);
			}
			else{
				return(shiftedValue);
			}
			
		}
		else{
			return(subjectCharacter);
		}
		
	};

})();

