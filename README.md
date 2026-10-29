# FECAPStudy 📚

O **FECAPStudy** é uma aplicação web desenvolvida em JavaScript voltada para o gerenciamento de rotinas de estudo, gamificação do aprendizado acadêmico e acompanhamento do progresso dos discentes por seus respectivos responsáveis.

---

## 🚀 Funcionalidades

- **🎯 Gestão de Meta Semanal:** Definição e acompanhamento dinâmico de metas de estudo em minutos, com indicador numérico e barra de progresso percentual.
- **⏱️ Múltiplas Modalidades de Estudo:** Registro detalhado de sessões adaptadas a diferentes métodos:
  - **Exercícios:** Pontuação baseada no tempo e quantidade de acertos.
  - **Leitura & Resumo:** Pontuação por minutos, páginas lidas e bônus por resumo elaborado.
  - **Técnica Pomodoro:** Multiplicador de XP proporcional aos minutos e ciclos completos.
- **🎮 Gamificação (Sistema de XP):** Acúmulo de Pontos de Experiência a cada sessão concluída, com atualização automática do painel do discente.
- **📜 Histórico Interativo:** Listagem dinâmica das sessões registradas com feedback detalhado de cada atividade.
- **🔔 Notificação para Responsáveis:** Geração de alertas de desempenho formatados para envio via **WhatsApp** e **E-mail**.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estruturação semântica e acessível da interface.
- **CSS3:** Estilização responsiva e componentes de UI (barras de progresso, botões e cards).
- **JavaScript (ES6+):** Lógica da aplicação orientada a objetos (POO), manipulação do DOM e gestão do estado.

---

## 🏛️ Conceitos de Programação Orientada a Objetos (POO)

O projeto foi construído utilizando os pilares da POO em JavaScript:

- **Abstração e Herança:** Classes base como `Usuario`, `SessaoEstudo` e `INotificador` herdadas por subclasses especializadas (`Discente`, `Responsavel`, `SessaoExercicios`, `NotificadorWhatsapp`, etc.).
- **Encapsulamento:** Uso de atributos privados (`#`) e *getters/setters* para garantir a segurança dos dados internos das classes.
- **Polimorfismo:** Sobrescrevida de métodos como `CalcularXp()`, `ObterModalidade()` e `EnviarAlerta()` de acordo com o contexto de cada subclasse.
- **Contratos/Interfaces:** Implementação do padrão de exportação através da interface `IExportavelJson`.

---

## 📂 Estrutura de Arquivos

```text
fecapstudy/
├── Backend/
│   ├── Source/
│   ├── BackendEstudoAPI.exe
│   ├── banco_estudo.sql
│   ├── dados_estudo_local.json
│   ├── iniciar_backend.bat
│   ├── mysql_config.txt
│   └── ... (dependências e bibliotecas do .NET)
├── Frontend/
│   ├── Classes/
│   │   ├── Administrador.js
│   │   ├── ConectorBackend.js
│   │   ├── Discente.js
│   │   ├── Disciplina.js
│   │   ├── IExportavelJson.js
│   │   ├── INotificador.js
│   │   ├── MetaEstudo.js
│   │   ├── NotificadorEmail.js
│   │   ├── NotificadorWhatsapp.js
│   │   ├── Responsavel.js
│   │   ├── SessaoEstudo.js
│   │   ├── SessaoExercicios.js
│   │   ├── SessaoLeitura.js
│   │   ├── SessaoPomodoro.js
│   │   └── Usuario.js
│   ├── app.js
│   ├── index.html
│   └── style.css
├── package-lock.json
└── README.md
