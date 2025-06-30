class Ground{
    //properties
    constructor(x,y,width,height){
        var groundOptions = {
           isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,groundOptions)
        this.width=width
        this.height=height
        this.image=loadImage("sprites/base.png")
        World.add(world,this.body)
    }
    //functions
    display(){
        var pos = this.body.position
        push()
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,this.width,this.height)
        pop()
    }
}