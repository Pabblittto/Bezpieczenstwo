const zad1Kodowanie = function(){
    let slowo = document.getElementById("input").value;
    let N = Number.parseInt(document.getElementById("numberN").value);
    let dlugosc = slowo.length;
    let KOD="";

    let podstawowaTablica = new Array();
    for(let i=0;true;i++){// zawiera indeksy wszystkich szczytów + szczyt wirtualny 
        if(slowo[i*2*(N-1)]!=undefined){
            podstawowaTablica.push(i*2*(N-1));
            KOD+=slowo[i*2*(N-1)];
        }else{
            podstawowaTablica.push(i*2*(N-1));
            break;
        }        
    }

    for(let j=1;j<N;j++){// dla każdej liczby lecimy piramidką w dół
        for(let i=0;i<podstawowaTablica.length;i++ ){
            let tmp=podstawowaTablica[i]-j;
            if(tmp>0 && tmp<dlugosc)
                KOD+=slowo[tmp];

            tmp= podstawowaTablica[i]+j;
            if(tmp>0 && tmp<dlugosc && j!=N-1)// żeby ostatnie litery liczyły się tylko raz
                KOD+=slowo[tmp];
        }
    }

    document.getElementById("zad1Code").innerHTML = KOD
}

const zad1Odszyfrowanie = function(){
    let slowo = document.getElementById("inputOdsz").value;
    let dlugosc = slowo.length;
    let N = Number.parseInt(document.getElementById("numberNOdsz").value);
    let WYNIK = "";

    



    document.getElementById("zad1Result").innerHTML = WYNIK;
}