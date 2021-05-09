class Particles{

constructor(x,y){

var options={

"isStatic":false,
"restitution":0.3
}
this.radius=10;
this.body= Bodies.circle(x,y,this.radius,options)

this.body.y=Math.round(random(width/2-10,width/2+10))



this.body.color=color(random(0,225),random(0,225),random(0,225))

World.add(world,this.body)
}
display(){

var pos= this.body.position;
var angle=this.body.angle;

push();
translate(pos.x,pos.y);
rotate(angle);
ellipseMode(RADIUS);
ellipse(0,0,this.radius,this.radius);





pop();
}






}