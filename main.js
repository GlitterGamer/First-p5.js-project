function setup(){
    canvas= createCanvas(500,400)
    canvas.position(400,200)
    video= createCapture(VIDEO)
    video.hide()
}

function draw(){
    image(video,100,100,300,230)
    fill("green")
    rect(50,50,400,20)
    rect(50,350,400,20)
    rect(450,50,20,300)
    rect(30,50,20,300)
    fill("red")
    circle(50,50,70)
    circle(450,50,70)
    circle(50,350,70)
    circle(450,350,70)
}

function applyFilter(){
    color= document.getElementById("filterColor").value
    tint(color)
}

function take_snapshot(){
    save("MySelfie.png")
}