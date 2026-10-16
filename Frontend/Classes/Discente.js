class Discente extends  Usuario { // Herda os atributos
    GerarPainelResumo() {
        return `Perfil: Discente
    Nome: ${this.nome}
    E-mail: ${this.email}`;
    }
}