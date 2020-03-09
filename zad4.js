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
    let result = { phi: 1, coprimes: [1] };
    for (let i = 2; i < n; i++) {
        if (GCD(i, n) == 1) {
            result.phi += 1;
            result.coprimes.push(i);
        }
    }
    return result.phi;
}

function mod(n, m) {
    return BigInt(((n % m) + m) % m);
}
function modulo(divident, divisor) {
    var partLength = 10;

    while (divident.length > partLength) {
        BigInt(part = divident.substring(0, partLength));
        divident = (part % divisor) + divident.substring(partLength);
    }

    return BigInt(divident % divisor);
}


let alfabetnowy = "abcdefghijklmnoprstuwyz_śćź";
let alfabetTablica1 = alfabetnowy.split('');


function pozycjaLiterkiwAlfabecie(literka) {
    let pozycjaLiterki;
    for (let i = 0; i < alfabetnowy.length; i++) {
        if (alfabetTablica1[i] == literka.toLowerCase()) {
            pozycjaLiterki = i;
        }
    }
    return pozycjaLiterki;
}

function potega(podstawa, wykladnik) {
    let wynik = BigInt(1);

    for (let i = 0; i < wykladnik; i++)
        wynik *= podstawa;

    return wynik;
}

const zad4Kodowanie = function () {
    let slowo = document.getElementById("inputZad4").value;
    let K1 = Number.parseInt(document.getElementById("numberNZad4").value);
    let K2 = Number.parseInt(document.getElementById("number2NZad4").value);
    let dlugosc = slowo.length;
    let KOD = "";

    for (let i = 0; i < dlugosc; i++) {
        KOD += alfabetTablica1[mod((pozycjaLiterkiwAlfabecie(slowo[i]) * K2) + K1, alfabetnowy.length)];
    }

    // tu kod napisać
    document.getElementById("zad4Code").innerHTML = KOD
}

const zad4Odszyfrowanie = function () {
    let slowo = document.getElementById("inputOdszZad4").value;
    let tablicaZnakow = slowo.split('');
    let dlugosc = slowo.length;
    let K1 = Number.parseInt(document.getElementById("numberNOdszZad4").value);
    let K2 = Number.parseInt(document.getElementById("number2NOdszZad4").value);
    let WYNIK = ""
    let a, b;
    let k1dofi;
    //mtu kod napisać

    for (let i = 0; i < dlugosc; i++) {
        k1dofi = BigInt(potega(BigInt(K2), BigInt(Phi(alfabetnowy.length) - 1)));
        //console.log(BigInt(potega(BigInt(17), BigInt(21))))
        a = BigInt(BigInt(pozycjaLiterkiwAlfabecie(slowo[i]) + (alfabetnowy.length - K1)) * k1dofi);
        b = BigInt(alfabetnowy.length);
        WYNIK += alfabetTablica1[mod(a, b)];
    }

    document.getElementById("zad4Result").innerHTML = WYNIK;
}