<template>
  <Popover
    class="relative bg-colorHeaderBgLight dark:bg-colorHeaderBgDark z-50"
  >
    <div
      class="flex items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10"
    >
      <div>
        <NuxtLink :to="localePath('/')" class="flex">
          <span class="sr-only">{{ project.$state.name }}</span>

          <img
            :class="[project.$state.logodark ? 'block dark:hidden' : '', '']"
            :src="'/logo/' + project.$state.logoimage"
            :alt="project.$state.name"
            width="40"
            height="40"
          />
          <img
            v-if="project.$state.logodark"
            class="hidden dark:block"
            :src="'/logo/' + project.$state.logodarkimage"
            :alt="project.$state.name"
            width="40"
            height="40"
          />

          <span
            v-if="project.$state.textlogo"
            class="mt-1.5 ml-4 text-xl font-bold dark:text-white"
            >{{ project.$state.textlogo }}</span
          >
        </NuxtLink>
      </div>
      <div class="-my-2 -mr-2 md:hidden">
        <PopoverButton
          class="inline-flex items-center justify-center rounded-md bg-colorBgLight dark:bg-colorBgDark p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-colorHighLight dark:focus:ring-colorHighDark"
        >
          <span class="sr-only">Open menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </PopoverButton>
      </div>
      <div class="hidden md:flex md:flex-1 md:items-center md:justify-between">
        <PopoverGroup as="nav" class="flex space-x-10">
          <NuxtLink
            :to="localePath(item.href)"
            v-for="item in navigation.basicmenu"
            :key="item.name"
            class="text-base font-medium text-gray-500 hover:text-colorTxtLight dark:text-colorTxtDark"
            >{{ item.name }}</NuxtLink
          >
        </PopoverGroup>
        <div class="flex items-center md:ml-12">
          <BlocksSocialsSmall class="hidden lg:inline" />
          <BlocksSwitchLanguage
            v-if="project.$state.headerlanguage"
            :toggledown="true"
          />
        </div>
      </div>
    </div>

    <transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <PopoverPanel
        focus
        class="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
      >
        <div
          class="divide-y-2 divide-gray-50 rounded-lg bg-colorHeaderBgMenuPopupLight dark:bg-colorHeaderBgMenuPopupDark shadow-lg ring-1 ring-black ring-opacity-5"
        >
          <div class="px-5 pt-5 pb-6">
            <div class="flex items-center justify-between">
              <div>
                <NuxtLink :to="localePath('/')" class="flex">
                  <span class="sr-only">{{ project.$state.name }}</span>

                  <img
                    :class="[
                      project.$state.logodark ? 'block dark:hidden' : '',
                      '',
                    ]"
                    :src="'/logo/' + project.$state.logoimage"
                    :alt="project.$state.name"
                    width="40"
                    height="40"
                  />
                  <img
                    v-if="project.$state.logodark"
                    class="hidden dark:block"
                    :src="'/logo/' + project.$state.logodarkimage"
                    :alt="project.$state.name"
                    width="40"
                    height="40"
                  />

                  <span
                    v-if="project.$state.textlogo"
                    class="mt-1.5 ml-4 text-xl font-bold dark:text-white"
                    >{{ project.$state.textlogo }}</span
                  >
                </NuxtLink>
              </div>
              <div class="-mr-2">
                <PopoverButton
                  class="inline-flex items-center justify-center rounded-md bg-colorBgLight dark:bg-colorBgDark p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-colorHighLight dark:focus:ring-colorHighDark"
                >
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid gap-6">
                <NuxtLink
                  v-for="item in navigation.basicmenu"
                  :key="item.name"
                  :to="localePath(item.href)"
                  class="-m-3 flex items-center rounded-lg p-3 bg-colorHeaderBgMenuPopupLinkLight hover:bg-colorHeaderBgMenuPopupLinkHoverLight dark:hover:bg-colorHeaderBgMenuPopupLinkHoverDark dark:bg-colorHeaderBgMenuPopupLinkDark"
                >
                  <div
                    class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-colorHighLight dark:bg-colorHighDark text-white"
                  >
                    <component
                      :is="item.icon"
                      class="h-6 w-6"
                      aria-hidden="true"
                    />
                  </div>
                  <div
                    class="ml-4 text-base font-medium text-colorTxtLight dark:text-colorTxtDark"
                  >
                    {{ item.name }}
                  </div>
                </NuxtLink>
              </nav>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup>
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";

import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

import { useSettings } from "~/flamewerk/project";

const project = useSettings();

const navigation = project.$state.Headernavigation;
</script>
