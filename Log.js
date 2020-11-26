class Log{
    constructor(x,y,hei,angle){
        var ops={
            restitution:0.8,
            friction:4,
            density:1
        }
        this.body=bodies.rectangle(x,y,20,hei,ops);
        this.width=20;
        this.height=hei;
        Matter.Body.setAngle(this.body,angle);
        wor.add(myworld,this.body);
}
    display(){
        var pos=this.body.position;
        var ang=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(ang);
        rectMode(CENTER);
        fill("white");
        stroke("white");
        rect(0,0,this.width,this.height);
        pop();
    }
}