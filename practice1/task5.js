let centimeters = 15;
switch (centimeters){
case 5:
    console.log('Small');
    break;
    case 15:
        console.log ('Medium');
        break;
        case 20: 
        console.log ('Huge');
        break;

}

let centimeterss = 25;

if (centimeterss === 5){
centimeterss = 'Small';
} else if (centimeterss === 15){
centimeterss = 'Medium';
} else if (centimeterss === 20){
centimeterss = 'Huge';
} else {
    console.log('error');
}



for (let counter = 1;counter <= 5;counter=counter+2){
    console.log('Встань');
    console.log('Сядь');
}

names = ['Vitalik', 'Yulia', 'Anastasia'];
money = [1000, 5000, 6000];

YanaMoney = 0;
for (let counterr = 0; counterr < 3; counterr = counterr +1){
console.log (names[counterr]+' в шоці від того шо Yana віджала у нього '+ money[counterr]);
YanaMoney = YanaMoney + money[counterr];
money[counterr]=0;
}