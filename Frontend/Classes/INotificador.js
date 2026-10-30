class INotificador {

    ObterCanal() {

        throw new Error("O método ObterCanal() precisa ser implementado na classe filha.")
    }

    EnviarAlerta(destinatario, mensagem) {

        throw new Error("O método EnviarAlerta() precisa ser implementado na classe filha.")
    }
}