class PlanoEstudo {
    #itens = [];

    AdicionarItem(diaSemana, minutos) {
        this.#itens.push(new ItemCronograma(diaSemana, minutos));
    }

    ObterTotalMinutos() {
        return this.#itens.reduce((total, item) => total + item.minutosPlanejados, 0);
    }

    ObterResumo() {
        return this.#itens.map(item => `${item.diaSemana}: ${item.minutosPlanejados} min`);
    }
}