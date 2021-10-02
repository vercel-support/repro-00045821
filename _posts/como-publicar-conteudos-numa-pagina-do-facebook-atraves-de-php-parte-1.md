---
id: 410
title: "Como publicar conteúdos numa página do facebook através de PHP - Parte 1"
date: "2013-04-10T15:13:24+00:00"
author:
  name: Pedro Resende
layout: post
guid: |
  <div class="object-center"><div class="content-view-embed">
  <div class="class-image">
  <div class="attribute-image">
permalink: /como-publicar-conteudos-numa-pagina-do-facebook-atraves-de-php-parte-1/
categories:
  - sdk, php, api, facebook, github, page, página, tutorial
---

<div class="object-center">
  <div class="content-view-embed">
    <div class="class-image">
      <div class="attribute-image">
      <img src="https://blog.resende.biz/assets/blog/ezdemo_site/storage/images/media/images/facebook_logo1/11834-1-eng-GB/facebook_logo1_medium.jpg" width="200" height="75"  style="border: 0px solid ;" alt="facebook_logo1" title="facebook_logo1" />
      </div>
    </div>
  </div>
</div>

Hoje, vou-vos explicar como se pode publicar conteúdos numa página do facebook utilizando a API. Esta é a primeira parte deste tutorial, na segunda irei explicar como se constrói uma aplicação no facebook para que seja possível publicar conteúdos.

Vamos começar por fazer o download do sdk do facebook que está no github, para isso temos de correr o seguinte comando:

<pre>git clone https://github.com/facebook/facebook-php-sdk.git</pre>

deverá aparecer uma coisa deste género

<pre>Cloning into 'facebook-php-sdk'...
remote: Counting objects: 680, done.
remote: Compressing objects: 100% (313/313), done.
Receiving objects: 100% (680/680), 258.11 KiB | 150 KiB/s, done.
remote: Total 680 (delta 329), reused 657 (delta 311)
Resolving deltas: 100% (329/329), done.</pre>

Uma vez terminado, já têm tudo o que é necessário. Vamos então criar o nosso ficheiro test.php dentro da directoria do SDK.

<pre>cd facebook-php-sdk</pre>

O que deverão colocar dentro do ficheiro test.php é o seguinte

<pre>&lt;?php

require "src/facebook.php";
$app_id = '';
$app_secret = '';
$page_id = '';

define('FACEBOOK_APP_ID', $app_id);
define('FACEBOOK_SECRET', $app_secret);

$user = null;

$facebook = new Facebook(array(
    'appId' =&gt; FACEBOOK_APP_ID,
    'secret' =&gt; FACEBOOK_SECRET,
    'cookie' =&gt; true
));

$user = $facebook-&gt;getUser(); // Get the UID of the connected user, or 0 if the Facebook user is not connected.

if($user == 0) {
    $login_url = $facebook-&gt;getLoginUrl($params = array('scope' =&gt; "publish_stream,offline_access,read_stream,manage_pages", "response" =&gt; "access_token"));
    echo ("&lt;script&gt; top.location.href='".$login_url."'&lt;/script&gt;");
} else {
    $access_token = $facebook-&gt;getAccessToken();
    $attachment = array(
        'access_token' =&gt; $access_token
    );

    $page =  $facebook-&gt;api('/me/accounts', 'get', $attachment);

    $message = array(
                'access_token' =&gt; $page['data'][0]['access_token'],
                'message' =&gt; "Message",
                'name' =&gt; "Name",
                'link' =&gt; "http://blog.resende.biz/",
                'description' =&gt; "Teste apagar sff"
            );

    $facebook-&gt;api('/' . $page_id . '/feed', 'POST', $message);
}

?&gt; </pre>

Vamos então explicar um pouco o código aqui colocado, começando pelo topo

<pre>$app_id = '';
$app_secret = '';
$page_id = '';

define('FACEBOOK_APP_ID', $app_id);
define('FACEBOOK_SECRET', $app_secret);</pre>

As três variáveis em branco vão ser posteriormente adicionadas com os dados da nossa aplicação do facebook e com a página onde irá ser publicado o conteúdo.

<pre>$user = null;

$facebook = new Facebook(array(
    'appId' =&gt; FACEBOOK_APP_ID,
    'secret' =&gt; FACEBOOK_SECRET,
    'cookie' =&gt; true
));

$user = $facebook-&gt;getUser(); // Get the UID of the connected user, or 0 if the Facebook user is not connected.</pre>

Esta secção vai buscar o estado do utilizador, verificar se existe algum utilizador "logado" no facebook, ou não. Se retornar o valor "0" na variável "user" então não foi feito o login e aparecerá uma janela de login, como podem ver na secção seguinte&nbsp;

<pre>if($user == 0) {
    $login_url = $facebook-&gt;getLoginUrl($params = array('scope' =&gt; "publish_stream,offline_access,read_stream,manage_pages", "response" =&gt; "access_token"));
    echo ("&lt;script&gt; top.location.href='".$login_url."'&lt;/script&gt;");
}</pre>

Caso tenha sido feito o login, então vai buscar o access_token do utilizador

<pre>$access_token = $facebook-&gt;getAccessToken();</pre>

Pede o access_token da página

<pre>$attachment = array(
        'access_token' =&gt; $access_token
    );
    $page =  $facebook-&gt;api('/me/accounts', 'get', $attachment);</pre>

Prepara a mensagem e os seus conteúdos&nbsp;

<pre>$message = array(
                'access_token' =&gt; $page['data'][0]['access_token'],
                'message' =&gt; "Message",
                'name' =&gt; "Name",
                'link' =&gt; "http://blog.resende.biz/",
                'description' =&gt; "Teste apagar sff"
            );</pre>

e por fim envia a mensagem

<pre>$facebook-&gt;api('/' . $page_id . '/feed', 'POST', $message);</pre>

No próximo tutorial, vou-vos explicar como se cria uma aplicação no facebook para poder publicar o conteúdo.
