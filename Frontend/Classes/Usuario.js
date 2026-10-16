class Usuario {
    constructor(nome, email, senha){
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    GerarPainelResumo(){
        throw new error ("A classe filha precisa implementar esse método")
    }

}