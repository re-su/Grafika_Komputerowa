function MatrixMul(a,b) //Mnożenie macierzy
{
  let c = [
  0,0,0,0,
  0,0,0,0,
  0,0,0,0,
  0,0,0,0
  ]
  for(let i=0;i<4;i++)
  {
    for(let j=0;j<4;j++)
    {
      c[i*4+j] = 0.0;
      for(let k=0;k<4;k++)
      {
        c[i*4+j]+= a[i*4+k] * b[k*4+j];
      }
    }
  }
  return c;
}

function MatrixTransposeInverse(m)
{
  let r = [
        0, 0, 0, 0,
        0, 0, 0, 0,
        0, 0, 0, 0,
        0, 0, 0, 0
    ];
  r[0] = m[5]*m[10]*m[15] - m[5]*m[14]*m[11] - m[6]*m[9]*m[15] + m[6]*m[13]*m[11] + m[7]*m[9]*m[14] - m[7]*m[13]*m[10];
  r[1] = -m[1]*m[10]*m[15] + m[1]*m[14]*m[11] + m[2]*m[9]*m[15] - m[2]*m[13]*m[11] - m[3]*m[9]*m[14] + m[3]*m[13]*m[10];
  r[2] = m[1]*m[6]*m[15] - m[1]*m[14]*m[7] - m[2]*m[5]*m[15] + m[2]*m[13]*m[7] + m[3]*m[5]*m[14] - m[3]*m[13]*m[6];
  r[3] = -m[1]*m[6]*m[11] + m[1]*m[10]*m[7] + m[2]*m[5]*m[11] - m[2]*m[9]*m[7] - m[3]*m[5]*m[10] + m[3]*m[9]*m[6];

  r[4] = -m[4]*m[10]*m[15] + m[4]*m[14]*m[11] + m[6]*m[8]*m[15] - m[6]*m[12]*m[11] - m[7]*m[8]*m[14] + m[7]*m[12]*m[10];
  r[5] = m[0]*m[10]*m[15] - m[0]*m[14]*m[11] - m[2]*m[8]*m[15] + m[2]*m[12]*m[11] + m[3]*m[8]*m[14] - m[3]*m[12]*m[10];
  r[6] = -m[0]*m[6]*m[15] + m[0]*m[14]*m[7] + m[2]*m[4]*m[15] - m[2]*m[12]*m[7] - m[3]*m[4]*m[14] + m[3]*m[12]*m[6];
  r[7] = m[0]*m[6]*m[11] - m[0]*m[10]*m[7] - m[2]*m[4]*m[11] + m[2]*m[8]*m[7] + m[3]*m[4]*m[10] - m[3]*m[8]*m[6];

  r[8] = m[4]*m[9]*m[15] - m[4]*m[13]*m[11] - m[5]*m[8]*m[15] + m[5]*m[12]*m[11] + m[7]*m[8]*m[13] - m[7]*m[12]*m[9];
  r[9] = -m[0]*m[9]*m[15] + m[0]*m[13]*m[11] + m[1]*m[8]*m[15] - m[1]*m[12]*m[11] - m[3]*m[8]*m[13] + m[3]*m[12]*m[9];
  r[10] = m[0]*m[5]*m[15] - m[0]*m[13]*m[7] - m[1]*m[4]*m[15] + m[1]*m[12]*m[7] + m[3]*m[4]*m[13] - m[3]*m[12]*m[5];
  r[11] = -m[0]*m[5]*m[11] + m[0]*m[9]*m[7] + m[1]*m[4]*m[11] - m[1]*m[8]*m[7] - m[3]*m[4]*m[9] + m[3]*m[8]*m[5];

  r[12] = -m[4]*m[9]*m[14] + m[4]*m[13]*m[10] + m[5]*m[8]*m[14] - m[5]*m[12]*m[10] - m[6]*m[8]*m[13] + m[6]*m[12]*m[9];
  r[13] = m[0]*m[9]*m[14] - m[0]*m[13]*m[10] - m[1]*m[8]*m[14] + m[1]*m[12]*m[10] + m[2]*m[8]*m[13] - m[2]*m[12]*m[9];
  r[14] = -m[0]*m[5]*m[14] + m[0]*m[13]*m[6] + m[1]*m[4]*m[14] - m[1]*m[12]*m[6] - m[2]*m[4]*m[13] + m[2]*m[12]*m[5];
  r[15] = m[0]*m[5]*m[10] - m[0]*m[9]*m[6] - m[1]*m[4]*m[10] + m[1]*m[8]*m[6] + m[2]*m[4]*m[9] - m[2]*m[8]*m[5];

  var det = m[0]*r[0] + m[1]*r[4] + m[2]*r[8] + m[3]*r[12];
  for (var i = 0; i < 16; i++) r[i] /= det;
  
  let rt = [ r[0], r[4], r[8], r[12],
             r[1], r[5], r[9], r[13],
             r[2], r[6], r[10], r[14],
             r[3], r[7], r[11], r[15]
             ];
  
  return rt;
}

