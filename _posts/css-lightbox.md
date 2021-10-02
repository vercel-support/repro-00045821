---
id: 432
title: CSS Lightbox
date: '2012-09-06T19:43:35+00:00'
author: 
  name: Pedro Resende
layout: post
guid: '<p>Estava hoje no trabalho a tentar meter um <a href="http://en.wikipedia.org/wiki/Lightbox_(JavaScript)" target="_blank">lightbox</a> em javascript a funcionar, quando encontrei o seguinte tutorial. Por achar que é de extremo interesse aqui vai.</p><p>Ho'
permalink: /css-lightbox/
categories:
  - 'black_overlay, css lightbox, lightbox, white_content, Webdesign &amp; Web-development, css'
---
Estava hoje no trabalho a tentar meter um <a href="http://en.wikipedia.org/wiki/Lightbox_(JavaScript)" target="_blank">lightbox</a> em javascript a funcionar, quando encontrei o seguinte tutorial. Por achar que é de extremo interesse aqui vai.

Hoje vou-vos ensinar um novo modo de fazer uma <a href="http://en.wikipedia.org/wiki/Lightbox_(JavaScript)" target="_blank">lightbox</a>. Muitos dos tutoriais de lightbox’s são atravês da utilização de javascript, mas vou-nos ensinar a fazer uma lightbox mais rápida e level apenas utilizando apenas <a href="http://en.wikipedia.org/wiki/Cascading_Style_Sheets" target="_blank">CSS</a> (Cascading Style Sheet) e “quase nada de javascript”

Vamos começar por definir o <a href="http://en.wikipedia.org/wiki/Cascading_Style_Sheets" target="_blank">CSS</a>. Este <a href="http://en.wikipedia.org/wiki/Cascading_Style_Sheets" target="_blank">CSS</a> é composto por 2 estilos, sendo eles:

.black_overlay{  
display: none;  
position: absolute;  
top: 0%;  
left: 0%;  
width: 100%;  
height: 100%;  
background-color: black;  
z-index:1001;  
-moz-opacity: 0.8;  
opacity:.80;  
filter: alpha(opacity=80);  
}

.white_content {  
display: none;  
position: absolute;  
top: 25%;  
left: 25%;  
width: 50%;  
height: 50%;  
padding: 16px;  
border: 16px solid orange;  
background-color: white;  
z-index:1002;  
overflow: auto;  
}

O primeiro black_overlay, é responsável por por colocar todo o browser com um genero de camada preta, enquanto que o segundo define a caixa que aparece em cima dessa camada.

Agora na parte do body, para que a lightbox funcione é necessário colocar as seguintes linhas:

<p>Teste a uma lightbox . Para isso clicar <a href=”javascript:void(0)” onclick = “document.getElementById(‘light’).style.display=’block’;document.getElementById(‘fade’).style.display=’block’”>aqui</a></p>

<div id=”light” class=”white_content”>Isto é o conteúdo da lightbox <a href=”javascript:void(0)” onclick = “document.getElementById(‘light’).style.display=’none’;document.getElementById(‘fade’).style.display=’none’”>Fechar</a></div>

<div id=”fade” class=”black_overlay”></div>

E pronto, como podem ver em meia duzia de linhas são capazes de colocar uma <a href="http://en.wikipedia.org/wiki/Lightbox_(JavaScript)" target="_blank">lightbox</a> nos vossos sites, sem grandes chatices recorrendo apenas a <a href="http://en.wikipedia.org/wiki/Cascading_Style_Sheets" target="_blank">CSS</a>.