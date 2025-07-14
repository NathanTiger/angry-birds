class Log extends Base{
    //properties
    constructor(x,y,width,height,angle){
        var options= {
            "restitution":0,
            "friction":2
            
        }
        super(x,y,width,height,angle,options)
        this.image=loadImage("sprites/wood2.png")
        Body.setAngle(this.body,angle)
    }
    //functions
}