---
id: 368
title: Como instalar o Cinnamon Desktop Environment no Debian 8 ?
date: "2015-10-18T11:36:00+00:00"
author:
  name: Pedro Resende
layout: post
guid: |
  <div class="object-center"><div class="content-view-embed">
  <div class="class-image">
  <div class="attribute-image">
permalink: /como-instalar-o-cinnamon-desktop-environment-no-debian-8/
categories:
  - cinnamon, desktop, environment, gnome, debian, 8
---

<div class="object-center">
  <div class="content-view-embed">
    <div class="class-image">
      <div class="attribute-image">
      <img src="https://blog.resende.biz/assets/blog/ezdemo_site/storage/images/media/images/cinnamon/12654-1-eng-GB/Cinnamon_large.jpg" width="360" height="222"  style="border: 0px solid ;" alt="Cinnamon" title="Cinnamon" />
      </div>
    </div>
  </div>
</div>

Hoje deixo-vos aqui um pequeno tutorial, que é muito parecido com um que escrevi de como instalar o <a href="http://cinnamon.linuxmint.com" target="_blank">Cinnamon</a> no Debian 8.&nbsp;

Para quem não sabe, o Cinnamon é um _fork_&nbsp;do <a href="https://en.wikipedia.org/wiki/GNOME" target="_blank">Gnome</a> 3 que foi inicialmente desenvolvido para a distribuição <a href="http://linuxmint.com" target="_blank">Mint</a>, de modo a que pudesse "oferecer" o tradicional <a href="https://en.wikipedia.org/wiki/GNOME" target="_blank">Gnome</a> 2 mas com algumas novidades do <a href="https://en.wikipedia.org/wiki/GNOME" target="_blank">Gnome</a> 3.

Vamos começar por adicionar o repositório do cinnamon ao vosso ficheiro de sources.list

<pre>sudo echo 'deb http://packages.linuxmint.com/ debian main import backport upstream romeo' >> /etc/apt/sources.list</pre>

Após este passo, é necessário actualizar os vossos repositório executando

<pre>sudo apt-get update</pre>

e por fim, para instalarem efectivamente o cinnamon

<pre>sudo apt-get install linuxmint-keyring cinnamon cinnamon-session</pre>

Quando terminar a instalação, basta fazerem logout.

Deverão deparar-se com o seguinte ecrã:

<div class="object-center">
  <div class="content-view-embed">
    <div class="class-image">
      <div class="attribute-image">
      <img src="https://blog.resende.biz/assets/blog/ezdemo_site/storage/images/media/images/debian-login/12659-1-eng-GB/Debian-Login_large.png" width="360" height="269"  style="border: 0px solid ;" alt="Debian Login" title="Debian Login" />
      </div>
    </div>
  </div>
</div>

Deverão pressionar a roda dentada e seleccionar "Cinnamon" e por fim proceder ao login

<div class="object-center">
  <div class="content-view-embed">
    <div class="class-image">
      <div class="attribute-image">
      <img src="https://blog.resende.biz/assets/blog/ezdemo_site/storage/images/media/images/debian-desktop-choice/12664-1-eng-GB/Debian-desktop-choice_large.png" width="359" height="270"  style="border: 0px solid ;" alt="Debian desktop choice" title="Debian desktop choice" />
      </div>
    </div>
  </div>
</div>

e bem vindos ao cinnamon

<div class="object-center">
  <div class="content-view-embed">
    <div class="class-image">
      <div class="attribute-image">
      <img src="https://blog.resende.biz/assets/blog/ezdemo_site/storage/images/media/images/cinnamon-welcome/12669-1-eng-GB/Cinnamon-Welcome_large.png" width="360" height="269"  style="border: 0px solid ;" alt="Cinnamon Welcome" title="Cinnamon Welcome" />
      </div>
    </div>
  </div>
</div>

O que acham deste ambiente alternativo no Debian ?
