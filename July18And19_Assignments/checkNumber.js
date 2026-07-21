function checkNumber(num)
{
    if(num > 0)
    {
        return `Given number ${num} is +ve`;
    }
    else if(num < 0)
    {

        return `Given number ${num} is -ve`;
    }
    else
    {
        return `Given number ${num} is zero`;
    }
}

console.log(checkNumber(5));
console.log(checkNumber(-3));
console.log(checkNumber(0));
