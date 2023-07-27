 let input = {
    mouseX:{
        start:0,
        end: window.innerWidth,
        current:0,
    },
    mouseY: {}
 }

 input.mouseX.range = input.mouseX.end - input.mouseX.start;
//  console.log(input.mouseX)

let handleMouseMovement = (event) => {
    input.mouseX.current = event.clientX;
    input.mouseX.fraction = (input.mouseX.current - input.mouseX.start) / input.mouseX.range 
    console.log(input.mouseX.fraction) 
}

let handleResize = () => {
    input.mouseX.end = window.innerWidth;
    input.mouseX.range = input.mouseX.end - input.mouseX.start;
}
window.addEventListener('mousemove', handleMouseMovement)
window.addEventListener('resize', handleResize)