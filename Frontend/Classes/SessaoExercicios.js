class SessaoExercicios extends SessaoEstudo {

    constructor(disciplina, duracaoMinutos, totalQuestoes, acertos) {
        super(disciplina, duracaoMinutos);
        this.totalQuestoes = totalQuestoes;
        this.acertos = acertos;
    }

    ObterModalidade() {
        return "Lista de Exercícios";
    }

    CalcularXp() {
        return this.duracaoMinutos + (this.acertos * 10);
    }

    GerarFeedback() {
        let porcentagem = (this.acertos / this.totalQuestoes) * 100;

        return `${super.GerarFeedback()} | Acertos: ${porcentagem.toFixed(0)}%`;
    }
}

