---
id: 367
title: Como instalar o Ruby On Rails no Debian 8
date: "2016-02-06T23:29:00+00:00"
author:
  name: Pedro Resende
layout: post
guid: |
  <div class="object-center"><div class="content-view-embed">
  <div class="class-image">
  <div class="attribute-image">
permalink: /como-instalar-o-ruby-on-rails-no-debian-8/
categories:
  - ruby, rails, ruby on rail, debian 8, node.js
---

<div class="object-center">
  <div class="content-view-embed">
    <div class="class-image">
      <div class="attribute-image">
      <img src="https://blog.resende.biz/assets/blog/ezdemo_site/storage/images/media/images/ruby-on-rails/12678-1-eng-GB/Ruby-on-Rails_medium.jpg" width="200" height="200"  style="border: 0px solid ;" alt="Ruby on Rails" title="Ruby on Rails" />
      </div>
    </div>
  </div>
</div>

Hoje deixo-vos aqui um pequeno tutorial, de como instalar o ruby on rails no debian.

Para quem não sabe, o Ruby on Rails trata-se de uma framework "<a href="http://rubyonrails.org/" target="_blank">rails</a>" da linguagem Ruby.

Podem pensar que este tutorial é uma tarefa fácil e que basta seguirem o que diz no site official, contudo não é bem assim.

Vamos então começar por instalar os pacotes necessários

<pre># apt-get install ruby sqlite3 libsqlite3-dev ruby-dev nodejs</pre>

Uma vez que já têm os pacotes para correr o ruby, vamos então criar um novo projecto

<pre>$ rails new blog</pre>

e para verificarmos se está tudo a funcionar basta correr

<pre>$ cd blog</pre>

<pre>$ bin/rails server</pre>

e acederem, através do browser, a http://localhost:3000.
