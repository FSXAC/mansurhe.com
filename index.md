---
layout: default
title: Home
---

<style>
#headshot-img {
    background-image: url("/assets/img/light-512.jpeg");
    background-size: cover;
    width: 100%;
    max-width: 256px;
    margin-bottom: 2em;
}
#headshot-img::after {
    content: "";
    display: block;
    padding-bottom: 100%;
}
@media (prefers-color-scheme: dark) {
    #headshot-img {
        background-image: url("/assets/img/dark-512.jpeg");
    }
}
</style>

<div class="row">
    <div class="col-md-4 float-left">
        <div id="headshot-img"></div>
    </div>
    <div class="col">
    <h1 class="display-1">Hi</h1>
    {% capture intro %}
    {% include intro.md %}
    {% endcapture %}
    {{ intro | markdownify }}
    </div>
</div>

<div class="my-5"></div>

{% include contact %}
