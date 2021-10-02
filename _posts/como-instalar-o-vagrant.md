---
id: 401
title: Como instalar o Vagrant
date: "2013-07-01T14:09:33+00:00"
author:
  name: Pedro Resende
layout: post
guid: |
  <div class="object-center"><div class="content-view-embed">
  <div class="class-image">
  <div class="attribute-image">
permalink: /como-instalar-o-vagrant/
categories:
  - vagrant, vm, Virtual Machine, virtualbox, vmware
---

<div class="object-center">
  <div class="content-view-embed">
    <div class="class-image">
      <div class="attribute-image">
      <img src="https://blog.resende.biz/assets/blog/ezdemo_site/storage/images/media/images/vagrant/11975-1-eng-GB/Vagrant_medium.png" width="200" height="51"  style="border: 0px solid ;" alt="Vagrant" title="Vagrant" />
      </div>
    </div>
  </div>
</div>

Hoje vou-vos explicar como instalar e configurar o Vagrant.Para quem não sabe o que é, trata-se de&nbsp;um software open-source para criação e configuração de ambientes de desenvolvimento virtuais.

Pode ser considerado um invólucro em torno VirtualBox e software de gerenciamento de configuração, como Chef, Salt, Puppet e Ansible.&nbsp;Apesar de escrito em Ruby, é utilizável em outros projetos de programação como PHP, Python, Java e C #.

Como tal é necessário terem instalado o Virtual Box ou o Vmware.

As seguintes instruções foram executadas no Ubuntu 12.04, contúdo deverão funcionar nos outros sistemas operativos.

Vamos então começar por fazer o "_download"_ da última versão do vagrant atravês do seguinte <a href="http://downloads.vagrantup.com/" target="_blank">site</a>, uma vez terminada abram a linha de comando e escrevam o seguinte:

<pre>$ cd Downloads

$ sudo dpkg -i vagrant_x.x.x_i686.deb em que devem substituir os x's pela versão selecionada </pre>

Uma vez terminada, vamos então fazer o <a href="http://www.vagrantbox.es/" target="_blank">download</a> de uma máquina, para issue executem o seguinte comando

<pre>$ vagrant box add &lt;name&gt; &lt;url&gt;</pre>

Quando terminar, vamos initializar a máquina através

<pre>$ vagrant init &lt;name&gt;</pre>

Vamos então alterar algumas configurações

<pre>$ vi Vagrantfile</pre>

Vamos começar por descomentar as seguintes linhas

<pre># config.vm.network :forwarded_port, guest: 80, host: 8080</pre>

<pre># config.vm.network :public_network</pre>

Para que possamos aceder à máquina virtual através da porta local 8080 e para que esteja disponível na nossa rede

Vamos então iniciar a vm através:

<pre>$ vagrant up</pre>

Deverão deparar-se com o seguinte

<pre>Bringing machine 'default' up with 'virtualbox' provider...
[default] Importing base box 'ubuntu12'...
[default] Matching MAC address for NAT networking...
[default] Setting the name of the VM...
[default] Clearing any previously set forwarded ports...
[default] Creating shared folders metadata...
[default] Clearing any previously set network interfaces...
[default] Available bridged network interfaces:
1) eth0
2) eth1
3) wlan0
What interface should the network bridge to?</pre>

No meu caso escolhi o 1, sendo a primeira placa de rede

<pre> 
What interface should the network bridge to? 1
[default] Preparing network interfaces based on configuration...
[default] Forwarding ports...
[default] -- 22 =&gt; 2222 (adapter 1)
[default] -- 80 =&gt; 8080 (adapter 1)
[default] Booting VM...
[default] Waiting for VM to boot. This can take a few minutes.
[default] VM booted and ready for use!
[default] Configuring and enabling network interfaces...</pre>

Uma vez terminado poderão aceder através de ssh à vossa máquina utilizando o comando

<pre>$ vagrant ssh</pre>

Para desligarem a máquina usem

<pre>$ vagrand halt</pre>

Para suspenderem

<pre>$ vagrand suspend</pre>

e para destruirem e voltarem ao inicio

<pre>$ vagrant destroy</pre>

e está feito, como podem ver nada do outro mundo.
