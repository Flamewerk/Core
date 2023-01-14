<template>
  <div
    class="bg-colorFooterBgLight dark:bg-colorFooterBgDark h-16 w-full mx-auto mb-12"
  >
    <div class="flex items-center justify-around mx-auto max-w-sm mt-6 mb-6">
      <BlocksSwitchLanguage v-if="project.$state.footerlanguage" />

      <BlocksSwitchTheme v-if="project.$state.footertheme" />
    </div>

    <BlocksSocialsBasic />

    <BlocksFooterCopyright />
  </div>
</template>
<script setup>
import { useSettings } from "~/flamewerk/project";
const project = useSettings();
</script>
