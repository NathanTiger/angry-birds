class Base{
    constructor(x,y,width,height,angle){
        var options = {
            "restitution":0.5,
            "friction":1,
            "density":1
        }
    this.body = Bodies.rectangle(x,y,width,height,options)
    this.width=width
    this.height=height
    this.image = loadImage("sprites/base.png")
    World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        rotate(angle)
        translate(pos.x,pos.y)
        imageMode(CENTER)
        image(this.image,0,0,this.width,this.height)
        pop()
    }
}``