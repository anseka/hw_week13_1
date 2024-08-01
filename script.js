let when = document.querySelector('#when');
let button = document.querySelector('button');
let bth = document.querySelector('#bday');
let days = document.querySelector('#days');
let result = document.querySelector('#result');
let error = document.querySelector('#error');

button.addEventListener('click', function () {
    error.textContent = ``;
    days.textContent = ``;

    if (bth.value == '') {
        error.textContent = `Вы не ввели дату!`
        return;
    } 

    let birthDate = new Date(bth.value); // преобразуем инпут в дату
    let currentDate = new Date(); // получили текущую местную дату компа
    let currentYear = currentDate.getFullYear(); // получили текущий год
    let yearBth = birthDate;
    yearBth.setFullYear(currentYear);
    let diffInMilliseconds = 0;

        if (yearBth > currentDate) {
            diffInMilliseconds = yearBth - currentDate; // вычисляем разницу между датой рождения текущего года и сегодняшней датой
            }
            else if (yearBth.getUTCMilliseconds == currentDate.getUTCMilliseconds) {
            days.textContent = `C Днем Рождения!`;
            return;
            }
        else {
        currentYear++;
        yearBth.setFullYear(currentYear);
        diffInMilliseconds = yearBth - currentDate;  
        }
    let milisecondsPass = new Date(diffInMilliseconds); // сконвертировали разницу в дату
    let dayPass = Math.round(milisecondsPass/ (1000 * 60 * 60 * 24)); // округлили дни
    days.textContent = `До дня рождения осталось ${dayPass} дней`;
    return;
}
);