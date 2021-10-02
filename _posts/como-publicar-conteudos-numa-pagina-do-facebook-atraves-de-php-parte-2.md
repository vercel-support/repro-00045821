---
id: 409
title: "Como publicar conteúdos numa página do facebook através de PHP - Parte 2"
date: "2013-05-07T18:16:18+00:00"
author:
  name: Pedro Resende
layout: post
guid: |
  <div class="object-center"><div class="content-view-embed">
  <div class="class-image">
  <div class="attribute-image">
permalink: /como-publicar-conteudos-numa-pagina-do-facebook-atraves-de-php-parte-2/
categories:
  - Facebook, API, facebook-sdk, sdk, php
---

<div class="object-center">
  <div class="content-view-embed">
    <div class="class-image">
      <div class="attribute-image">
      <img src="https://blog.resende.biz/assets/blog/ezdemo_site/storage/images/media/images/facebook_logo1/11834-1-eng-GB/facebook_logo1_medium.jpg" width="200" height="75"  style="border: 0px solid ;" alt="facebook_logo1" title="facebook_logo1" />
      </div>
    </div>
  </div>
</div>

Hoje, finalmente arranjei algum tempo para terminar o tutorial para vos explicar a parte da "criação" e configuração da aplicação na plataforma do facebook.

Vamos começar por aceder à consola de desenvolvimento da facebook, através do link <a href="http://developer.facebook.com" target="_self">http://developer.facebook.com</a>, onde se deverão deparar com o seguinte écran.

<div class="object-center">
  <div class="content-view-embed">
    <div class="class-image">
      <div class="attribute-image">
      <img src="https://blog.resende.biz/assets/blog/ezdemo_site/storage/images/media/images/facebook-developers/11844-1-eng-GB/facebook-Developers_mainstory1.png" width="468" height="263"  style="border: 0px solid ;" alt="facebook-Developers" title="facebook-Developers" />
      </div>
    </div>
  </div>
</div>

Depois de fazerem login, devem clicar em "App". Deverão proceder clicando em "Create New App", onde vos irá aparecer a seguinte caixa de dialogo.

<div class="object-center">
  <div class="content-view-embed">
    <div class="class-image">
      <div class="attribute-image">
      <img src="https://blog.resende.biz/assets/blog/ezdemo_site/storage/images/media/images/facebook-app-name/11849-1-eng-GB/Facebook-App-Name_large.png" width="360" height="109"  style="border: 0px solid ;" alt="Facebook-App Name" title="Facebook-App Name" />
      </div>
    </div>
  </div>
</div>

No nosso tutorial, iremos chamar aplicação de Blog Test e o _namespace_&nbsp;blogresendebiztest, por fim não se esqueçam de clicar em "Continue". Em que deverão deparar com um recaptcha para validar que não são uma aplicação, mas sim um ser humano.

Quando terminarem os passos deverão deparar-se com o seguinte écran

<div class="object-center">
  <div class="content-view-embed">
    <div class="class-image">
      <div class="attribute-image">
      <img src="https://blog.resende.biz/assets/blog/ezdemo_site/storage/images/media/images/facebook-clean-app/11859-1-eng-GB/Facebook-Clean-App_mainstory1.png" width="468" height="396"  style="border: 0px solid ;" alt="Facebook-Clean-App" title="Facebook-Clean-App" />
      </div>
    </div>
  </div>
</div>

Vamos clicar on diz "Website with Facebook Login" e vamos preencher o campo o url do vosso website, se estiverem apenas a testar em ambiente local podem sempre colocar <a href="http://localhost" target="_self">http://localhost</a>&nbsp;e no campo "App Domains:" coloquem localhost. Por fim cliquem em "Save changes".

Esperem alguns minutos até que a aplicação "propague" pelos servidores do facebook, entretanto podem colocar na nossa aplicação o App ID e o App Secret.

Vamos agora, configurar as permissões do facebook para que nos permita publicar conteúdo, para isso cliquem no lado esquerdo onde diz "Permissions"

Vão preencher os campos com os seguintes valores:

Default Activity Privacy: Public

User & Friend Permissions: publish_actions

Extended Permissions: manage_pages publish_stream offline_access

Auth Token Parameter: URI Fragment (#access token=&#8230;)

Cliquem então em "Save changes", o aspecto deverá ser o seguinte:

<div class="object-center">
  <div class="content-view-embed">
    <div class="class-image">
      <div class="attribute-image">
      <img src="https://blog.resende.biz/assets/blog/ezdemo_site/storage/images/media/images/facebook-aplication-permissions/11864-1-eng-GB/Facebook-Aplication-Permissions_mainstory1.png" width="468" height="218"  style="border: 0px solid ;" alt="Facebook-Aplication-Permissions" title="Facebook-Aplication-Permissions" />
      </div>
    </div>
  </div>
</div>

Poderão aceder ao test.php e fazer o respectivo _login_ com as credências do facebook, em poucos segundos a "vossa" aplicação no facebook irá publicar a "Message" na vossa página.

Agora já podem implementar as vossas aplicações em php com o facebook :).
