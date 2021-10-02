---
id: 388
title: Como configurar o eZ Publish 5.x em modo de desenvolvimento ( Sem cache ) ?
date: '2013-12-26T07:30:00+00:00'
author: 
  name: Pedro Resende
layout: post
guid: |
  <p>
  Este tutorial serve para explicar como se devem colocar as configurações de modo a que seja possível utilizar o eZ Publish 5.x em modo de desenvolvimento, ou seja sem cache. <br />As seguintes configurações permitem que sejam feitas alterações, tanto
permalink: /como-configurar-o-ez-publish-5-x-em-modo-de-desenvolvimento-sem-cache/
categories:
  - Cache, ezpublish.yml, config, yml, twig, http_cache, http, cache, eZ, eZ Publish, symfony
---
Este tutorial serve para explicar como se devem colocar as configurações de modo a que seja possível utilizar o eZ Publish 5.x em modo de desenvolvimento, ou seja sem cache.  
As seguintes configurações permitem que sejam feitas alterações, tanto a nível de templates twig bem como a nível de conteúdo.

Começem por abrir o ficheiro

<pre>$ vi ezpublish/config/config.yml</pre>

Na secção do twig, adicionem cache: false, de modo a que fique com o seguinte aspecto

<pre>twig:
    cache: false</pre>

Abram agora o ficheiro

<pre>$ vi ezpublish/config/ezpublish.yml </pre>

Na secção do vosso siteaccess (por defeito eng), deverão adicionar

<pre>content:
    view_cache: false      # Activates HttpCache for content
    ttl_cache: false       # Activates expiration based HttpCache for content (very fast)
    default_ttl: 0       # Number of seconds an Http response is valid in cache (if ttl_cache is true)</pre>

Deverá ficar com o seguinte aspecto

<pre>ezpublish:
    system:
        my_siteaccess:
            content:
                view_cache: false      # Activates HttpCache for content
                ttl_cache: false       # Activates expiration based HttpCache for content (very fast)
                default_ttl: 0       # Number of seconds an Http response is valid in cache (if ttl_cache is true)</pre>

Por fim, deverão limpar a cache para que as novas configurações entrem em "vigor"

<pre>$ php ezpublish/console cache:clear --env=prod</pre>

No caso de já estarem no ambiente de dev, deverão correr

<pre>$ php ezpublish/console cache:clear --env=dev</pre>