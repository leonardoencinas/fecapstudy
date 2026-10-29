class Discente extends Usuario {
    #ra;
    #xpTotal = 0;
    #historico = [];

    constructor(id, nome, email, senha, ra) {
        super(id, nome, email, senha);
        this.#ra = String(ra);
    }

    get sessoes() {
        return this.#historico;
    }

    get xpTotal() {
        return this.#xpTotal;
    }

    AdicionarXp(pontos) {
        if (!Number.isInteger(pontos)) {
            throw new Error("Os pontos de XP devem ser inteiros.");
        }

        this.#xpTotal += pontos;
    }

    RegistrarEstudo(...args) {

        // FORMA 1:
        // RegistrarEstudo(SessaoEstudo sessao)
        if (args.length === 1 && args[0] instanceof SessaoEstudo) {

            const sessao = args[0];

            this.#historico.push(sessao);
            this.AdicionarXp(sessao.CalcularXp());

            return;
        }   

        // FORMA 2:
        // RegistrarEstudo(Disciplina d, int minutos)
        if (
            args.length === 2 &&
            args[0] instanceof Disciplina &&
            Number.isInteger(args[1])
        ) {

            const disciplina = args[0];
            const minutos = args[1];

            let ciclos = Math.floor(minutos / 25);

            if (ciclos < 1) {
                ciclos = 1;
            }

            const sessao = new SessaoPomodoro(
                disciplina,
                minutos,
                ciclos
            );

            // Chama a Forma 1
            this.RegistrarEstudo(sessao);

            return;
        }


        // FORMA 3:
        // RegistrarEstudo(Disciplina d, int horaInicio,
        //                 int horaFim, int paginasLidas)
        if (
            args.length === 4 &&
            args[0] instanceof Disciplina &&
            Number.isInteger(args[1]) &&
            Number.isInteger(args[2]) &&
            Number.isInteger(args[3])
        ) {

            const disciplina = args[0];
            const horaInicio = args[1];
            const horaFim = args[2];
            const paginasLidas = args[3];

            const minutos = (horaFim - horaInicio) * 60;

            const sessao = new SessaoLeitura(
                disciplina,
                minutos,
                paginasLidas,
                true
            );

            // Chama a Forma 1
            this.RegistrarEstudo(sessao);

            return;
        }


        throw new Error("Forma inválida de RegistrarEstudo.");
    }

    ObterTipoPerfil() {
        return "Discente";
    }

    GerarPainelResumo() {
        return `Perfil: ${this.ObterTipoPerfil()}
        ID: ${this.id}
        Nome: ${this.nome}
        E-mail: ${this.email}
        RA: ${this.#ra}
        XP total: ${this.#xpTotal}`;
    }
}