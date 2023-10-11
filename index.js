// Code your solution in this file!
function distanceFromHqInBlocks(x){
    if (x > 42) {
        return x - 42
    }
    else if (x < 42) {
        return 42 - x
    }
}

function distanceFromHqInFeet(x){
    return distanceFromHqInBlocks(x) * 264
}

function distanceTravelledInFeet(num1, num2){
    if (num1 > num2){
        return (num1 - num2)* 264
    }
    else if (num2 > num1){
        return (num2 - num1)*264
    }
}

function calculatesFarePrice(num1, num2){
    if (distanceTravelledInFeet(num1, num2) < 400){
        return 0
    }
    else if (distanceTravelledInFeet(num1, num2) > 400 && distanceTravelledInFeet(num1, num2) <= 2000){
        return (distanceTravelledInFeet(num1, num2) - 400)*0.02
    }
    else if (distanceTravelledInFeet(num1, num2) > 2000 && distanceTravelledInFeet(num1, num2) <= 2500){
        return 25
    }
    else if (distanceTravelledInFeet(num1, num2) > 2500){
        return 'cannot travel that far'
    }
}
