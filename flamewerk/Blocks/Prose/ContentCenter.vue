<template>
  <div class="dark:prose-invert prose mx-auto dark:text-white pb-16 mt-12 text-center">
    <ContentSlot :use="$slots.default" unwrap="p" />
  </div>
</template>
