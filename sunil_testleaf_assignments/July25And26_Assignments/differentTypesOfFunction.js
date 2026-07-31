//------------------Task1--->
// Example of named function

function userProfile(name)
{
    console.log(`Hello ${name}`);
}


//------------------Task2--->
// Example of Arrow function

let double = (number)=>
{
    return number*2;
}

//------------------Task3--->
/* setTimeout is a inbuilt JS function,
   which will take 2 Parameters,
   1st Parameter : Provide the code that needs to be executed after time expries.
                   Ex : We have created an anonymous function to print a message
   2nd Parameter : Procide the actual delay time
                   Ex : we have given 2000ms

   setTimeout will wait for 2000 ms, and invokes anonymous fuction internally...
*/
setTimeout(function()
{
    console.log("This message is delayed by 2 seconds.....")
},2000);



//------------------Task4--->
function getUserData(callBack)
{   
    setTimeout(function fetchData()
    {
        // user object is created...
            let user = {name : "sunil", age : 38};
        
        // call back function is called and passing user object
            callBack(user);

    },3000)
}


// this function will receive the user object and print its details...
function printUserDetails(user)
{
    console.log(`UserName : ${user.name} , UserAge : ${user.age}, This message is printed after 3 second...`);
}

// calling the getUserData function...
getUserData(printUserDetails);




