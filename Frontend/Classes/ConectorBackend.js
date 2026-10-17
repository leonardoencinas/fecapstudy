class ConectorBackend {
    #urlBase = "http://localhost:5080";

    // 1. Exemplo de GET: Buscar todas as sessões salvas no MySQL
    async listarSessoes() {
        const resposta = await fetch(`${this.#urlBase}/api/sessoes`);
        return await resposta.json();
    }

    // 2. Exemplo de POST: Enviar uma sessão de estudo concluída
    async salvarSessaoNoBanco(nomeAluno, sessao) {
        const resposta = await fetch(`${this.#urlBase}/api/sessoes`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                discenteNome: nomeAluno,
                disciplina: sessao.getDisciplina().getNome(),
                tipoModalidade: sessao.obterModalidade(),
                duracaoMinutos: sessao.getDuracaoMinutos(),
                xpGanho: sessao.calcularXp(),
                resumoFeedback: sessao.gerarFeedback()
            })
        });
        
        return await resposta.json();
    }
}