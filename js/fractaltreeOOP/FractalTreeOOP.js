var tree = [];
var root;
function setup(){
    var canvas= createCanvas(400, 400);

    var a = createVector(width/2, height);
    var b = createVector(width/2, height-100);
    root = new Branch(a,b);

    tree[0] = root;
}

function draw(){
    background('#000000');
    root.show();
}