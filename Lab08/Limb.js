class Limb{
    constructor(){
        this.step = 5;
    }

    transformation(){
        this.firstBone.transformation();

        this.secondBone.transformation();
        this.secondBone.cubeAdditionalTransformation(this.firstBone);

        this.thirdBone.transformation();
        this.thirdBone.cubeAdditionalTransformation(this.secondBone);
        this.thirdBone.cubeAdditionalTransformation(this.firstBone);
    }

    render(gl){
        gl = this.firstBone.render(gl, [1.0,1.0,0.0]);
        gl = this.secondBone.render(gl, [0.0,1.0,0.0]);
        gl = this.thirdBone.render(gl, [0.0,0.0,1.0]);

        return gl;
    }

    addToPositionZ(value){
        this.firstBone.addToPositionZ(value);
    }

    moveAnimation(direction){
        this.firstBone.addToAngleX( this.step * direction );
        if(this.firstBone.angleX > 90 || this.firstBone.angleX < -90)
            this.step *= -1;
    }

    getfirstBone(){
        return this.firstBone;
    }

    getsecondBone(){
        return this.secondBone;
    }

    getthirdBone(){
        return this.thirdBone;
    }
}