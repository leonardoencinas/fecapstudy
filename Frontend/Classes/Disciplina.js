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


class Responsavel extends Usuario {
    #parentesco;
    #discentesAcompanhados = [];
    #metasEstudo = new Map();

    constructor(id, nome, email, senha, parentesco) {
        super(id, nome, email, senha);
        this.#parentesco = parentesco;
    }

    VincularDiscente(discente) {
        if (!this.#discentesAcompanhados.includes(discente)) {
            this.#discentesAcompanhados.push(discente);
        }
    }

    ObterTipoPerfil() {
        return "Responsável";
    }

    GerarPainelResumo() {
        return `Perfil: ${this.ObterTipoPerfil()}
ID: ${this.id}
Nome: ${this.nome}
E-mail: ${this.email}
Parentesco: ${this.#parentesco}`;
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