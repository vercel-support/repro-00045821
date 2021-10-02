---
id: 411
title: Time Raspberry Capsule
date: "2013-02-08T11:54:47+00:00"
author:
  name: Pedro Resende
layout: post
guid: |
  <div class="object-center"><div class="content-view-embed">
  <div class="class-image">
  <div class="attribute-image">
permalink: /time-raspberry-capsule/
categories:
  - Time Capsule, Raspberry, Pi, Rasberry Pi, Apple, Debian, Raspbian, wheezy, Netatalk, Avahi, ext4
---

<div class="object-center">
  <div class="content-view-embed">
    <div class="class-image">
      <div class="attribute-image">
      <img src="https://blog.resende.biz/assets/blog/ezdemo_site/storage/images/media/images/raspberry_pi/11783-1-eng-GB/Raspberry_PI_medium.jpg" width="200" height="133"  style="border: 0px solid ;" alt="Raspberry_PI" title="Raspberry_PI" />
      </div>
    </div>
  </div>
</div>

Hoje vou-vos falar de um pequeno projecto que resolvi investir um pouco do meu "escasso" tempo. Tinha como objectivo criar montar um <a href="http://store.apple.com/pt/product/MD032Z/A/time-capsule-2-tb?fnode=5f" target="_blank">Time Capsule</a>, sem ter de gastar algumas centenas de euros.
Para isso usei um <a href="http://www.raspberrypi.org/quick-start-guide" target="_blank">Raspberri Pi</a> modelo B ( 256 Mb Ram), um cartão SD de 4Gb e um disco de 1 TB usb.&nbsp;
Para quem não sabe o <a href="http://store.apple.com/pt/product/MD032Z/A/time-capsule-2-tb?fnode=5f" target="_blank">Time Capsule</a> é um sistema de backup da Apple, que faz backups automáticos a todo o conteúdo existente no computador, através da ferramenta <a href="http://en.wikipedia.org/wiki/Time_Machine_(Mac_OS)" target="_blank">Time Machine</a>.
Comecei por fazer o <a href="http://www.raspberrypi.org/downloads" target="_blank">download</a> do&nbsp;Raspbian “wheezy” que é uma versão baseada no <a href="http://www.raspbian.org/" target="_blank">Raspbian</a> que é Debian 7.0 "adaptado" para correr neste mini-computador.
Após terminada, para copiar para o cartão basta correrem o seguinte comando

<pre> $ dd if=&lt;imagem.iso&gt; of=/dev/sd&lt;cartão&gt;</pre>

Uma vez terminada a copia basta colocarem o cartão SD no raspberry e este está pronto a funcionar.&nbsp;

<a name="eztoc11777_0_0_1" id="eztoc11777_0_0_1"></a>

#### Novo disco

Vamos começar por preparar o disco externo para backups. Vamos começar por verificar se ele está presente&nbsp;

<pre> $ ls -la /dev/sd*</pre>

deve-vos aparecer qualquer coisa do género

<pre> brw-rw---T 1 root floppy 8, 0 Feb  8 07:02 /dev/sda
 brw-rw---T 1 root floppy 8, 1 Feb  8 07:02 /dev/sda1</pre>

vamos então adicionar o novo disco ao fstab

<pre># vi /etc/fstab </pre>

Adicionem o seguinte

<pre> /dev/sda1       /media/timemachine      ext4 defaults,force,rw         0       0</pre>

vamos criar agora a pasta para fazer o mount

<pre> # mkdir /media/timemachine</pre>

formatar através de

<pre> # mkfs.ext4 /dev/sda1</pre>

e por fim fazer o mount à nova partição

<pre> # mount /dev/sda1 /media/timemachine</pre>

<a name="eztoc11777_0_0_2" id="eztoc11777_0_0_2"></a>

#### Netatalk

Assim que acabar de arrancar comecem por instalar o netatalk

<pre> # apt-get install netatalk</pre>

Quando terminar, é necessário configurar o netatalk

<pre> # vi /etc/netatalk/afpd.conf</pre>

Adicionem o seguinte no final do ficheiro

<pre> -tcp -noddp -uamlist uams_guest.so,uams_dhx.so,uams_dhx2.so -nosavepassword</pre>

salvem.

Para configurar o directório partilhado é necessário editarem o ficheiro

<pre> # vi /etc/netatalk/AppleVolumes.default</pre>

e adicionarem o seguinte

<pre> /media/timemachine "TimeMachine" cnidscheme:dbd options:usedots,upriv,tm</pre>

salvem as alterações e recomecem o netatalk

<pre># /etc/init.d/netatalk restart </pre>

<a name="eztoc11777_0_0_3" id="eztoc11777_0_0_3"></a>

#### Avahi

Vamos agora instalar o avahi

<pre> # apt-get install avahi-daemon </pre>

quando terminar é necessário configurar o avahi para "aparecer" na vossa rede, para tal abram o ficheiro&nbsp;

<pre> # sudo vi /etc/avahi/services/afpd.service</pre>

e adicionem o seguinte

<pre> &lt;?xml version="1.0" standalone='no'?&gt;&lt;!--*-nxml-*--&gt;&lt;!DOCTYPE service-group SYSTEM "avahi-service.dtd"&gt;&lt;service-group&gt;&lt;name replace-wildcards="yes"&gt;%h&lt;/name&gt;&lt;service&gt;&lt;type&gt;_afpovertcp._tcp&lt;/type&gt;&lt;port&gt;548&lt;/port&gt;&lt;/service&gt;&lt;service&gt;&lt;type&gt;_device-info._tcp&lt;/type&gt;&lt;port&gt;0&lt;/port&gt;&lt;txt-record&gt;model=Xserve&lt;/txt-record&gt;&lt;/service&gt;&lt;/service-group&gt;</pre>

para terminar é só necessário recomeçar o avahi, correndo

<pre># /etc/init.d/avahi-daemon restart  </pre>

Basta agora acederem ao Time Machine e adicionarem o novo disco para começar a fazer o backup.
