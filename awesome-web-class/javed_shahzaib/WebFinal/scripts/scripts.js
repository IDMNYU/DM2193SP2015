

// global variables for the the scene selection and which line to display

var scenceSelection = "scene1";
var scene = 1;
var line = 0; // keeps track of line number

// this is scence 1
// will use global line variable
function scene1()
{
	var dialogue = ["Arrow: This is a slow night", 
	 "Felicty: Maybe your name is finally going around the city",
	 "Arrow: I'm flattered. But that doesn't keep the scums of the street.",
	 "Felicty: Tonight is a proof of that",
	 "Arrow: ehh",
	 "Felicty: I spoke to soon. There is a robbery. The guy broke into a jewelry store",
	 "Arrow: Speaking of the scums. Where?",
	 "Felicty: He should be 3 blocks ahead"];
// calculating which person is speaking
		if (line%2 === 0 && line < dialogue.length)
		{
			// left person is speaking
			$(".speech-lp").text(dialogue[line++]);
			$(".speech-r").fadeOut('slow'); // fade this out
			$(".speech-l").fadeIn('slow'); // fade this in
		}
		else if (line%2 != 0 && line < dialogue.length)
		{
			// else right person is speaking
			$(".speech-rp").text(dialogue[line++]);
			$(".speech-l").fadeOut('slow'); // fade this out
			$(".speech-r").fadeIn('slow');
		}

		if (line > dialogue.length)
		{

			line = 0;
			scenceSelection = "scene2"; // increment the scene selection
			// change the image to the next scene
			$(".speech-l").fadeOut('slow'); // fade this out
			$(".speech-r").fadeOut('slow');
			document.getElementsByClassName("image-left")[0].src = "arrow/scene2-A.jpg";
			document.getElementsByClassName("image-right")[0].src = "arrow/scene2-R.jpg";
			scene++; // we move to the next scene
			$(".scene").text("Scene " + scene);
		}
		if (line === dialogue.length)
		++line; // used to wait for the xtra scene
}
// = ======================================================================================
// lines for scene2
function scene2()
{      
	var dialogue = ["Arrow: Stop right there! Don't even try to run", 
	 "Robber: now, now calm down.",
	 "Arrow: I said DON'T MOVE!! (Draws the bow)",
	 "Robber: Now, now, you wouldn't wanna do that",
	 "Arrow: Give me one good reason not to!",
	 "Robber: Because... I have very important message that I was asked to deliver to you",
	 "Arrow: This is not the time to play games",
	 "Robber: This information could change the course of the night!"];

	 // narrative
	 if (line == 0)
	 {
	 	$(".narrative").text("Arrow intercepts the robber on the ally");
	 }
// calculating which person is speaking

	if (line%2 === 0 && line < dialogue.length)
		{
		// left person is speaking
		$(".speech-lp").text(dialogue[line++]);
		$(".speech-r").fadeOut('slow'); // fade this out
		$(".speech-l").fadeIn('slow'); // fade this in
		}
	else if (line%2 != 0 && line < dialogue.length)
	{
		// else right person is speaking
		$(".speech-rp").text(dialogue[line++]);
		$(".speech-l").fadeOut('slow'); // fade this out
		$(".speech-r").fadeIn('slow');
	}
	if (line > dialogue.length)
	{
		// get user choice
		var choice = prompt("Would you like to listen to the robber? yes or no");
		if (choice == "yes")
		{
			// go to the scene where the arrow listens to the robber
			scenceSelection = "listen";		
		}
		else if (choice === "no")
		{
			// go to the scene where the arrow listens to the robber
			scenceSelection = "notListen";
		}
		line = 0;
		// change the image to the next scene
		$(".speech-l").fadeOut('slow'); // fade this out
		$(".speech-r").fadeOut('slow');
		// document.getElementsByClassName("image-left")[0].src = "arrow/scene2-A.jpg";
		// document.getElementsByClassName("image-right")[0].src = "arrow/scene2-R.jpg";
		scene++; // we move to the next scene
		$(".scene").text("Scene " + scene);
	}
	if (line === dialogue.length)
		++line; // used for error cking
}
// = ======================================================================================

// if the user says yes for the choice
// listen to the robber

