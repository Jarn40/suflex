# Passos a passo:

  1) Faça download deste repositório ( ```git clone https://github.com/Jarn40/suflex.git``` )
  2) Certifique-se que o docker e docker-compose estão instalados no servidor
  3) execute ```docker-composer up -d``` ( aguarde a instalação )
  4) execute ```docker exec suflex_app_1 bash -c 'npx knex migrate:latest; npx knex seed:run'``` para inicializar o banco com um usuario admin:admin
   

  # Rotas
  ### Autenticar
    post (IP_SERVIDOR)/user/logar
        {
            login: admin,
            password: admin
        }
    
    response : token

    utilizar o token em todas as outras rotas.

### Adicionar Evento
    post (IP_SERVIDOR)/events/new
        {
            date: dataString,
            description: descricao,
            user_id: id do usuário (disponivel ao decodificar o JWT token)
        }
        header
            {
                authorization: token
            }

### Buscar Eventos
    get (IP_SERVIDOR)/events
        header
            {
                authorization: token
            }
    
... outras rotas disponíveis.