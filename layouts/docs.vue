<template>
  <div class="bg-colorBgLight dark:bg-colorBgDark min-h-screen">
    <BlocksHeaderTiny v-if="project.$state.headertype == 'Tiny'" />
    <BlocksHeaderMinimal v-if="project.$state.headertype == 'Minimal'" />
    <BlocksHeaderMaximum v-if="project.$state.headertype == 'Maximum'" />
    <div class="min-h-screen py-6 lg:flex">
      <BlocksMenuDocs />
      <slot />
    </div>
    <BlocksFooterTiny v-if="project.$state.footertype == 'Tiny'" />
    <BlocksFooterMinimal v-if="project.$state.footertype == 'Minimal'" />
    <BlocksFooterMaximum v-if="project.$state.footertype == 'Maximum'" />
  </div>
</template>
<script setup>
import { useSettings } from "~/flamewerk/project";
const project = useSettings();
</script>
