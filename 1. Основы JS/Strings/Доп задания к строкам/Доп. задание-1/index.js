const javaScriptDescription = 'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложении.';

const total = javaScriptDescription.length;

if (total % 2 === 0) {
    showSymbol();
} else {
    Math.floor(total);
    showSymbol();
}

function showSymbol() {
    let halfJavaScriptDescription = javaScriptDescription.slice(1, total / 2);
    halfJavaScriptDescription = halfJavaScriptDescription.replaceAll('а', 'А');
    halfJavaScriptDescription = halfJavaScriptDescription.replace(/\s+/g, '');
    halfJavaScriptDescription = halfJavaScriptDescription.repeat(3);

    const total2 = halfJavaScriptDescription.length;
    if (total2 % 2 === 1) {
        console.log(halfJavaScriptDescription[(total2 / 2) + 0.5]);
    } else {
        Math.floor(total2);
        console.log(halfJavaScriptDescription[total2 / 2]);
    }
}
