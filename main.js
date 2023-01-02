function setup(){
    video = createCapture(VIDEO);
    video.size(500,500);
video.position(200,150)

    poseNet = ml5.poseNet(video,moddelLoaded);
    poseNet.on("pose",gotPoses);
    canvas = createCanvas(500,500);
    canvas.position(1100,150);
}
function moddelLoaded(){
    console.log("PoseNet is initialized");
}
function draw(){
    background("gray");
    
}
function gotPoses(results){
if(results.length > 0){
    console.log(results);
}
}
