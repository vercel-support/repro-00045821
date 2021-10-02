---
id: 377
title: Como instalar o ambiente gráfico Deepin no Ubuntu 14.04
date: "2014-07-09T15:00:00+00:00"
author:
  name: Pedro Resende
layout: post
guid: |
  <div class="object-center"><div class="content-view-embed">
  <div class="class-image">
  <div class="attribute-image">
permalink: /como-instalar-o-ambiente-grafico-deepin-no-ubuntu-14-04/
coverImage: "/assets/blog/ezdemo_site/storage/images/media/images/deepin-linux/12237-1-eng-GB/deepin-linux_medium.png"

categories:
  - Deepin Linux
  - Deeping
  - Desktop
  - Ubuntu 14.04
  - Ubuntu
  - Ambiente
---

Primeiro é necessário adicionar os repositórios

```bash
$ sudo sh -c 'echo "deb http://packages.linuxdeepin.com/deepin trusty main non-free universe" >> /etc/apt/sources.list'
$ sudo sh -c 'echo "deb-src http://packages.linuxdeepin.com/deepin trusty main non-free universe" >> /etc/apt/sources.list'
```

Importar a chave de gpg ( Gnu Private Guard )

```bash
$ wget http://packages.linuxdeepin.com/deepin/project/deepin-keyring.gpg
$ gpg --import deepin-keyring.gpg $ sudo gpg --export --armor 209088E7 | sudo apt-key add -
```

Vamos actualizar os repositórios

```bash
$ sudo apt-get update
```

e para terminar

```bash
$ sudo apt-get install dde-meta-core deepin-desktop-environment dde-control-center dde-daemon bluez5
```

pronto
