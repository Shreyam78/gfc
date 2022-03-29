noseX = 0;
noseY = 0;

function preload() {
mousthace = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup() {
  canvas = createCanvas(500, 500);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(500, 500);
  video.hide();
  poseNet = ml5.poseNet(video, ModelLoaded);
  poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
  console.log(results);
  if (results.length > 0) {
    console.log(results);

    noseX = results[0].pose.nose.x - 14;
    noseY = results[0].pose.nose.y + 10;

    console.log("nose x = " + results[0].pose.nose.x);
    console.log("nose y = " + results[0].pose.nose.y);
  }
}

function ModelLoaded() {
  console.log("PoseNet is Initialized");
}

function draw() {
  image(video, 0, 0, 500, 500);
  image(mousthace, noseX , noseY , 30 , 30);
}

function take_snapshot() {
  save('myFilterImage.png');
}