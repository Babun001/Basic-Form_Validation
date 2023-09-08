// var paswd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;


// var code = "04564ABCDEavsht@##$";
// var REPassworD = /^(?=.*[0-9])(?=,*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,0}$/;

// console.log(REPassworD);

// if (REPassworD.test(code)){
//     console.log("Trueeeeee");
// }else{
//     console.log("Falseeee");
// }

function passwordcheck(data){
    let count = true;

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


    
    // if (Uppercase.test(data)){
    //     count = true;
    // }else{
    //     count = false;
    // }

    // if (Number.test(data)){
    //     count = true;
    // }else{
    //     count = false;
    // }


    // if (Lowercase.test(data)){
    //     count = true;
    // }else{
    //     count = false;
    // }
    return count;
}



let data = "BabUn@007";
console.log("The Result is-->",passwordcheck(data));