"use strict";

// Ordem: código, nome, categoria e carga semanal em horas.
const disciplinas = [
    new Disciplina(
        "POO", "Programação Orientada a Objetos", "Computação", 4
    ),
    new Disciplina(
        "BD", "Banco de Dados", "Computação", 4
    ),
    new Disciplina(
        "MAT", "Matemática", "Exatas", 2
    )
];

const discente = new Discente(
    3, "Ana", "ana@exemplo.com", "senhaTeste", "20260001"
);

const responsavel = new Responsavel(
    2, "Maria", "maria@exemplo.com", "senhaTeste", "Mãe"
);

// Associa o aluno ao responsável.
responsavel.VincularDiscente(discente);

// A meta é informada em minutos.
const meta = new MetaEstudo(200);

// 2. ELEMENTOS DO HTML
const formulario = document.getElementById("formularioEstudo");
const campoDisciplina = document.getElementById("disciplina");
const campoModalidade = document.getElementById("modalidade");
const campoMinutos = document.getElementById("minutos");
const campoExtra = document.getElementById("dadoExtra");
const mensagemFormulario = document.getElementById("mensagemFormulario");
const historico = document.getElementById("historico");
const notificador = new NotificadorWhatsapp(document.getElementById("notificacao"));

// O select guarda o índice; a sessão recebe o OBJETO Disciplina, não o texto.
disciplinas.forEach((disciplina, indice) => {
    const opcao = document.createElement("option");
    opcao.value = indice;
    opcao.textContent = disciplina.nome;
    campoDisciplina.appendChild(opcao);
});

// 3. MODALIDADES: MUDA O RÓTULO DO CAMPO EXTRA
const configuracaoModalidades = {
    Pomodoro: { rotulo: "Ciclos concluídos", dica: "Quantos ciclos de foco você completou?", minimo: 1 },
    Exercicios: { rotulo: "Quantidade de acertos", dica: "Conte os exercícios que você acertou.", minimo: 0 },
    Leitura: { rotulo: "Páginas lidas", dica: "Quantas páginas você leu nesta sessão?", minimo: 1 }
};

function atualizarModalidade() {
    const configuracao = configuracaoModalidades[campoModalidade.value];
    document.getElementById("rotuloExtra").textContent = configuracao.rotulo;
    document.getElementById("dicaExtra").textContent = configuracao.dica;
    campoExtra.min = configuracao.minimo;
    campoExtra.value = "";
    mensagemFormulario.textContent = "";
}

// 4. ATUALIZAR A TELA COM OS DADOS DOS OBJETOS
function atualizarTela() {
    // A tela chama o mesmo método em dois tipos diferentes de Usuario.
    document.getElementById("resumoDiscente").textContent = discente.GerarPainelResumo();
    document.getElementById("resumoResponsavel").textContent = responsavel.GerarPainelResumo();
    document.getElementById("totalXp").textContent = `${discente.xpTotal} XP`;

    const percentual = meta.CalcularPercentual();
    document.getElementById("percentualMeta").textContent = `${percentual}%`;
    // Pode ultrapassar a meta, mas o desenho da barra ocupa no máximo 100%.
    const barra = document.getElementById("barraProgresso");
    barra.value = Math.min(100, Math.max(0, percentual));
    barra.setAttribute("aria-valuetext", `${meta.minutosRegistrados} de ${meta.metaMinutosSemana} minutos`);
    document.getElementById("minutosMeta").textContent = `${meta.minutosRegistrados} de ${meta.metaMinutosSemana} min`;

    const faltam = Math.max(0, meta.metaMinutosSemana - meta.minutosRegistrados);
    document.getElementById("incentivoMeta").textContent = faltam === 0
        ? "Meta alcançada! Cada minuto a mais é uma nova conquista."
        : `Faltam ${faltam} minutos para alcançar sua meta.`;

    const sessoes = discente.sessoes;
    document.getElementById("contadorSessoes").textContent = `${sessoes.length} ${sessoes.length === 1 ? "sessão" : "sessões"}`;
    document.getElementById("historicoVazio").hidden = sessoes.length > 0;
    historico.replaceChildren();

    // Mais recente primeiro. A lista original do Discente é preservada.
    sessoes.reverse().forEach((sessao) => {
        const item = document.createElement("li");
        const informacoes = document.createElement("div");
        const modalidade = document.createElement("strong");
        const feedback = document.createElement("p");
        const xp = document.createElement("span");

        modalidade.textContent = sessao.obterModalidade() === "Exercicios" ? "Exercícios" : sessao.obterModalidade();
        feedback.textContent = sessao.GerarFeedback();
        xp.textContent = `+${sessao.calcularXp()} XP`;
        xp.className = "xp-sessao";

        informacoes.append(modalidade, feedback);
        item.append(informacoes, xp);
        historico.appendChild(item);
    });
}

// 5. BOTÃO REGISTRAR ESTUDO
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault(); // Impede que o formulário recarregue a página.
    mensagemFormulario.textContent = "";
    mensagemFormulario.classList.remove("erro");
    if (!formulario.reportValidity()) return;

    try {
        const disciplina = disciplinas[Number(campoDisciplina.value)];
        const minutos = Number(campoMinutos.value);
        const dadoExtra = Number(campoExtra.value);
        let sessao;

        // Cada opção instancia uma subclasse diferente de SessaoEstudo.
        switch (campoModalidade.value) {
            case "Pomodoro":
                sessao = new SessaoPomodoro(disciplina, minutos, dadoExtra);
                break;
            case "Exercicios":
                sessao = new SessaoExercicios(disciplina, minutos, dadoExtra);
                break;
            case "Leitura":
                sessao = new SessaoLeitura(disciplina, minutos, dadoExtra);
                break;
            default:
                throw new Error("Selecione uma modalidade válida.");
        }

        // Estas são as duas chamadas exigidas pela missão.
        // RegistrarEstudo já adiciona XP: não chame AdicionarXp de novo aqui.
        discente.RegistrarEstudo(sessao);
        meta.RegistrarAvanco(minutos);

        atualizarTela();
        document.getElementById("notificacao").textContent = "";
        mensagemFormulario.textContent = `Estudo registrado! Você ganhou ${sessao.calcularXp()} XP.`;
        campoMinutos.value = "";
        campoExtra.value = "";
    } catch (erro) {
        mensagemFormulario.textContent = erro.message;
        mensagemFormulario.classList.add("erro");
    }
});

// 6. BOTÃO NOTIFICAR RESPONSÁVEL
document.getElementById("botaoNotificar").addEventListener("click", () => {
    notificador.Notificar(
        `${responsavel.nome}, ${discente.nome} estudou ${meta.minutosRegistrados} de ${meta.metaMinutosSemana} minutos da meta e acumulou ${discente.xpTotal} XP. Progresso: ${meta.CalcularPercentual()}%.`
    );
});

campoModalidade.addEventListener("change", atualizarModalidade);
atualizarModalidade();
atualizarTela();
