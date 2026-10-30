class NotificadorWhatsapp extends INotificador {
    #telefone;

    constructor(telefone) {
        super();
        this.#telefone = telefone;
    }

    ObterCanal() {
        return "WhatsApp";
    }

    EnviarAlerta(destinatario, mensagem) {
        console.log(`[${this.ObterCanal()}] Mensagem enviada para ${destinatario}: "${mensagem}"`);
        return true;
    }
}