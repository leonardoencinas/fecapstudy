class NotificadorWhatsapp extends INotificador {
    #telefone;

    constructor(telefone) {
        super();
        this.#telefone = telefone;
    }

    ObterCanal() {
        return "WhatsApp";
    }

    EnviarAlerta(mensagem) {
        return `[${this.ObterCanal()}] Mensagem enviada para ${this.#telefone}: "${mensagem}"`;
    }
}