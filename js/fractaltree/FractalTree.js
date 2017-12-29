var angle, slider;
function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
  
    //create slider (min, max, defaultvalue, step size for each tick of the slider)
    slider = createSlider(0, TWO_PI, PI/4, 0.01);
}

function draw() {
    background('#000000');
    stroke('#00e5ff');
    translate(width/2, height);
    branch(200);
}
/*
every branch is a line, when at the end of that line, save where u are and branch to the right, restore where u were and branch to the left
 */
function branch(len){
    var l = line(0,0,0,-len);
    translate(0, -len);
    angle = slider.value(); // get angle from slider
    if(len > 5){ //only loop if len > 5px
        push();
        rotate(angle);//to the right
        branch(len * (2/3));
        pop();
        push();
        rotate(-angle);// to the left
        branch(len * (2/3));
        pop();
    }

}