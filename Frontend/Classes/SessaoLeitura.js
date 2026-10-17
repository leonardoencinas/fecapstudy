class SessaoLeitura extends SessaoEstudo {

    constructor(disciplina, duracaoMinutos, paginasLidas, fezResumo) {
        super(disciplina, duracaoMinutos);
        this.paginasLidas = paginasLidas;
        this.fezResumo = fezResumo;
    }

    ObterModalidade() {
        return "Leitura e Resumo";
    }

    CalcularXp() {
        return this.duracaoMinutos +
               (this.paginasLidas * 3) +
               (this.fezResumo ? 25 : 0);
    }
}