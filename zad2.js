const zad2Kodowanie = function(){
    let slowo = document.getElementById("inputZad2").value;
    let slowoWTablicy = slowo.split('');
    let Klucz = document.getElementById("numberNZad2").value;
    let dlugoscKlucza= Math.ceil(Klucz.length/2);
    let dlugosc = slowo.length;
    let KOD="";
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
    
    let wartosciKlucza = new Array(); 
    let kluczWTablicy = Klucz.split('');
    for(let k=0; k<dlugoscKlucza*2; k+=2){//wartosci klucza wsadzamy to tablicy
        wartosciKlucza.push(Number.parseInt(kluczWTablicy[k]));
    }

    let znak;
    wskaznik=-1;// przelatujemy przez macierz i pobieramy konkretne liteki według klucza
    for(let l=0; l<dlugosc;l++){

        wskaznik++;
        znak = macierz[wartosciKlucza[wskaznik]-1].shift();
        if(znak!=undefined)
            KOD+=znak;
        else{
            l--;
        }

        if(wskaznik==dlugoscKlucza-1)
            wskaznik=-1;
    }

    // tu kod napisać
    document.getElementById("zad2Code").innerHTML = KOD
}



const zad2Odszyfrowanie = function(){
    let slowo = document.getElementById("inputOdszZad2").value;
    let tablicaZnakow = slowo.split('');
    let dlugosc = slowo.length;
    let Klucz = document.getElementById("numberNOdszZad2").value
    let dlugoscKlucza= Math.ceil(Klucz.length/2);
    let WYNIK = ""
    let macierz= new Array(dlugoscKlucza)

    //mtu kod napisać

    document.getElementById("zad2Result").innerHTML = WYNIK;
}