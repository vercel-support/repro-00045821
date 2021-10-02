---
id: 384
title: Como compilar o último kernel no Debian 7
date: "2014-02-07T07:05:00+00:00"
author:
  name: Pedro Resende
layout: post
guid: |
  <div class="object-center"><div class="content-view-embed">
  <div class="class-image">
  <div class="attribute-image">
permalink: /como-compilar-o-ultimo-kernel-no-debian-7/
categories:
  - 3.13.1, Debian, 7, Wheezy, Update, Upgrade, Kernel
---

<div class="object-center">
  <div class="content-view-embed">
    <div class="class-image">
      <div class="attribute-image">
      <img src="https://blog.resende.biz/assets/blog/ezdemo_site/storage/images/media/images/tux/12156-1-eng-GB/Tux_medium.png" width="200" height="239"  style="border: 0px solid ;" alt="Tux" title="Tux" />
      </div>
    </div>
  </div>
</div>

Para começar é necessário ir buscar os pacotes fakeroot, kernel-packages e libncurses5-dev, para isso é necessário correrem

<pre># apt-get install fakeroot kernel-package libncurses5-dev</pre>

Necessitamos agora da última versão do kernel que poderá ser descarregada do <a href="http://www.kernel.org/" target="_self">kernel.org</a>.

<pre># wget https://www.kernel.org/pub/linux/kernel/v3.x/linux-3.13.1.tar.xz </pre>

Vamos então proceder à descompressão do kernel

<pre># tar -xvJf linux-3.13.1.tar.xz </pre>

vamos então proceder à selecção os módulos pretendidos

<pre># cd linux-3.13.1</pre>

<pre># make menuconfig</pre>

Deverão deparar-se com o seguinte ecran

<div class="object-center">
  <div class="content-view-embed">
    <div class="class-image">
      <div class="attribute-image">
      <img src="https://blog.resende.biz/assets/blog/ezdemo_site/storage/images/media/images/make-menuconfig/12136-1-eng-GB/Make-menuconfig_large.png" width="360" height="211"  style="border: 0px solid ;" alt="Make menuconfig" title="Make menuconfig" />
      </div>
    </div>
  </div>
</div>

Podem alterar qualquer configuração que queiram e finalizar com a opção de save

<div class="object-center">
  <div class="content-view-embed">
    <div class="class-image">
      <div class="attribute-image">
      <img src="https://blog.resende.biz/assets/blog/ezdemo_site/storage/images/media/images/save-kernel/12141-1-eng-GB/Save-Kernel_large.png" width="360" height="211"  style="border: 0px solid ;" alt="save kernel" title="save kernel" />
      </div>
    </div>
  </div>
</div>

Não necessitam alterar nada, basta continuarem com o "OK"

Uma vez salvo, saiam escolhendo o <exit>

Vamos então proceder à limpeza, correndo

<pre># make-kpkg clean</pre>

<div class="object-center">
  <div class="content-view-embed">
    <div class="class-image">
      <div class="attribute-image">
      <img src="https://blog.resende.biz/assets/blog/ezdemo_site/storage/images/media/images/make-kpkg-clean/12146-1-eng-GB/make-kpkg-clean_large.png" width="360" height="210"  style="border: 0px solid ;" alt="make-kpkg clean" title="make-kpkg clean" />
      </div>
    </div>
  </div>
</div>

Vamos então fazer a build do nosso kernel. Vamos começar por definir o número de "cores" que o processador tem para que a compilação seja feita mais rápidamente.

<pre># export CONCURRENCY_LEVEL=3</pre>

A regra diz, que deverá ser o número de cores **+1**, que neste caso é um dual core.

Finalmente para compilar

<pre># fakeroot make-kpkg --append-to-version "-customkernel" --revision "1" --initrd kernel_image kernel_headers</pre>

em que a opção **&#8211;append-to-version** define o nome que irá ser colocado após o número da versão, neste caso 3.13.1-customkernel. A opção **&#8211;revision** é responsável pela revisão do kernel, convém ir-se incrementando este valor de modo a que não hajam colisões de versões de kernel.

Depois aconselho-vos a irem beber um café, ou talvez ver uma série que a compilação do kernel é um processo demorado que poderá chegar a demorar&#8230; No meu caso demorou umas meras 2 horas&#8230;

<div class="object-center">
  <div class="content-view-embed">
    <div class="class-image">
      <div class="attribute-image">
      <img src="https://blog.resende.biz/assets/blog/ezdemo_site/storage/images/media/images/kernel-done/12151-1-eng-GB/Kernel-Done_large.png" width="360" height="167"  style="border: 0px solid ;" alt="Kernel Done" title="Kernel Done" />
      </div>
    </div>
  </div>
</div>

Uma vez terminado, mudem para a directoria pai, correndo

<pre>$ cd ../</pre>

e instalem o novo kernel como se fosse um pacote de debian

<pre># dpkg -i linux-headers-3.13.1-customkernel_1_amd64.deb linux-image-3.13.1-customkernel_1_amd64.deb</pre>

Uma vez terminada a instalação

<div class="object-center">
  <div class="content-view-embed">
    <div class="class-image">
      <div class="attribute-image">
      <img src="https://blog.resende.biz/assets/blog/ezdemo_site/storage/images/media/images/kernel-installed-done/12161-1-eng-GB/Kernel-Installed-Done_large.png" width="360" height="167"  style="border: 0px solid ;" alt="Kernel Installed - Done" title="Kernel Installed - Done" />
      </div>
    </div>
  </div>
</div>

Basta recomeçarem a vossa máquina e já está.
