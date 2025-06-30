class Box{
    //properties
    constructor(x,y){
        var boxOptions = {
            "restitution":0,
            "friction":2
        }
        this.body=Bodies.rectangle(x,y,60,60,boxOptions)
        this.image=loadImage("sprites/wood1.png")
        World.add(world,this.body)
    }
    //functions
    display(){
        var pos = this.body.position
        push()
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,60,60)
        pop()
    }
}