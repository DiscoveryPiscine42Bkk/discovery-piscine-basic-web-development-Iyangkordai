function newlist(){
    const newp = document.createElement("div");
    var para = prompt("please enter your TO DO LIST");
    if (para != null){
        newp.innerHTML = para
    }
    document.getElementById("ft_list").appendChild(newp);
    
}

document.getElementById("ft_list").onclick = function() {deletetodolist()};


function deletetodolist(){
    const child = document.getElementById("ft_list");
    var ans = prompt("Are you sure to delete this List? type 'y' as yes and 'n' as no");
    ans = ans.toLocaleLowerCase();
    if (ans == 'y' || ans == 'yes' ){
        child.removeChild(child.onclick);

    }
}