class Box extends Base{
    //properties
    constructor(x,y){
        var options = {
            "restitution":0,
            "friction":2
        }
        super(x,y,60,60,options)
        this.image=loadImage("sprites/wood1.png")
    }
    //functions
}