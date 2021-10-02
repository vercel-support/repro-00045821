---
id: 383
title: Como compilar a última versão do PHP no Debian 7
date: "2014-03-03T14:13:00+00:00"
author:
  name: Pedro Resende
layout: post
guid: |
  <div class="object-center"><div class="content-view-embed">
  <div class="class-image">
  <div class="attribute-image">
permalink: /como-compilar-a-ultima-versao-do-php-no-debian-7/
categories:
  - 5.5.9, PHP 5.5.9, compile, Debian, 7, Wheezy, Update, Upgrade, php
---

<div class="object-center">
  <div class="content-view-embed">
    <div class="class-image">
      <div class="attribute-image">
      <img src="https://blog.resende.biz/assets/blog/ezdemo_site/storage/images/media/images/php/12171-1-eng-GB/PHP_medium.png" width="200" height="105"  style="border: 0px solid ;" alt="php" title="php" />
      </div>
    </div>
  </div>
</div>

Vamos começar por ir buscar as dependências necessárias para a compilação do php, para isso é necessário correrem

<pre># apt-get build-dep php5 </pre>

Necessitamos agora da última versão do php que poderá ser descarregada do php.net

<pre># wget http://pt1.php.net/get/php-5.5.9.tar.gz/from/this/mirror</pre>

Vamos descomprimir, utilizando

<pre># tar -xzf php-5.5.9.tar.gz</pre>

Entramos para dentro do directório

<pre># cd php-5.5.9</pre>

Vamos então correr a configuração

<pre># ./configure \
--with-config-file-path=/etc/php5/apache2 \
--disable-rpath \
--enable-bcmath \
--enable-calendar \
--enable-cgi \
--enable-dba \
--enable-exif \
--enable-ftp \
--enable-gd-native-ttf \
--enable-inline-optimization \
--enable-intl \
--enable-mbregex \
--enable-mbstring \
--enable-pcntl \
--enable-shmop \
--enable-soap \
--enable-sockets \
--enable-sysvmsg \
--enable-sysvsem \
--enable-sysvshm \
--enable-wddx \
--enable-zip \
--with-apxs2=/usr/bin/apxs2 \
--with-bz2 \
--with-curl \
--with-curlwrappers \
--with-freetype-dir \
--with-gd \
--with-gettext \
--with-jpeg-dir=/usr \
--with-kerberos \
--with-libdir=lib64 \
--with-libxml-dir=/usr \
--with-mcrypt \
--with-mhash \
--with-mysql \
--with-mysqli \
--with-openssl \
--with-pcre-regex \
--with-pdo-mysql \
--with-pear \
--with-png-dir=/usr \
--with-pspell \
--with-xsl \
--with-xmlrpc \
--with-zlib \
--with-zlib \
--with-zlib-dir</pre>

E compilamos com

<pre># make</pre>

Instalamos com

<pre># make install</pre>

E verificamos que está bem instalado correndo

<pre> $ php -v

PHP 5.5.9 (cli) (built: Mar  3 2014 11:51:59)
Copyright (c) 1997-2014 The PHP Group
Zend Engine v2.5.0, Copyright (c) 1998-2014 Zend Technologies</pre>
