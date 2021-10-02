---
id: 664
title: Como instalar o PHP 7.3 no Debian 9
date: "2019-02-21T10:41:32+00:00"
author:
  name: Pedro Resende
layout: post
guid: http://blog.resende.biz/?p=664
permalink: /como-instalar-o-php-7-3-no-debian-9/
coverImage: "/assets/blog/images/como-instalar-o-php-7-3-no-debian-9/php-logo.svg"
categories:
  - debian
  - php
  - Uncategorized
tags:
  - debian
  - php
---

Para poderem ter o php 7.3 no Debian 9, terão de utilizar um repositório de terceiros, neste caso do <a rel="noreferrer noopener" aria-label="sury (abre num novo separador)" href="http://www.sury.irg" target="_blank">sury</a>.

Vamos então começar, para tal vamos actualizar a lista de repositórios, executando:

`# apt-get update`

Agora, vamos instalar os pacotes necessários, correndo o seguinte commando:

`# apt-get install ca-certificates apt-transport-https`

Estamos então em condições para ir buscar o certificado do repositório:

`# wget -q https://packages.sury.org/php/apt.gpg -O- | apt-key add -`

Vamos então adicionar o caminho para o novo repositório

`# echo "deb https://packages.sury.org/php/ stretch main" | tee /etc/apt/sources.list.d/php.list`

Agora basta-nos actulizar novamente a lista de repositório e instalar a versão do php, bem como as suas extensões:

`# apt-get update && apt-get install php7.3 php7.3-cli php7.3-fpm php7.3-mysql php7.3-intl php7.3-curl php7.3-json`

Pronto, temos então a versão 7.3 do php instalada no nosso servidor.
