---
id: 552
title: Como mudar o Login do Ubuntu 9.10
date: '2012-09-06T19:37:31+00:00'
author: 
  name: Pedro Resende
layout: post
guid: '<p>Apesar de não saber qual a vossa opinião sobre o ecrã de login do Ubuntu, deixo-vos aqui um pequeno tutorial para que possam mudar este ecrã., visto que após alguns meses começa a tornar-se no mínimo cansativo (Figura 1).</p><p>Agora o truque é o segui'
permalink: /como-mudar-o-login-do-ubuntu-9-10/
categories:
  - 9.10, gdm, login, Ubuntu 9.10, linux, Tutorial, Ubuntu
---
Apesar de não saber qual a vossa opinião sobre o ecrã de login do Ubuntu, deixo-vos aqui um pequeno tutorial para que possam mudar este ecrã., visto que após alguns meses começa a tornar-se no mínimo cansativo (Figura 1).

Agora o truque é o seguinte, comecem por pressionar as seguintes teclas “Ctrl+Alt+F1”, em que se devem deparar com algo do género (Figura 2), não podem ter feito login.

Escrevam o vosso username e a vossa password (Figura 3)

E agora, escrevam os seguintes comandos (Figura 4):  
“export DISPLAY=:0.0” e  
“sudo -u gdm gnome-control-center”

Pressionem as teclas “Alt+F7” e devem-se deparar com o seguinte (Figura 5)

Escolham a opção Appearance e de seguida Background (Figura 6)

Escolham então, o vosso novo background.  
Uma vez mais, pressionem a sequência “Ctrl+Alt+F1” e pressionem “Ctrl+C” (Figura 7)

Escrevam “exit” e para finalizar, pressionem a sequência “Alt+F7” (Figura 8)

P.S. – Como podem ver, não custou nada