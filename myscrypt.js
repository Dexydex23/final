function validateform(){
    var name=document.myform.Username.value
    var pass=document.myform.Password.value

    if (name == "admin" && pass == "1234")
    {
        alert ("login complete");
        return true;
    }
    
    
    else if (name == null || name == "")
    {
        alert ("Please Enter Username");
        return false;
    }
    else if  (pass == null || pass == "")
    {
        alert ("Please Enter password");
        return false;
    }


    else
    {
        alert("Invalid Username or Password");
        return false;
    }
}

