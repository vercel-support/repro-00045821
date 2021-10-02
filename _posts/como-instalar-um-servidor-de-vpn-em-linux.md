---
id: 580
title: Como instalar um servidor de VPN em Linux
date: '2010-03-29T16:21:00+00:00'
author: 
  name: Pedro Resende
layout: post
guid: '<p>Hoje, vou-vos ensinar a instalar um servidor VPN em Linux em poucos passos.</p><p>Vamos começar por actualizar a base de dados dos pacotes, através do seguinte comando:</p><pre>sudo apt-get update</pre><p>Uma vez actualizada a lista, vamos então proced'
permalink: /como-instalar-um-servidor-de-vpn-em-linux/
categories:
  - VPN, VPN Server, linux, Tutorial, Ubuntu
---
Hoje, vou-vos ensinar a instalar um servidor VPN em Linux em poucos passos.

Vamos começar por actualizar a base de dados dos pacotes, através do seguinte comando:

<pre>sudo apt-get update</pre>

Uma vez actualizada a lista, vamos então proceder a instalação propriamente dita. Vamos então digitar o seguinte comando:

<pre>sudo apt-get install pptpd</pre>

Após instalarem, é necessário fazer algumas alterações nos ficheiros de configuração, para isso começam por editar o ficheiro, através do comando:

<pre>sudo pico /etc/pptpd.conf</pre>

Devem-se deparar com a seguinte figura.

No final do ficheiro (Podem descer com o Page Down), vão adicionar as seguintes linhas:

<pre>localip 192.168.130.133
remoteip 192.168.131.1-50</pre>

O localip é o ip da máquina em questão, se não souberem o ip, podem descobri-lo através do comando ifconfig na consola.

O remoteip é a gama de ip’s que irá ser atribuída a cada terminal externo.

Após adicionarem as linhas, pressionem Ctrl +X e por fim Y. Para salvarem o ficheiro.

Vamos agora definir os utilizadores autorizados para acederem a este servidor VPN, é necessário editar o fichero /etc/ppp/chap-secrets através do comando:

<pre>sudo pico /etc/ppp/chap-secrets</pre>

Adicionem o seguinte:

Em que o 1º é o nome do utilizador, o 2º campo é o tipo de servidor, o 3º e a password e o último a \* é o ip publico do cliente. Este está a \* para que possa aceitar qualquer ip.

Uma vez mais, Ctrl+X e Y.

Para terminar, é necessário fazer um “restart” ao serviço através do comando:

<pre>sudo /etc/init.d/pptpd restart</pre>

E pronto, já têm o servidor VPN a funcionar.

**\*\\*\*UPDATE\*\****

Vamos agora adicionar as configurações de redirecionamento

<pre>sudo vi /etc/ppp/pptpd-options</pre>

Procurem por ms-dns e adicionem

<pre>ms-dns 8.8.8.8
ms-dns 8.8.4.4</pre>

e por fim&nbsp;

<pre>sudo vi /etc/sysctl.conf</pre>

e descomentem a linha

<pre>#net.ipv4.ip_forward=1</pre>