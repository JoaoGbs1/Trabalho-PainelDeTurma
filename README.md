# Painel da Turma — Sprint de 1 hora (trio)

Uma API REST enxuta para o **painel de uma turma**, feita para caber numa **janela de 1 hora** por um grupo de **exatamente 3 pessoas**. O objetivo é praticar **divisão de trabalho paralela**: o painel tem **três módulos independentes**, um por integrante, cada um em **seu próprio arquivo** — ninguém edita o arquivo do outro, então **não há conflito de merge** e os três trabalham ao mesmo tempo.

O template já vem pronto com o servidor Express, o roteamento dos três módulos, a rota `GET /health` e um armazenamento **em memória** (sem banco de dados). Cada integrante só preenche o seu arquivo de rota em `src/rotas/`.

## Como rodar

```bash
npm install
npm start
# servidor em http://localhost:3000  ·  confira: GET /health
```

## As três tarefas paralelas (uma por pessoa)

### Tarefa A — Avisos · `src/rotas/avisos.js`
- `GET /avisos` — lista todos os avisos
- `POST /avisos` — cria `{ titulo, mensagem }`; responde **201** com o aviso (com `id`); **400** se faltar `titulo` ou `mensagem`

### Tarefa B — Links úteis · `src/rotas/links.js`
- `GET /links` — lista todos os links
- `POST /links` — cria `{ titulo, url }`; responde **201** com o link (com `id`); **400** se faltar `titulo` ou `url`

### Tarefa C — Enquete rápida · `src/rotas/enquete.js`
- `GET /enquete` — retorna as opções com a contagem: `{ opcoes: [{ nome, votos }] }`
- `POST /enquete/voto` — corpo `{ opcao }`; incrementa o voto e responde **200**; **400** se a opção não existir

## Cronograma sugerido (60 min)
- **0–5 min** — juntos: clonar, `npm install`, `npm start`, conferir `GET /health`; cada um escolhe A, B ou C.
- **5–45 min** — em paralelo: cada integrante implementa o seu módulo na sua branch.
- **45–60 min** — juntos: abrir os 3 Pull Requests, revisar, fazer merge na `main` e validar.

## O que os testes de correção validam
- `GET /health` responde **200** (o servidor sobe)
- **Avisos:** `POST /avisos` cria (**201**) e aparece em `GET /avisos`; sem `titulo`/`mensagem` → **400**
- **Links:** `POST /links` cria (**201**) e aparece em `GET /links`; sem `titulo`/`url` → **400**
- **Enquete:** `POST /enquete/voto` incrementa e `GET /enquete` reflete a nova contagem; opção inexistente → **400**

> **Entrega:** o repositório enviado deve pertencer a um dos membros do grupo, com os outros dois adicionados como colaboradores. A WebForge mede as contribuições individuais (commits, linhas +/−), então **cada um deve commitar o seu módulo**.
