---
id: 551
title: Guerra declarada ao Baidu…
date: '2012-09-06T19:37:32+00:00'
author: 
  name: Pedro Resende
layout: post
guid: '<p>Para quem não sabe, o google é o motor mais utilizado a nível mundial, contudo não é o único. Na china, que é um país altamente democrático, têm um motor de busca um pouco diferente, o <a href="http://www.baidu.com/" target="_blank">baidu</a>.</p><p>Os'
permalink: /guerra-declarada-ao-baidu/
categories:
  - baidu, baiduspider, firewall, iptables, linux, Personal, Segurança
---
Para quem não sabe, o google é o motor mais utilizado a nível mundial, contudo não é o único. Na china, que é um país altamente democrático, têm um motor de busca um pouco diferente, o <a href="http://www.baidu.com/" target="_blank">baidu</a>.

Os senhores do baidu, querem ter sempre a informação mais fiável e actual, o que para o resto do mundo é um bocado chato, visto que têm de 10 em 10 minutos os spiders a recolher dados dos servidores, o que provoca um aumento de largura de banda e de tempo de processador.

Visto isto, como escrevo o meu blog em Português e tenho o blog a correr num servidor “caseiro”, não me apetece ser chulado pelo baidu.

Como tal, vou-vos deixar algumas linhas que podem adicionar ao vosso servidor linux, firewalls, para não terem de os aturar…

sudo iptables -I INPUT -m iprange –src-range 210.22.0.0-210.22.35.255 -j DROP  
sudo iptables -I INPUT -m iprange –src-range 123.112.0.0-123.127.255.255 -j DROP  
sudo iptables -I INPUT -m iprange –src-range 220.181.0.0-220.181.255.255 -j DROP  
sudo iptables -I INPUT -m iprange –src-range 119.63.192.0-119.63.199.255 -j DROP

sudo -s  
sudo iptables-save > /root/working.iptables.rules  
service iptables restart  
sudo iptables -L -n