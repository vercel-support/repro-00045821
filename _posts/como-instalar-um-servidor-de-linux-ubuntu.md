---
id: 545
title: Como instalar um servidor de linux (Ubuntu)
date: '2012-09-06T19:37:38+00:00'
author: 
  name: Pedro Resende
layout: post
guid: '<p>Após vários pedidos, finalmente decidi fazer um turorial a explicar como se instala o ubuntu server num computador. Normalmente serve para dar utilidade aquele computador velhinho, encostado a um canto, que não faz nada a não ser apanhar pó mas se meta'
permalink: /como-instalar-um-servidor-de-linux-ubuntu/
categories:
  - Linux Server, Tutorial, linux, Server, Ubuntu
---
Após vários pedidos, finalmente decidi fazer um turorial a explicar como se instala o ubuntu server num computador. Normalmente serve para dar utilidade aquele computador velhinho, encostado a um canto, que não faz nada a não ser apanhar pó mas se metade das pessoas soubessem o que ele ainda tem para dar, ficariam maravilhadas.

Muitos devem estar-se a perguntar neste momento, porquê linux e porque não windows ?

Pois bem, a realidade é que linux consegue fazer as mesmas coisas que o nosso “amigo” windows, mas com muito menos recursos e mais velocidade.

Acho que já chega de bla… bla… e vou começar por uma vez de todas o tutorial que vocês tão esperam.

Poderia ter optado por outra distribuição, mas resolvi escolher aquela que actualmente é a mais fácil e a da moda, o Ubuntu.

Vamos começar por “puxar” a versão mais actual, para isso basta clicarem neste <a href="http://www.ubuntu.com/getubuntu/download-server" target="_blank">link</a>.

Devem-se deparar com o seguinte:

Agora, devem optar pela versão que pretendem. Para isso, basta clicarem no link “Alternative download options”

Optei pela versão de 64 bits, contudo a 32 bits é precisamente igual em termos de instalação.

Após fazerem o download, têm de gravar a imagem para um CD. Vou presumir que todos sabem fazer isso, senão acho que nem vale a pena continuarem este tutorial… (Caso não saibam mandem um e-mail através dos Contactos )

O resto do tutorial será feito numa máquina virtual, para que seja possível colocar as imagens.

Após arrancar o CD com o ubuntu, devem-se deparar com o seguinte

Após escolherem o idioma desejado ( este idioma é somente para a instalação), escolhem a opção de Instalar o Ubuntu Server.

Após alguns segundos começa a verdadeira instalação, ou devo dizer cruzada ? Começam por escolher o idioma do vosso sistema, eu vou optar por inglês 

Agora escolhe-se o Pais…

Após ter escolhido Europa, Portugal, chega à altura de detectar o idioma do teclado.

Optei por dizer que não queria que ele detectasse, assim escolho directamente o idioma correcto…

No meu caso Portugal.

Após alguns segundos, ou mesmo minutos, em que a instalação está a carregar todos os módulos necessários, chega a fase de configurar a rede. A primeira opção é a escolha do Nome da máquina, optei por Ubuntu-VM-Server.

De seguida, temos o hora do sistema. Como sou do continente, optei por lisboa, visto que o fuso horário é que é o importante (Neste momento acho que há muito portista chateado).

Neste momento chegamos a uma das fases mais importantes, a partição dos discos. Para muita gente é sempre andar, contudo acho que é uma fase importante. Como tal, não vou optar pelo “Guided” (automático), mas sim pela configuração manual.

Após escolher a opção manual, depara-se com o seguinte.

Escolho o disco em causa, neste caso SCSI1 (0,0,0) (sda).

Crio uma nova partição.

Após criar a partição, vão aparecer as seguinte opções.

Vou configurar os discos como sendo “Logical Volume Manager”, o que mais tarde permite adicionar novos discos como sendo um único com o somatório do espaço disponível.

Começa-se por se gravar as opções de LVM no disco.

Após serem gravadas, temos de criar um novo grupo com os volumes.

Vou escolher o nome de HD, mas pode ser outro qualquer .

De seguida selecciono todos os discos que vão pertencer a esse grupo, neste caso tenho apenas um.

Gravo então as alterações no LVM.

Após terem sido feitas as alterações do LVM, devem-se deparar com o seguinte.

