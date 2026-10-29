class SessaoExercicios extends SessaoEstudo {

    constructor(disciplina, duracaoMinutos, totalQuestoes = 0, acertos = 0) {
        super(disciplina, duracaoMinutos);
        // Garante que ambos os campos sejam números válidos
        this.totalQuestoes = Number(totalQuestoes) || 0;
        this.acertos = Number(acertos) || 0;
    }

    ObterModalidade() {
        return "Lista de Exercícios";
    }

    CalcularXp() {
        return this.duracaoMinutos + (this.acertos * 10);
    }

    GerarFeedback() {
        const porcentagem = this.totalQuestoes > 0 
            ? (this.acertos / this.totalQuestoes) * 100 
            : 0;

        return `${super.GerarFeedback()} | Acertos: ${porcentagem.toFixed(0)}%`;
    }
}
 