class Cube{
    constructor(positionX, positionY, positionZ, sizeX, sizeY, sizeZ, angleX, angleY, angleZ){
        this.MMatrix = CreateIdentytyMatrix();
        this.MMatrix = MatrixMul(this.MMatrix,CreateScaleMatrix(sizeX,sizeY,sizeZ));
        this.MMatrix = MatrixMul(this.MMatrix,CreateTranslationMatrix(sizeX,0.0,0.0)); 
        this.MMatrix = MatrixMul(this.MMatrix,CreateRotationZMatrix(angleZ));
        this.MMatrix = MatrixMul(this.MMatrix,CreateTranslationMatrix(positionX,positionY,positionZ));
        
        this.positionX = positionX;
        this.positionY = positionY;
        this.positionZ = positionZ;

        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.sizeZ = sizeZ;

        this.angleX = angleX;
        this.angleY = angleY;
        this.angleZ = angleZ;
        console.log("Cube created!");
        return this;
    }

    transformation(){
        this.MMatrix = CreateIdentytyMatrix();
        this.MMatrix = MatrixMul(this.MMatrix,CreateScaleMatrix(this.sizeX,this.sizeY,this.sizeZ));
        this.MMatrix = MatrixMul(this.MMatrix,CreateTranslationMatrix(this.sizeX,0.0,0.0)); 
        this.MMatrix = MatrixMul(this.MMatrix,CreateRotationZMatrix(this.angleZ));
        this.MMatrix = MatrixMul(this.MMatrix,CreateRotationYMatrix(this.angleY));
        this.MMatrix = MatrixMul(this.MMatrix,CreateRotationXMatrix(this.angleX));
        this.MMatrix = MatrixMul(this.MMatrix,CreateTranslationMatrix(this.positionX, this.positionY, this.positionZ)); 
    }

    cubeAdditionalTransformation(cube){
        this.MMatrix = MatrixMul(this.MMatrix,CreateTranslationMatrix(cube.getSizeX(),0.0,0.0)); 
        this.MMatrix = MatrixMul(this.MMatrix,CreateRotationZMatrix(cube.getAngleZ()));
        this.MMatrix = MatrixMul(this.MMatrix,CreateRotationYMatrix(cube.getAngleY()));
        this.MMatrix = MatrixMul(this.MMatrix,CreateRotationXMatrix(cube.getAngleX()));
        this.MMatrix = MatrixMul(this.MMatrix,CreateTranslationMatrix(cube.getPositionX(),cube.getPositionY(),cube.getPositionZ())); 
    }

    render(gl, rgb = [0.529, 0.509, 0.509]){
        gl.uniformMatrix4fv(gl.getUniformLocation(shaderProgram, "uMMatrix"), false, new Float32Array(this.MMatrix));
        gl.uniformMatrix4fv(gl.getUniformLocation(shaderProgram, "uInvMMatrix"), false, new Float32Array(MatrixTransposeInverse(this.MMatrix)));
        gl.uniform3f(gl.getUniformLocation(shaderProgram, "uColor"),rgb[0],rgb[1],rgb[2]);
        gl.drawElements(gl.TRIANGLES, indexBuffer.numItems, gl.UNSIGNED_SHORT, 0);

        return gl;
    }

    addToAngleZ(value){
        this.angleZ += value;
    }

    addToPositionX(value){
        this.positionX += value;
    }

    addToPositionZ(value){
        this.positionZ += value;
        //console.log(this);
    }

    addToAngleY(value){
        this.angleY += value;
    }

    addToAngleX(value){
        this.angleX += value;
        console.log(this.angleX);
    }

    getMMatrix(){
        return this.MMatrix;
    }

    getPositionX() {
        return this.positionX;
    }

    getPositionY() {
        return this.positionY;
    }

    getPositionZ() {
        return this.positionZ;
    }

    getSizeX() {
        return this.sizeX;
    }

    getSizeY() {
        return this.sizeY;
    }

    getSizeZ() {
        return this.sizeZ;
    }

    getAngleZ(){
        return this.angleZ;
    }
    getAngleY(){
        return this.angleY;
    }
    getAngleX(){
        return this.angleX;
    }
}