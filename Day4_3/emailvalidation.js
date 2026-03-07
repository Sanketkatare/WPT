function data()
{
    var email = document.getElementById('email').value;
    var i = email.indexOf('@')
    if(i>0)
    {
        var j=email.lastIndexOf('.');
        if(j>i)
        {
            console.log("valid format");
        }else 
        {
            console.log("Invalid format");
        }
    }
}