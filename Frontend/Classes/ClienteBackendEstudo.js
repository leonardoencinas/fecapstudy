class ClienteBackendEstudo {
    #urlBase;

    constructor(urlBase = "http://localhost:5080") {
        this.#urlBase = urlBase;
    }

    async EnviarSessao(nomeDiscente, sessao) {
        const resposta = await fetch(`${this.#urlBase}/api/sessoes`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                discenteNome: nomeDiscente,
                disciplina: sessao.disciplina.nome,
                tipoModalidade: sessao.ObterModalidade(),
                duracaoMinutos: sessao.duracaoMinutos,
                xpGanho: sessao.CalcularXp(),
                resumoFeedback: sessao.GerarFeedback()
            })
        });
        if (!resposta.ok) throw new Error(`Erro ao enviar sessão (${resposta.status})`);
        return await resposta.json();
    }

    async ListarSessoes() {
        const resposta = await fetch(`${this.#urlBase}/api/sessoes`);
        if (!resposta.ok) throw new Error(`Erro ao carregar sessões (${resposta.status})`);
        return await resposta.json();
    }
}