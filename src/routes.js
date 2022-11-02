const express = require('express');
const routes = express.Router();
const ProfExtensionistaController = require('./controllers/ProfExtensionistaController')
const ComunidadeController = require('./controllers/ComunidadeController');
const AlunoController = require('./controllers/AlunoController');
const GrupoExtensaoController = require('./controllers/GrupoExtensaoController');
const PublicoAlvoController = require('./controllers/PublicoAlvoController');
const DemandasController = require('./controllers/DemandasController');
const RepresentanteController = require('./controllers/RepresentantesController');
const ComunidadeExtensaoController = require('./controllers/ComunidadeExtensaoController');
const ProjetoController = require('./controllers/ProjetoController');
const AcoesExtensionistasController = require('./controllers/AcoesExtensionistasController');
const PublicoAlvo_ComunidadeController = require('./controllers/PublicoAlvo_ComunidadeController');


routes.post('/prof_extensionista', ProfExtensionistaController.store);
routes.get('/professor/list', ProfExtensionistaController.index );
routes.put('/professor/edit/:id', ProfExtensionistaController.update);
routes.delete('/professor/delete/:id', ProfExtensionistaController.delete);


routes.post('/comunidade', ComunidadeController.store);
routes.get('/comunidade/list', ComunidadeController.index);

routes.post('/alunos/:grupo_extensao_id', AlunoController.store);

routes.post('/grupo_extensao/:professor_extensionista_id', GrupoExtensaoController.store);

routes.post('/publico_alvo', PublicoAlvoController.store);

routes.post('/demandas/:comunidade_id', DemandasController.store);

routes.post('/representante/:comunidade_id', RepresentanteController.store);

routes.get('/comunidade_extensao/:comunidade_id', ComunidadeExtensaoController.index);

routes.post('/projeto/:grupo_extensao_id', ProjetoController.store);

routes.post('/acoes_extensionista', AcoesExtensionistasController.store);

routes.get('/teste/:comunidade_id', PublicoAlvo_ComunidadeController.index)









module.exports = routes