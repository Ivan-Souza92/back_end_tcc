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
routes.get('/professor/get/:id', ProfExtensionistaController.findByID );
routes.put('/professor/edit/:id', ProfExtensionistaController.update);
routes.delete('/professor/delete/:id', ProfExtensionistaController.delete);



routes.post('/comunidade', ComunidadeController.store);
routes.get('/comunidade/list', ComunidadeController.index);
routes.get('/comunidade/get/:id', ComunidadeController.findByID)
routes.put('/comunidade/edit/:id', ComunidadeController.update)
routes.put('/comunidade/delete/:id', ComunidadeController.delete)

routes.post('/aluno/:grupo_extensao_id', AlunoController.store);
routes.get('/aluno/list',  AlunoController.index)
routes.delete('/aluno/delete/:id',  AlunoController.delete)
routes.get('/aluno/get/:id',  AlunoController.findByID)
routes.put('/aluno/edit/:id',  AlunoController.update)

routes.post('/grupo_extensao/:professor_extensionista_id', GrupoExtensaoController.store);
routes.get('/grupo_extensao/lista', GrupoExtensaoController.index)
routes.delete('/grupo_extensao/delete/:id', GrupoExtensaoController.delete)
routes.get('/grupo_extensao/get/:id', GrupoExtensaoController.findByID );
routes.put('/grupo_extensao/edit/:id', GrupoExtensaoController.update );

routes.post('/publico_alvo', PublicoAlvoController.store);

routes.post('/demandas/:comunidade_id', DemandasController.store);

routes.post('/representante/:comunidade_id', RepresentanteController.store);

routes.get('/comunidade_extensao/:comunidade_id', ComunidadeExtensaoController.index);


routes.post('/projeto/:grupo_extensao_id', ProjetoController.store);
routes.delete('/projeto/delete/:id', ProjetoController.delete);
routes.get('/projeto/list_all', ProjetoController.index);
routes.get('/projeto/get/:id', ProjetoController.findByID);
routes.put('/projeto/edit/:id', ProjetoController.update);

routes.post('/acoes_extensionista', AcoesExtensionistasController.store);

routes.get('/teste/:comunidade_id', PublicoAlvo_ComunidadeController.index)









module.exports = routes