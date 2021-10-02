---
id: 572
title: Postgres uma alternativa ao MySQL
date: '2012-09-06T19:37:14+00:00'
author: 
  name: Pedro Resende
layout: post
guid: '<p>Hoje vou-vos ensinar como se instala e configura o <a href="http://pt.wikipedia.org/wiki/Postgres" title="Postgres" target="_blank">Postgres</a>&nbsp;no Ubuntu/Debian para ser usado em vez do tradicional MySQL.</p><p>Para começar, temos de instalar os '
permalink: /postgres-uma-alternativa-ao-mysql/
categories:
  - Debian, Posrgres, linux, Ubuntu
---
Hoje vou-vos ensinar como se instala e configura o <a href="http://pt.wikipedia.org/wiki/Postgres" title="Postgres" target="_blank">Postgres</a>&nbsp;no Ubuntu/Debian para ser usado em vez do tradicional MySQL.

Para começar, temos de instalar os pacotes necessários, correndo o seguinte comando:

sudo apt-get install postgresql postgresql-contrib

Uma vez instalados, é necessário configurar o Postgres para permitir ligações, para isso editamos o ficheiro

sudo vi /etc/postgresql/8.4/main/postgresql.conf

e descomentamos a seguinte linha

#listen_addresses = ‘localhost’

caso pretendam ligações via outras maquinas em vez de listen\_addresses = ‘localhost’ coloquem listen\_addresses = ‘ip\_da\_maquina’

Vamos agora adicionar um novo utilizador com acesso

su – postgres

psql

CREATE USER nome\_do\_utilizador WITH PASSWORD ‘palavra_passe’

Criar uma nova base de dados, através do comando

CREATE DATABASE nome\_da\_bd ENCODING=’utf8′

por fim, dar acessos ao utilizador à base de dados

GRANT ALL PRIVILEGES ON DATABASE name\_da\_bd to nome\_do\_utilizador;

\q

Vamos então testar o acesso ao Postgres, para tal é necessário desactivar a palavra passe encriptada, atravês da edição do seguinte ficheiro

sudo vi /etc/postgresql/8.4/main/pg_hba.conf

no final, comentar as seguintes linhas

\# local all all ident  
\# host all all 127.0.0.1/32 md5  
\# host all all ::1/128 md5

e adicionar as seguintes

local all all trust  
host all all 127.0.0.1/32 trust

vamos então recomeçar o Postgres e verficar se está tudo a funcionar correctamente

sudo /etc/init.d/postgresql restartPara testar:

psql -d nome\_da\_bd -U nome\_do\_utilizador -W  
\q