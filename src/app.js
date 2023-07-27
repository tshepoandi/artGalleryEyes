 let input = {
    mouseX:{
        start:100,
        end: window.innerWidth - 200,
        current:0,
    },
    mouseY: {
        start: 0,
        end: window.innerHeight,
        current: 0,
    }
 }


input.mouseX.range = input.mouseX.end - input.mouseX.start;
input.mouseY.range = input.mouseY.end - input.mouseX.start;
//  console.log(input.mouseX)

let handleMouseMovement = (event) => {
    input.mouseX.current = event.clientX;
    input.mouseX.fraction = (input.mouseX.current - input.mouseX.start) / input.mouseX.range
    let greaterthan1 = input.mouseX.fraction > 1 ? 1 : input.mouseX.fraction
    console.log(input.mouseX.fraction < 0 ? 0 : greaterthan1)

    input.mouseY.current = event.clientY
    input.mouseY.fraction = (input.mouseY.current - input.mouseY.start) / input.mouseY.range 
    let greaterthan2 = input.mouseY.fraction > 1 ? 1 : input.mouseY.fraction
    console.log(input.mouseY.fraction < 0 ? 0 : greaterthan2)
}

let handleResize = () => {
    input.mouseX.end = window.innerWidth - 200;
    input.mouseX.range = input.mouseX.end - input.mouseX.start;
    input.mouseY.end = window.innerWidth;
    input.mouseY.range = input.mouseY.end - input.mouseY.start; 
}
window.addEventListener('mousemove', handleMouseMovement)
window.addEventListener('resize', handleResize)