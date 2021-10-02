---
id: 692
title: Como aplicar CSS só no Safari
date: "2019-08-07T13:51:55+00:00"
author:
  name: Pedro Resende
layout: post
guid: https://blog.resende.biz/?p=692
permalink: /como-aplicar-css-so-no-safari/
coverImage: "/assets/blog/wp-content/uploads/2019/08/safari.png"
categories:
  - Uncategorized
tags:
  - css
  - dev
  - safari
---

Apesar de hoje em dia não haver tantas diferenças em termos de CSS's nos diferentes browsers ainda há casos exceptionais como o comportamento o position: sticky no chrome vs safari dentro de c&#8217;elulas (td) de tabelas.

Para isso, terão de colocar o código específico ao Safari dentro desta tag

<pre>
  <code class="language-javascript">
    /** SAFARI ONLY */
      @media not all and (min-resolution: .001dpcm) {
        @supports(-webkit-appearance:none) and (stroke-color:transparent) { ... }
      }
    /** SAFARI ONLY */
  </code>
</pre>
