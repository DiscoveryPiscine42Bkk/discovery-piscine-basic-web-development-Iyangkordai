$(document).ready(function(){
    $("button").click(function(){
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    var color = "rgb("+ x + "," + y + "," + z + ")" ;
    document.body.style.background = color

});
})
