class Pig{
    //properties
    constructor(x,y){
        var pigOptions = {
            "restitution":0.5
        }
        this.body=Bodies.rectangle(x,y,50,50,pigOptions)
        this.image=loadImage("sprites/enemy.png")
        World.add(world,this.body)
    }
    //functions
    display(){
        var pos = this.body.position
        push()
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,50,50)
        pop()
    }
}