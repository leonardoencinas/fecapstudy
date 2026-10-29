class SessaoEstudo extends IExportavelJson {
    
    constructor(disciplina, duracaoMinutos) {
        super();
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
        return `${this.ObterModalidade()} em ${this.disciplina} (${this.duracaoMinutos} min) -> +${this.CalcularXp()} XP`;
    }

    ParaJson() {

        const dadosParaExportar = {
            disciplina: this.disciplina,
            duracaoMinutos: this.duracaoMinutos
        };

        return JSON.stringify(dadosParaExportar);
    }
}
