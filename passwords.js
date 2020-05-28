var pass=prompt("Please choose your password");
if(pass.length<8)
    {
        alert("Password must at least 8 characters long");    
    }
else if (pass[0]>=0 || pass[0]<=9)
    {
        alert("Sorry can't enter numeric value as first element");
    }
else if(pass.length>7 && !(pass[0]>=0 || pass[0]<=9))
    {        
        for (var i=1;i<pass.length;i++)
            {    
                if( !(pass[i]>=0 || pass[i]<=9) && (i==pass.length-1) )
                    {
                        alert("At least one digit required");
                    }
                else if((pass[i]>=0 || pass[i]<=9)) 
                    {
                        alert("Password successfully entered");
                        document.write("Success!!! your password is :",pass)
                        break;
                    }                
            }  
    }