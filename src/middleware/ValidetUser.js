// Middleware para validar campos do usuário
const validateUser = (req, res, next) => {
  const { nome, email, senha } = req.body;

  // Verificar se todos os campos necessários estão presentes
  if (!nome || !email || !senha) {
    return res.status(400).json({
      msg: "Campos inválidos. Por favor, revise os dados fornecidos.",
    });
  }

  // Se todos os campos estiverem presentes, prosseguir para o próximo middleware
  next();
};

// Middleware para validar o ID do usuário
const validateUserId = (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      msg: "ID do usuário não fornecido nos parâmetros.",
    });
  }

  next();
};

module.exports = { validateUser, validateUserId };
