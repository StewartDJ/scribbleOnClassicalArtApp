window.addEventListener('load', () => {
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');
//resizing

canvas.height = window.innerHeight; 
canvas.width = window.innerWidth;

//drawing
// ctx.beginPath();
// ctx.moveTo(100,100);
// ctx.lineTo(200, 100);
// ctx.lineTo(200, 150);
// ctx.closePath();
// ctx.stroke();


//variables
let painting = false; 
function startPosition(e){
    painting = true;
    draw(e);

}

function finishedPosition(){
    painting = false;
    ctx.beginPath();

}

function draw(e) {
    if(!painting) return;
    ctx.lineWidth = 5;
    ctx. lineCap = 'round';
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
    
}


//event listeners
canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', finishedPosition);
canvas.addEventListener('mousemove', draw);



ctx.font = 'bold 40px impact';
    ctx.textAlign = 'left';
    ctx. textBaseline = 'middle';
    ctx.fillStyle = 'yellow';  
    ctx.fillText('Improve classical art by scribbling all over it! Try it with your mouse!', 50, 50); 
    
});

window.addEventListener('resize')

