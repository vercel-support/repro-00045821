---
id: 587
title: Como configurar um IP fixo no Ubuntu 20.04
date: "2020-09-08T22:15:00+00:00"
author:
  name: Pedro Resende
layout: post
permalink: /como-configurar-um-ip-fixo-no-ubuntu-20-04/
coverImage: "/assets/blog/images/como-configurar-um-ip-fixo-no-ubuntu-20-04/ubuntu-20.04.png"
categories:
  - Personal
  - Software
tags:
  - ubuntu
  - ip fixo
  - server
---

Hoje deixo-vos aqui um pequeno tutorial a explicar como configurar um ip fixo, no Ubuntu 20.04.

Vamos começar por criar o seguinte ficheiro

```bash
# touch /etc/netplan/00-installer-config.yaml
```

Partindo do principio que a máquina se encontra na gama de ip's 192.168.0.x, vamos então proceder à atribuição do IP 192.168.0.250. Para tal, é necessário colocar no ficheiro recem criado o seguinte:

```bash
network:
  version: 2
  ethernets:
    eth0:
      addresses: [192.168.0.250/24]
      gateway4: 192.168.0.254
      nameservers:
        addresses: [192.168.0.254, 8.8.8.8]
```

vamos agora testar as configurações, correndo o comando

```bash
# netplan try
```

deverão ver o seguinte

![console](/assets/blog/images/como-configurar-um-ip-fixo-no-ubuntu-20-04/console.png)

o que demonstrará que as configurações estão a funcionar correctamente. Resta-vos apenas atribuí-las como permantes, atravês do comando

```bash
# netplan apply
```
