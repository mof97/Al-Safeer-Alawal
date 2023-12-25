<template>
    <div id="navbar">
        <div class="main bg-gray-900 text-white text-right py-2" >
            <div class="container max-w-screen-lg">
                <ul class="flex gap-5 justify-center  md:justify-end items-center">
                    <li class="">
                        <a href="tel:6858" class="flex items-center gap-1">  
                            <span class="text-white text-xl">
                                <Icon name="solar:phone-line-duotone" />
                            </span>
                            <span>
                                6858
                            </span>
                        </a>
                    </li>
                    <li class="">
                        <a href="mailTo:info@alsafeeralawal.com" class="flex items-center gap-1">  
                            <span class="text-white text-xl">
                                <Icon name="clarity:email-line" />
                            </span>
                            <span>
                                info@alsafeeralawal.com
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="navbar py-3">
            <div class="container flex-col justify-center text-center md:justify-between md:flex-row flex items-center justify-between max-w-screen-lg">
                <div class="logo">
                    <img v-if="$i18n.locale == 'en'" class="w-32" src="@/assets/imgs/logo/logo-png.png" >
                    <img v-else class="w-32" src="@/assets/imgs/logo/ar-logo.jpg" >
                </div>
                <ul :class="$i18n.locale == 'ar' ? 'flex-row-reverse' : ''" class="navbar-list py-3 md:py-0 uppercase duration-300 text-sm md:text-md justify-center text-gray-700 font-bold  flex flex-wrap items-center gap-3 md:gap-8 cursor-pointer">
                    <li class="hover:text-[#EEBB1E] duration-300">
                        <NuxtLink to="/">
                            {{ $t('home') }}
                        </NuxtLink>
                    </li>
                    <li class="hover:text-[#EEBB1E] duration-300">
                        <NuxtLink to="/about">
                            {{ $t('who_we_are') }}
                        </NuxtLink>
                    </li>
                    <li class="hover:text-[#EEBB1E] duration-300">
                        <NuxtLink to="/#categories">
                            {{ $t('categories') }}
                        </NuxtLink>
                    </li>
                    <li class="hover:text-[#EEBB1E] duration-300">
                        <NuxtLink to="/#products">
                            {{ $t('products') }}
                        </NuxtLink>
                    </li>
                    <li class="hover:text-[#EEBB1E] duration-300">
                        <button @click="changeLang()" class="bg-gray-500 text-white px-3 py-1 rounded">
                            {{ $t('lang') }}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script setup>

const { locale } = useI18n();
function changeLang() {
  if (locale.value == "ar") {
    locale.value = "en";
  } else {
    locale.value = "ar";
  }
}


</script>