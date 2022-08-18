let state = false;
var objects = [];
var input = "";

function preload() {

}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function modelLoaded() {
    console.log("CoCoSSD Initialized!");
    document.getElementById("status").innerHTML = "Status- Detecting Objects...";
    state = true;
}

function setup() {
    canvas = createCanvas(500, 380);
    canvas.position(510, 150)
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 500, 380);
}