---
id: 561
title: Gnome 3 no Ubuntu 10.10
date: '2012-09-06T19:37:23+00:00'
author: 
  name: Pedro Resende
layout: post
guid: '<p>Hoje vou-vos explicar o processo extremamente difícil (lol) para instalar o ambiente gráfico <a href="http://www.gnome3.org/" target="_blank">Gnome 3</a> no ubuntu 10.10.</p><p>Para isso é necessário acederem ao terminal e digitar o seguinte comando.</'
permalink: /gnome-3-no-ubuntu-10-10/
categories:
  - Ambiente, Ambiente Gráfico, Gnome, Gnome 3, Gnome3, Gráfico, Ubuntu 10.10, linux, Ubuntu
---
Hoje vou-vos explicar o processo extremamente difícil (lol) para instalar o ambiente gráfico <a href="http://www.gnome3.org/" target="_blank">Gnome 3</a> no ubuntu 10.10.

Para isso é necessário acederem ao terminal e digitar o seguinte comando.

**sudo add-apt-repository ppa:ubuntu-desktop/gnome3-builds**

Irá aparecer um erro alertando que não é possível encontrar a “signing\_key\_fingerprint”, este deverá ser simplesmente ignorado.

Como habitualmente deverão correr a actualização do apt, atravês de

**sudo apt-get update**

Para instalar, deverão utilizar o comando

**sudo apt-get install gnome3-session -y**

e após alguns segundos têm o ambiente gnome3 instalado.

Para poderem corre-lo é necessário fazer um reboot à vossa “máquina”. Quando aparecer a janela de login basta seleccionar o nome do utilizador e alterar a opção em baixo para GNOME 3.