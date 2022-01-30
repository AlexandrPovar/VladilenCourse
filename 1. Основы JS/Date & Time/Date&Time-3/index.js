const addDays = (date, days = 1) => {

    days = days * 1000 * 60 * 60 * 24;
    const newDate = new Date( (date.getTime() + days) );
    
    return newDate;
};

const date1 = new Date();

const result = addDays(date1, 5);
console.log(result)