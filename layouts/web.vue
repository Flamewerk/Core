<template>
  <div class="bg-colorBgLight dark:bg-colorBgDark min-h-screen">
    <BlocksHeaderTiny v-if="project.$state.headertype == 'Tiny'" />
    <BlocksHeaderMinimal v-if="project.$state.headertype == 'Minimal'" />
    <BlocksHeaderMaximum v-if="project.$state.headertype == 'Maximum'" />
    <BlocksHeaderEcommerce v-if="project.$state.headertype == 'Ecommerce'" />
    <div class="min-h-screen py-6">
      <div v-if="project.$state.shop" hidden id="snipcart" :data-api-key="project.$state.snipcartid"></div>
      <slot />
    </div>
    <BlocksFooterTiny v-if="project.$state.footertype == 'Tiny'" />
    <BlocksFooterMinimal v-if="project.$state.footertype == 'Minimal'" />
     <BlocksFooterEcommerce v-if="project.$state.footertype == 'Ecommerce'" />
    <BlocksFooterMaximum v-if="project.$state.footertype == 'Maximum'" />
  </div>
</template>
<script setup>
import { useSettings } from "~/flamewerk/project";
const project = useSettings();

useHead({
  link: [
    { rel: "preconnect", href: "https://app.snipcart.com" },
    { rel: "preconnect", href: "https://cdn.snipcart.com" },
    {
      rel: "stylesheet",
      href: "https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.css",
    },
  ],
  script: [
    { src: "https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.js" },
  ],
});



</script>
