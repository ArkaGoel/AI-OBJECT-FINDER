let state = false;
var objects = [];
input = document.getElementById("Object");

function preload() {

}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function modelLoaded() {
    console.log("CoCoSSD Initialized!");
    document.getElementById("status").innerHTML = "Status- Detecting Objects...";
    state = true;
    objectDetector.detect(video, gotResults);
}

function setup() {
    canvas = createCanvas(500, 380);
    canvas.position(510, 150)
    video = createCapture(VIDEO);
    video.hide();
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        objects = results;
    }
}

function draw() {
    image(video, 0, 0, 500, 380);
    if (state != "") {
        for (i = 0; i < objects.length; i++) {
            if (objects[i] == input) {
                r = random(255);
                g = random(255);
                b = random(255);
                fill(r, g, b);
                noFill();
                per = floor(objects[i].confidence * 100);
                stroke(r, g, b);
                text(objects[i].label + " " + per + "%", objects[i].x + 15, objects[i].y + 15);
                rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            } else {
                document.getElementById("Object").innerHTML = "Please enter a value";
            }
        }
    }
}