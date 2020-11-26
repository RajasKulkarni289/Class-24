class Box{
    constructor(x,y,wid,hei){
        var ops={
            restitution:0.8,
            density:1
        }
        this.body=bodies.rectangle(x,y,wid,hei,ops);
        this.width=wid;
        this.height=hei;

        wor.add(myworld,this.body);
}
    display(){
        var pos=this.body.position;
        var ang=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(ang);
        rectMode(CENTER);
        fill("brown");
        stroke("white");
        rect(0,0,this.width,this.height);
        pop();
    }
}