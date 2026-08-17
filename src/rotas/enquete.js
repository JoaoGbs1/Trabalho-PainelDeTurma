const express = require("express");

const router = express.Router();

// ─── Tarefa C — Enquete rápida ────────────────────────────────────────────────
// Armazenamento EM MEMÓRIA (não use banco de dados neste trabalho).
// As opções já vêm cadastradas; vocês podem trocar os nomes se quiserem.
const opcoes = [
  { nome: "Presencial", votos: 0 },
  { nome: "Remoto", votos: 0 },
  { nome: "Híbrido", votos: 0 },
];

// GET /enquete — retorna as opções com a contagem de votos.
router.get("/", (req, res) => {
  // TODO (Tarefa C): responda com status 200 e o objeto { opcoes }.
  res.status(501).json({ erro: "não implementado" });
});

// POST /enquete/voto — corpo { opcao }: incrementa o voto daquela opção.
router.post("/voto", (req, res) => {
  // TODO (Tarefa C):
  //  1. Leia `opcao` de req.body.
  //  2. Procure a opção pelo nome em `opcoes`.
  //  3. Se não existir, responda 400.
  //  4. Se existir, incremente `votos` e responda 200.
  res.status(501).json({ erro: "não implementado" });
});

module.exports = router;
