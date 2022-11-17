<template>
  <h1 class="text-3xl font-bold underline">
    Vue3 + Vite + TypeScript + TailwindCSS + ESLint
  </h1>

  <div class="card">
    <div>
      切換語言：
      <select @change="handleChangeLanguage">
        <option value="zh-TW">中文</option>
        <option value="en-US">English</option>
      </select>
    </div>
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      {{ $t('edit') }} <code>components/HelloWorld.vue</code> {{ $t('__text-test-HMR__') }}
    </p>
  </div>

  <p>
    Check out <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite starter
  </p>
  <p>
    Install <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a> in your IDE for a better DX
  </p>
  <p :class="HelloWorldCss['read-the-docs']">Click on the Vite and Vue logos to learn more</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import HelloWorldCss from '../assets/styles/helloWorld.module.scss'

defineProps<{ msg: string }>()

const count = ref(0)
const { locale } = useI18n()
const handleChangeLanguage = (e) => {
  locale.value = e.target.value
}

</script>
