function validationform(){
    
    var returnvalue = true;
    
    var firstname = document.forms['myform']['Fname'].value;
    var middlename = document.forms['myform']['Mname'].value;
    var lastname = document.forms['myform']['Lname'].value;

    // Conditions for first name should be!

    // First name should not be empty
    // First name should not be greater than 15 character
    if(firstname.length > 15){
        alert("The First Name is too Long!");
        returnvalue = false;
    };

    // Everyone don't have their Middle name!

    // Condition for Last Name should be!
    // Same as First Name-->
    if(lastname.length > 10){
        alert("The First Name is too Long!");
        returnvalue = false;
    };

    //phone number should be of 10 digits and contains only digits.

    function onlydigitfunction(string){
        for (let i=0; i<=string.length; i++){
            // charCodeAt() define the ASCII value of character
            let asciivalue = string.charCodeAt(i);
            if(asciivalue< 48 || asciivalue >57){
                return false;
            };
        };
    };

    var phonenumber = document.forms['myform']['phonenumber'].value;

    if(onlydigitfunction(phonenumber) ==false){
        alert("Phone Number contains only digits!");
        returnvalue = false;
    };

    if(phonenumber.length !=10){
        alert("Phone Number should be of 10 digits!");
        returnvalue=false;
    };

    // Password Section

    function passwordcheck(data){
        let count = true;
        //A regular expression is a pattern of characters.The pattern is used for searching and replacing characters in strings.The RegExp Object is a regular expression with added Properties and Methods.
        const Lowercase = new RegExp("(?=.*[a-z])");
        const Uppercase = new RegExp("(?=.*[A-Z])");
        const Number   = new RegExp("(?=.*[0-9])");
        const Specialcharacter  = new RegExp("(?=.*[!@#$%^&*()])");
    
        if (Specialcharacter.test(data)!=true){
            count = false;
        };
    
        if(Number.test(data)!=true){
            count = false;
        };
    
        if(Uppercase.test(data)!=true){
            count = false;
        };
    
        if(Lowercase.test(data)!=true){
            count = false;
        };
        return count;
    }

    let Passwordvalue = document.forms['myform']['fpass'].value;
    var ConfirmPasswordvalue = document.forms['myform']['cpass'].value;

    if (passwordcheck(Passwordvalue)!=true){
        alert("Password must contain at least one Uppercase,Lowercase,Number,Special character");
        returnvalue = false;
    }else{
        if (Passwordvalue.length <= 8){
            alert("The Password Should be of 8 digits!");
            returnvalue = false;
        };
        // check the password and confirm password are equal ot not..
        if(Passwordvalue != ConfirmPasswordvalue){
            alert("Confirm Password is not match!");
            returnvalue=false;
        };

    };
    return returnvalue;
    
};

