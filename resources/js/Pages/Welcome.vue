<script setup>
import { ref } from 'vue'
import { Head, Link } from '@inertiajs/vue3';
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#' },
  { name: 'FAQS', href: '#' },
  { name: 'Contact', href: '#' },
]

const mobileMenuOpen = ref(false)
defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
});
</script>

<template>
    <Head title="Welcome to TARIS" />
    <div class="bg-white">
      <header class="absolute inset-x-0 top-0 z-50">
        <nav class="flex items-end justify-end pt-6 lg:px-8 bg-white" aria-label="Global">
          <div class="flex lg:flex-1">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img class="h-20 w-auto" src="../../images/logo.png" alt="" />
            </a>
          </div>
          <div class="flex lg:hidden">
            <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
              <span class="sr-only">Open main menu</span>
              <Bars3Icon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
         
          <div class="hidden lg:flex lg:flex-1 lg:justify-end">
            <div class="hidden lg:flex">  
              <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-sm p-5 font-semibold leading-7 text-blue uppercase hover:bg-blue hover:text-white hover:rounded-t-lg active:font-bold active:bg-orange-gradient-top-100 focus:font-bold mr-5 mt-5">{{ item.name }}</a>
              <button :href="route('login')"class="m-2 py-2 px-10 block rounded-full font-bold text-white bg-gradient-to-b from-orange-gradient-top to-orange-gradient-bottom hover:orange-gradient-bottom uppercase  px-5">Login</button>
          </div>
          </div>
        </nav>
        <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
          <div class="fixed inset-0 z-50" />
          <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div class="flex items-center justify-between">
              <a href="#" class="-m-1.5 p-1.5">
                <span class="sr-only">Your Company</span>
                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
              </a>
              <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
                <span class="sr-only">Close menu</span>
                <XMarkIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div class="mt-6 flow-root">
              <div class="-my-6 divide-y divide-gray-500/10">
                <div class="space-y-2 py-6">
                  <a v-for="item in navigation" :key="item.name" :href="item.href" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-blue hover:bg-gray-50">{{ item.name }}</a>
                </div>
                <div class="py-6">
                  <Link :href="route('login')"class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white-900 bg-gradient-to-t from-orangeTop-500 to-orangeBottom-500 hover:bg-orangeTop-50">Log in</Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
  
      <div class="relative isolate px-6 pt-14 lg:px-8">
        <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
        </div>
        <div class="mx-auto">
          <div class="grid grid-cols-5 gap-4">
            <div class="text-left py-32 sm:py-48 lg:py-56 col-span-2 ... ">
              <h3 class="font-bold tracking-tight text-blue sm:text-5xl uppercase">Don't get fooled</h3>
              <h1 class="text-4xl font-bold tracking-tight bg-gradient-to-b from-orange-gradient-top to-orange-gradient-bottom sm:text-6xl uppercase inline-block text-transparent bg-clip-text">By Rabies</h1>
            </div>
            <div class="rounded-s-full bg-blue col-span-3 ... " dir="ltr">
            </div>
          </div>
          
        </div>
        <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
          <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
        </div>
      </div>
    </div>
  </template>
