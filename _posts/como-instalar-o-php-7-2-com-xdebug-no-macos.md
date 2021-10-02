---
id: 595
title: Como instalar o PHP 7.2 com xdebug no MacOS
date: "2018-06-30T18:04:36+00:00"
author:
  name: Pedro Resende
layout: post
guid: http://blog.resende.biz/?p=595
permalink: /como-instalar-o-php-7-2-com-xdebug-no-macos/
coverImage: "/assets/blog/wp-content/uploads/2018/06/1200px-PHP-logo.svg_-300x162.png"
categories:
  - desenvolvimento
  - Software
tags:
  - "7.2"
  - brew
  - macos
  - pear
  - pecl
  - php
  - php 7.2
  - php-xdebug
  - xdebug
---

Hoje deixo-vos aqui as instruções, de como instalarem a versão de PHP 7.2 com o xdebug.

Como sabem o MacOs é um sistemas operativos mais estáveis, contudo sofre de alguns males, nomeadamente actualizações específicas de certas aplicações, como por exemplo o PHP.

Para isso, existe um gestor de pacotes, mantido pela comunidade, que poderá ser instalado, chamado de <a href="https://brew.sh/" target="_blank" rel="noopener">brew</a>.

Vamos então começar por instalar o brew, para isso será necessário correr o seguinte comando:

```bash
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Quando terminar, é necessário adicionar os pacotes relativos ao PHP:

```bash
$ brew tap homebrew/php
```

e por fim, para instalar a versão 7.2 do PHP e do xdebug, terão de correr as seguintes linhas:

```bash
$ brew install php72 php72-xdebug
```

e vão receber a seguinte mensagem

```bash
Error: No available formula with the name "php72-xdebug"
Searching for a previously deleted formula (in the last month)...
Warning: homebrew/core is shallow clone. To get complete history run:
git -C "$(brew --repo homebrew/core)" fetch --unshallow

Error: No previously deleted formula found.
Searching for similarly named formulae...
Searching local taps...
Error: No similarly named formulae found.
Searching taps...
Searching taps on GitHub...
Error: No formulae found in taps.
```

Neste momento devem-se estar a questionar o que se passou, mas a realidade é que desde a versão 7.1 do PHP o xdebug custa um bocadinho mais a instalar. Para isso necessitamos agora de instalar o PECL (PHP Extension Community Library).

```bash
$ curl -O http://pear.php.net/go-pear.phar
$ sudo php -d detect_unicode=0 go-pear.phar
```

Na configuração comecem por escolher 1 e carreguem na tecla Enter. Insiram

```bash
/usr/local/pear
```

Carreguem uma vez mais em enter e quando voltar a perguntar, escolha 4 e Enter. Por fim, insiram

```bash
/usr/local/bin
```

e enter.

Neste momento já temos o PHP 7.2 e o PECL instalados, só nos falta o Xdebug. Para isso, vamos executar os seguintes comandos:

```bash
$ sudo pecl update-channels 
$ sudo pecl list-all
$ sudo pecl install xdebug
```

Quando a instalação terminar, deverá aparecer o seguinte

```bash
Build process completed successfully

Installing '/usr/local/Cellar/php/7.2.7/pecl/20170718/xdebug.so'

install ok: channel://pecl.php.net/xdebug-2.6.0

Extension xdebug enabled in php.ini
```

por fim, para validarem que têm a versão correcta, corram

```bash
$ php -v
```

Caso vos apareça o seguinte erro

```bash
PHP Warning: Failed loading Zend extension 'xdebug.so' (tried: /usr/local/Cellar/php/7.2.7/lib/php/20170718/xdebug.so (dlopen(/usr/local/Cellar/php/7.2.7/lib/php/20170718/xdebug.so, 9): image not found), /usr/local/Cellar/php/7.2.7/lib/php/20170718/xdebug.so.so (dlopen(/usr/local/Cellar/php/7.2.7/lib/php/20170718/xdebug.so.so, 9): image not found)) in Unknown on line 0

Warning: Failed loading Zend extension 'xdebug.so' (tried: /usr/local/Cellar/php/7.2.7/lib/php/20170718/xdebug.so (dlopen(/usr/local/Cellar/php/7.2.7/lib/php/20170718/xdebug.so, 9): image not found), /usr/local/Cellar/php/7.2.7/lib/php/20170718/xdebug.so.so (dlopen(/usr/local/Cellar/php/7.2.7/lib/php/20170718/xdebug.so.so, 9): image not found)) in Unknown on line 0

Failed loading /usr/local/php/modules/xdebug.so: dlopen(/usr/local/php/modules/xdebug.so, 9): image not found

PHP 7.2.7 (cli) (built: Jun 22 2018 06:27:50) ( NTS )

Copyright (c) 1997-2018 The PHP Group

Zend Engine v3.2.0, Copyright (c) 1998-2018 Zend Technologies

with Zend OPcache v7.2.7, Copyright (c) 1999-2018, by Zend Technologies
```

Terão de editar o ficheiro `/usr/local/etc/php/7.2/php.ini` e onde está

```bash
zend_extension="..."
```

substituam por

```bash
zend_extension="/usr/local/Cellar/php/7.2.7/pecl/20170718/xdebug.so"
```

corram agora

```bash
php -v
```

Neste momento deverão ter a seguinte mensagem

```bash
PHP 7.2.7 (cli) (built: Jun 22 2018 06:27:50) ( NTS )

Copyright (c) 1997-2018 The PHP Group

Zend Engine v3.2.0, Copyright (c) 1998-2018 Zend Technologies

with Xdebug v2.6.0, Copyright (c) 2002-2018, by Derick Rethans

with Zend OPcache v7.2.7, Copyright (c) 1999-2018, by Zend Technologies
```

Se por algum motivo, tiverem dúvidas ou acontecer algum erro num dos comandos acima, não hesitem a deixar um comentário.
