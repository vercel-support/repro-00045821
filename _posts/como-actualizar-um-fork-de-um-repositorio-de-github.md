---
id: 387
title: 'Como actualizar um "fork" de um repositório de github'
date: '2014-01-17T13:55:00+00:00'
author: 
  name: Pedro Resende
layout: post
guid: '<p>Vamos começar por fazer um clone de um repositório que tenha sido feito um &quot;fork&quot;.&nbsp;</p><pre>$ git clone git@github.com:nome/repositorio-forked.git</pre><p>Entrem dentro do directório</p><pre>$ cd repositorio-forked</pre><p>Vamos então ad'
permalink: /como-actualizar-um-fork-de-um-repositorio-de-github/
categories:
  - Git, fork, pull, push, merge, clone, remote, add, track, master, origin, github
---
Vamos começar por fazer um clone de um repositório que tenha sido feito um "fork".&nbsp;

<pre>$ git clone git@github.com:nome/repositorio-forked.git</pre>

Entrem dentro do directório

<pre>$ cd repositorio-forked</pre>

Vamos então adiconar o repositório origina, aquela em que fizemos o "fork" como sendo remoto

<pre>$ git remote add --track master original-location git@github.com:nome/repositorio-original.git</pre>

Uma vez adicionado, vamos buscar as últimas alterações do repositório original

<pre>$ git fetch original-location</pre>

Vamos então fazer o "merge" do original com o nosso local

<pre>$ git merge original-location/master</pre>

Por fim, fazemos um push do actualizado para o github

<pre>$ git push </pre>

Done !