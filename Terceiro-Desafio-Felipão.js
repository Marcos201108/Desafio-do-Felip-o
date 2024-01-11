class heroi{
    constructor(tipo, nome, idade){
        this.classe = tipo
        this.nome = nome
    	this.idade = idade


        if(this.classe === "guerreiro"){
            this.ataque = "espada"
        }
        else if(this.classe === "mago"){
            this.ataque = "magia"
        }
        else if(this.classe === "monge"){
            this.ataque = "artes marciais"
        }
        else if (this.classe === "ninja"){
            this.ataque = "shuriken"
        }
    }
    definirAtaque(){
        console.log(`O ${this.classe} atacou usando ${this.ataque}`)
    }
}

let guerreiro = new heroi("guerreiro")
let mago = new heroi("mago")
let monge = new heroi("monge")
let ninja = new heroi("ninja")

guerreiro.definirAtaque()
mago.definirAtaque()
monge.definirAtaque()
ninja.definirAtaque()