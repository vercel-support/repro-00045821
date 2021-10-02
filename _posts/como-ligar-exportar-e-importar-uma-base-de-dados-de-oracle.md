---
id: 413
title: Como ligar, exportar e importar uma base de dados de Oracle
date: '2012-11-09T11:44:31+00:00'
author: 
  name: Pedro Resende
layout: post
guid: '<p>Hoje deixo-vos aqui uns comandos que podem vir a dar jeito, se tiverem que trabalhar com Oracle.&nbsp;</p><p>Para se ligarem à base de dados correm o seguinte comando</p><pre> sqlplus user/pass@db</pre><p>caso não saibam o user a pass normalmente o uti'
permalink: /como-ligar-exportar-e-importar-uma-base-de-dados-de-oracle/
categories:
  - tutorial, oracle, dump, export, import, exportar, importar
---
Hoje deixo-vos aqui uns comandos que podem vir a dar jeito, se tiverem que trabalhar com Oracle.&nbsp;

Para se ligarem à base de dados correm o seguinte comando

<pre> sqlplus user/pass@db</pre>

caso não saibam o user a pass normalmente o utilizador scott e a palavra-chave tiger estão activados por defeito e a base de dados orcl, ou seja, correm o seguinte comando para se ligarem

<pre> sqlplus scott/tiger@orcl</pre>

Este é o comando básico, passemos agora para a parte do exportar uma base de dados.

<pre> exp user/pass@db FULL=Y PATH=/...</pre>

e o caso de importar

<pre>imp user/pass@db FULL=Y PATH=/...</pre>

Ficam então aqui algumas dicas do Oracle