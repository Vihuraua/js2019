var money = prompt("Ваш бюджет на месяц?");
var time = prompt("Введите дату в формате YYYY-MM-DD", "2019-06-12");

var statya1 = prompt("Введите обязательную статью расходов в этом месяце", "");
var obhod1 = prompt("Во сколько обойдется?", "");
var statya2 = prompt("Введите обязательную статью расходов в этом месяце", "");
var obhod2 = prompt("Во сколько обойдется?", "");

var appData = {
    'budget': money,
    'timeData': time,
    'expenses' : {
        'one' : statya1 + " : " + obhod1,
        'two' : statya2 + " : " + obhod2,
    },
    'optionalExpenses' : '',
    'income': [],
    'savings': false
};

alert(money / 30);