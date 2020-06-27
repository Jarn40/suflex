# Passos a passo:

  1) Faça download deste repositório ( ```git clone https://github.com/Jarn40/suflex.git``` )
  2) Certifique-se que o docker e docker-compose estão instalados no servidor
  3) execute ```docker-composer up -d``` ( aguarde a instalação )
  4) execute ```docker exec suflex_app_1 bash -c 'npx knex migrate:latest; npx knex seed:run'``` para inicializar o banco com um usuario admin:admin
   

