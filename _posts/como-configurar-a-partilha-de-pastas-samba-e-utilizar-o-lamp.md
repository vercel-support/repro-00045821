---
id: 546
title: Como configurar a partilha de pastas, samba, e utilizar o LAMP
date: '2012-09-06T19:37:36+00:00'
author: 
  name: Pedro Resende
layout: post
guid: '<p>Visto que já coloquei à vossa disposição a configuração do Ubuntu Server 9.10, agora vou proceder à configuração do samba e do LAMP.</p><p>Vamos começar precisamente no ponto em que ficámos da última vez.</p><p>Vamos fazer o login como administrador, q'
permalink: /como-configurar-a-partilha-de-pastas-samba-e-utilizar-o-lamp/
categories:
  - lamp, update, Upgrade, Tutorial, samba, Server, Ubuntu
---
Visto que já coloquei à vossa disposição a configuração do Ubuntu Server 9.10, agora vou proceder à configuração do samba e do LAMP.

Vamos começar precisamente no ponto em que ficámos da última vez.

Vamos fazer o login como administrador, que foi configurado na fase de instalação.

Depois de fazerem o login no vosso servidor, devem-se deparar com o seguinte

Vou começar por actualizar o sistema, para tal vou correr os comando:

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

Vamos agora proceder à configuração do samba. Vou começar por adicionar um novo utilizador, para que este possa aceder aos directórios partilhados.

É então necessário correr o comando “sudo adduser nome_utilizador”

Depois de correr este comando, é-me pedido a password para o novo utilizador.

coloco as informações pertencentes a esse utilizador, por fim “Y” e “Enter” para adicionar o utilizador.

Agora que já temos o novo utilizador, vou adicionar este utilizador ao samba. Corro então o comando “sudo smbpasswd -a nome_utilizador” e em seguida coloco a password de acesso.

Vamos agora instalar uma aplicação, para facilitar a vida e as configurações, chamada “Webmin”

Para isso começamos por mudar de directoria com o comando “cd /~”, em seguida “sacamos” os pacotes necessários através do comando “sudo wget http://prdownloads.sourceforge.net/webadmin/webmin\_1.500\_all.deb”

Agora, vamos instalar aplicação atravês do comando “sudo dpkg –install webmin\_1.500\_all.deb”

Visto que não temos todos os pacotes necessários para instalar o webmin, vamos começar por arranjá-los, para isso corremos o comando “sudo apt-get update” em seguinda “sudo apt-get upgrade”

Agora, corremos o comando “sudo apt-get -f install” para “puxar” todos os pacotes necessários e instalar o webmin.

Uma vez mais “Y” e “Enter”. Uma vez instalado o webmin, deparamo-nos com o seguinte.

Finalmente está instalado. Para acedermos, vamos começar por verificar se está tudo bem com o apache. Para isso, começamos por correr o comando “ifconfig”

Ao executarmos este comando, o equivalente em windows é “ipconfig”, é gerado o relatório de todas as placas de rede, assim como os seus ip’s.

Para sabererem o ip da máquina vejam no “eth0″, ligação da placa de rede, a linha que diz “inet addr”. O que vem a seguir é o ip, no meu caso 192.168.0.13.

Agora, abram noutro computador o vosso browser favorito e coloquem no endereço “http://” seguido do ip do servidor.

Como podem ver, o apache está a funcionar. Agora vamos tentar aceder ao webmin, para isso escrevam então “https://ip_servidor:10000/”

Aparece-vos então uma mensagem avisar que o certificado não é válido, digam que querem proceder para que seja possível acederem ao webmin.

Coloquem agora o username e password de administrador, entrem, e finalmente têm o webmin a funcionar.

Agora, do lado esquerdo escolham a opção “Servers” e em seguida “Samba Windows File Sharing”

Como está tudo a funcionar, vamos ao servidor e vamos criar uma pasta de partilha. Comecem por executar o comando “cd /home” para mudarem de directoria para a home.

Corram então o comando “sudo mkdir share”, para criar uma nova directoria chamada “share”

Visto a directoria já estar criada, vamos agora partilha-la com o samba. Voltando ao computador com o browser, escolham a opção “Create new file share”

Aparece-vos então o seguinte

vamos começar por colocar o “Share name”, como “share”, o “Directory to share”, como “/home/share/” e por fim clicar em “Create”

Agora, Vamos repetir o processo, mas para a pasta do apache para que seja possível colocarem páginas, blogs e afins online. Neste caso, após escolherem a opção “Create new file share”  
coloquem o “Share name” como “www” e o “Directory to share” como “/var/www/”

Uma vez criadas estas duas “partilhas” é necessário recomeçar o serviço de samba, para isso escolham a opção “Restart Samba Servers”

Ok, vamos então verificar se está tudo em ordem. Pressionem as seguintes teclas “Ctrl+E” e escrevam em cima, no endereço o “\\ip\_do\_servidor\\.

Ao clicarem duas vezes, em qualquer uma das pastas, aparece-vos o seguinte.

Para acederem basta-vos colocarem o username e password do utilizador que adicionaram quando correram o comando “smbpasswd -a” e pronto têm acesso às pastas.

Agora já têm o samba configurado, se quiserem adicionar novas pastas, basta seguirem os passos anteriores.

Para colocarem um blog, ou um site, no vosso servidor basta-vos adicionarem os ficheiros à pasta “www”

Nota: Esta descrição foi para partilhar pastas para leitura, caso pretendam escrita, seleccionem a pasta.

Escolham a opção “Security and Access Control”

e escolham a opção “Writable ?” em “Yes”

em seguida, “Save”. Não se esqueçam de fazer “Restart Samba Servers” para que as alterações entrem em acção.

Por fim, no servidor têm de mudar as premissões de escrita na pasta, para isso corram “sudo chmod -R 777 /home/share/” e pronto, podem escrever na pasta à vontade.

P.S. – E assim acabamos o segundo tutorial de linux, no próximo vou-vos ensinar a instalar um servidor de FTP para que possam aceder remotamente aos vossos ficheiros.