let i = 0;
while (i < 3) {
    console.log(i);
    i++;
}

let j = 0;
do {
    if (j == 0) {
        console.log('this code is goin to be executed at least once');
    }
    else{
        console.log(j);
    }
    j+= 1;
}
while (j < 3)