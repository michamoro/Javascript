//label and break
function labelAndBreak() {
    var a = 1, b = 1;
    labelLoopExam: while (true) {
        a += 1;
        b = 1;
        console.log('principal ' + a);
        while (true) {
            console.log('anidado ' + b);
            b++;
            if (b === 10 && a === 10) {
                break labelLoopExam;
            }
            else if (b === 10) {
                break;
            }
        }
    }
    console.log('finish');
}
// continue
function continueFoo() {
    var c = 0;
    var d = 0;
    while (c < 10) {
        c++;
        if (c % 2 === 0) {
            console.log('continue value: ' + c);
            continue;
        }
        console.log('NO-continue value: ' + c);
        d += c;
    }
    console.log('continue final: '.concat(d));
}

// continue + label
function exampleMDN() {
    var i = 0;
    var j = 10;
    checkiandj:
    while (i < 4) {
        console.log(i);
        i += 1;
        checkj:
        while (j > 4) {
            console.log(j);
            j -= 1;
            if ((j % 2) == 0) {
                continue checkj;
            }
            console.log(j + " is odd.");
        }
        console.log("i = " + i);
        console.log("j = " + j);
    }
}

exampleMDN();