function listen()
{
	var dialogue = ["Arrow: Thanks for the info ", 
	 "Robber: Wait. What are you doing. I thought you were going to let me go!!",
	 "Arrow: I am. You could leave after you wake up",
	 "Robber: What.No. I thought we had a dea..", // gets knocked out i = 4
	 // when does the robber get knocked out
	 ];	
	// calculating which person is speaking
	if (line%2 === 0 && line < dialogue.length)
		{
			// left person is speaking
			$(".speech-lp").text(dialogue[line++]);
			$(".speech-r").fadeOut('slow'); // fade this out
			$(".speech-l").fadeIn('slow'); // fade this in
			
		}
		else if (line%2 != 0 && line < dialogue.length)
		{
			// else right person is speaking
			$(".speech-rp").text(dialogue[line++]);
			$(".speech-l").fadeOut('slow'); // fade this out
			$(".speech-r").fadeIn('slow');
		}
		
		else if (line === dialogue.length + 2)
		{
		  	line = 0;
			scenceSelection = "docks"; // go to the scene
			// hide the narrative
			$(".narrative").fadeOut('slow');
			// hide the center element
			$(".image-c").hide(); // hide this image
			// now set the images for the next scene
			document.getElementsByClassName("image-left")[0].src = "arrow/arrow-path.jpg";
			document.getElementsByClassName("image-right")[0].src = "arrow/scene1-F.png";
			// now show the items
			$(".image-l").fadeIn('slow');
			$(".image-r").fadeIn('slow');
			scene++; // we move to the next scene
			$(".scene").text("Scene " + scene); // change the image to the next scene    
	     	
			 
		 }
		 else if (line === dialogue.length + 1) // wait for the previous to be over
			{	
				line++;
				$(".speech-r").fadeOut('slow'); // fade this out
				// show the center one. The robber gets knocked out
				// the scene that says goes after ras al ghul
				$(".image-c").hide();
				$(".narrative").hide();
				document.getElementsByClassName("image-center")[0].src = "arrow/scene2-Y.jpeg"
				$(".narrative").text("I must go after Ras Al Ghul");
				$(".image-c").fadeIn(1000);
				$(".narrative").fadeIn(1500);
			}

		else if (line === dialogue.length ) // when the robber gets knocked out
		{
			// hide dialouge box
			

			// left person is speaking
			$(".narrative").text("Arrow knocks out the robber");
			$(".narrative").fadeIn('slow');
			document.getElementsByClassName("image-center")[0].src = "arrow/scene2-K.jpg"
		 	// we will display only one image. so hide these images
		 	$(".image-l").hide();
		 	$(".image-r").hide();
		 	$(".image-c").fadeIn('slow');
		 	line++;
		 }
}// end of function

// = ======================================================================================
// not listen to the robber
function notListen()
{
	var dialogue = ["Arrow: I don't take information from scum bags like you!", 
	 "Robber: Wait. I'm serious. I have information",
	 "Arrow: Shut up!",
	 "Robber: What.No. I'm seriou..", // gets knocked out i = 4
	 // when does the robber get knocked out
	 ];
	// calculating which person is speaking
	if (line%2 === 0 && line < dialogue.length)
		{
			// left person is speaking
			$(".speech-lp").text(dialogue[line++]);
			$(".speech-r").fadeOut('slow'); // fade this out
			$(".speech-l").fadeIn('slow'); // fade this in
			
		}
		else if (line%2 != 0 && line < dialogue.length)
		{
			// else right person is speaking
			$(".speech-rp").text(dialogue[line++]);
			$(".speech-l").fadeOut('slow'); // fade this out
			$(".speech-r").fadeIn('slow');
		}
	else if (line === dialogue.length + 1)
	{
		line = 0;
		// show the two images
		// change the image to the next scene
		// fade out the narrarive
		$(".narrative").fadeOut('slow');
		$('.speech-l').fadeOut('slow');
		$('.speech-r').fadeOut('slow');
		document.getElementsByClassName("image-left")[0].src = "arrow/scene2-choice2Y.png";
		document.getElementsByClassName("image-right")[0].src = "arrow/scene1-F.png";
		
	 	$(".image-c").hide();
	 	$(".image-l").fadeIn('slow');
	 	$(".image-r").fadeIn('slow');
		scene++; // we move to the next scene
		$(".scene").text("Scene " + scene);
		scenceSelection = 'lairDecision'; // go to the next scene after this
	}

	if (line === dialogue.length ) // when the robber gets knocked out
	{
		// hide dialouge box
		// left person is speaking
		$(".narrative").text("Arrow knocks out the robber");
		$(".narrative").fadeIn('slow');
		document.getElementsByClassName("image-center")[0].src = "arrow/scene2-K.jpg"
	 	// we will display only one image. so hide these images
	 	$(".image-l").hide();
	 	$(".image-r").hide();
	 	$(".image-c").show();
	 	line++;
	 }

}

