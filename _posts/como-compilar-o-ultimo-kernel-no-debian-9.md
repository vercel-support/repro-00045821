---
id: 610
title: Como compilar o último kernel no Debian 9
date: "2018-08-22T18:29:08+00:00"
author:
  name: Pedro Resende
layout: post
guid: http://blog.resende.biz/?p=610
permalink: /como-compilar-o-ultimo-kernel-no-debian-9/
coverImage: "/assets/blog/ezdemo_site/storage/images/media/images/tux/12156-1-eng-GB/Tux_medium.png"
categories:
  - linux
tags:
  - debian
  - debian 9
  - kernel
  - kernel 4.18
  - linux
---

Para começar é necessário ir buscar os pacotes fakeroot, kernel-packages e libncurses5-dev, para isso é necessário correrem

```bash
# apt-get install fakeroot kernel-package libncurses5-dev libelf-dev
```

Necessitamos agora da última versão do kernel que poderá ser descarregada do [kernel.org](http://www.kernel.org/).

```bash
$ wget https://cdn.kernel.org/pub/linux/kernel/v4.x/linux-4.18.tar.xz<a href="https://cdn.kernel.org/pub/linux/kernel/v4.x/linux-4.18.tar.xz"></a>
```

Vamos então proceder à descompressão do kernel

```bash
$ tar -xvJf linux-4.18.tar.xz
```

vamos então proceder à selecção os módulos pretendidos

```bash
$ cd linux-4.18<br /><br />$ cp -v /boot/config-4.9.0-8-amd64 .config
# make menuconfig
```

Deverão deparar-se com o seguinte ecran<figure class="wp-block-image">

![Make menuconfig](/assets/blog/ezdemo_site/storage/images/media/images/make-menuconfig/12136-1-eng-GB/Make-menuconfig_large.png)

Podem alterar qualquer configuração que queiram e finalizar com a opção de save<figure class="wp-block-image">

![save kernel](/assets/blog/ezdemo_site/storage/images/media/images/save-kernel/12141-1-eng-GB/Save-Kernel_large.png)

Não necessitam alterar nada, basta continuarem com o "OK"

Uma vez salvo, saiam escolhendo o <exit>

Vamos então proceder à limpeza, correndo

```bash
$ make-kpkg clean
```

![make-kpkg clean](/assets/blog/ezdemo_site/storage/images/media/images/make-kpkg-clean/12146-1-eng-GB/make-kpkg-clean_large.png)

Vamos então fazer a build do nosso kernel. Vamos começar por definir o número de "cores" que o processador tem para que a compilação seja feita mais rápidamente.

```bash
$ export CONCURRENCY_LEVEL=5
```

A regra diz, que deverá ser o número de cores **+1**, que neste caso é um dual core.

Finalmente para compilar

```bash
# fakeroot make-kpkg --append-to-version "-customkernel" --revision "1" --initrd kernel_image kernel_headers
```

em que a opção **&#8211;append-to-version** define o nome que irá ser colocado após o número da versão, neste caso 4.18-customkernel. A opção **&#8211;revision** é responsável pela revisão do kernel, convém ir-se incrementando este valor de modo a que não hajam colisões de versões de kernel.

Depois aconselho-vos a irem beber um café, ou talvez ver uma série que a compilação do kernel é um processo demorado que poderá chegar a demorar&#8230; No meu caso demorou umas meras 2 horas&#8230;<figure class="wp-block-image">

![Kernel Done](/assets/blog/ezdemo_site/storage/images/media/images/kernel-done/12151-1-eng-GB/Kernel-Done_large.png)

Uma vez terminado, mudem para a directoria pai, correndo

```bash
$ cd ../
```

e instalem o novo kernel como se fosse um pacote de debian

```bash
# dpkg -i linux-headers-4.18-customkernel_1_amd64.deb linux-image-4.18-customkernel_1_amd64.deb
```

Uma vez terminada a instalação

![Kernel Installed - Done](/assets/blog/ezdemo_site/storage/images/media/images/kernel-installed-done/12161-1-eng-GB/Kernel-Installed-Done_large.png)

Basta recomeçarem a vossa máquina e já está.
