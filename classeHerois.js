//Projeto => Desafio do felipão da DIO

class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    //Definindo a clase do heroi e seu ataque.

    switch (this.tipo) {
      case "guerreiro":
        ataque = "a espada.";
        break;
      case "mago":
        ataque = "a magia.";
        break;
      case "monge":
        ataque = "as artes marciais.";
        break;
      case "ninja":
        ataque = "a shuriken.";
        break;

      default:
        ataque = "não realizou ataque";
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

//Istância para a clase heroi

const heroi1 = new Heroi("Tomps", 29, "guerreiro");
const heroi2 = new Heroi("Uriel", 127, "mago");
const heroi3 = new Heroi("Monxya", 46, "monge");
const heroi4 = new Heroi("Nagato", 32, "ninja");

//Chamando o metodo atacar para cada heroi.

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();