// this will be the one after scene3Y
function docks()
{
	var dialogue = ["Arrow: Felicity, I'm here on the docks. I see two passages", // narrative comes here i = 5
	 "Felicty: Hold up. I'll run a terrestrial scan..............." + 
	 "ok. This is way to obvious. I'm detecting alot of heat signatures on the left path and no" +
	 "heat signatures on the right path." + 
	 "The right one is def a trap, which is way to obvious. ",
	 ]; // now promt the user
	 // when does the robber get knocked out
	if (line%2 === 0 && line < dialogue.length)
	{	// left person is speaking
		$(".speech-lp").text(dialogue[line++]);
		$(".speech-r").fadeOut('slow'); // fade this out
		$(".speech-l").fadeIn('slow'); // fade this in
	}
	else if (line%2 != 0 && line < dialogue.length)
	{
		// else right person is speaking
		$(".speech-rp").text(dialogue[line++]);
		$(".speech-l").fadeOut('slow'); // fade this out
		$(".speech-r").fadeIn('slow');
	}

	// prompt the user
	if (line > dialogue.length)
	{
		// get user choice
		var choice = prompt("Which way will you like to go. Left or Right?");
		if (choice == "right")
		{	// go to the scene where the arrow listens to the robber
			scenceSelection = "right";		
		}
		else if (choice === "left")
		{	// go to the scene where the arrow listens to the robber
			scenceSelection = "left";
		}
		line = 0;
		// change the image to the next scene
		$(".narrative").fadeOut('slow');
		$(".speech-l").fadeOut('slow'); // fade this out
		$(".speech-r").fadeOut('slow');
		// document.getElementsByClassName("image-left")[0].src = "arrow/scene2-A.jpg";
		// document.getElementsByClassName("image-right")[0].src = "arrow/scene2-R.jpg";
		scene++; // we move to the next scene
		$(".scene").text("Scene " + scene);
	}
	if (line === dialogue.length)
		++line; // used for error cking
}

