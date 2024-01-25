const nomeHeroi = "Galactus";


function ranquearPartidas(vitorias, derrotas){
    let pontos = vitorias - derrotas

    if(pontos <=10){
        console.log( `o Herói ${nomeHeroi} tem saldo de ${pontos} e esta no nivel Ferro`);
    }else if(pontos >=11 && pontos <= 20){
        console.log(`o Herói ${nomeHeroi} tem saldo de ${pontos} e esta no nivel Bronze`);
    }else if(pontos >=21 && pontos <= 50){
        console.log(`o Herói ${nomeHeroi} tem saldo de ${pontos} e esta no nivel Prata`);
    }else if(pontos >=51 && pontos <= 80){
        console.log(`o Herói ${nomeHeroi} tem saldo de ${pontos} e esta no nivel Ouro`);
    }else if(pontos >=81 && pontos <= 90){
        console.log(`o Herói ${nomeHeroi} tem saldo de ${pontos} e esta no nivel Diamante`);
    }else if(pontos >= 91 && pontos <= 100){
        console.log(`o Herói ${nomeHeroi} tem saldo de ${pontos} e esta no nivel Lendário`);
    }else {
        console.log(`o Herói ${nomeHeroi} tem saldo de ${pontos} e esta no nivel Imortal`);
    }



}

ranquearPartidas(200,100);