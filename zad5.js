let alphabet = "abcdefghijklmnoprstuwyz_";
let alphabetTable = alphabet.split('');
const literkaNaPozycji = function(literaKod,literaWiadomosc){
    let pozycjaLiterkiKodu;
    for(let i=0; i<alphabet.length;i++){
        if(alphabetTable[i] == literaKod.toLowerCase()){
            pozycjaLiterkiKodu = i;
        }
    }

    let pozycjaLiterkiWiadomosci;

    for(let j=0;j<alphabet.length;j++){
        if(alphabetTable[j] == literaWiadomosc.toLowerCase()){
            pozycjaLiterkiWiadomosci = j;
        }
    }

    return alphabetTable[(pozycjaLiterkiKodu+pozycjaLiterkiWiadomosci)%alphabet.length]
}

const zad5Kodowanie = function(){
    let slowo = document.getElementById("inputZad5").value;
    let Klucz = document.getElementById("numberNZad5").value;
    let dlugosc = slowo.length;
    let KOD="";

    if(Klucz.length != slowo.length){
        let tmp="";
        let licznik = -1;
        for(let i=0; i<slowo.length; i++){
            licznik++;
            tmp+=Klucz[licznik];

            if(licznik==Klucz.length-1)
                licznik=-1;
        }
        Klucz=tmp;
    }
        

    for(let i=0;i<dlugosc;i++){
        KOD+=literkaNaPozycji(slowo[i],Klucz[i])
    }
    // tu kod napisać
    document.getElementById("zad5Code").innerHTML = KOD
}


const zad5Odszyfrowanie = function(){
    let slowo = document.getElementById("inputOdszZad5").value;
    let tablicaZnakow = slowo.split('');
    let dlugosc = slowo.length;
    let Klucz = document.getElementById("numberNOdszZad5").value;
    let WYNIK = ""

    if(Klucz.length != slowo.length){
        let tmp="";
        let licznik = -1;
        for(let i=0; i<slowo.length; i++){
            licznik++;
            tmp+=Klucz[licznik];

            if(licznik==Klucz.lenght-1)
                licznik=-1;
        }
        Klucz=tmp;
    }

    for(let i=0 ; i < dlugosc ; i++){

        let pozycjaLiterkiKlucza;
        for(let j=0; j<alphabet.length;j++){
            if(alphabetTable[j] == Klucz[i].toLowerCase()){
                pozycjaLiterkiKlucza = j;
            }
        }

        let pozycjaLiterkiWiadomosci;
        for(let j=0;j<alphabet.length;j++){
            if(alphabetTable[j] == slowo[i].toLowerCase()){
                pozycjaLiterkiWiadomosci = j;
            }
        }

        let tmp = pozycjaLiterkiWiadomosci-pozycjaLiterkiKlucza;
        if(tmp<0)
            WYNIK+= alphabetTable[alphabet.length+tmp];
        else
            WYNIK+= alphabetTable[tmp%alphabet.length];
        

    }
    //mtu kod napisać

    document.getElementById("zad5Result").innerHTML = WYNIK;
}