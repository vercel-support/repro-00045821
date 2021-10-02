---
id: 573
title: Túnel SSH
date: "2012-09-06T19:37:13+00:00"
author:
  name: Pedro Resende
layout: post
guid: |
  <div class="object-center"><div class="content-view-embed">
  <div class="class-image">
  <div class="attribute-image">
permalink: /tunel-ssh/
categories:
  - Segurança, ssh, túnel, tunnel, linux, Tutorial
---

<div class="object-center">
  <div class="content-view-embed">
    <div class="class-image">
      <div class="attribute-image">
      <img src="https://blog.resende.biz/assets/blog/ezdemo_site/storage/images/media/images/tunel-ssh/11431-1-eng-GB/Tunel-SSH_large.jpg" width="360" height="246"  style="border: 0px solid ;" alt="Túnel SSH" title="Túnel SSH" />
      </div>
    </div>
  </div>
</div>

Hoje vou-vos explicar como podem fazer uma ligação de túnel, ligando-se ao servidor de ssh em casa, para usarem com o Socket S para quando estão fora de casa.

Muitas vezes, é necessário aceder a sites de bancos, ou outros conteúdos confidenciais, quando estamos fora de casa e só temos acesso a redes Wireless (FON, PT-WIFI, etc…

Para criar o túnel, basta abrirem um terminal e escrever o seguinte

\$ ssh -D 8080 administrador_servidor_casa@ipcasa

depois do túnel ser estabelecido, basta alterarem as configurações do vosso browser, como podem ver na imagem seguinte

<div class="object-center">
  <div class="content-view-embed">
    <div class="class-image">
      <div class="attribute-image">
      <img src="https://blog.resende.biz/assets/blog/ezdemo_site/storage/images/media/images/tunel-ssh-configuracoes/11436-1-eng-GB/Tunel-ssh-Configuracoes_large.png" width="360" height="312"  style="border: 0px solid ;" alt="Túnel ssh - Configurações" title="Túnel ssh - Configurações" />
      </div>
    </div>
  </div>
</div>

E pronto, está feito
