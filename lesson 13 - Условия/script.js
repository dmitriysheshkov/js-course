// if, else, swich, ?

if (true) {
    console.log('true');
} else {
    console.log('false');
}

if (5 == '5') {
    console.log('true');
} else {
    console.log('false');
}




(5 == '5') ? console.log('true') : console.log('false'); // => true
(5 === '5') ? console.log('true') : console.log('false'); // => false



// в конструкции switch уловие проверяется только на строгое соответсвие. 5 == '5' - будет false
let num = 50;

switch (num) {
    case 49: 
        console.log('no!');
        break;
    case 100: 
        console.log('no!');
        break;
    case 37: 
        console.log('no!');
        break;
    case 30: 
        console.log('no!');
        break;
    case 50: 
        console.log('yes!');
        break;
    default: 
        console.log('oh la la!');
        break;

}



