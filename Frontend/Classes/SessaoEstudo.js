class SessaoEstudo {

    constructor(disciplina, duracaoMinutos) {
        this.disciplina = disciplina;
        this.duracaoMinutos = duracaoMinutos;
    }

    CalcularXp() {
        throw new Error("O método CalcularXp() deve ser implementado.");
    }

    ObterModalidade() {
        throw new Error("O método ObterModalidade() deve ser implementado.");
    }

    GerarFeedback() {
        return `${this.ObterModalidade()} em ${this.disciplina.GetNome()} (${this.duracaoMinutos} min) -> +${this.CalcularXp()} XP`;
    }
}