Visto que já está configurado devidamente, o LVM, inicio a configuração do espaço em si.

Escolho “Create logical volume” e escolho o Volume, que no meu caso é o HD,

Têm de escolher uma vez mais, um nome para o “Logical volume name”, optei por ser Disk1.

Neste momento, vou reservar o espaço que quero para este volume lógico. Visto que o disco tem 8585 MB, vou escolher 7500 MB para este volume, deixando 1085 MB para o volume de Swap, também conhecido como memória Virtual. Normalmente usa-se o dobro do espaço da memória RAM em memória virtual.

Após alocar o espaço, já me aparece um volume lógico na configuração do LVM.

Vou então repetir os passos anteriores, para criar um segundo volume lógico chamado Disk2, para que posteriormente seja usado como Swap.

Após criar o segundo volume lógico, o aspecto será identico a este.

Visto que já configurámos os volumes lógicos, podemos seleccionar a opção de Finish.

Voltamos então ao menu da partição dos discos, como podem ver está um bocadinho diferentes.

Vou começar por escolher o Disk1 e defini-lo como a root do sistema. Para isso, têm de escolher a opção “#1 7.5 Gb”. Vai então aparecer o seguinte menu.

onde diz “Use as: do not use”

e de seguida escolho o tupo de partição, vou optar por Ext3 por considerar que é um formato mais estável que o Ext4.

Em seguida escolho o “Mount point:” com “/ – the root file system”

Este volume já está tratado, como tal, para finalizar “Done setting up the partition”

Somos então re-encaminhados para o menu das partições, uma vez mais.

Falta então configurar o disco de Swap. Para isso, escolho o “#1 1,1 GB” do “Disk2″

Escolho o “Use as: do not use”, como anteriormente, mas desta vez escolho o tipo como sendo “swap area”

Visto que para este volume basta isto, escolho a opção “Done setting up the partition”

Uma vez mais no menu de Partição dos discos, mas desta vez com os volumes definidos, escolho “Finish partitioning and write changes to disk” para proseguir a instalação.

Salvo todas as alterações feitas.

Espero que os discos sejam formatados.

Espero que seja instalado a base do sistema.

Chegou finalmente a fase de escolher o username e password do administrador. Começa por pedir o Nome Completo do Utilizador, vou escolher como User, acho que compreendem porquê…

Para username, vou optar por “administrator”

A password, pode ser… hum… “123″ e em seguida volto a confirmar…

Como escolhi uma password com menos de 8 caracteres, aparece-me o seguinte aviso.

Optei por continuar, visto que isto é um Virtual Machine, contudo aconselho vivamente a escolherem uma password um pouco mais complexa.

A seguir aparece-me a opção de encriptar os directórios dos utilizadores, vou escolher “não”, para ser mais fácil passar os ficheiros de um lado para o outro.

Espero mais alguns segundos enquanto é configurado o apt, para quem não sabe o apt ou aptitude é responsável por todas as bibliotecas do sistema.

Finalmente escolhemos o software a ser instalado no sistema, vou começar por optar em não fazer as actualizações automaticamente.

E por fim escolho o software. Neste momento, vou-me limitar a escolher o LAMP (Linux Apache MySQL PHP) que é o acrónimo para o servidor web, ou http, como perferirem. O OpenSSH server, que é um servidor de SSH, que vai permitir que a máquina seja controlada atravês de outros computadores. E o Samba file server, que permite aceder com outras máquinas às partilhas.

Nota: Mesmo que queiram instalar um servidor de mail, aconselho que façam isso posteriormente. Mais tarde colocarei um tutorial, sobre como o fazer.

Neste momento o sistema está a seleccionar os pacotes necessários para a instalação

De seguida devem ter de escolher a password de root para o MySQL. Escolham cuidadosamente esta password, porque será graças a ela que poderão configurar todos os acessos à base de dados.

Neste momento podem ir beber um café, visto que o sistema está na fase de instalação e é capaz de demorar um bom bocado.

Quando voltarem, provavelmente já terá terminado a instalação.

escolhem a opção de continuar, retiram o CD, e espera que reinicie.

Quando reiniciar devem-se deparar com algo do género.

E assim têm a instalação do servidor de linux feita.

P.S. – O próximo tutorial será a explicar como se configura a partilha de pastas, samba, e utilizar o LAMP.