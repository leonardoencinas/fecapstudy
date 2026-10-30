class NotificadorEmail extends INotificador {
    constructor(email) {
        super();
        this.email = email;
    }

    ObterCanal() {
        return "E-mail";
    }

    EnviarAlerta(destinatario, mensagem) {
        console.log(`[E-mail} Para: ${destinatario} | Mensagem: ${mensagem}`)
        return true;
    }
}