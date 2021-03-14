function distanceFromHqInBlocks (someValue) {
    return Math.abs(someValue - 42);
}

function distanceFromHqInFeet (someValue) {
    return 264 * distanceFromHqInBlocks(someValue);
}

// block is 264 ft
function distanceTravelledInFeet(a,b) {
    // return Math.abs(distanceFromHqInFeet(a)-distanceFromHqInFeet(b));
    return 264 * Math.abs(a-b);
}

function calculatesFarePrice (a,b) {
    const dist = distanceTravelledInFeet(a,b);
    if (dist <= 400) {
        return 0;
    } else if (dist <= 2000) {
        return (dist-400) * 0.02;
    } else if (dist < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}