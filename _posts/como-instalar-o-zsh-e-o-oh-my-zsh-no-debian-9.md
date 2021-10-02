---
id: 650
title: Como instalar o ZSH e o Oh-my-zsh no Debian 9
date: "2019-02-21T10:30:52+00:00"
author:
  name: Pedro Resende
layout: post
guid: http://blog.resende.biz/?p=650
permalink: /como-instalar-o-zsh-e-o-oh-my-zsh-no-debian-9/
coverImage: "/assets/blog/images/como-instalar-o-zsh-e-o-oh-my-zsh-no-debian-9.png"
categories:
  - zsh
tags:
  - oh-my-zsh
  - zsh
---

Hoje vou-vos deixar aqui um pequeno tutorial a explicar como podem instalar o&nbsp;<a rel="noreferrer noopener" href="https://en.wikipedia.org/wiki/Z_shell" target="_blank">ZSH</a>&nbsp;(Z Shell) no terminal.&nbsp;
Para quem não sabe o que é o o ZSH, devem saber que se trata de uma shell um pouco diferente do tão bem conhecido bash, consola por defeito instalada na maioria dos sistemas linux.

Vamos começar por actualizar os repositórios de pacotes de linux

<pre class="wp-block-preformatted"># apt update<br /></pre>

De seguida vamos instalar os pacotes necessários para ter o zsh

<pre class="wp-block-preformatted"># apt install zsh curl git</pre>

Uma vez instalados os pacotes, temos de definir o zsh, como a shell predefinida, para temos temos de executar

<pre class="wp-block-preformatted">chsh -s $(which zsh) &lt;- Zsh Default shell</pre>

<pre class="wp-block-preformatted"><br /><em>- </em>chsh -s $(which zsh) &lt;- Zsh Default shell<br /><em>- </em>sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"<br /><em>- </em>logout and login</pre>

Vamos agora instalar o <a href="https://github.com/robbyrussell/oh-my-zsh" target="_blank" rel="noreferrer noopener" aria-label="oh-my-zsh (abre num novo separador)">oh-my-zsh</a>, que se trata de temas para a shell.

<pre class="wp-block-preformatted">sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"</pre>

Por fim, para activar a nova shell basta-nos fazer logout e depois login, para fazerem logout podem premir as teclas Ctrl + D.

Depois de fazerem login terão o zsh pronto a funcionar.
