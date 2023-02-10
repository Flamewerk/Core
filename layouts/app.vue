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
</script>
