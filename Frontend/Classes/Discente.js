class Discente extends Usuario {
    #ra;
    #xpTotal = 0;

    constructor(id, nome, email, senha, ra) {
        super(id, nome, email, senha);
        this.#ra = String(ra);
    }

    AdicionarXp(pontos) {
        // JavaScript usa number; esta verificação exige um inteiro.
        if (!Number.isInteger(pontos)) {
            throw new Error("Os pontos de XP devem ser inteiros.");
        }

        this.#xpTotal += pontos;
    }

    ObterTipoPerfil() {
        return "Discente";
    }

    GerarPainelResumo() {
        return `Perfil: ${this.ObterTipoPerfil()}
ID: ${this.id}
Nome: ${this.nome}
E-mail: ${this.email}
RA: ${this.#ra}
XP total: ${this.#xpTotal}`;
    }
}