class ServicoAlertaResponsavel {
    // Sem campos de instância: tudo chega por parâmetro
    AvaliarDiscente(d, meta, resp, notificador) {
        const percentual = meta.CalcularPercentual();
        let mensagem;

        if (percentual >= 100) {
            mensagem = `Parabéns! ${d.nome} atingiu 100% da meta de estudos da semana!`;
        } else {
            mensagem = `${d.nome} está com ${percentual}% da meta de estudos da semana.`;
        }

        return notificador.EnviarAlerta(resp.GetEmail(), mensagem);
    }
}