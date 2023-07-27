//18 sets of forumlae to generate the knots 
//sources from 
//http://www.mi.sanu.ac.rs/vismath/taylor2009/index.html
// http://paulbourke.net/geometry/knots/
// and other functions

//whichKnot0
function quadrupleKnot(beta){
    x = (0.6 * cos(beta)+ 0.25*cos(-3 *beta)- 0.26* cos(9*beta))* 175;
    y = (0.6 * sin(beta)+ 0.25*sin(-3 *beta)- 0.26* sin(9*beta))* 175;
    z = (0.12* sin(16*beta) + 0.06* sin(4*beta))* 175;
    vectors.push(createVector(x, y, z));
}

//whichKnot1
function tripleKnot(beta){
    x = (0.59 * cos(beta)+ 0.3*cos(-2 *beta)- 0.45* cos(-5*beta))* 150;
    y = (0.59 * sin(beta)+ 0.3*sin(-2 *beta)- 0.45* sin(-5*beta))* 150;
    z = (0.1 * sin(9*beta) + 0.25* sin(6*beta))* 150;
     vectors.push(createVector(x, y, z));
}

//whichKnot2
function compoundQuadrupleKnot(beta){
    x = (0.6 * cos(beta)+ 0.25*cos(-3 *beta)- 0.26* cos(9*beta))* 175;
    y = (0.6 * sin(beta)+ 0.25*sin(-3 *beta)- 0.26* sin(9*beta))* 175;
    z = (0.12* sin(16*beta) + 0.06* sin(4*beta))* 175;
    vectors.push(createVector(x, y, z));
}

//whichKnot3
function compoundTripleKnot(beta){
    x = (0.59 * cos(beta)+ 0.3*cos(-2 *beta)- 0.45* cos(-5*beta))* 150;
    y = (0.59 * sin(beta)+ 0.3*sin(-2 *beta)- 0.45* sin(-5*beta))* 150;
    z = (0.1 * sin(9*beta) + 0.25* sin(6*beta))* 150;
    vectors.push(createVector(x, y, z));
}

//whichKnot4
function squareKnot(beta){
    x = (0.45 * cos(beta) + 0.25 * cos(-beta)-0.45*cos(-3 *beta))* 150;
    y = (0.45 * sin(beta) + 0.25 * sin(-beta)-0.45*sin(-3 *beta))* 150;
    z = (0.2 * sin(5 * beta))* 150;
    vectors.push(createVector(x, y, z));
}

//whichKnot5
function innerCirculatingKnotVersA(beta) {
    x = (cos(2 * beta) + 0.75 * cos(5 * beta)) * 100;
    y = (sin(2 * beta) + 0.75 * sin(5 * beta)) * 100;
    z = (0.4 * sin(6 * beta)) * 100;
    vectors.push(createVector(x, y, z));
}

//whichKnot6
function innerCirculatingKnotVersB(beta) {
    x = (cos(2 * beta) + 0.67 * cos(7 * beta)) * 100;
    y = (sin(2 * beta) + 0.67 * sin(7 * beta)) * 100;
    z = (0.2 * sin(10 * beta) -0.1 * sin(5 * beta)) * 100;
    vectors.push(createVector(x, y, z));
}

//whichKnot7
function innerCirculatingKnotVersC(beta) {
    x = (cos(4 * beta) + 0.875 * cos(7 * beta)) * 100;
    y = (sin(4 * beta) + 0.875 * sin(7 * beta)) * 100;
    z = (0.35 * sin(12 * beta) -0.15 * sin(3 * beta)) * 100;
    vectors.push(createVector(x, y, z));
}

//whichKnot8
function figureEightKnotVersA(beta) {
    x = (cos(beta) + 1.5 * cos(3 * beta)) * 100;
    y = (sin(beta) + 1.5 * sin(3 * beta)) * 100;
    z = (0.25 * sin(4 * 0))* 100;
    vectors.push(createVector(x, y, z));
}

//whichKnot9
function figureEightKnotVersB(beta) {
    x = (cos(3 * beta) + 1.25 * cos(5 * beta)) * 100;
    y = (sin(3 * beta) + 1.25 * sin(5 * beta)) * 100;
    z = (0.5 * sin(8 * beta))* 100;
    vectors.push(createVector(x, y, z));
}

