document.addEventListener('DOMContentLoaded', function () {

    //wypisuje liczby od 1 do 100;
    let res1 = document.getElementById('result1');
    let text = "";
    for (let i = 1; i <= 100; i++) {
        text += i + " ";
    }
    res1.innerHTML = text;

    //wypisz liczby od 8 do 50
    let res2 = document.getElementById('result2');
    let text2 = "";
    for (let j = 8; j <= 50; j++) {
        text2 += j + " ";
    }

    res2.innerHTML = text2;

    //wypisz liczby od 2 do 50 parzyste
    let res3 = document.getElementById('result3');
    let text3 = "";

    for (let y = 2; y <= 50; y++) {
        if (y % 2 === 0) {
            text3 += y + " ";
        }

    }
    res3.innerHTML = text3;

    //wypisz liczby od 100 do 1
    let res4 = document.getElementById('result4');
    let text4 = "";

    for (let x = 100; x >= 1; x--) {
        text4 += x + " ";
    }

    res4.innerHTML = text4;

    //wypisz liczby podzielne przez 8 ( w zakresie 1..100)
    let res5 = document.getElementById("result5");
    let text5 = "";
    for (let i = 1; i <= 100; i++) {
        if (i % 8 === 0) {
            text5 += i + " ";
        }
    }
    res5.innerHTML = text5;

    //wypisz liczby podzielne przez 3 lub 5 ( w zakresie 1..100) 
    let res6 = document.getElementById('result6');
    let text6 = "";
    for (let i = 1; i <= 100; i++) {
        if ((i % 3 === 0) || (i % 5 === 0)) {
            text6 += i + " ";
        }
    }
    res6.innerHTML = text6;

    //wypisz liczby podzielne przez 3 albo 5 ( w zakresie 1..100) (nie wypisuj tych podzielnych jednocześnie przez 3 i 5)
    let res7 = document.getElementById('result7');
    let text7 = "";

    for (let i = 1; i <= 100; i++) {
        if ((i % 3 === 0) ^ (i % 5 === 0)) {
            text7 += i + " ";
        }
    }
    res7.innerHTML = text7;

    //wypisz największą liczbę niepodzielną przez 2,3,5,7 ale mniejszą od 1000

    let res8 = document.getElementById('result8');
    let text8 = "";

    for (let i = 1000; i >= 0; i--) {
        if ((i % 2 != 0) && (i % 3 != 0) && (i % 5 != 0) && (i % 7 != 0)) {
            text8 += i + " ";
            break;
        }

    }
    res8.innerHTML = text8;

    //sprawdź czy podana jako parametr liczba jest liczbą pierwszą. (podzielna tylko przez 1 i przez samą siebie)

    let res9 = document.getElementById('result9');
    let text9 = "";
    function checkNum(a) {

        for (let i = 2; i <= a - 1; i++) {
            if (a % i === 0) {
                res9.innerHTML = a + " nie jest liczbą pierwszą";
                return false;
            }

        }
        res9.innerHTML = a + " to jest liczba pierwsza";
        return true

    }

    checkNum(53);

    //wylicz największy wspólny dzielnik 2 liczb podanych jako parametry
    let res10 = document.getElementById('result10');
    let text10 = "";

    function checkTwoNum(a, b) {
        var arr = [];
        if (a > b) {
            for (let i = 1; i < a; i++) {
                if ((a % i === 0) && (b % i === 0)) {
                    arr.push(i);
                }
            }
        } else {
            for (let i = 1; i < b; i++) {
                if ((a % i === 0) && (b % i === 0)) {
                    arr.push(i);
                }
            }
        }

        text10 = Math.max(...arr);
        res10.innerHTML = text10;
    }


    checkTwoNum(280, 150);

    //wylicz najmniejszą wspólną wielokrotność liczb podanych jako parametry
    let res11 = document.getElementById('result11');
    let text11 = "";

    function nww(a, b) {
        if (a > b) {
            if (a % b === 0) {
                text11 = a;
            } else {
                text11 = a * b;
            }
        } else {
            if (b % a === 0) {
                text11 = b;
            } else {
                text11 = a * b;
            }
        }
        res11.innerHTML = text11;
    }

    nww(2, 2);

    //sprawdź czy podana jako parametr liczba jest parzysta
    let res12 = document.getElementById('result12');
    let text12 = "";

    function oddNum(a) {
        if (a % 2 === 0) {
            text12 = a + " jest liczbą parzystą";
        } else {
            text12 = a + " - to nie jest liczba parzysta";
        }
        res12.innerHTML = text12;
    }

    oddNum(4);

    //ile jest liczb pierwszych w zakresie od a do b podanym jako parametry

    let res13 = document.getElementById('result13');
    let text13 = "";

    function checkBetweenNum(a, b) {
        let pierwsze = [1, 2];
        let licz = 2;
        let wynik=[];

        for (let i=1;i<3;i++){
            if(i>=a) {
                wynik.push(i)
            };
        }

        for (let i=3; i<=b; i++) {
            
            let dzielnik = 0;

            for (let j=1; j<licz; j++) {
                if (i%pierwsze[j] == 0) {
                    dzielnik++;
                }
            }
            
            if (dzielnik == 0) {
                pierwsze.push(i);
                licz++;
                if(i>=a) {
                    wynik.push(i)
                };
            }

        }

        text13 = wynik.length;
        res13.innerHTML = text13;
    };

    checkBetweenNum(5, 10);

    //sprawdź czy 2 liczby podane jako parametr są liczbami względnie pierwszymi.

    let res14 = document.getElementById("result14");
    
    function checkTwo (c, d) {
        
        let x;
        if(c>d) {
            x=d;
         } else {
             x=c;
         } //ustalenie ktora z liczb jest mniejsza i przypisanie jej do zmiennej x
        let onlyFirst = "te liczby są względnie pierwsze";//stworzenie zmiennej ustawionej domyslnie na "true"
        for(let i=2; i<=x; i++) {
            if((c%i===0) && (d%i===0)) {
                onlyFirst="te liczby nie są wzglednie pierwsze";
                break; //jezeli petla znajdzie wspolny dzielnik
            }          //zmien zmienna na false
        }
        res14.innerHTML = onlyFirst; //wyswietl zmienna pokazujaca aktualny wynik
    }

    checkTwo(20, 7);


    //sprawdź czy pesel ( jako parametr) jest prawidłowym peselem (tutaj opis)

    let res15 = document.getElementById("result15");
    let text15;
    function checkPesel(str) {
        let sum;
        sum = 1*str[0] + 3*str[1] + 7*str[2] + 9*str[3] + 1*str[4] + 3*str[5] + 7*str[6] + 9*str[7] + 1*str[8] + 3*str[9] +1*str[10];
        
        let ok;
        if(sum%10 === 0) {
            ok = "PESEL jest poprawny";
        } else {
            ok = "to nie jest dobry pesel"
        }
        res15.innerHTML = ok;
        console.log(sum)
    }

    checkPesel("88070405110")
    //oblicz silnię n (n – podane jako parametr) (tutaj opis)
    //oblicz n-tą liczbę ciągu fibonacciego (n – podane jako parametr) (tutaj opis)
    //oblicz n-tą liczbę pierwszą (n – podane jako parametr)
})  
