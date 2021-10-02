---
id: 407
title: Como alterar a Gama de IP’s na MEO
date: '2013-05-20T10:51:59+00:00'
author: 
  name: Pedro Resende
layout: post
guid: '<p>Resolvi escrever um “pequeno” tutorial de como alterar a gama de IP’s dos routers da Meo.</p><p>Nas situações em que a versão de firmware não permite efectuar a alteração/eliminar a Pool DHCP que vem por defeito, devemos proceder da seguinte forma:</p>'
permalink: /como-alterar-a-gama-de-ips-na-meo/
categories:
  - dhcp, dns, gama, gateway, ip, meo, pool, router
---
Resolvi escrever um “pequeno” tutorial de como alterar a gama de IP’s dos routers da Meo.

Nas situações em que a versão de firmware não permite efectuar a alteração/eliminar a Pool DHCP que vem por defeito, devemos proceder da seguinte forma:

  1. através da página interna do router adicionar a nova gama em&nbsp;**Endereços IP**:
    
    Exemplo:  
    Endereço IP: 192.168.5.254  
    máscara: 255.255.255.0  
    &nbsp;

  2. adicionar IP manual, nas definições da placa de rede dentro da gama adiciona no router:
    
    Endereço IP: 192.168.5.100  
    Mascara: 255.255.255.0  
    Gateway: 192.168.5.254  
    DNS1: 192.168.5.254  
    &nbsp;

  3. aceder via telnet ao router e eliminar as Pool DHCP configuradas:
    
    <pre>Iniciar &gt; Executar digitar 
cmd
&gt;e clicar em OK.

Aceder por telnet ao router, digitando o comando telnet 192.168.5.254
Colocar os dados de autênticação
username: Administrator
password: 3!play
Para remover as Pool DHCP configuradas actualmente no router é necessário digitar os comando:
dhcp server flush
&gt;ENTER
saveall
&gt;ENTER
exit
&gt;ENTER </pre>

  4. Aceder a página interna do router usando o novo Endereço IP 192.168.5.254 e adicionar a&nbsp;**Pool DHCP**&nbsp;pretendida.  
    &nbsp;
  5. Activar a opção&nbsp;**Usar Servidor DHCP**&nbsp;e clicar em&nbsp;**Aplicar**.