class Log{
    //properties
    constructor(x,y,width,height,angle){
        var logOptions= {
            "restitution":0,
            "friction":2
            
        }
        this.body=Bodies.rectangle(x,y,width,height,angle,logOptions)
        this.width=width
        this.height=height
        this.image=loadImage("sprites/wood2.png")
        Body.setAngle(this.body,angle)
        World.add(world,this.body)
    }
    //functions
    display(){
        var pos = this.body.position
        push()
        translate(pos.x,pos.y)
        rotate(this.body.angle)
        imageMode(CENTER)
        image(this.image,0,0,this.width,this.height)
        pop()
    }
}