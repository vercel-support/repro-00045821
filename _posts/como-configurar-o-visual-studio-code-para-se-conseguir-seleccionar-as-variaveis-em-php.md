---
id: 630
title: Como configurar o Visual Studio Code para se conseguir seleccionar as variáveis em PHP
date: '2018-11-26T10:30:50+00:00'
author: 
  name: Pedro Resende
layout: post
guid: http://blog.resende.biz/?p=630
permalink: /como-configurar-o-visual-studio-code-para-se-conseguir-seleccionar-as-variaveis-em-php/
coverImage: '/assets/blog/wp-content/uploads/2018/11/download.png'
categories:
  - php
  - vscode
tags:
  - php
  - vscode
---

<p style="text-align:left">
  Hoje em dia, no que diz respeito ao desenvolvimento web, o editor <a rel="noreferrer noopener" aria-label="Hoje em dia, no que diz respeito ao desenvolvimento web, o editor Visual Studio Code ocupa o lugar de topo em termos de utilização e preferência por parte dos programadores. (opens in a new tab)" href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</a> ocupa o <a rel="noreferrer noopener" aria-label="Hoje em dia, no que diz respeito ao desenvolvimento web, o editor Visual Studio Code ocupa o lugar de topo em termos de utilização e preferência por parte dos programadores. (opens in a new tab)" href="https://insights.stackoverflow.com/survey/2018/#development-environments-and-tools" target="_blank">lugar de topo</a> em termos de utilização e preferência por parte dos programadores.
</p>

Uma das linguagens <a rel="noreferrer noopener" aria-label="Uma das linguagens utilizada, no meu caso, é o PHP (opens in a new tab)" href="https://insights.stackoverflow.com/survey/2018/#most-popular-technologies" target="_blank">utilizada</a>, no meu caso, é o PHP e como tal convém que o editor esteja configurado/ajustado o melhor possível para que seja uma vantagem e não uma limitação ou&nbsp;_handicap_.

Por defeito, quando se pressiona duas vezes em cima de uma palavra, no editor, este por defeito selecciona a palavra, mas no caso do PHP seria bom que fosse também seleccionado o caracter "**$"** antes. Para quem não sabe, uma <a href="https://www.w3schools.com/php/php_variables.asp" target="_blank" rel="noreferrer noopener" aria-label="Por defeito, quando se pressiona duas vezes em cima de uma palavra, no editor, este por defeito selecciona a palavra, mas no caso do PHP seria bom que fosse também seleccionado o caracter &quot;$&quot; antes. Para quem não sabe, uma variável em PHP defini-se começando por um&nbsp;&quot;$&quot;. (opens in a new tab)">variável</a> em PHP defini-se começando por um&nbsp;**"$"**.

Vamos começar por abrir o visual studio code e vamo-nos deparar com o seguinte ecran.<figure class="wp-block-image">

[<img src="https://blog.resende.biz/wp-content/uploads/2018/11/Screenshot-from-2018-11-26-10.20.04-1024x563.png" alt="" class="wp-image-632" srcset="https://blog.resende.biz/wp-content/uploads/2018/11/Screenshot-from-2018-11-26-10.20.04-1024x563.png 1024w, https://blog.resende.biz/wp-content/uploads/2018/11/Screenshot-from-2018-11-26-10.20.04-300x165.png 300w, https://blog.resende.biz/wp-content/uploads/2018/11/Screenshot-from-2018-11-26-10.20.04-768x422.png 768w, https://blog.resende.biz/wp-content/uploads/2018/11/Screenshot-from-2018-11-26-10.20.04.png 1920w" sizes="(max-width: 1024px) 100vw, 1024px" />](https://blog.resende.biz/wp-content/uploads/2018/11/Screenshot-from-2018-11-26-10.20.04.png)

Pressionando a seguinte sequência de teclas "Cltr + ," temos então acesso à configuração do editor.<figure class="wp-block-image">

[<img src="https://blog.resende.biz/wp-content/uploads/2018/11/Screenshot-from-2018-11-26-10.25.27-1024x563.png" alt="" class="wp-image-633" srcset="https://blog.resende.biz/wp-content/uploads/2018/11/Screenshot-from-2018-11-26-10.25.27-1024x563.png 1024w, https://blog.resende.biz/wp-content/uploads/2018/11/Screenshot-from-2018-11-26-10.25.27-300x165.png 300w, https://blog.resende.biz/wp-content/uploads/2018/11/Screenshot-from-2018-11-26-10.25.27-768x422.png 768w, https://blog.resende.biz/wp-content/uploads/2018/11/Screenshot-from-2018-11-26-10.25.27.png 1920w" sizes="(max-width: 1024px) 100vw, 1024px" />](https://blog.resende.biz/wp-content/uploads/2018/11/Screenshot-from-2018-11-26-10.25.27.png)

Na caixa de pesquisa, vamos então procurar por&nbsp;

<pre class="wp-block-preformatted">editor.wordSeparators</pre>

e vamos adicionar a seguinte sequência de caracteres

<pre class="wp-block-preformatted">./()"'-:,.;&lt;&gt;~!@#%^&*|+=[]{}`~?</pre>

Por fim, podemos fechar o separador e está tudo pronto.