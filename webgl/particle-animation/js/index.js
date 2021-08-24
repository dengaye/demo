var canvas, gl;

const vsSource = `
  attribute vec4 aVertexPosition;
  uniform mat4 rotateX;
  uniform mat4 rotateY;
  uniform mat4 rotateZ;
  uniform mat4 modelViewMatrix;
  void main() {
    gl_Position = modelViewMatrix*aVertexPosition;  
  }
`;
const fsSource = `
  precision mediump float;
  void main() {
    gl_FragColor = vec4(1.0,1.0,1.0,1.0);
  }
`;

loadScene();
function loadScene() {
  canvas = document.getElementById('canvas');
  gl = canvas.getContext('webgl');
  if (!gl) {
    alert("Unable to initialize WebGL. Your browser or machine may not support it.");
    return;
  }    
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  gl.viewport(0, 0, canvas.width, canvas.height);
  
  const shaderProgram = createProgram(gl);
  
  const programInfo = {
    program: shaderProgram,
    attribLocation: {
      vertexProsition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
    }
  }
  gl.program = shaderProgram;
  const buffers = initBuffers(gl);
  gl.useProgram(programInfo.program);
  gl.enableVertexAttribArray(programInfo.attribLocation.vertexProsition);
  gl.vertexAttribPointer(programInfo.attribLocation.vertexProsition, 3, gl.FLOAT, false, 0, 0);
  setUniform(gl);
  drawScence(gl);
  control(gl);
}

function control(gl) {
  const yControl = document.getElementById('yPosition');
  const xControl = document.getElementById('xPosition');
  const zControl = document.getElementById('zPosition');
  const radianControl = document.getElementById('radian');

  yControl.oninput = (e) => {
    const value = e.target.value;
    setUniform(gl, radianControl.value, 'y');
    drawScence(gl);
  };

  xControl.oninput = (e) => {
    const value = e.target.value;
    setUniform(gl, radianControl.value, 'x');
    drawScence(gl);
  };

  zControl.oninput = (e) => {
    const value = e.target.value;
    setUniform(gl, radianControl.value, 'z');
    drawScence(gl);
  };

  radianControl.oninput = (e) => {
    const value = e.target.value;
    setUniform(gl, value);
    drawScence(gl);
  }
}

function createProgram(gl) {
  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vsSource);
  const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fsSource);

  const shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);

  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    alert('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
    return null;
  }

  return shaderProgram;
}

function initBuffers(gl) {
  const positionBuffer = gl.createBuffer();

  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  // const position = [
  //   0, 0, 1,
  //   0, 1, 0,
  //   1, 0, 0
  // ];

  const position=new Float32Array([
    //z为0.5时，xOy平面上的四个点坐标
    0.5,  0.5,  0.5,
    -0.5,  0.5,  0.5,
    -0.5, -0.5,  0.5,
    0.5, -0.5,  0.5,
    //z为-0.5时，xOy平面上的四个点坐标
    0.5,  0.5, -0.5,
    -0.5,  0.5, -0.5,
    -0.5, -0.5, -0.5,
      0.5, -0.5, -0.5,
    //上面两组坐标分别对应起来组成一一对
    0.5,  0.5,  0.5,
    0.5,  0.5,  -0.5,

    -0.5,  0.5,  0.5,
    -0.5,  0.5,  -0.5,

    -0.5, -0.5,  0.5,
    -0.5, -0.5,  -0.5,

    0.5, -0.5,  0.5,
    0.5, -0.5,  -0.5,
  ]);
     


  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(position), gl.STATIC_DRAW);

  return {
    position: positionBuffer
  }
}

function drawScence(gl) {
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clearDepth(1.0);
  gl.enable(gl.DEPTH_TEST);
  gl.depthFunc(gl.LEQUAL);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  //LINE_LOOP模式绘制前四个点
  gl.drawArrays(gl.LINE_LOOP,0,4);
  //LINE_LOOP模式从第五个点开始绘制四个点
  gl.drawArrays(gl.LINE_LOOP,4,4);
  //LINES模式绘制后8个点
  gl.drawArrays(gl.LINES,8,8);
}

function createShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  
  if(!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    alert('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
``
  return shader;
}

function setUniform(gl, radian = 30.0,  type='x') {
  const modelViewLocation = gl.getUniformLocation(gl.program, 'modelViewMatrix');

  const cos = Math.cos(radian);
  const sin = Math.sin(radian);
  const rotateX = [
    1, 0,   0,    0,
    0, cos, -sin, 0,
    0, sin, cos,  0,
    0, 0,   0,    1
  ];
  const rotateY = [
    cos, 0, -sin, 0,
    0,   1, 0,    0, 
    sin, 0, cos,  0,
    0,   0, 0,    1
  ];
  const rotateZ = [
    cos, -sin, 0, 0,
    sin, cos,  0, 0,
    0,    0,   1, 0,
    0,    0,   0, 1,
  ]

  if(type === 'x') {
    gl.uniformMatrix4fv(modelViewLocation, false, new Float32Array(rotateX));
  }

  if(type === 'y') {
    gl.uniformMatrix4fv(modelViewLocation, false, new Float32Array(rotateY));
  }

  if(type === 'z') {
    gl.uniformMatrix4fv(modelViewLocation, false, new Float32Array(rotateZ));
  }
}