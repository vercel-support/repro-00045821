---
id: 426
title: Background Image Scaled Width CSS
date: '2012-09-06T19:43:39+00:00'
author: 
  name: Pedro Resende
layout: post
guid: '<p>Muitos de voçês (webdesigners ou aspirantes), pelo menos na brincadeira, gostavam de conseguir colocar um background de uma página que não dependesse da resolução. Pois bem, aqui demonstro-vos como é possível conseguirem isso em poucos minutos com ajud'
permalink: /background-image-scaled-width-css/
categories:
  - 'background, background image, Cascading Style Sheets, ccs, div´s, Webdesign &amp; Web-development'
---
Muitos de voçês (webdesigners ou aspirantes), pelo menos na brincadeira, gostavam de conseguir colocar um background de uma página que não dependesse da resolução. Pois bem, aqui demonstro-vos como é possível conseguirem isso em poucos minutos com ajuda de CSS ( Cascading Style Sheets).

Começem por definir um novo estilo, para quem não sabe como o fazer vou colocar o código integral para dar uma pequena ajuda. Vamos começar por definiar o body:

body {  
background-color: transparent;  
margin: 0px;  
padding: 0px;  
height: 100%;  
border-top: 1px transparent solid;  
margin-top: -1px;  
z-index: 0;  
position:relative;  
}

Com este estilo garantimos que a imagem começa precisamente no canto superior esquerdo e ocupa a janela toda.&nbsp; Agora o estilo da imagem:

img#background {  
height: 100%;  
width: 100%;  
z-index: -1;  
position:absolute;  
color: white;  
}

este estilo vai garantir que a imagem ocupa sempre 100% da área da janela, o que nos garante que funciona para qualquer resolução.

Neste momento isto tem mais ou menos este aspecto,

<style type=”text/css”  
<!–  
html { height: 100%; overflow:hidden;}  
body {  
background-color: transparent;  
margin: 0px;  
padding: 0px;  
height: 100%;  
border-top: 1px transparent solid;  
margin-top: -1px;  
z-index: 0;  
position:relative;  
}

img#background {  
height: 100%;  
width: 100%;  
z-index: -1;  
position:absolute;  
color: white;  
}  
–  
</style>

Agora para metermos a isto a funcionar, basta que coloquem a seguinte linha no body onde está Imagem coloquem o ficheiro que desejam no background.

<img id=”background” src=”Imagem” alt=”Background-image” />

Como podem ver não é assim tão dificil