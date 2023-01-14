<template>
  <Popover class="relative bg-colorHeaderBgLight dark:bg-colorHeaderBgDark">
    <div
      class="pointer-events-none absolute inset-0 z-30 shadow"
      aria-hidden="true"
    />
    <div class="relative z-50">
      <div
        class="mx-auto flex items-center justify-between px-4 py-5 sm:px-6 sm:py-4 md:justify-start md:space-x-10"
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
        <div
          class="hidden md:flex md:flex-1 md:items-center md:justify-between"
        >
          <PopoverGroup as="nav" class="flex space-x-10">
            <Popover v-slot="{ open }">
              <PopoverButton
                :class="[
                  open
                    ? 'text-colorTxtLight dark:text-colorTxtDark'
                    : 'text-gray-500',
                  'px-1 group inline-flex items-center rounded-md bg-colorSwitchBgLight dark:bg-colorSwitchBgDark text-base font-medium hover:text-colorTxtLight dark:text-colorTxtDark focus:outline-none focus:ring-2 focus:ring-colorHighLight dark:focus:ring-colorHighDark focus:ring-offset-2 dark:focus:ring-offset-colorBgDark',
                ]"
              >
                <span>Solutions</span>
                <ChevronDownIcon
                  :class="[
                    open ? 'text-gray-600' : 'text-gray-400',
                    'ml-2 h-5 w-5 group-hover:text-gray-500',
                  ]"
                  aria-hidden="true"
                />
              </PopoverButton>

              <transition
                enter-active-class="transition ease-out duration-200"
                enter-from-class="opacity-0 -translate-y-1"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in duration-150"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-1"
              >
                <PopoverPanel
                  class="absolute inset-x-0 top-full z-10 hidden transform bg-colorHeaderBgMenuPopupLight dark:bg-colorHeaderBgMenuPopupDark shadow-xl dark:shadow-colorBgLight/10 md:block"
                >
                  <div
                    class="mx-auto grid max-w-7xl gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16"
                  >
                    <NuxtLink
                      v-for="item in navigation.primepop"
                      :key="item.name"
                      :to="localePath(item.href)"
                      class="-m-3 flex flex-col justify-between rounded-lg p-3 bg-colorHeaderBgMenuPopupLinkLight hover:bg-colorHeaderBgMenuPopupLinkHoverLight dark:hover:bg-colorHeaderBgMenuPopupLinkHoverDark dark:bg-colorHeaderBgMenuPopupLinkDark"
                    >
                      <div class="flex md:h-full lg:flex-col">
                        <div class="flex-shrink-0">
                          <p
                            class="inline-flex h-10 w-10 items-center justify-center rounded-md text-white sm:h-12 sm:w-12 bg-colorHeaderBgMenuPopupFooterLight dark:bg-colorHeaderBgMenuPopupFooterDark"
                          >
                            <span class="text-3xl">{{ item.icon }}</span>
                          </p>
                        </div>
                        <div
                          class="ml-4 md:flex md:flex-1 md:flex-col md:justify-between lg:ml-0 lg:mt-4"
                        >
                          <div>
                            <p
                              class="text-base font-medium text-colorTxtLight dark:text-colorTxtDark"
                            >
                              {{ item.name }}
                            </p>
                            <p
                              class="mt-1 text-sm text-colorHeaderBgMenuPopupTextLight dark:text-colorHeaderBgMenuPopupTextDark"
                            >
                              {{ item.description }}
                            </p>
                          </div>
                          <p
                            class="mt-2 text-sm font-medium text-colorHighLight dark:text-colorHighDark lg:mt-4"
                          >
                            Learn more
                            <span aria-hidden="true"> &rarr;</span>
                          </p>
                        </div>
                      </div>
                    </NuxtLink>
                  </div>
                  <div
                    class="bg-colorHeaderBgMenuPopupFooterLight dark:bg-colorHeaderBgMenuPopupFooterDark"
                  >
                    <div
                      class="mx-auto max-w-7xl space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8"
                    >
                      <div
                        v-for="item in navigation.callsToAction"
                        :key="item.name"
                        class="flow-root"
                      >
                        <NuxtLink
                          :to="localePath(item.href)"
                          class="-m-3 flex items-center rounded-md p-3 text-base font-medium text-colorTxtLight dark:text-colorTxtDark hover:bg-colorHeaderBgMenuPopupLinkHoverLight dark:hover:bg-colorHeaderBgMenuPopupLinkHoverDark"
                        >
                          <component
                            :is="item.icon"
                            class="h-6 w-6 flex-shrink-0 text-gray-400"
                            aria-hidden="true"
                          />
                          <span class="ml-3">{{ item.name }}</span>
                        </NuxtLink>
                      </div>
                    </div>
                  </div>
                </PopoverPanel>
              </transition>
            </Popover>
            <NuxtLink
              :to="localePath('/page')"
              class="text-base font-medium text-gray-500 hover:text-colorTxtLight dark:text-colorTxtDark"
              >Pricing</NuxtLink
            >
            <Popover v-slot="{ open }">
              <PopoverButton
                :class="[
                  open
                    ? 'text-colorTxtLight dark:text-colorTxtDark'
                    : 'text-gray-500',
                  'px-1 group inline-flex items-center rounded-md bg-colorSwitchBgLight dark:bg-colorSwitchBgDark text-base font-medium hover:text-colorTxtLight dark:text-colorTxtDark focus:outline-none focus:ring-2 focus:ring-colorHighLight dark:focus:ring-colorHighDark focus:ring-offset-2 dark:focus:ring-offset-colorBgDark',
                ]"
              >
                <span>More</span>
                <ChevronDownIcon
                  :class="[
                    open ? 'text-gray-600' : 'text-gray-400',
                    'ml-2 h-5 w-5 group-hover:text-gray-500',
                  ]"
                  aria-hidden="true"
                />
              </PopoverButton>

              <transition
                enter-active-class="transition ease-out duration-200"
                enter-from-class="opacity-0 -translate-y-1"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in duration-150"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-1"
              >
                <PopoverPanel
                  class="absolute inset-x-0 top-full z-10 hidden transform shadow-xl dark:shadow-colorBgLight/10 md:block"
                >
                  <div class="absolute inset-0 flex">
                    <div
                      class="w-1/2 bg-colorHeaderBgMenuPopupLight dark:bg-colorHeaderBgMenuPopupDark"
                    />
                    <div
                      class="w-1/2 bg-colorHeaderBgMenuPopupFooterLight dark:bg-colorHeaderBgMenuPopupFooterDark"
                    />
                  </div>
                  <div
                    class="relative mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2"
                  >
                    <nav
                      class="grid gap-y-10 bg-colorHeaderBgMenuPopupLight dark:bg-colorHeaderBgMenuPopupDark px-4 py-8 sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12"
                    >
                      <div>
                        <h3
                          class="text-base font-medium text-colorTxtLight dark:text-colorTxtDark"
                        >
                          Company
                        </h3>
                        <ul role="list" class="mt-5 space-y-6">
                          <li
                            v-for="item in navigation.company"
                            :key="item.name"
                            class="flow-root py-1"
                          >
                            <NuxtLink
                              :to="localePath(item.href)"
                              class="-m-3 flex items-center rounded-md p-3 text-base font-medium text-colorTxtLight dark:text-colorTxtDark bg-colorHeaderBgMenuPopupLinkLight hover:bg-colorHeaderBgMenuPopupLinkHoverLight dark:hover:bg-colorHeaderBgMenuPopupLinkHoverDark dark:bg-colorHeaderBgMenuPopupLinkDark"
                            >
                              <component
                                :is="item.icon"
                                class="h-6 w-6 flex-shrink-0 text-gray-400"
                                aria-hidden="true"
                              />
                              <span class="ml-4">{{ item.name }}</span>
                            </NuxtLink>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3
                          class="text-base font-medium text-colorTxtLight dark:text-colorTxtDark"
                        >
                          Parners
                        </h3>
                        <ul role="list" class="mt-5 space-y-6">
                          <li
                            v-for="item in navigation.partners"
                            :key="item.name"
                            class="flow-root py-1"
                          >
                            <NuxtLink
                              :to="localePath(item.href)"
                              class="-m-3 flex items-center rounded-md p-3 text-base font-medium text-colorTxtLight dark:text-colorTxtDark bg-colorHeaderBgMenuPopupLinkLight hover:bg-colorHeaderBgMenuPopupLinkHoverLight dark:hover:bg-colorHeaderBgMenuPopupLinkHoverDark dark:bg-colorHeaderBgMenuPopupLinkDark"
                            >
                              <component
                                :is="item.icon"
                                class="h-6 w-6 flex-shrink-0 text-gray-400"
                                aria-hidden="true"
                              />
                              <span class="ml-4">{{ item.name }}</span>
                            </NuxtLink>
                          </li>
                        </ul>
                      </div>
                    </nav>
                    <div
                      class="bg-colorHeaderBgMenuPopupFooterLight dark:bg-colorHeaderBgMenuPopupFooterDark px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12"
                    >
                      <div>
                        <h3
                          class="text-base font-medium text-colorTxtLight dark:text-colorTxtDark"
                        >
                          From the blog
                        </h3>
                        <ul role="list" class="mt-6 space-y-6">
                          <li
                            v-for="post in navigation.blogPosts"
                            :key="post.id"
                            class="flow-root py-1"
                          >
                            <NuxtLink
                              :to="localePath(post.href)"
                              class="-m-3 flex rounded-lg p-3 bg-colorHeaderBgMenuPopupLinkLight hover:bg-colorHeaderBgMenuPopupLinkHoverLight dark:hover:bg-colorHeaderBgMenuPopupLinkHoverDark dark:bg-colorHeaderBgMenuPopupLinkDark"
                            >
                              <div class="hidden flex-shrink-0 sm:block">
                                <img
                                  class="h-20 w-32 rounded-md object-cover"
                                  :src="post.imageUrl"
                                  alt=""
                                />
                              </div>
                              <div class="w-0 flex-1 sm:ml-8">
                                <h4
                                  class="truncate text-base font-medium text-colorTxtLight dark:text-colorTxtDark"
                                >
                                  {{ post.name }}
                                </h4>
                                <p class="mt-1 text-sm text-gray-500">
                                  {{ post.preview }}
                                </p>
                              </div>
                            </NuxtLink>
                          </li>
                        </ul>
                      </div>
                      <div class="mt-6 text-sm font-medium">
                        <NuxtLink
                          :to="localePath('/page')"
                          class="text-colorHighLight hover:text-colorHighLight dark:text-colorHighDark dark:hover:text-colorHoverHighDark"
                        >
                          View all posts
                          <span aria-hidden="true"> &rarr;</span>
                        </NuxtLink>
                      </div>
                    </div>
                  </div>
                </PopoverPanel>
              </transition>
            </Popover>
          </PopoverGroup>

          <div class="flex items-center md:ml-12">
            <BlocksSocialsSmall class="hidden lg:inline" />
            <BlocksSwitchLanguage
              v-if="project.$state.headerlanguage"
              :toggledown="true"
            />
            <NuxtLink
              :to="localePath('/page')"
              class="ml-4 inline-flex items-center justify-center rounded-md border border-transparent px-4 py-2 text-base font-medium text-white shadow-sm bg-colorBtnLight dark:bg-colorBtnDark dark:hover:bg-colorBtnHoverDark hover:bg-colorBtnHoverLight"
              >Sign up</NuxtLink
            >
          </div>
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
        class="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden"
      >
        <div
          class="divide-y-2 divide-gray-50 rounded-lg bg-colorHeaderBgMenuPopupLight dark:bg-colorHeaderBgMenuPopupDark shadow-lg ring-1 ring-black ring-opacity-5"
        >
          <div class="px-5 pt-5 pb-6 sm:pb-8">
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
            <div class="mt-6 sm:mt-8">
              <nav>
                <div class="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                  <NuxtLink
                    v-for="item in navigation.primepop"
                    :key="item.name"
                    :to="localePath(item.href)"
                    class="-m-3 flex items-center rounded-lg p-3 bg-colorHeaderBgMenuPopupLinkLight hover:bg-colorHeaderBgMenuPopupLinkHoverLight dark:hover:bg-colorHeaderBgMenuPopupLinkHoverDark dark:bg-colorHeaderBgMenuPopupLinkDark"
                  >
                    <div
                      class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-colorHighLight dark:bg-colorHighDark text-white sm:h-12 sm:w-12"
                    >
                      <span class="text-3xl">{{ item.icon }}</span>
                    </div>
                    <div
                      class="ml-4 text-base font-medium text-colorTxtLight dark:text-colorTxtDark"
                    >
                      {{ item.name }}
                    </div>
                  </NuxtLink>
                </div>
                <div class="mt-8 text-base">
                  <NuxtLink
                    :to="localePath('/page')"
                    class="font-medium text-colorHighLight hover:text-colorHoverHighLight dark:text-colorHighDark dark:hover:text-colorHoverHighDark"
                  >
                    View all products
                    <span aria-hidden="true"> &rarr;</span>
                  </NuxtLink>
                </div>
              </nav>
            </div>
          </div>
          <div class="py-6 px-5">
            <div class="grid grid-cols-2 gap-4">
              <NuxtLink
                :to="localePath('/page')"
                class="rounded-md text-base font-medium text-colorTxtLight dark:text-colorTxtDark hover:text-gray-700"
                >Pricing</NuxtLink
              >
              <NuxtLink
                :to="localePath('/page')"
                class="rounded-md text-base font-medium text-colorTxtLight dark:text-colorTxtDark hover:text-gray-700"
                >Docs</NuxtLink
              >
              <NuxtLink
                :to="localePath('/page')"
                class="rounded-md text-base font-medium text-colorTxtLight dark:text-colorTxtDark hover:text-gray-700"
                >Company</NuxtLink
              >
              <NuxtLink
                :to="localePath('/page')"
                class="rounded-md text-base font-medium text-colorTxtLight dark:text-colorTxtDark hover:text-gray-700"
                >Resources</NuxtLink
              >
              <NuxtLink
                :to="localePath('/page')"
                class="rounded-md text-base font-medium text-colorTxtLight dark:text-colorTxtDark hover:text-gray-700"
                >Blog</NuxtLink
              >
              <NuxtLink
                :to="localePath('/page')"
                class="rounded-md text-base font-medium text-colorTxtLight dark:text-colorTxtDark hover:text-gray-700"
                >Contact Sales</NuxtLink
              >
            </div>
            <div class="mt-6">
              <NuxtLink
                :to="localePath('/page')"
                class="flex w-full items-center justify-center rounded-md border border-transparent px-4 py-2 text-base font-medium text-white shadow-sm bg-colorBtnLight dark:bg-colorBtnDark dark:hover:bg-colorBtnHoverDark hover:bg-colorBtnHoverLight"
                >Sign up</NuxtLink
              >
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
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

import { ChevronDownIcon } from "@heroicons/vue/20/solid";

import { useSettings } from "~/flamewerk/project";

const project = useSettings();

const navigation = project.$state.Headernavigation;
</script>
