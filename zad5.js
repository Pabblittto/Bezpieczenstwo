const zad5Kodowanie = function(){
    let slowo = document.getElementById("inputZad5").value;
    let N = Number.parseInt(document.getElementById("numberNZad5").value);
    let dlugosc = slowo.length;
    let KOD="";

    // tu kod napisać
    document.getElementById("zad5Code").innerHTML = KOD
}



const zad5Odszyfrowanie = function(){
    let slowo = document.getElementById("inputOdszZad5").value;
    let tablicaZnakow = slowo.split('');
    let dlugosc = slowo.length;
    let N = Number.parseInt(document.getElementById("numberNOdszZad5").value);
    let WYNIK = ""
    //mtu kod napisać

    document.getElementById("zad5Result").innerHTML = WYNIK;
}