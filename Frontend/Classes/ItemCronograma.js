class ItemCronograma {
    #diaSemana;
    #minutosPlanejados;

    constructor(diaSemana, minutosPlanejados) {
        this.#diaSemana = diaSemana;
        this.#minutosPlanejados = minutosPlanejados;
    }

    get diaSemana() {
        return this.#diaSemana;
    }

    get minutosPlanejados() {
        return this.#minutosPlanejados;
    }

}