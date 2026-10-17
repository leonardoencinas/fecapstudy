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
        return console.log(
            `[${this.codigo}] ${this.nome} (${this.categoria}) ${this.cargaHorariaSemanal}`
        );
    }
}





class TrilhaEstudo {
    #titulo;
    #administrador;
    #disciplinas = [];

    constructor(titulo, administrador) {
        this.#titulo = titulo;
        this.#administrador = administrador;
    }

    AdicionarDisciplina(disciplina) {
        this.#disciplinas.push(disciplina);
    }

    CalcularCargaHorariaTotal() {
        let total = 0;

        for (let disciplina of this.#disciplinas) {
            total += disciplina.cargaHorariaSemanal;
        }

        return total;
    }
}