let heroi = "Marcos";
let xp = 1000;
let nivelDoHeroi;
switch(true){
    case xp <= 1000:
        nivelDoHeroi = "Ferro";
        break;
    case xp <= 2000:
        nivelDoHeroi = "Bronze";
        break;
    case xp <= 5000:
        nivelDoHeroi = "Prata";
        break;
    case xp <= 7000:
        nivelDoHeroi = "Ouro";
        break;
    case xp <= 8000:
        nivelDoHeroi = "Platina";
        break;
    case xp <= 9000:
        nivelDoHeroi = "Ascendente";
        break;
    case xp <= 10000:
        nivelDoHeroi = "Imortal";
        break;
    case xp >= 10001:
        nivelDoHeroi = "Radiante";
        break;
}
console.log( "O Herói de nome " + heroi + " está no nível de " + nivelDoHeroi )