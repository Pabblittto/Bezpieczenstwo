const zad3Kodowanie = function(){
    let slowo = document.getElementById("inputZad3").value;
    let N = Number.parseInt(document.getElementById("numberNZad3").value);
    let dlugosc = slowo.length;
    let KOD="";

    // tu kod napisać
    document.getElementById("zad3Code").innerHTML = KOD
}



const zad3Odszyfrowanie = function(){
    let slowo = document.getElementById("inputOdszZad3").value;
    let tablicaZnakow = slowo.split('');
    let dlugosc = slowo.length;
    let N = Number.parseInt(document.getElementById("numberNOdszZad3").value);
    let WYNIK = ""
    //mtu kod napisać

    document.getElementById("zad3Result").innerHTML = WYNIK;
}