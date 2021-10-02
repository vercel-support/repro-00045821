---
id: 590
title: Como instalar o PHP 8 com Xdebug no MacOS
date: "2021-05-29T03:36:36+00:00"
author:
  name: Pedro Resende
layout: post
permalink: /como-instalar-o-php-8-com-xdebug-no-macos/
coverImage: "/assets/blog/images/como-instalar-o-php-8-com-xdebug-no-macos/php8.svg"
categories:
  - desenvolvimento
  - Software
tags:
  - "8.0"
  - brew
  - macos
  - pear
  - pecl
  - php
  - php 8.0
  - php-xdebug
  - xdebug
---

Hoje deixo-vos aqui as instruções, de como instalarem a versão de PHP 8.0 com o Xdebug.

Como sabem o MacOs é um sistemas operativos mais estáveis, contudo sofre de alguns males, nomeadamente actualizações específicas de certas aplicações, como por exemplo o PHP.

Para isso, existe um gestor de pacotes, mantido pela comunidade, que poderá ser instalado, chamado de <a href="https://brew.sh/" target="_blank" rel="noopener">brew</a>.

Vamos então começar por instalar o brew, para isso será necessário correr o seguinte comando:

```bash
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Quando terminar, é necessário adicionar os pacotes relativos ao PHP 8.0 e do Xdebug, terão de correr as seguintes linhas:

```bash
$ brew install php@8.0
```

e vão receber a seguinte mensagem

```bash
To enable PHP in Apache add the following to httpd.conf and restart Apache:
    LoadModule php_module /opt/homebrew/opt/php/lib/httpd/modules/libphp.so

    <FilesMatch \.php$>
        SetHandler application/x-httpd-php
    </FilesMatch>

Finally, check DirectoryIndex includes index.php
    DirectoryIndex index.php index.html

The php.ini and php-fpm.ini file can be found in:
    /opt/homebrew/etc/php/8.0/

To start php:
  brew services start php
Or, if you don't want/need a background service you can just run:
  /opt/homebrew/opt/php/sbin/php-fpm --nodaemonize
==> Summary
🍺  /opt/homebrew/Cellar/php/8.0.6_1: 500 files, 78.0MB
```

Neste momento já temos o PHP 8.0, só nos falta o Xdebug. Para isso, vamos executar os seguintes comandos:

```bash
$ sudo pecl update-channels 
$ sudo pecl list-all
$ sudo pecl install xdebug
```

Quando a instalação terminar, deverá aparecer o seguinte

```bash
Build process completed successfully
Installing '/opt/homebrew/Cellar/php/8.0.6_1/pecl/20200930/xdebug.so'
install ok: channel://pecl.php.net/xdebug-3.0.4
Extension xdebug enabled in php.ini
```

por fim, para validarem que têm a versão correcta, corram

```bash
$ php -v
```

Neste momento deverão ter a seguinte mensagem

```bash
PHP 8.0.6 (cli) (built: May 12 2021 21:10:46) ( NTS )
Copyright (c) The PHP Group
Zend Engine v4.0.6, Copyright (c) Zend Technologies
    with Xdebug v3.0.4, Copyright (c) 2002-2021, by Derick Rethans
    with Zend OPcache v8.0.6, Copyright (c), by Zend Technologies
```

Se por algum motivo, tiverem dúvidas ou acontecer algum erro num dos comandos acima, não hesitem a deixar um comentário.
