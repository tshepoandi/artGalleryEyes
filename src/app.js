 let input = {
    mouseX:{
        start:100,
        end: window.innerWidth - 200,
        current:0,
    },
    mouseY: {}
 }

 input.mouseX.range = input.mouseX.end - input.mouseX.start;
//  console.log(input.mouseX)

let handleMouseMovement = (event) => {
    input.mouseX.current = event.clientX;
    input.mouseX.fraction = (input.mouseX.current - input.mouseX.start) / input.mouseX.range
    let greaterthan1 = input.mouseX.fraction > 1 ? 1 : input.mouseX.fraction
    console.log(input.mouseX.fraction < 0 ? 0 : greaterthan1) 

}

let handleResize = () => {
    input.mouseX.end = window.innerWidth - 200;
    input.mouseX.range = input.mouseX.end - input.mouseX.start; 
}
window.addEventListener('mousemove', handleMouseMovement)
window.addEventListener('resize', handleResize)