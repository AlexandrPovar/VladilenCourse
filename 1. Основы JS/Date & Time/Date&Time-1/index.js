const getDateFormat = (date, separator = '.') => {
    
    dateDay = date.getDate();
        if ( dateDay < 10) {
            dateDay = '0' + dateDay; 
        }
    dateMonth = date.getMonth() + 1;
        if ( dateMonth < 10) {
            dateMonth = '0' + dateMonth; 
        }
    dateYear = date.getFullYear();
    
    return `${dateDay}${separator}${dateMonth}${separator}${dateYear}` 
   
};

const dateTest = new Date();
const result = getDateFormat(dateTest, '-');
console.log(result)