const  giveTalonsInOrder = (orders, patients) => {

let resultArr = [];

        for ( i = 0; i < patients.length; i++ ) {
            for ( i = 0; i < orders.length; i++ ) {
                if( patients[i]['id'] ===  orders[i] ) {
                    resultArr.push(patients[i]);
                }
            }
        }
        return resultArr
    };

const ordersArr = [4, 2, 1, 3];
const people = [
   { id: 1, name: "Максим" },
   { id: 2, name: "Николай" },
   { id: 3, name: "Ангелина" },
   { id: 4, name: "Виталий" },
];

const result = giveTalonsInOrder(ordersArr, people);
console.log(result);
