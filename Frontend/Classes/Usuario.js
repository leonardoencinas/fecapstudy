class Usuario {
    //Campos privados
    #id;
    #nome;
    #email;
    #senha;
    
    constructor(id, nome, email, senha) {
        if (new.target === Usuario) {
            throw new Error("Usuario é uma classe abstrata.");
        }
    
        this.#id = id;
        this.#nome = nome;
        this.#email = email;
        this.#senha = senha;
    }

    // Getters e setters
    get id() {
        return this.#id;
    }

    get nome() {
        return this.#nome;
    }

    get email() {
        return this.#email;
    }

    // Comparar senha
    Autenticar(senhaDigitada) {
        return this.#senha === senhaDigitada;
    }

    // Métodos que subclasses precisam implementar
    ObterTipoPerfil() {
        throw new error ("Implemente ObterTipoPerfil na subclasse")
    }

    GerarPainelResumo(){
        throw new error ("A classe filha precisa implementar esse método")
    }

}