function CreateIdentytyMatrix()
{
  return [
  1,0,0,0, //Macierz jednostkowa
  0,1,0,0,
  0,0,1,0,
  0,0,0,1
  ];
}

function CreateTranslationMatrix(tx,ty,tz)
{
  return  [
  1,0,0,0,
  0,1,0,0,
  0,0,1,0,
  tx,ty,tz,1
  ];
}

function CreateScaleMatrix(sx,sy,sz)
{
  return [
  sx,0,0,0,
  0,sy,0,0,
  0,0,sz,0,
  0,0,0,1
  ];
}

function CreateRotationZMatrix(angleZ)
{
  return [
  +Math.cos(angleZ*Math.PI/180.0),+Math.sin(angleZ*Math.PI/180.0),0,0,
  -Math.sin(angleZ*Math.PI/180.0),+Math.cos(angleZ*Math.PI/180.0),0,0,
  0,0,1,0,
  0,0,0,1
  ];
}

function CreateRotationYMatrix(angleY)
{
  return [
  +Math.cos(angleY*Math.PI/180.0),0,-Math.sin(angleY*Math.PI/180.0),0,
  0,1,0,0,
  +Math.sin(angleY*Math.PI/180.0),0,+Math.cos(angleY*Math.PI/180.0),0,
  0,0,0,1
  ];
}

function CreateRotationXMatrix(angleX)
{
  return [
  1,0,0,0,
  0,+Math.cos(angleX*Math.PI/180.0),+Math.sin(angleX*Math.PI/180.0),0,
  0,-Math.sin(angleX*Math.PI/180.0),+Math.cos(angleX*Math.PI/180.0),0,
  0,0,0,1
  ];
}

function createRect(mx,my,mz,dax,day,daz,dbx,dby,dbz)
{
  p1x = mx;             p1y = my;             p1z = mz;
  p2x = mx + dax;       p2y = my + day;       p2z = mz + daz;
  p3x = mx + dbx;       p3y = my + dby;       p3z = mz + dbz;
  p4x = mx + dax + dbx; p4y = my + day + dby; p4z = mz + daz + dbz;
  
  let vertexPosition = [p1x,p1y,p1z, p2x,p2y,p2z, p4x,p4y,p4z,  //Pierwszy trójkąt
                        p1x,p1y,p1z, p4x,p4y,p4z, p3x,p3y,p3z]; //Drugi trójkąt
                        
  return vertexPosition;
}

function createNormal(p1x,p1y,p1z,p2x,p2y,p2z,p3x,p3y,p3z) //Wyznaczenie wektora normalnego dla trójkąta
{
  let v1x = p2x - p1x;
  let v1y = p2y - p1y;
  let v1z = p2z - p1z;
  
  let v2x = p3x - p1x;
  let v2y = p3y - p1y;
  let v2z = p3z - p1z;
  
  let v3x =  v1y*v2z - v1z*v2y;
  let v3y =  v1z*v2x - v1x*v2z;
  let v3z =  v1x*v2y - v1y*v2x;
  
  vl = Math.sqrt(v3x*v3x+v3y*v3y+v3z*v3z); //Obliczenie długości wektora
   
  v3x/=vl; //Normalizacja na zakreś -1 1
  v3y/=vl;
  v3z/=vl;
  
  let vertexNormal = [v3x,v3y,v3z, v3x,v3y,v3z, v3x,v3y,v3z];
  return vertexNormal;
}

