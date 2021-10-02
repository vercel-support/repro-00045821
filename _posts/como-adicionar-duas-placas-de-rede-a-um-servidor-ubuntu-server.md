---
id: 408
title: Como adicionar duas placas de rede a um servidor Ubuntu Server
date: '2013-05-20T09:59:30+00:00'
author: 
  name: Pedro Resende
layout: post
guid: '<p>Hoje vou-vos explicar como configurar uma segunda placa de rede em linux, mais precisamente Ubuntu Server.</p><p>Por vezes é necessário adiconar uma segunda placa de rede (i.e. ligar a uma segunda ligação a uma rede externa, ligar dois servidores direc'
permalink: /como-adicionar-duas-placas-de-rede-a-um-servidor-ubuntu-server/
categories:
  - ethernet, rede, place, placa de rede, configurações, configurar, tutorial
---
Hoje vou-vos explicar como configurar uma segunda placa de rede em linux, mais precisamente Ubuntu Server.

Por vezes é necessário adiconar uma segunda placa de rede (i.e. ligar a uma segunda ligação a uma rede externa, ligar dois servidores directamente).

Após adiconarem a segunda placa de rede, vão começar por alterar o seguinte no ficheiro de interfaces

<pre>sudo vi /etc/network/interface

# The loopback network interface
auto lo
iface lo inet loopback

# The primary (public) network interface
auto eth0
iface eth0 inet static
 address 192.168.0.1
 netmask 255.255.255.0
 network 192.168.0.0
 broadcast 192.168.0.255
 gateway 192.168.0.1

# The secondary (private) network interface
auto eth1
iface eth1 inet static
 address 10.0.0.1
 netmask 255.255.255.0
 network 10.0.0.0
 broadcast 10.0.0.255</pre>

No meu caso a primeira placa de rede irá ser ligada directamente à rede e a segunda é um cabo directo para um segundo servidor, para fazer backup.

Basta agora adicionar a nova rota por onde irão os pacotes

<pre>### Ubuntu Linux add persistent route command ###
sudo up route add -net 10.0.0.0 netmask 255.255.255.0 gw 10.0.0.1

sudo route add -net 10.0.0.0 netmask 255.255.255.0 dev eth1</pre>

e está feito, como podem ver nada do outro mundo.