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
 return res.status(200).json({opcoes})
});

// POST /enquete/voto — corpo { opcao }: incrementa o voto daquela opção.
router.post("/voto", (req, res) => {
  const { opcao } = req.body;
  const opcaoEncontrada = opcoes.find(o => o.nome.toLowerCase() === opcao?.toLowerCase());
  if (!opcaoEncontrada) {
    return res.status(400).json({ erro: "Opção inválida ou não encontrada." });
  }
  opcaoEncontrada.votos += 1;
  return res.status(200).json({ mensagem: "Voto computado com sucesso!", opcoes });

});

module.exports = router;
