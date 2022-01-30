// function showSuccessMessage(message) {
//     console.log(message);
// } 
// function showErrorMessage(message) {
//     console.error(message);
// }

function checkTextOnErrorSymbol(text, errorSymbol, successCallback, errorCallback) {
    function errorCallback(message) {
        message = 'Найден запрещенный символ "${errorSymbol}" под индексом ${i}.';
    };
    function successCallback(message) {
        message = 'В данном тексте нет запрещенных символов.';
    }
    for (let i = 0; i < text.length; i++) {
        console.log(text[i]);
        if(errorSymbol === text[i]) {
            errorCallback();
        } else {
            successCallback();
        }
    }
    
};

const text = 'Привет! Как дела! Давно мы с тобой не виделись.'; 
function checkTextOnErrorSymbol(text, а, showSuccessMessage, showErrorMessage);