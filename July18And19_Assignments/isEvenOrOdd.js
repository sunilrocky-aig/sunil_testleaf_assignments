function isEvenOrOdd(num)
{
    let result;
    if(num % 2 === 0)
    {
        result = "Even";
    }
    else
    {
        result = "Odd";
    }
    return result;
}

console.log(isEvenOrOdd(4));


