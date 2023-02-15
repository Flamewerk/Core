<template>
  <div
    class="h-screen flex overflow-hidden bg-gray-100 dark:bg-gray-800 dark:text-white"
  >
    <BlocksHeaderTiny v-if="project.$state.headertype == 'Tiny'" />
    <BlocksHeaderMinimal v-if="project.$state.headertype == 'Minimal'" />
    <BlocksHeaderEcommerce v-if="project.$state.headertype == 'Ecommerce'" />
    <BlocksHeaderApplication
      v-if="project.$state.headertype == 'Application'"
    />
    <BlocksHeaderMaximum v-if="project.$state.headertype == 'Maximum'" />

    <div class="flex flex-col w-0 flex-1 overflow-hidden lg:mt-0">
      <main
        class="flex-1 relative z-0 overflow-y-auto max-w-full focus:outline-none"
        tabindex="0"
      >
        <div class="py-6">
          <div class="max-w-7xl mx-auto px-0 sm:px-6 md:px-8">
            <div v-if="project.$state.shop" hidden id="snipcart" :data-api-key="project.$state.snipcartid"></div>
            <slot />
          </div>
        </div>
      </main>
    </div>
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
