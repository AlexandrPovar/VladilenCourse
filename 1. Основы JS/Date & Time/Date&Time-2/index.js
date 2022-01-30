const convertMsToDays = (millisecond) => {
    days = (millisecond / 1000 / 60 / 60 / 24);
    return Math.round(days); 
};

const getDaysBeforeBirthday = (nextBirthdayDate) => {
    const difference = nextBirthdayDate.getTime() - Date.now();
    return convertMsToDays(difference);
};

const myBirthdayDate = new Date(2023, 0, 19);

const result = getDaysBeforeBirthday(myBirthdayDate);
console.log(result);