class Bird{
    //properties
    constructor(x,y){
        var birdyOptions = {
            "restitution":0.5
        }
        this.body=Bodies.rectangle(x,y,50,50,birdyOptions)
        this.image=loadImage("sprites/bird.png")
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
