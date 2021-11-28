function CanDrive(hasDrivingLiscence, isTired, isSober) {
    // Write you code here
    if(hasDrivingLiscence === false){
        return("You cannot drive")
    }
    else if((isTired === false && isSober === false) || (isTired === true && isSober === false)){
        return("You shouldn't drive")
    }
    else if((isTired === true&& isSober === true) || (isTired === true && isSober === false) || (isTired === false && isSober === true)){
        return("You can drive")
    }
}

module.exports = CanDrive;
