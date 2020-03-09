const zad2Kodowanie = function () {
    let slowo = document.getElementById("inputZad2").value;
    let slowoWTablicy = slowo.split('');
    let Klucz = document.getElementById("numberNZad2").value;

    let dlugosc = slowo.length;
    let KOD = "";
    let wartosciKlucza = Klucz.split('-')
    let dlugoscKlucza = wartosciKlucza.length;
    let macierz = new Array(dlugoscKlucza);


    for (let i = 0; i < dlugoscKlucza; i++) {
        macierz[i] = [];
    }

    let wskaznik = -1;
    for (let j = 0; j < dlugosc; j++) {// tworzymy macierz 
        wskaznik++;
        macierz[wskaznik].push(slowoWTablicy.shift());
        if (wskaznik == dlugoscKlucza - 1)
            wskaznik = -1;// resetowanie wskaznika
    }



    let znak;
    wskaznik = -1;// przelatujemy przez macierz i pobieramy konkretne liteki według klucza
    for (let l = 0; l < dlugosc; l++) {

        wskaznik++;
        znak = macierz[wartosciKlucza[wskaznik] - 1].shift();
        if (znak != undefined)
            KOD += znak;
        else {
            l--;
        }

        if (wskaznik == dlugoscKlucza - 1)
            wskaznik = -1;
    }

    // tu kod napisać
    document.getElementById("zad2Code").innerHTML = KOD
}



const zad2Odszyfrowanie = function () {
    let slowo = document.getElementById("inputOdszZad2").value;
    let tablicaZnakow = slowo.split('');
    let dlugosc = slowo.length;
    let klucz = document.getElementById("numberNOdszZad2").value

    let WYNIK = ""
    let wartosciKlucza = klucz.split('-')
    let dlugoscKlucza = wartosciKlucza.length;
    let tablicaPomocnicza = new Array(dlugoscKlucza)


    let znak;
    let iloscWierszy = Math.ceil(dlugosc / dlugoscKlucza);
    for (let i = 0; i < iloscWierszy; i++) {// zapełniamy macierz całymi wierszami
        if (i != iloscWierszy - 1) {
            for (let j = 0; j < dlugoscKlucza; j++) {
                tablicaPomocnicza[wartosciKlucza[j] - 1] = tablicaZnakow.shift();
            }

            for (let k = 0; k < dlugoscKlucza; k++) {
                znak = tablicaPomocnicza[k];
                if (znak != undefined)
                    WYNIK += znak;
            }
        }
        else {
            let iloscResztki = tablicaZnakow.length;// pokazuje ile literek zostalo
            for (let j = 0; j < dlugoscKlucza; j++) {
                if (wartosciKlucza[j] > iloscResztki) {
                    tablicaPomocnicza[wartosciKlucza[j] - 1] = undefined;
                    // jezeli wartosc klucza jest wieksza niz ilosc literek ktore zostały to daj undefined- bo na pewno tam zadnej literki nie bylo
                } else {
                    tablicaPomocnicza[wartosciKlucza[j] - 1] = tablicaZnakow.shift();
                }
            }

            for (let k = 0; k < dlugoscKlucza; k++) {
                znak = tablicaPomocnicza[k];
                if (znak != undefined)
                    WYNIK += znak;
            }
        }
    }




    //mtu kod napisać

    document.getElementById("zad2Result").innerHTML = WYNIK;
}