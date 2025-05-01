var ans = 0;
let timer;
const x = parseInt(document.getElementById("x").value);
const y = parseInt(document.getElementById("y").value);
function myTimer() {
   timer = setInterval(function() {alert("Please, use me...")},30000);
}
myTimer()

function submit(){
    const x = parseInt(document.getElementById("x").value);
    const y = parseInt(document.getElementById("y").value);
    const opt = document.getElementById("opt").value;
    if (x < 0 || y < 0){
        alert("Error :(");
        return 0;    
    }
    if (y == 0 && (opt == "/" || opt == "%")){
        alert("It’s over 9000!");
        console.log("It's over 9000!");
        return 0;
        
    }
    switch (opt) {
        case "+":
            ans = x + y;
            break;
        case "-":
            ans = x - y;
            break;
        case "*":
            ans = x * y;
            break;
        case "/":
            ans = x / y;
            break;
        case "%":
            ans = x % y;
            break;
    }
    console.log(ans);
    alert(ans);

}
