---
id: 553
title: Como aceder a uma pasta partilhada em Windows, via Ubuntu
date: '2012-09-06T19:37:30+00:00'
author: 
  name: Pedro Resende
layout: post
guid: '<p>Sei que passaram várias semanas desde do último post, contudo a falta de tempo tem sido mais do que muita visto que me meti a fazer a tese, mas isso fica para outro dia.</p><p>Neste pequeno tutorial, vou-vos ensinar como podem aceder a uma pasta partil'
permalink: /como-aceder-a-uma-pasta-partilhada-em-windows-via-ubuntu/
categories:
  - console, samba, Sambafs, Share, smbfs, linux, Tutorial, Ubuntu
---
Sei que passaram várias semanas desde do último post, contudo a falta de tempo tem sido mais do que muita visto que me meti a fazer a tese, mas isso fica para outro dia.

Neste pequeno tutorial, vou-vos ensinar como podem aceder a uma pasta partilhada em Windows/Linux através de Samba.

Para começar é necessário adicionar um “package”.

Começam então por escrever o seguinte na consola:

sudo apt-get install smbfs

Ao correrem este comando estão a instalar o pacote do samba file system.

Uma vez instalado, vamos começar por criar uma directoria para que possa ser acedida localmente (ex. teste).

sudo mkdir /media/temp

Vamos agora correr o comando “chave” para que se possa aceder à partilha:  
sudo mount –t smbfs //ip\_do\_computador/pasta\_partilhada/ /media/temp/ -o username=nome\_utilizador

E pronto, como podem ver não custou nada 

P.S. – no caso do username ser do Windows e tiver espaços, usem o seguinte

sudo mount –t smbfs //ip\_do\_computador/pasta\_partilhada/ /media/temp/ -o username=”nome\_utilizador”