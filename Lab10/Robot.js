class Robot{
    constructor(positionX, positionY, positionZ){
        this.leftArm = new Arm(positionX-1, positionY, positionZ);
        this.rightArm = new Arm(positionX+1, positionY, positionZ);

        this.head = new Cube(positionX-0.5, positionY, positionZ, 0.5, 0.8, 0.6, 0, 0, 0);
        this.body = new Cube(positionX-0.8, positionY-1.5, positionZ, 0.8, 1.5, 0.8, 0, 0, 0);

        this.leftLeg = new Leg(positionX-0.5, positionY-3, positionZ);
        this.rightLeg = new Leg(positionX+0.5, positionY-3, positionZ);
    }

    transformation(){
        this.leftArm.transformation();
        this.rightArm.transformation();
        this.body.transformation();
        this.head.transformation();
        this.leftLeg.transformation();
        this.rightLeg.transformation();
    }

    render(gl){
        gl = this.leftArm.render(gl);
        gl = this.rightArm.render(gl);
        gl = this.head.render(gl, [1.0,1.0,1.0]);
        gl = this.body.render(gl, [1.0,1.0,1.0]);
        gl = this.leftLeg.render(gl);
        gl = this.rightLeg.render(gl);
        //console.log(this.body);
        return gl;
    }

    animate(e){
        if(e.keyCode==66){
            this.moveForward();
        } 
        if(e.keyCode==78){
            this.moveBack();
        }
    }

    moveForward(){
        let mvSpeed = 0.1;
        let anSpeed = 0.5;
        this.leftArm.addToPositionZ(+mvSpeed);
        this.rightArm.addToPositionZ(+mvSpeed);
        this.body.addToPositionZ(+mvSpeed);
        this.head.addToPositionZ(+mvSpeed);

        this.leftLeg.addToPositionZ(+mvSpeed);
        this.rightLeg.addToPositionZ(+mvSpeed);

        this.leftArm.moveAnimation(anSpeed);
        this.rightArm.moveAnimation(-anSpeed);

        this.leftLeg.moveAnimation(+anSpeed);
        this.rightLeg.moveAnimation(-anSpeed);
    }

    moveBack(){
        let mvSpeed = -0.1;
        let anSpeed = 0.5;
        this.leftArm.addToPositionZ(+mvSpeed);
        this.rightArm.addToPositionZ(+mvSpeed);
        this.body.addToPositionZ(+mvSpeed);
        this.head.addToPositionZ(+mvSpeed);

        this.leftLeg.addToPositionZ(+mvSpeed);
        this.rightLeg.addToPositionZ(+mvSpeed);

        this.leftArm.moveAnimation(-anSpeed);
        this.rightArm.moveAnimation(+anSpeed);

        this.leftLeg.moveAnimation(-anSpeed);
        this.rightLeg.moveAnimation(+anSpeed);
    }
}