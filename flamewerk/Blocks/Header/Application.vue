<template>

  <div>
    <div class="lg:hidden" v-show="!showMobileMenu">
      <div class="fixed inset-0 flex z-40">

        <div class="fixed inset-0">
          <div class="absolute inset-0 bg-gray-600 opacity-75"></div>
        </div>

        <div
          class="relative flex-1 flex flex-col max-w-xs w-full bg-gray-300 dark:bg-gray-800"
        >
          <div class="absolute top-0 right-0 -mr-12 pt-2">
            <button
              @click="!showMobileMenu"
              class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span class="sr-only">Close sidebar</span>
              <svg
                class="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">


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



            <nav class="mt-5 px-2 space-y-1 responsive">

              <nuxt-link
                :to="localePath('/')"
                class="text-gray-800 dark:text-white hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 font-medium rounded-md"
              >
                <svg
                  class="text-gray-400 mr-4 h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                  />
                </svg>
                Menu Item 1
              </nuxt-link>


            </nav>
          </div>
        <div class="flex items-center justify-around mx-auto max-w-sm mt-6">
          <BlocksSwitchLanguage v-if="project.$state.footerlanguage" />
          <BlocksSwitchTheme v-if="project.$state.footertheme" />
        </div>
        </div>
        <div class="flex-shrink-0 w-14">
        </div>
      </div>
    </div>

    <div class="hidden lg:flex md:flex-shrink-0 min-h-screen">
      <div class="flex flex-col w-64">
        <div class="flex flex-col h-0 flex-1 bg-gray-300 dark:bg-gray-900">
          <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
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
            <nav
              class="mt-5 flex-1 px-2 bg-gray-300 dark:bg-gray-900 space-y-1"
            >
              <nuxt-link
                :to="localePath('/')"
                class="text-gray-800 dark:text-white hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
              >

                <svg
                  class="text-gray-400 mr-3 h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                  />
                </svg>
                {{ $t("menu.a1") }}
              </nuxt-link>


            </nav>
          </div>

          <div class="flex-shrink-0 flex bg-gray-400 dark:bg-gray-700 p-4">
            <a href="#" class="flex-shrink-0 w-full group block">

        <div class="flex items-center justify-around mx-auto max-w-sm mt-6">
          <BlocksSwitchLanguage v-if="project.$state.footerlanguage" />
          <BlocksSwitchTheme v-if="project.$state.footertheme" />
        </div>
 
            </a>
          </div>
        </div>
      </div>
    </div>

    <div
      class="lg:hidden absolute top-0 bg-gray-300 dark:bg-gray-900 left-0 z-30 h-24 w-full flex"
    >
      <div class="justify-start mt-6 flex-start ml-6">
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
      </div>

      <div
        class=" w-12 h-12 mt-6 ml-auto mr-6 flex-end"
      >
        <button
          @click="!showMobileMenu"
          class="bg-blue-600 rounded w-12 h-10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        >
          <span class="sr-only">Open sidebar</span>
          <!-- Heroicon name: menu -->
          <svg
            class="h-6 w-6 mx-auto text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>

const showMobileMenu = ref(true)

import { useSettings } from "~/flamewerk/project";

const project = useSettings();


</script>

<style>
nav .nuxt-link-exact-active {
  background-color: #2a3243;
  color: #fff !important;
}
</style>
