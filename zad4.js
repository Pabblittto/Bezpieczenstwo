function GCD(a, b) {
    while (b != 0) {
            let t = b;
            b = a % b;
            a = t;
    }
    return a;
}    
    
    // Euler’s Totient Function
    function Phi(n) {
        let result = {phi:1, coprimes: [1]};
        for (let i = 2; i < n; i++) {
                if (GCD(i, n) == 1) {
                        result.phi += 1;
                        result.coprimes.push(i);
                }
        }
        return result.length;
    }

// let alphabet = "abcdefghijklmnopqrstuvwxyz";
// let alphabetTable = alphabet.split('');


function pozycjaLiterkiwAlfabecie(literka){
    let pozycjaLiterki;
    for(let i=0; i<alphabet.length;i++){
        if(alphabetTable[i] == literka.toLowerCase()){
            pozycjaLiterki = i;
        }
    }
    return pozycjaLiterki;
}

const zad4Kodowanie = function(){
    let slowo = document.getElementById("inputZad4").value;
    let K1 = Number.parseInt(document.getElementById("numberNZad4").value);
    let K2 = Number.parseInt(document.getElementById("number2NZad4").value);
    let dlugosc = slowo.length;
    let KOD="";

    for(let i=0;i<dlugosc;i++){
        let tmp = pozycjaLiterkiwAlfabecie(slowo[i])*K2+K1;
        if(tmp<0)
            KOD+=alphabetTable[alphabet.length-tmp];
        else
            KOD+=alphabetTable[tmp%alphabet.length];
    }

    // tu kod napisać
    document.getElementById("zad4Code").innerHTML = KOD
}



const zad4Odszyfrowanie = function(){
    let slowo = document.getElementById("inputOdszZad4").value;
    let tablicaZnakow = slowo.split('');
    let dlugosc = slowo.length;
    let K1 = Number.parseInt(document.getElementById("numberNOdszZad4").value);
    let K2 = Number.parseInt(document.getElementById("number2NOdszZad4").value);
    let WYNIK = ""
    //mtu kod napisać

    for(let i=0;i<dlugosc;i++){
        let tmp = (pozycjaLiterkiwAlfabecie(slowo[i])+(alphabet.length-K1))*Math.pow(K2,Phi(alphabet.length)-1);
        if(tmp<0)
            WYNIK+=alphabetTable[alphabet.length-tmp];
        else
            WYNIK+=alphabetTable[tmp%alphabet.length];
    }

    document.getElementById("zad4Result").innerHTML = WYNIK;
}