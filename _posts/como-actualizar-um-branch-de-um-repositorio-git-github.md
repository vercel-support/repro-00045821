---
id: 386
title: 'Como actualizar um "branch" de um repositório git/github'
date: "2014-01-29T09:47:00+00:00"
author:
  name: Pedro Resende
layout: post
guid: |
  <div class="object-center"><div class="content-view-embed">
  <div class="class-image">
  <div class="attribute-image">
permalink: /como-actualizar-um-branch-de-um-repositorio-git-github/
categories:
  - Git, fork, pull, push, merge, clone, remote, add, track, master, origin, github
---

<div class="object-center">
  <div class="content-view-embed">
    <div class="class-image">
      <div class="attribute-image">
      <img src="https://blog.resende.biz/assets/blog/ezdemo_site/storage/images/media/images/github/12116-1-eng-GB/Github_medium.jpg" width="200" height="200"  style="border: 0px solid ;" alt="Github" title="Github" />
      </div>
    </div>
  </div>
</div>

Como ditam as boas práticas, devemos criar um novo branch com o trabalho em desenvolvimento para que não atrapalhe o bom funcionamento do código do repositório principal, ou "master".

Para criar um novo "branch" é necessário executar

<pre>$ git branch -b &lt;nome_do_novo_branch&gt;</pre>

Podem utilizar a opção -B para criarem o novo "branch" e mudarem automaticamente para ele.

Entretanto fazem todo o desenvolvimento nesse branch, o que por vezes faz com que fique desactualizado em relação ao "master" devido a commits feitos por outras pessoas. Para actualizar o nosso branch com as últimas actualizações presentes no "master" basta correr o seguinte command

<pre>$ git rebase origin/master</pre>

e como por magia o vosso branch vai buscar todas as novas alterações presentes no "master".
