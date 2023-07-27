let angle = 0;
let displayTime = 2; 
let x, y, z;
var displayKnot = true;
let timer;

let vectors = [];
let beta = 0;
var whichKnot;
var rotation;
var cordSize = 6;



function setup() {
    createCanvas(600, 600, WEBGL);
    whichKnot = int(random(17));
    rotation = TWO_PI;
    background(0);
}

function draw() {
    background(0);
    //lights();
    rotateY(angle);
    angle += 0.03;
    
    if (whichKnot == 16  || whichKnot == 17) {
    	rotation = PI;
    }
    else {rotation = TWO_PI;}

    if (beta < rotation) {

    chooseKnot(whichKnot, beta);
   
    beta += 0.01;

    //noFill();
    //stroke(255);
    //strokeWeight(8);
    normalMaterial();
    
    drawShape();
    }
    else{
    	if(displayKnot){
    	// use setInterval to stop displaying knot in full form
    	// swap this to setTimeout
    	var timer = setInterval(function() {
    		displayKnot = false;
    		clearInterval(timer);
	      }, 4000)
    	
      drawShape();

    	 }
       // this is the deconstruction of the knot, just the drawing sequence in reverse
       else if(!displayKnot){
       	 if (vectors.length != 0){
       	 	 //remove the spheres one by one making the cord or worm go backwards
       	   var i = vectors.length-1 ;
       	   vectors.splice(i, 1);
       	 }
       	 else if (vectors.length == 0){
       	 	   beta = 0;
       	 	   displayKnot = true;
       	 	   var pastKnot = whichKnot; // avoid same pattern repeating twice in a row
       	 	   whichKnot = int(random(17));
       	 	   while (whichKnot == pastKnot) {
       	 	 	  whichKnot = int(random(17));
       	 	   }
       	 }
       	 else {
       	 	console.log("unexpected path not splicing vector and not resetting parameters");
       	 }
       	 drawShape();
       }
     }
 }

 

