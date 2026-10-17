class Administrador extends Usuario {
    #cargo;
    
    constructor(id, nome, email, senha, cargo) {
        // Inicializa os dados herdados de Usuario.
        super(id, nome, email, senha);

        // Inicializa o dado específico do administrador.
        this.#cargo = cargo;
    }

    ObterTipoPerfil() {
        return "Administrador";
    }

    GerarPainelResumo() {
        return `Perfil: ${this.ObterTipoPerfil()}
ID: ${this.id}
Nome: ${this.nome}
E-mail: ${this.email}
Cargo: ${this.#cargo}`;
    }
}