class NotificadorEmail extends INotificador {
    constructor(email) {
        super();
        this.email = email;
    }

    ObterCanal() {
        return "E-mail";
    }

    EnviarAlerta(mensagem) {
        return `[${this.ObterCanal()}] Notificação enviada para ${this.email}: "${mensagem}"`;
    }
}