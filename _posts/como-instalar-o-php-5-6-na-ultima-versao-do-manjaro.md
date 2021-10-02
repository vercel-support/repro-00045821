---
id: 365
title: Como instalar o PHP 5.6 na última versão do Manjaro
date: "2017-08-03T13:30:00+00:00"
author:
  name: Pedro Resende
layout: post
guid: |
  <div class="object-center"><div class="content-view-embed">
  <div class="class-image">
  <div class="attribute-image">
permalink: /como-instalar-o-php-5-6-na-ultima-versao-do-manjaro/
categories:
  - manjaro, php 5.6, pacman, php, AUR
---

<div class="object-center">
  <div class="content-view-embed">
    <div class="class-image">
      <div class="attribute-image">
      <img src="https://blog.resende.biz/assets/blog/ezdemo_site/storage/images/media/images/manjaro-logo2/12720-1-eng-GB/Manjaro-Logo_small.png" width="100" height="100"  style="border: 0px solid ;" alt="Manjaro Logo" title="Manjaro Logo" />
      </div>
    </div>
  </div>
</div>

Hoje, passado alguns meses sem nada dizer, resolvi deixar aqui um pequeno tutorial de como instalar a versão do php 5.6 na última versão do <a href="https://manjaro.org" target="_blank">Manjaro</a>. Para quem não sabe, o Manjaro é uma distribuição de linux baseada no <a href="https://www.archlinux.org" target="_blank">Arch</a>.

Para instalar a última versão do PHP é fácil, bastando executar

<pre># pacman -S php</pre>

Contudo, para uma versão anterior é necessário utilizar o AUR (ArchLinux User Repository).

Vamos começar por instalar os pacotes de desenvolvimento

<pre># pacman -S --needed base-devel</pre>

uma vez instalados, é a vez de ir buscar o "pacote" do php 5.6 que ainda não está compilado

<pre>$ git clone https://aur.archlinux.org/php56.git
$ cd php56
$ makepkg -si</pre>

Após algum tempo têm o php5.6 instalado, para tal necessitam apenas de executar

<pre>$ php56 -v</pre>

e terão o seguinte

<pre>PHP 5.6.31 (cli) (built: Aug  3 2017 14:40:38) 
Copyright (c) 1997-2016 The PHP Group
Zend Engine v2.6.0, Copyright (c) 1998-2016 Zend Technologies</pre>

Caso tenham dúvidas não hesitem em deixa um comentário
