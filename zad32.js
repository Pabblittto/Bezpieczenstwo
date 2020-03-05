const zad32Kodowanie = function(){
    let slowo = document.getElementById("inputZad32").value;
    let klucz = document.getElementById("numberNZad32").value;
    let dlugosc = slowo.length;
    let KOD = "";
    let slowoWTablicy = slowo.split('');
    let kluczLiczbowy = tworzenieKluczaLiczbowego(klucz);



    document.getElementById("zad32Code").innerHTML = KOD
}



const zad32Odszyfrowanie = function(){
    let slowo = document.getElementById("inputOdszZad32").value;
    let tablicaZnakow = slowo.split('');
    let dlugosc = slowo.length;
    let klucz = document.getElementById("numberNOdszZad32").value;
    let WYNIK = "";
    let kluczLiczbowy = tworzenieKluczaLiczbowego(klucz);


    document.getElementById("zad32Result").innerHTML = WYNIK;
}