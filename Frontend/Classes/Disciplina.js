class Disciplina {
    
    constructor(codigo, nome, categoria, cargaHorariaSemanal) {

        this.codigo = codigo;
        this.nome = nome;
        this.categoria = categoria;
        this.cargaHorariaSemanal = cargaHorariaSemanal;

        if (cargaHorariaSemanal <= 0) {

            cargaHorariaSemanal = 2;
        }
    }

    CalcularCargaEmMinutos() {

        return cargaHorariaSemanal * 60;
    }

    ExibirResumo() {

        return console.log(`[${codigo}] ${nome} (${categoria}) ${cargaHorariaSemanal}`);
    }
}