function CreateBox(x,y,z,dx,dy,dz)
{
  //Opis sceny 3D, położenie punktów w przestrzeni 3D w formacie X,Y,Z 
  let vertexPosition = []; //Każdy punkt 3 składowe - X1,Y1,Z1
  let vertexNormal = [];
  let indexes = [];
  
  vertexPosition.push(...[-1,-1,+1]);
  vertexNormal.push(...[-1,-1,+1]);

  vertexPosition.push(...[+1,-1,+1]);
  vertexNormal.push(...[+1,-1,+1]);

  vertexPosition.push(...[+1,+1,+1]);
  vertexNormal.push(...[+1,+1,+1]);

  vertexPosition.push(...[-1,+1,+1]);
  vertexNormal.push(...[-1,+1,+1]);
  
  vertexPosition.push(...[-1,-1,-1]);
  vertexNormal.push(...[-1,-1,-1]);
  
  vertexPosition.push(...[+1,-1,-1]);
  vertexNormal.push(...[+1,-1,-1]);
  
  vertexPosition.push(...[+1,+1,-1]);
  vertexNormal.push(...[+1,+1,-1]);

  vertexPosition.push(...[-1,+1,-1]);
  vertexNormal.push(...[-1,+1,-1]);

  indexes.push(...[0,1,2]); //Pierwszy trójkąt
  indexes.push(...[0,2,3]); //Drugi trójkąt

  indexes.push(...[1,5,6]);
  indexes.push(...[1,6,2]);

  indexes.push(...[3,2,6]);
  indexes.push(...[3,6,7]);

  //Dodaj pozostałe trójkąty pudełka

  return [indexes, vertexPosition, vertexNormal];
}

function CreateTetris()
{
  //Opis sceny 3D, położenie punktów w przestrzeni 3D w formacie X,Y,Z 
  let vertexPosition = []; //Każdy punkt 3 składowe - X1,Y1,Z1
  let vertexNormal = [];
  let indexes = [];
  
  vertexPosition.push(...[0,0,0]);//Dummy nie używany wierzchołek o indeksie 0
  vertexPosition.push(...[1.000000, 1.000000, -1.000000]);
  vertexPosition.push(...[1.000000, -1.000000, -1.000000]);
  vertexPosition.push(...[1.000000, 1.000000, 1.000000]);
  vertexPosition.push(...[1.000000, -1.000000, 1.000000]);
  vertexPosition.push(...[-1.000000, 1.000000, -1.000000]);
  vertexPosition.push(...[-1.000000, -1.000000, -1.000000]);
  vertexPosition.push(...[-1.000000, 1.000000, 1.000000]);
  vertexPosition.push(...[-1.000000, -1.000000, 1.000000]);
  vertexPosition.push(...[2.488136, 1.000000, -1.000000]);
  vertexPosition.push(...[2.488136, -1.000000, -1.000000]);
  vertexPosition.push(...[2.488136, 1.000000, 1.000000]);
  vertexPosition.push(...[2.488136, -1.000000, 1.000000]);
  vertexPosition.push(...[1.000000, 2.453283, 1.000000]);
  vertexPosition.push(...[-1.000000, 2.453283, 1.000000]);
  vertexPosition.push(...[1.000000, 2.453283, -1.000000]);
  vertexPosition.push(...[-1.000000, 2.453283, -1.000000]);
  vertexPosition.push(...[-1.000000, -1.000000, 2.595283]);
  vertexPosition.push(...[-1.000000, 1.000000, 2.595283]);
  vertexPosition.push(...[1.000000, 1.000000, 2.595283]);
  vertexPosition.push(...[1.000000, -1.000000, 2.595283]);

  indexes.push(...[1,13,3]);
  indexes.push(...[8,18,7]);
  indexes.push(...[7,6,8]);
  indexes.push(...[2,8,6]);
  indexes.push(...[3,9,1]);
  indexes.push(...[5,2,6]);
  indexes.push(...[9,12,10]);
  indexes.push(...[4,11,3]);
  indexes.push(...[1,10,2]);
  indexes.push(...[2,12,4]);
  indexes.push(...[16,13,15]);
  indexes.push(...[5,15,1]);
  indexes.push(...[3,14,7]);
  indexes.push(...[7,16,5]);
  indexes.push(...[19,17,20]);
  indexes.push(...[4,17,8]);
  indexes.push(...[7,19,3]);
  indexes.push(...[3,20,4]);
  indexes.push(...[1,15,13]);
  indexes.push(...[8,17,18]);
  indexes.push(...[7,5,6]);
  indexes.push(...[2,4,8]);
  indexes.push(...[3,11,9]);
  indexes.push(...[5,1,2]);
  indexes.push(...[9,11,12]);
  indexes.push(...[4,12,11]);
  indexes.push(...[1,9,10]);
  indexes.push(...[2,10,12]);
  indexes.push(...[16,14,13]);
  indexes.push(...[5,16,15]);
  indexes.push(...[3,13,14]);
  indexes.push(...[7,14,16]);
  indexes.push(...[19,18,17]);
  indexes.push(...[4,20,17]);
  indexes.push(...[7,18,19]);
  indexes.push(...[3,19,20]);
  
  return [indexes, vertexPosition, vertexNormal];
}