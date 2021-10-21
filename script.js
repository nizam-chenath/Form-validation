function clk(){
    var uname = document.getElementById("text");
    var pwd = document.getElementById("pass");

    if(uname.value.trim() == ''){
        alert("fill in the blank username");
        uname.style.border = "solid 3px red";
        document.getElementById("valied").style.visibility = "visible";
        return false;
    }
    else if (pwd.value.trim() == ''){
        pwd.style.border = "solid 3px red";
        document.getElementById("invalied").style.visibility = "visible";
        alert(" fill in the password")
        return false;
    }
    else if (pwd.value.trim().length<5){
        pwd.style.border = "solid 3px red";
        alert(" fill in the password atleast 6 character")
        return false;
    }

    else{
        return true;
    }
}