class MetaEstudo extends IExportavelJson {

    #metaMinutosSemana;
    #minutosCumprido = 0;

    constructor(metaMinutosSemana = 300, minutosCumpridos = 0) {

        super();
        this.#minutosCumprido = minutosCumpridos;
        this.RedefinirMeta(metaMinutosSemana);
    }

    get minutosRegistrados() {
        return this.#minutosCumprido;
    }

    get metaMinutosSemana() {
        return this.#metaMinutosSemana;
    }

    RegistrarAvanco(minutos) {

        if (minutos <= 0 || minutos > 480) {
           
            return false;
        } else {

            this.#minutosCumprido += minutos;
            return true;
        }
    }

    RedefinirMeta(novaMeta) {

        if (!novaMeta || novaMeta < 30) {

            this.#metaMinutosSemana = 30;
        } else if (novaMeta > 3000) {

            this.#metaMinutosSemana = 3000;
        } else {

            this.#metaMinutosSemana = novaMeta;
        }
    }

    CalcularPercentual() {
        if (!this.#metaMinutosSemana) return 0;
        const percentual = (this.#minutosCumprido / this.#metaMinutosSemana) * 100;
        return Math.min(percentual, 100);
    }

    EstaCumprida() {

        return this.#minutosCumprido >= this.#metaMinutosSemana;
    }

    ParaJson() {

        const dadosParaExportar = {
            metaMinutosSemana: this.#metaMinutosSemana,
            minutosCumpridos: this.#minutosCumprido,
            percentual: this.CalcularPercentual()
        };

        return JSON.stringify(dadosParaExportar);
    }
}