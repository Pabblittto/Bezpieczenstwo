const zad2Kodowanie = function(){
    let slowo = document.getElementById("inputZad2").value;
    let N = Number.parseInt(document.getElementById("numberNZad2").value);
    let dlugosc = slowo.length;
    let KOD="";

    // tu kod napisać
    document.getElementById("zad2Code").innerHTML = KOD
}



const zad2Odszyfrowanie = function(){
    let slowo = document.getElementById("inputOdszZad2").value;
    let tablicaZnakow = slowo.split('');
    let dlugosc = slowo.length;
    let N = Number.parseInt(document.getElementById("numberNOdszZad2").value);
    let WYNIK = ""
    //mtu kod napisać

    document.getElementById("zad2Result").innerHTML = WYNIK;
}