const zad4Kodowanie = function(){
    let slowo = document.getElementById("inputZad4").value;
    let N = Number.parseInt(document.getElementById("numberNZad4").value);
    let dlugosc = slowo.length;
    let KOD="";

    // tu kod napisać
    document.getElementById("zad4Code").innerHTML = KOD
}



const zad4Odszyfrowanie = function(){
    let slowo = document.getElementById("inputOdszZad4").value;
    let tablicaZnakow = slowo.split('');
    let dlugosc = slowo.length;
    let N = Number.parseInt(document.getElementById("numberNOdszZad4").value);
    let WYNIK = ""
    //mtu kod napisać

    document.getElementById("zad4Result").innerHTML = WYNIK;
}