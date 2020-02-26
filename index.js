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
    let tablicaZnakow = slowo.split('');
    let dlugosc = slowo.length;
    let N = Number.parseInt(document.getElementById("numberNOdsz").value);
    let WYNIK = ""

    //pierwszy for po liczbie literek i licznik % N oznaczjący 
    var macierz = new Array(N);// tworzymy tablice pustych tablic
    for(let i=0;i<N;i++){
        macierz[i]=[];
    }

    let iloscDzialow = Math.floor(dlugosc/(2*(N-1)));// ilosc lejkow 
    let resztkaDzialu = dlugosc%(2*(N-1));// ile krateczek dzialu pozostalo

    for(let i=1;i<=N;i++){// tworzenie tablic
        let iloscLiterek=0;

        if(i!=N && i!=1)
            iloscLiterek=iloscDzialow*2;
        else
            iloscLiterek=iloscDzialow;
            
        if(resztkaDzialu!=0){
            let resztaLiterek=0;
            if(resztkaDzialu>((i-1)+2*(N-i)) && i!=N)
                resztaLiterek = 2;
            else if(resztkaDzialu>(i-1))
                resztaLiterek = 1;

            iloscLiterek+=resztaLiterek;
        }

        for(let j=0;j<iloscLiterek;j++){
            macierz[i-1].push(tablicaZnakow.shift())
        }
    }

    let tmpIndex=1; // index tablicy który jest brany pod uwage
    let kierunek=false;//true oznacza dodawanie, false odejmowanie
    do{
        let wczytana;

        wczytana=macierz[tmpIndex-1].shift();

        if(tmpIndex==1)
            kierunek=true;
        
        if(tmpIndex==N)
            kierunek=false;

        if(kierunek)
            tmpIndex++;
        else
            tmpIndex--;

        if(wczytana!=undefined)
            WYNIK+=wczytana;
        else
            break;


    }while(true)




    document.getElementById("zad1Result").innerHTML = WYNIK;
}