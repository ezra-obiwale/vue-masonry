# vue-masonry

A VueJS implementation for [desandro's masonry](https://masonry.desandro.com)

## Installation

```
npm i -S @ezraobiwale/vue-masonry
```

## Usage

### Vue 3

```html
<template>
  <ul class="grid">
    <masonry :selector=".grid" :options="optionObject" :data="dataArray">
      <template slot-scope="{ index, item }">
        <li class="grid-item">
          Index: {{ index }}<br />
          Current item: {{ item }}
        </li>
      </template>
    </masonry>
  </ul>
</template>

<script setup>
import { Masonry } from '@ezra-obiwale/vue-masonry';
</script>
```

### Vue 2

```js
import Vue from 'vue'
import VueMasonry from '@ezraobiwale/vue-masonry'

Vue.use(VueMansory);

new Vue({
  // ...
});
```

```html
<ul class="grid">
  <masonry :selector=".grid" :options="optionObject" :data="dataArray">
    <template slot-scope="data">
      <li class="grid-item">
        Index: {{ data.index }}<br />
        Current item: {{ data.current }}
      </li>
    </template>
  </masonry>
</ul>
```

### Note

- `optionsObject` is as described [here](https://masonry.desandro.com/options.html].

- `dataArray` is the array of data objects to be used in each item of the mansory list
