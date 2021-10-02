---
id: 412
title: Como criar um novo layout para o eZ Publish 5
date: "2012-11-22T16:44:09+00:00"
author:
  name: Pedro Resende
layout: post
guid: |
  <div class="object-center"><div class="content-view-embed">
  <div class="class-image">
  <div class="attribute-image">
permalink: /como-criar-um-novo-layout-para-o-ez-publish-5/
categories:
  - ezsystems, Symfony, eZ, eZ Publish, Publish, ezpublish
---

<div class="object-center">
  <div class="content-view-embed">
    <div class="class-image">
      <div class="attribute-image">
      <img src="https://blog.resende.biz/assets/blog/ezdemo_site/storage/images/media/images/ez-logo/7771-1-eng-GB/Ez-Logo_medium.png" width="138" height="46"  style="border: 0px solid ;" alt="Ez Logo" title="Ez Logo" />
      </div>
    </div>
  </div>
</div>

1. Entrar dentro do directório base do ezpublish

<pre>php ezpublish/console generate:bundle --namespace=&lt;empresa&gt;/&lt;name&gt;Bundle --format=yml</pre>

2. Entrar dentro de src/<empresa>/<name>Bundle e abrir o ficheiro

<pre>&lt;empresa&gt;&lt;name&gt;Bundle.php</pre>

3.

Substituir por

<pre>&lt;?php

namespace &lt;empresa&gt;\&lt;name&gt;Bundle;

use Symfony\Component\HttpKernel\Bundle\Bundle;

class &lt;empresa&gt;&lt;name&gt;Bundle extends Bundle
{
    public function getParent()
    {
        return 'eZDemoBundle';
    }
} </pre>

4. Entrar dentro de src/<empresa>/<name>Bundle/Controller e abrir o ficheiro

<pre>DefaultController.php</pre>

5.

Substituir por

<pre>&lt;?php

namespace &lt;empresa&gt;\&lt;name&gt;Bundle\Controller;

use eZ\DemoBundle\Controller\RegistrationController as BaseController;

class DefaultController extends BaseController
{

} </pre>

6. Copiar tudo o que está dentro de "/src/EzSystems/DemoBundle/Resources" para dentro do "/src/<empresa>/<name>Bundle/Resources"

7. Começar alterar os templates dentro da pasta "/src/<empresa>/<name>Bundle/Resources/views"

8. As imagens, css, javascript e less estão dentro da pasta "/src/<empresa>/<name>Bundle/Resources/public"

9. Limpar a cache&nbsp;

<pre>php ezpublish/console cache:clear --env=prod </pre>
