function checkResult(studentScore) 
{
    let grade;

    switch(true)
    {
        case (studentScore >= 90) :
            grade = 'A';
            break;
        case (studentScore >= 80 && studentScore <= 89) :
            grade = 'B';
            break;
        case (studentScore >= 70 && studentScore <= 79) :
            grade = 'C';
            break;  
        case (studentScore >= 60 && studentScore <= 69) :    
            grade = 'D';    
            break;
        case (studentScore >=50 && studentScore <= 59) :
            grade = 'E';
            break;
        case (studentScore >=1 && studentScore <=49) :
            grade = 'F';
            break;
        default:
            grade = 'Invalid score';        
    }

    return grade;
}

console.log("<=====Welcome to the grade calculator=====>");
console.log("Your grade is: " + checkResult(95)); 
console.log("Your grade is: " + checkResult(82));
console.log("Your grade is: " + checkResult(15));
console.log("Your grade is: " + checkResult(-55));
console.log("<=====Thank you for using the grade calculator=====>");
