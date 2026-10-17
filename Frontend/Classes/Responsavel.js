class Responsavel extends Usuario {
    #parentesco;

    constructor(id, nome, email, senha, parentesco) {
        super(id, nome, email, senha);
        this.#parentesco = parentesco;
    }

    ObterTipoPerfil() {
        return "Responsável";
    }

    GerarPainelResumo() {
        return `Perfil: ${this.ObterTipoPerfil()}
ID: ${this.id}
Nome: ${this.nome}
E-mail: ${this.email}
Parentesco: ${this.#parentesco}`;
    }
}