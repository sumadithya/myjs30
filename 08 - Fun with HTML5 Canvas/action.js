const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineWidth = 1;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
//comment this out for smooth lines
ctx.globalCompositeOperation = "xor";
//
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e){
    if(!isDrawing) return;
    ctx.strokeStyle = `hsl(${hue}, 100%, 40%)`;
    ctx.lineWidth = direction ? ctx.lineWidth+1 : ctx.lineWidth-1;
    direction = (ctx.lineWidth < 2 || ctx.lineWidth > 99) ? !direction : direction;
    ctx.beginPath();
    ctx.moveTo(lastX,lastY);
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
    hue = (hue+1)%360;
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown',(e) => {
    isDrawing=true; 
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup',() => isDrawing=false );
canvas.addEventListener('mouseout',() => isDrawing=false );
