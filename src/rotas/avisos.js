const express = require("express");

const router = express.Router();

// ─── Tarefa A — Avisos ────────────────────────────────────────────────────────
// Armazenamento EM MEMÓRIA (não use banco de dados neste trabalho).
const avisos = [];
let proximoId = 1;

// GET /avisos — lista todos os avisos.
router.get("/", (req, res) => {
  // TODO (Tarefa A): responda com status 200 e o array `avisos`.
  res.status(200).json(avisos);
});

// POST /avisos — cria um aviso { titulo, mensagem }.
router.post("/", (req, res) => {
  // TODO (Tarefa A):
  //  1. Leia titulo e mensagem de req.body.
  const { titulo, mensagem } = req.body;

  //  2. Se faltar titulo OU mensagem, responda 400.
  if (!titulo || !mensagem) {
    return res.status(400).json({ erro: "titulo e mensagem são obrigatórios" });
  }

  //  3. Crie { id: proximoId++, titulo, mensagem }, adicione em `avisos`
  //     e responda 201 com o aviso criado.
  const aviso = {
    id: proximoId++,
    titulo,
    mensagem
  };

  avisos.push(aviso);

  return res.status(201).json(aviso);
});

module.exports = router;
