



function setup() {

    
createCanvas (800, 400);

}

function draw() {
frameRate(7); 
 background(215, 46, 80);
 angleMode(DEGREES)
let x = frameCount * 0.1
let y = frameCount * 0.002
let angle = 0
let r = random(45, 55)
let f = random(1, 300)
noStroke();
scale(f/100);
for (let i = 1; i <= 4; i++)
push()
    translate(r, 0);
    rotate(millis() / 1000 * PI * r);
  

//translate(40, 40);


//scale(mouseY/100); 


fill(180, 163, 142);
quad(400, 46, 490, 83, 400, 120, 310, 83); 

pop()

push()
 rotate(millis() / 1000 * PI *90);
fill(211, 96, 181);
quad(310, 83, 400, 120, 400, 370, 245, 290);

pop()


push()
rotate(millis() / 1000 * PI *105);
fill(145, 195, 121);
quad(400, 120, 490, 83, 555, 290, 400, 370);
pop()


angle = angle + 1
    // text(mouseX, 10, 10);
    // text(mouseY, 10, 20);
}
