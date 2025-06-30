class Sling{
    constructor(bodyA,pointB){
        var slingOptions= {
            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stiffness:50
        }
        this.image1=loadImage("sprites/sling1.png")
        this.image2=loadImage("sprites/sling2.png")
        this.image3=loadImage("sprites/sling3.png")
        this.pointB=pointB
        this.sling=Constraint.create(slingOptions)
        World.add(world,this.sling)
    }
    fly(){
        this.sling.bodyA=null
    }
    attach(objection){
        this.sling.bodyA=objection
    }
    display() {
        image(this.image1,400,200)
        image(this.image2,370,200)
    }
}