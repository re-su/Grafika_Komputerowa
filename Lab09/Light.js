class Light{
    constructor(positionX, positionY, positionZ, size = 0){
        this.positionX = positionX;
        this.positionY = positionY;
        this.positionZ = positionZ;
        this.size = size;

        if(this.size > 0){
            this.MMatrix = CreateIdentytyMatrix(); 
            this.MMatrix = MatrixMul(this.MMatrix,CreateScaleMatrix(this.size,this.size,this.size));
            this.MMatrix = MatrixMul(this.MMatrix,CreateTranslationMatrix(this.positionX,this.positionY,this.positionZ));
        }
    }

    turnOn(gl){
        gl.uniform3f(gl.getUniformLocation(shaderProgram, "uLightPosition"),this.positionX,this.positionY,this.positionZ);
        return gl;
    }

    renderLightObject(gl){
        if(this.size <= 0) return gl;

        this.MMatrix = CreateIdentytyMatrix(); 
        this.MMatrix = MatrixMul(this.MMatrix,CreateScaleMatrix(this.size,this.size,this.size));
        this.MMatrix = MatrixMul(this.MMatrix,CreateTranslationMatrix(this.positionX,this.positionY,this.positionZ));

        //Obiekt Światła
        gl.uniformMatrix4fv(gl.getUniformLocation(shaderProgram, "uMMatrix"), false, new Float32Array(this.MMatrix));
        gl.uniformMatrix4fv(gl.getUniformLocation(shaderProgram, "uInvMMatrix"), false, new Float32Array(MatrixTransposeInverse(this.MMatrix)));
        gl.uniform3f(gl.getUniformLocation(shaderProgram, "uColor"),1.0,1.0,1.0);
        gl.uniform1f(gl.getUniformLocation(shaderProgram, "uNormalMul"),-1.0);  
        gl.drawElements(gl.TRIANGLES, indexBuffer.numItems, gl.UNSIGNED_SHORT, 0);
        return gl;
    }

    move(e){
         //U I O J K L
        if(e.keyCode==76) this.positionX+=0.1;
        if(e.keyCode==74) this.positionX-=0.1;
        if(e.keyCode==73) this.positionY+=0.1;
        if(e.keyCode==75) this.positionY-=0.1;
        if(e.keyCode==85) this.positionZ+=0.1;
        if(e.keyCode==79) this.positionZ-=0.1;

        if(e.keyCode==66) this.positionZ += 0.1;
        if(e.keyCode==78) this.positionZ -= 0.1;
    }
}