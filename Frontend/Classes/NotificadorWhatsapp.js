class NotificadorWhatsapp extends INotificador {

    ObterCanal() {

        return "Meu Canal";
    }

    EnviarAlerta(destinatario, mensagem) {

        console.log(`Enviando para ${destinatario}`)
        return true;
    }
}