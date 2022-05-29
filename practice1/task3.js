function printSeasonByMonth(month) {
    // Write code here
    switch (month) {
        case 'JANUARY':
        case 'FEBRUARY':
        case 'DECEMBER':
            console.log('winter');
            break;
        case 'MARCH':
        case 'APRIL':
        case 'MAY':
            console.log('spring');
            break;
        case 'JUNE':
        case 'JULY':
        case 'AUGUST':
            console.log('summer');
            break;
        case 'SEPTEMBER':
        case 'OCTOBER':
        case 'NOVEMBER':
            console.log('autumn');
            break;
        default:
            console.log('invalid input');
    }
}

printSeasonByMonth("SEPTEMBER");
printSeasonByMonth("NOVEMBER");
printSeasonByMonth("JULY");
printSeasonByMonth("APRIL");
