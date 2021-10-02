---
id: 548
title: Como instalar um servidor de FTP em linux
date: '2012-09-06T19:37:35+00:00'
author: 
  name: Pedro Resende
layout: post
guid: '<p>Finalmente tive algum tempo menos ocupado e resolvi colocar aqui o tutorial, relativo à instalação de um servidor de FTP em linux, conforme foi prometido no post anterior.</p><p>Vamos utilizar um Servidor de FTP chamado proftpd.</p><p>Vamos começar pre'
permalink: /como-instalar-um-servidor-de-ftp-em-linux/
categories:
  - ftp, ftp server, proftpd, Tutorial, linux, Server, Ubuntu
---
Finalmente tive algum tempo menos ocupado e resolvi colocar aqui o tutorial, relativo à instalação de um servidor de FTP em linux, conforme foi prometido no post anterior.

Vamos utilizar um Servidor de FTP chamado proftpd.

Vamos começar precisamente no ponto em que ficámos da última vez.

Vamos fazer o login como administrador, que foi configurado na fase de instalação.

Depois de fazerem o login no vosso servidor, devem-se deparar com o seguinte

Vou começar por actualizar o sistema, para tal vou correr os seguintes comandos:

1. sudo apt-get update (actualiza a lista dos módulos disponíveis) e  
2. sudo apt-get upgrade (actualiza os módulos).

Vou carregar no “Y” e em seguida no “Enter” para actualizar o sistema com os últimos módulos (pacotes).

Este processo demora alguns minutos, dependendo da velocidade da vossa ligação à internet, assim como a velocidade do processador.

Após ter terminado o processo, devem-se deparar com o seguinte:

Neste momento o vosso sistema encontra-se actualizado, como tal vou começar por fazer um “reboot” ao sistema.

Para tal, basta correr o seguinte comando:

“sudo reboot now”

Nota: No caso de quererem desligar a máquina, têm de correr o comando “sudo shutdown -h now”, o “-h” faz um “halt” ao sistema.

Agora que o sistema já recomeçou com as últimas actualizações, volto a fazer login.

Vamos então instalar o proftpd, para tal é necessário correr o comando “sudo apt-get install proftpd”

e digitar “Y”, para que a instalação inicie.

De seguida aparece-nos a seguinte opção

em que escolhemos a opção “standalone”

Uma vez instalado o proftpd, vamo-nos certificar que está a funcionar convenientemente. Começamos por fazer uma ligação ao servidor local, através do comando “ftp localhost”

Colocamos um dos usernames e password existentes na maquina local, visto que já tinha criado o utilizador bla no tutorial anterior vou entrar com este mesmo.

Finalmente estamos loggados.

Terminamos assim mais um tutorial de linux, este foi um pouco mais curto mas se tiverem dúvidas relativamente às configurações podem sempre entrar em <a href="http://blog.resende.biz/?page_id=571" target="_self">contacto</a>.