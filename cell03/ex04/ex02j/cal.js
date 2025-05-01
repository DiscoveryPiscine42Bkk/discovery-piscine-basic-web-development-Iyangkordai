$(document).ready(function(){
    var ans = 0;
    let timer;
    timer = setInterval(function() {alert("Please, use me...")},30000);
    

    $("button").click(function(){
        const x = parseInt($("#x").value);
        const y = parseInt($("#y").value);
        const opt = $("#opt").value;
        console.log(opt);
        
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
        

    })
})
    
    


