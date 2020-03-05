let zad3alphabet = 'abcdefghijklmnoprstuwyz';
let zad3alphatetInArray = zad3alphabet.split('');

function tworzenieKluczaLiczbowego(klucz){// funkcja zwraca tablice z kolejnymi wartościamiklucza
    let kluczInArray = klucz.toLowerCase().split('');
    let kluczLiczbowy = new Array(klucz.length);
    let liczba=1;
    for(let i=0;i<zad3alphabet.length;i++){
        for(let j=0;j<klucz.length;j++){
            if(kluczInArray[j]==zad3alphatetInArray[i])//if letters are the same put liczba in array
            {
                kluczLiczbowy[j]=liczba;
                liczba++;
            }
        }
    }

    return kluczLiczbowy;
}

const zad3Kodowanie = function(){
    let slowo = document.getElementById("inputZad3").value;
    let klucz = document.getElementById("numberNZad3").value;
    let dlugosc = slowo.length;
    let KOD="";
    let kluczLiczbowy = tworzenieKluczaLiczbowego(klucz);
    let slowoWTablicy = slowo.split(''); 

    let dlugoscKlucza = kluczLiczbowy.length;

    let macierz= new Array(dlugoscKlucza)
    for(let i=0;i<dlugoscKlucza;i++){
        macierz[i]=[];
    }

    let wskaznik=-1;
    for(let j=0;j<dlugosc;j++){// tworzymy macierz 
        wskaznik++;
        macierz[wskaznik].push(slowoWTablicy.shift());
        if(wskaznik==dlugoscKlucza-1)
            wskaznik=-1;// resetowanie wskaznika
    }
     

    let znak;
    wskaznik=-1;// przelatujemy przez macierz i pobieramy konkretne liteki według klucza
    for(let l=0; l<dlugosc;l++){

        wskaznik++;
        znak = macierz[kluczLiczbowy[wskaznik]-1].shift();
        if(znak!=undefined)
            KOD+=znak;
        else{
            l--;
        }

        if(wskaznik==dlugoscKlucza-1)
            wskaznik=-1;
    }
    

    // tu kod napisać
    document.getElementById("zad3Code").innerHTML = KOD
}



const zad3Odszyfrowanie = function(){
    let slowo = document.getElementById("inputOdszZad3").value;
    let tablicaZnakow = slowo.split('');
    let dlugosc = slowo.length;
    let klucz = document.getElementById("numberNOdszZad3").value;
    let WYNIK = "";
    //mtu kod napisać

    let kluczLiczbowy = tworzenieKluczaLiczbowego(klucz);

    let dlugoscKlucza = kluczLiczbowy.length;
    let tablicaPomocnicza= new Array(dlugoscKlucza)

    let znak;
    let iloscWierszy = Math.ceil(dlugosc/dlugoscKlucza);
    for(let i=0;i<iloscWierszy; i++){// zapełniamy macierz całymi wierszami
        if(i!=iloscWierszy-1){
            for(let j=0; j<dlugoscKlucza; j++ ){
                tablicaPomocnicza[kluczLiczbowy[j]-1] = tablicaZnakow.shift();
            }

            for(let k=0; k<dlugoscKlucza; k++){
                znak = tablicaPomocnicza[k];
                if(znak!=undefined)
                    WYNIK +=znak;
            }
        }
        else{
            let iloscResztki = tablicaZnakow.length;// pokazuje ile literek zostalo
            for(let j=0; j<dlugoscKlucza; j++ ){
                if(kluczLiczbowy[j]>iloscResztki){
                    tablicaPomocnicza[kluczLiczbowy[j]-1] = undefined;
                    // jezeli wartosc klucza jest wieksza niz ilosc literek ktore zostały to daj undefined- bo na pewno tam zadnej literki nie bylo
                }else{
                    tablicaPomocnicza[kluczLiczbowy[j]-1] = tablicaZnakow.shift();
                }
            }

            for(let k=0; k<dlugoscKlucza; k++){
                znak = tablicaPomocnicza[k];
                if(znak!=undefined)
                    WYNIK +=znak;
            }
        }
    }

    document.getElementById("zad3Result").innerHTML = WYNIK;
}