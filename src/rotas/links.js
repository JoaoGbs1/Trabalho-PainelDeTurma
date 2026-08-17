const express = require("express");

const router = express.Router();

// ─── Tarefa B — Links úteis ───────────────────────────────────────────────────
// Armazenamento EM MEMÓRIA (não use banco de dados neste trabalho).
const links = [];
let proximoId = 1;

// GET /links — lista todos os links.
router.get("/", (req, res) => {
  // TODO (Tarefa B): responda com status 200 e o array `links`.
  res.status(200).json(links);
});

// POST /links — cria um link { titulo, url }.
router.post("/", (req, res) => {
  // TODO (Tarefa B):
  //  1. Leia titulo e url de req.body.
  const { titulo, url } = req.body;

  //  2. Se faltar titulo OU url, responda 400.
  if (!titulo || !url) {
    return res.status(400).json({ erro: "titulo e url são obrigatórios" });
  }

  //  3. Crie { id: proximoId++, titulo, url }, adicione em `links`
  //     e responda 201 com o link criado.
  const link = {
    id: proximoId++,
    titulo,
    url
  };

  links.push(link);

  return res.status(201).json(link);
});

module.exports = router;
