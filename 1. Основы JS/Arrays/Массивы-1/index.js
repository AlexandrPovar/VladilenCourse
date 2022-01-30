const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];

function giveParcel(name) {
    if (name = peopleWaiting.shift()) {
        return alert(`${name} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`);
    }
};

function leaveQueueWithoutParcel(name) {
    if (name = peopleWaiting.pop()) {
        return alert(`${name} не получил(а) посылку и ушел(ла) из очереди`);
    }
};

giveParcel();
giveParcel();
giveParcel();

leaveQueueWithoutParcel();
leaveQueueWithoutParcel();
leaveQueueWithoutParcel();
leaveQueueWithoutParcel();
