class Leg extends Limb{
    constructor(positionX, positionY, positionZ){
        super();    
        this.firstBone = new Cube(positionX, positionY, positionZ, 1.0, 0.2, 0.1, 0, 0, -90);
        this.secondBone =    new Cube(1.0, 0.0, 0.0, 1, 0.2, 0.1, 0, 0, 0);
        this.thirdBone =     new Cube(1.0, 0.0, 0.0, 0.4, 0.2, 0.1, 0, -90, 0);
    }

    moveAnimation(direction){
        this.firstBone.addToAngleX( this.step * direction );
        if(this.firstBone.angleX > 45 || this.firstBone.angleX < -45)
            this.step *= -1;
    }
}