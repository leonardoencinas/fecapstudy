class SessaoPomodoro extends SessaoEstudo {

    constructor(disciplina, duracaoMinutos, ciclosCompletos) {
        super(disciplina, duracaoMinutos);
        this.ciclosCompletos = ciclosCompletos;
    }

    ObterModalidade() {
        return "Pomodoro";
    }

    CalcularXp() {
        return this.duracaoMinutos * 2 + (this.ciclosCompletos * 15);
    }

    GerarFeedback() {
        return `${super.GerarFeedback()} | Ciclos completos: ${this.ciclosCompletos}`;
    }
}

