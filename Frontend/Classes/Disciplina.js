class Disciplina {
    constructor(codigo, nome, categoria, cargaHorariaSemanal) {
        this.codigo = codigo;
        this.nome = nome;
        this.categoria = categoria;
        this.cargaHorariaSemanal = cargaHorariaSemanal;

        if (this.cargaHorariaSemanal <= 0) {
            this.cargaHorariaSemanal = 2;
        }
    }

    CalcularCargaEmMinutos() {
        return this.cargaHorariaSemanal * 60;
    }

    ExibirResumo() {
        console.log(
            `[${this.codigo}] ${this.nome} (${this.categoria}) ${this.cargaHorariaSemanal}`
        );
    }
}