const Sequelize = require('sequelize')
const dbConfig = require('../config/database')
const ProfessorExtensionista =  require('../models/ProfessorExtensionista');
const Comunidade = require('../models/Comunidade');
const GrupoExtensao = require('../models/GrupoExtensao');
const Aluno = require('../models/Aluno');
const PublicoAlvo = require('../models/PublicoAlvo');
const Demandas = require('../models/Demandas');
const Representante = require('../models/Representantes');
const ComunidadeExtensao = require('../models/ComunidadeExtensao');
const Projeto = require('../models/Projeto')
const AcoesExtensionistas = require('../models/AcoesExtensionistas');
const PublicoAlvo_Comunidade = require('../models/PublicoAlvo_Comunidade')


const connection = new Sequelize(dbConfig);

ProfessorExtensionista.init(connection);
GrupoExtensao.init(connection);
Comunidade.init(connection);
Demandas.init(connection)
Aluno.init(connection);
PublicoAlvo.init(connection);
Representante.init(connection);
ComunidadeExtensao.init(connection);
Projeto.init(connection);
AcoesExtensionistas.init(connection);
PublicoAlvo_Comunidade.init(connection)


GrupoExtensao.associate(connection.models);
PublicoAlvo.associate(connection.models)
Aluno.associate(connection.models);
Comunidade.associate(connection.models);
Representante.associate(connection.models);
Demandas.associate(connection.models);
ComunidadeExtensao.associate(connection.models);
Projeto.associate(connection.models);
PublicoAlvo_Comunidade.associate(connection.models);





module.exports = connection;