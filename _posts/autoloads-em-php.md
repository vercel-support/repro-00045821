---
id: 574
title: Autoloads em PHP
date: '2012-09-06T19:37:13+00:00'
author: 
  name: Pedro Resende
layout: post
guid: '<p>Vou-vos falar da função de autoloads em PHP. Esta função permite que quando se aceder ao ficheiro, este carregue automaticamente as classes existentes, sem haver necessidade de fazer o include de cada uma das classes.</p><p>Para isso, é necessário, com'
permalink: /autoloads-em-php/
categories:
  - Autoloads, Class, Classes, __autoload, PHP, Software, php
---
Vou-vos falar da função de autoloads em PHP. Esta função permite que quando se aceder ao ficheiro, este carregue automaticamente as classes existentes, sem haver necessidade de fazer o include de cada uma das classes.

Para isso, é necessário, começar por chamar a função:

function _\_autoload($class\_name) {

&nbsp; &nbsp; include &#8216;classes/&#8217;.$class_name . &#8216;.php&#8217;;

}

Uma nota importante é que o nome do ficheiro deve ser igual ao nome da classe.

Deixo-vos aqui um exemplo prático

1. Comecem por criar um ficheiro "index.php"  
2. Coloquem o seguinte código lá dentro

<?php

&nbsp; &nbsp; function _\_autoload($class\_name) {

&nbsp; &nbsp; &nbsp; &nbsp; include &#8216;classes/&#8217;.$class_name . &#8216;.php&#8217;;

&nbsp; &nbsp; }

&nbsp; &nbsp; $obj = new MyClass(‘World’);

&nbsp; &nbsp; echo $obj->Show();

3. Criem um directório chamado “classes”  
4. Dentro do directório “classes” criem um ficheiro chamado “MyClass.php”  
5. Por fim, coloquem dentro deste ficheiro o seguinte código

<?php

&nbsp; &nbsp; class MyClass {

&nbsp; &nbsp; &nbsp; &nbsp; private $name;

&nbsp; &nbsp; &nbsp; &nbsp; public function __construct($name) {

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $this->name = $name;

&nbsp; &nbsp; &nbsp; &nbsp; }

&nbsp; &nbsp; &nbsp; &nbsp; public function __destruct() {

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; unset($this->name);

&nbsp; &nbsp; &nbsp; &nbsp; }

&nbsp; &nbsp; &nbsp; &nbsp; public function Show() {

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; return ‘Hello ‘.$this->name;

&nbsp; &nbsp; &nbsp; &nbsp; }

}