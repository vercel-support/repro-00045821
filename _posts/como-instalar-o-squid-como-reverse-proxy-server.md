---
id: 578
title: Como instalar o Squid como Reverse Proxy Server
date: "2012-09-06T19:37:09+00:00"
author:
  name: Pedro Resende
layout: post
guid: |
  <div class="object-center"><div class="content-view-embed">
  <div class="class-image">
  <div class="attribute-image">
permalink: /como-instalar-o-squid-como-reverse-proxy-server/
categories:
  - linux, Tutorial, acelerar, Proxy, Reverse, Reverse Proxy Server, Server, squid, Web, web server
---

<div class="object-center">
  <div class="content-view-embed">
    <div class="class-image">
      <div class="attribute-image">
      <img src="https://blog.resende.biz/assets/blog/ezdemo_site/storage/images/media/images/squid/11411-1-eng-GB/Squid_large.png" width="360" height="135"  style="border: 0px solid ;" alt="Squid Server" title="Squid Server" />
      </div>
    </div>
  </div>
</div>

Hoje, passados uns meses, resolvi deixar-vos aqui um pequeno tutorial a explicar como configurar o _<a href="http://en.wikipedia.org/wiki/Reverse_proxy" title="Reverse Proxy Server" target="_blank">Reverse Proxy Server</a>_, usand o _Squid_, para acelerar o acesso ao servidor web numa distribuição com Ubuntu 12.04 LTS.

Para isso é necessário começarem por instalar o squid no servidor que irá fazer de _proxy_, correndo o seguinte comando

<pre> # apt-get install squid</pre>

Após terminar a instalação é necessário fazer-se algumas configurações no _squid_, mas vamos começar por fazer um backup ao ficheiro de configurações.

<pre> # cp /etc/squid3/squid.conf /etc/squid3/squid.conf.original</pre>

Vamos então proceder às alterações, para isso digitem

<pre> # vi /etc/squid3/squid.conf</pre>

Façam uma pesquisa por “acl localhost”, para isso basta pressionarem a tecla “/” e escrever “acl localhost”. Adicionem a seguinte linha,

<pre>acl localhost src 192.168.0.0/24 </pre>

Se a vossa gama de ip’s for 192.168.0.0, senão substituam pela usada

Façam novamente uma pesquisa por “http_port 3128″, comentem essa linha, colocando o # no inicio da mesma.

Adicionem a seguir

<pre>http_port 80 defaultsite=
cache_peer parent 80 0 no-query originserver </pre>

onde têm de substituir o ip da vossa máquina onde está

Uma vez feitas estas alterações, basta então recomeçar o servidor de _squid_, correndo então o commando

<pre> # services squid restart</pre>

E pronto, já têm um servidor _squid_ a fazer de _reverse proxy server_ .
