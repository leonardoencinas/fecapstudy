class MetaEstudo extends IExportavelJson {

    #metaMinutosSemana;
    #minutosCumprido = 0;

    constructor(metaMinutosSemana, minutosCumpridos, novaMeta) {

        super();
        this.RedefinirMeta(novaMeta);
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

        if (novaMeta < 30) {

            this.#metaMinutosSemana = 30;
        } else if (novaMeta > 3000) {

            this.#metaMinutosSemana = 3000;
        } else {

            this.#metaMinutosSemana = novaMeta;
        }
    }

    CalcularPercentual() {
        const percentual =
            (this.#minutosCumprido / this.#metaMinutosSemana) * 100;
    
        // Retorna o percentual calculado, limitado a 100.
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