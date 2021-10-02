---
id: 366
title: Como rejeitar um determinado endereço de email no Postfix
date: "2016-02-17T20:22:00+00:00"
author:
  name: Pedro Resende
layout: post
guid: |
  <div class="object-center"><div class="content-view-embed">
  <div class="class-image">
  <div class="attribute-image">
permalink: /como-rejeitar-um-determinado-endereco-de-email-no-postfix/
categories:
  - postfix, reject, centos, redhat, email, debian, ubuntu
---

<div class="object-center">
  <div class="content-view-embed">
    <div class="class-image">
      <div class="attribute-image">
      <img src="https://blog.resende.biz/assets/blog/ezdemo_site/storage/images/media/images/postfix-logo/12687-1-eng-GB/Postfix-Logo_medium.png" width="200" height="106"  style="border: 0px solid ;" alt="Postfix Logo" title="Postfix Logo" />
      </div>
    </div>
  </div>
</div>

Hoje deixo-vos aqui um pequeno tutorial a explicar como podem adicionar um e-mail especifico a ser ignorado no postfix.

Para isso, é necessário começarem por aceder ao directório

<pre>$ cd /etc/postfix</pre>

Vamos agora criar o ficheiro sender_access

<pre>$ vi sender_access</pre>

e lá dentro vamos colocar

<pre>&lt;a href="mailto:email-a-ignorar@dominio.com"&gt;email-a-ignorar@dominio.com&lt;/a&gt; REJECT</pre>

após guardarem o ficheiro deverão executar o comando

<pre>$ postmap hash:sender_access</pre>

vamos agora editar o ficheiro principal de configuração do postfix

<pre>$ vi main.cf</pre>

e na linha que começa com

<pre>smtp_sender_restrictions =</pre>

vamos adicionar, como primeira entrada

<pre>check_sender_access hash:/etc/postfix/sender_access</pre>

por fim, só falta recomeçar o postfix, correndo

<pre># /etc/init.d/postfix restart</pre>

Agora qualquer e-mail vindo do endereço

<pre>email-a-ignorar@dominio.com</pre>

será rejeitado.