//whichKnot10
function figureEightKnotVersC(beta) {
    x = (1.5 * cos(beta) + 0.35 * cos(3 * beta) -0.9 * cos(5*beta)) * 100;
    y = (sin(beta) + 0.35 * sin(3 * beta) -0.8*sin(5*beta)) * 100;
    z = (0.35 * sin(8 * 0) - 0.2 * sin(2* beta))* 100;
    vectors.push(createVector(x, y, z));
}

//whichKnot11
function trefoil2_9Knot(beta) {
    x = (cos(2 * beta) + 0.25* cos(-7 * beta))* 150;
    y = (sin(2 * beta) + 0.25* sin(-7 * beta))* 150;
    z = (0.35 * sin(9 * beta)) * 150;
    vectors.push(createVector(x, y, z));
}

//whichKnot12
function taurus2_5Knot(beta){
    x = (cos(2* beta) + 0.45 * cos(-3 * beta))* 150;
    y = (sin(2* beta) + 0.45 * sin(-3 * beta))* 150;
    z = 0.35 * sin(5 * beta) * 150;
    vectors.push(createVector(x, y, z));
}

//whichKnot13
function taurus4_5Knot(beta) {
    x = (cos(4 * beta) + 0.45 * cos(-1 * beta))* 150;
    y = (sin(4 * beta) + 0.45 * sin(-1 * beta)) * 150;
    z = (0.35 * sin (5 * beta)) * 150;
    vectors.push(createVector(x, y, z));
}

//whichKnot14
function cinquefoilKnot(beta) {
    x = (cos(2 * beta) * (3 + cos( 5 * beta))) *50;
    y = (sin(2 * beta) * (2 + cos( 5 * beta))) * 50; 
    z = ( sin(5 * beta)) * 50;
    vectors.push(createVector(x, y, z));
}

//whichKnot15
function trefoilKnot(beta) {
    x = (cos(beta) + (2 * cos( -2 * beta))) * 50;
    y = (sin(beta) + (2 * sin( -2 * beta))) * 50;
    z = (0.7 * sin(3 * beta)) * 50
    vectors.push(createVector(x, y, z));
}

//whichKNot16   
function paulBourkeKnot3(beta) {
    let r = 100 * (1.2 + 0.6 * sin(0.5 * PI + 6 * beta));
    let theta = 4 * beta;
    let phi = 0.2 * PI * sin(6 * beta);
    x = r * cos(phi) * cos(theta);
    y = r * cos(phi) * sin(theta);
    z = r * sin(phi);
    vectors.push(createVector(x, y, z));
}

//whichKnot17
function paulBourkeKnot4(beta) {
    let r = 100 * (0.8 + 1.6 * sin( 6 * beta));
    let theta = 2 * beta;
    let phi = 0.6 * PI * sin(12 * beta);
    x = r * cos(phi) * cos(theta);
    y = r * cos(phi) * sin(theta);
    z = r * sin(phi);
    vectors.push(createVector(x, y, z));
}

function chooseKnot(whichKnot, beta) {
    switch(whichKnot){
      case 0:
        quadrupleKnot(beta);
        break;
      case 1:
        tripleKnot(beta);
        break;
      case 2:
        compoundQuadrupleKnot(beta);
        break;
      case 3:
        compoundTripleKnot(beta);
        break;
      case 4:
        squareKnot(beta);
        break;
      case 5:
        innerCirculatingKnotVersA(beta);
        break;
      case 6:
        innerCirculatingKnotVersB(beta);
        break;
      case 7:
        innerCirculatingKnotVersC(beta);
        break;
      case 8:
        figureEightKnotVersA(beta);
        break;
      case 9:
        figureEightKnotVersB(beta);
        break;
      case 10:
        figureEightKnotVersC(beta);
        break;
      case 11:
        trefoil2_9Knot(beta);
        break;
      case 12:
        taurus2_5Knot(beta);
        break;
      case 13:
        taurus4_5Knot(beta);
        break;
      case 14:
        cinquefoilKnot(beta);
        break;
      case 15:
        trefoilKnot(beta);
        break;
      case 16:
        paulBourkeKnot3(beta);
        break;
      case 17:
        paulBourkeKnot4(beta);
        break;      
      default :
        console.log('no valid selection of knot by random integer');
    }
}


function drawShape() {
     for (let i = 0; i < vectors.length; i++) {
       let v = vectors[i];
       push();
       translate(v.x, v.y, v.z);
       sphere(cordSize);
       pop();
    }
}