// this will be the one after scene3N
function lairDecision()
{
	var dialogue = ["Arrow:..",
	 "Felicity: Oliver! Is everything okay? What happened",
	 "Arrow: Nothing. This scum was saying something about Ras Al Ghul and how he was in town",
	 "Felicity: Ras Al Ghul?? What did he say about him" ,
	 "Arrow: I don't know. I knocked him out." ,
	 "Felicity: Well. Now what are we supposed to do" ,
	 "Arrow: Well. He was a robber. He was only tell me info if I let him go" ,
	 "Felicity: Well. Probably. Are you going to call it a night and  come back to the lair now?" 
	 ]; // now promt the user
	 // when does the robber get knocked out
	if (line%2 === 0 && line < dialogue.length)
	{	// left person is speaking
		$(".speech-lp").text(dialogue[line++]);
		$(".speech-r").fadeOut('slow'); // fade this out
		$(".speech-l").fadeIn('slow'); // fade this in
	}
	else if (line%2 != 0 && line < dialogue.length)
	{
		// else right person is speaking
		$(".speech-rp").text(dialogue[line++]);
		$(".speech-l").fadeOut('slow'); // fade this out
		$(".speech-r").fadeIn('slow');
	}
		// prompt the user
	if (line > dialogue.length)
	{
		// get user choice
		var choice = prompt("Go back to lair. yes or no?");
		if (choice == "yes")
		{	// go to the scene where the arrow listens to the robber
			scenceSelection = "goToLair";		
		}
		else if (choice === "no")
		{	// go to the scene where the arrow listens to the robber
			scenceSelection = "continueSearching";
		}
		line = 0;
		// change the image to the next scene
		$(".speech-l").fadeOut('slow'); // fade this out
		$(".speech-r").fadeOut('slow');
		// document.getElementsByClassName("image-left")[0].src = "arrow/scene2-A.jpg";
		// document.getElementsByClassName("image-right")[0].src = "arrow/scene2-R.jpg";
		scene++; // we move to the next scene
		$(".scene").text("Scene " + scene);
	}
	if (line === dialogue.length)
		line++;

}
// this will be if we decide to go to the lair
function goToLair()
{
	var dialogue = ["Arrow: Yeah, I'll call it a night. ",
	 "Felicity: What about Ras?",
	 "Arrow: Ras has better stuff to take care of than coming here",
	 "Felicity: Yeah. You're Probably right" ,
	 "Arrow: Alright I'm coming back now" 
	 ]; // now promt the user
	 // when does the robber get knocked out
	if (line%2 === 0 && line < dialogue.length)
	{	// left person is speaking
		$(".speech-lp").text(dialogue[line++]);
		$(".speech-r").fadeOut('slow'); // fade this out
		$(".speech-l").fadeIn('slow'); // fade this in
	}
	else if (line%2 != 0 && line < dialogue.length)
	{
		// else right person is speaking
		$(".speech-rp").text(dialogue[line++]);
		$(".speech-l").fadeOut('slow'); // fade this out
		$(".speech-r").fadeIn('slow');
	}
	else if (line === dialogue.length + 1)
	{
		$('.narrative').fadeOut();
		$('speech-r').fadeOut('slow');
		$('speech-l').fadeOut('slow');
		scenceSelection = 'slade'; // trap scene
		line = 0;
		// change the image to the next scene
		$(".speech-l").fadeOut('slow'); // fade this out
		$(".speech-r").fadeOut('slow');
	    document.getElementsByClassName("image-left")[0].src = "arrow/arrow-slade.jpg";
		document.getElementsByClassName("image-right")[0].src = "arrow/slade.jpg";
		scene++; // we move to the next scene
		$(".scene").text("Scene " + scene);
	}
	else if (line === dialogue.length)
		line++;
	
}
// this will be the one after scene3N
function continueSearching()
{
	var dialogue = ["Arrow: No. It's Ras Al Ghul. ",
	 "Felicity: So? He probably got better stuff to do",
	 "Arrow: No. This is Ras we are talking about. We coiuld never be to safe",
	 "Felicity: You are going to go look for Ras?" ,
	 "Arrow: This is my City. If Ras is here, he must be upto something and I must stop him." 
	 ]; // now promt the user
	 // when does the robber get knocked out
	if (line%2 === 0 && line < dialogue.length)
	{	// left person is speaking
		$(".speech-lp").text(dialogue[line++]);
		$(".speech-r").fadeOut('slow'); // fade this out
		$(".speech-l").fadeIn('slow'); // fade this in
	}
	else if (line%2 != 0 && line < dialogue.length)
	{
		// else right person is speaking
		$(".speech-rp").text(dialogue[line++]);
		$(".speech-l").fadeOut('slow'); // fade this out
		$(".speech-r").fadeIn('slow');
	}
	if (line === dialogue.length + 1)
	{
		$('.narrative').fadeOut();
		scenceSelection = 'trap'; // trap scene
		line = 0;
		// change the image to the next scene
		$(".speech-l").fadeOut('slow'); // fade this out
		$(".speech-r").fadeOut('slow');
		// hide the left and right images. Only show the middle one
		$("image-l").fadeOut('slow'); 
		$('image.r').fadeOut('slow');
		$('.image-l').hide();
		$('.image-r').hide();
		document.getElementsByClassName("image-center")[0].src = "arrow/trap.jpg";
		$('.image-c').fadeIn('slow');
		
		scene++; // we move to the next scene
		$(".scene").text("Scene " + scene);
	}
	if (line === dialogue.length)
		line++;

}

// this is where arrow encounters slade
function slade()
{

}
// this will be the scene where arrow encounters a trap
function trap()
{}
// this will be the one after scene3N
function scene9()
{}
// this will be the one after scene3N
function scene10()
{}





$(document).ready(function(){
	$(".test").click(function(){
		$(".slide").slideToggle();	
	});
	
     // depedning on the the scene selection, call the right function
	$("body").keypress(function(e){
		
	            if (scenceSelection === "scene1")
	            { 
	            	//prep_scemecene(scene1);
	            	scene1();
	   	        }
	            else if(scenceSelection ==="scene2")
	            {
	            	//prep_scene(scene2);
	            	scene2();

	            }
	            else if(scenceSelection === "listen")
	            {
	            	listen();
	            }
	            else if (scenceSelection === "notListen")
	            {
	            	notListen();
	            }
	            else if (scenceSelection === 'lairDecision')
	            {
	            	lairDecision();
	            }
	            else if (scenceSelection === 'docks')
	            {
	            	docks();
	            }
	            else if (scenceSelection === "goToLair")
	            {
	            	goToLair();
	            }
	            else if (scenceSelection === 'continueSearching')
	            {
	            	continueSearching();
	            }
	             else if (scenceSelection == "slade")
	            {
	            	slade();
	            }
	            else if (scenceSelection == "trap")
	            {
	            	trap();
	            }

	});

});



 

