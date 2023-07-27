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

let handleMouseMovement = () => {
    console.log('event') 
}

window.addEventListener('mousemove', handleMouseMovement)