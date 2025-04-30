function changcolorbg(){
    let x = Math.floor(Math.random() * 255);
    let y = Math.floor(Math.random() * 255);
    let z = Math.floor(Math.random() * 255);
    var color = "rgb("+ x + "," + y + "," + z + ")" ;
    document.body.style.background = color

}