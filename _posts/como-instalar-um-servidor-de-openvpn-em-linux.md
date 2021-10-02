---
id: 391
title: Como instalar um servidor de OpenVPN em Linux
date: "2013-11-21T18:52:03+00:00"
author:
  name: Pedro Resende
layout: post
guid: |
  <div class="object-center"><div class="content-view-embed">
  <div class="class-image">
  <div class="attribute-image">
permalink: /como-instalar-um-servidor-de-openvpn-em-linux/
categories:
  - OpenVPN, VPN, VPN Server, linux, Tutorial, Ubuntu, Debian
---

<div class="object-center">
  <div class="content-view-embed">
    <div class="class-image">
      <div class="attribute-image">
      <img src="https://blog.resende.biz/assets/blog/ezdemo_site/storage/images/media/images/openvpn-logo/12086-1-eng-GB/OpenVPN-Logo_large.png" width="359" height="65"  style="border: 0px solid ;" alt="OpenVPN Logo" title="OpenVPN Logo" />
      </div>
    </div>
  </div>
</div>

Hoje, vou-vos ensinar a instalar um servidor de OpenVPN em Linux em poucos passos.

Vamos começar por actualizar a base de dados dos pacotes, através do seguinte comando:

<pre># apt-get update</pre>

Uma vez actualizada a lista, vamos então proceder a instalação propriamente dita. Vamos então digitar o seguinte comando:

<pre># apt-get install openvpn openssl</pre>

Uma vez instalado, vamos proceder à configuração do mesmo

<pre>$ cd /etc/openvpn

# &lt;em&gt;cp -r /usr/share/doc/openvpn/examples/easy-rsa/2.0 ./easy-rsa

# vi easy-rsa/vars</pre>

Substituam o conteúdo da linha 16

<pre>export EASY_RSA="`pwd`"</pre>

por&nbsp;

<pre>export EASY_RSA="/etc/openvpn/easy-rsa"</pre>

para isso, necessitam carregar na tecla "i" para poderem começar a introduzir texto.

Uma vez alterado, primam a seguinte sequência para salvar o conteúdo e sair "ESC" e depois :wq"

Vamos agora definir a origem dos conteúdos

<pre># . ./easy-rsa/vars </pre>

vamos então limpar

<pre># ./easy-rsa/clean-all</pre>

Vamos agora fazer um symlink&nbsp;

<pre># ln -s openssl-1.0.0.cnf openssl.cnf</pre>

Para gerarmos os certificados de segurança é então e necessário

<pre># cd ..

# ./easy-rsa/build-ca OpenVPN

# ./easy-rsa/build-key-server server

# ./easy-rsa/build-key client1</pre>

Por fim,

<pre># ./easy-rsa/build-dh</pre>

Vamos então especificar as configurações dentro do openvpn.conf

<pre># vi openvpn.conf</pre>

em que o conteúdo é

<pre>dev tun
proto udp
port 1194
ca /etc/openvpn/easy-rsa/keys/ca.crt
cert /etc/openvpn/easy-rsa/keys/server.crt
key /etc/openvpn/easy-rsa/keys/server.key
dh /etc/openvpn/easy-rsa/keys/dh1024.pem
user nobody
group nogroup
server 10.8.0.0 255.255.255.0
persist-key
persist-tun
status /var/log/openvpn-status.log
verb 3
client-to-client
push “redirect-gateway def1"
#set the dns servers
push “dhcp-option DNS 8.8.8.8"
push “dhcp-option DNS 8.8.4.4"
log-append /var/log/openvpn
comp-lzo</pre>

Vamos activar o redireccionamento

<pre># echo 1 &gt; /proc/sys/net/ipv4/ip_forward</pre>

Por fim iniciamos o serviço

<pre># service openvpn start</pre>

Falta-nos apenas a configuração para o cliente ligacao.openvpn

<pre># vi ligacao.openvpn</pre>

com o conteúdo

<pre>dev tun
client
proto udp
remote &lt;strong&gt;IP_DO_SERVIDOR&lt;/strong&gt; 1194
resolv-retry infinite
nobind
persist-key
persist-tun
ca ca.crt
cert client1.crt
key client1.key
comp-lzo
verb 3</pre>

Não se esqueçam de mudar o **IP_DO_SERVIDOR**, pelo ip ou pelo domínio do mesmo.

Copiem os certificados que estão em&nbsp;**/etc/openvpn/easy-rsa/keys**.

Para o cliente necessitam apenas de usar os seguintes ficheiros:

- **ca.crt;**
- **client1.crt;**
- **client1.key e&nbsp;**
- **ligacao.openvpn.**

Para estabelecerem a ligação a partir do cliente basta correrem

<pre># openvpn ligação.openvpn</pre>

E pronto,&nbsp;já têm o servidor VPN, usando o OpenVPN, a funcionar.
