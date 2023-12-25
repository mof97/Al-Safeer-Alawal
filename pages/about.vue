<template>
    <div id="about-page" :class="$i18n.locale == 'ar' ? 'rtl' : '' ">
        <header class="h-[55vh] relative flex items-center justify-center">
            <div class="overlay absolute top-0 left-0 bg-black bg-opacity-60 h-full w-full"></div>
            <div class="container relative text-white">
                <div class="logo ">
                    <img class="w-36 mx-auto mb-5" src="@/assets/imgs/logo/white-logo.svg" alt="">
                    <h2 class="w-full md:w-2/3 lg:w-1/2 mx-auto text-center text-xl md:text-2xl">{{ $t('aboutHero') }}</h2>
                </div>
            </div>
        </header>
        <div class="about-info py-10">
            <div class="container max-w-screen-lg grid grid-cols-1 gap-10">
                <div class="data grid  grid-cols-1 md:grid-cols-2 items-center gap-10">
                    <div class="img">
                        <img class="rounded-md border-[15px]" src="@/assets/imgs/about/01.jpg" alt="">
                    </div>
                    <div class="info">
                        <h2 class="text-2xl mb-10 font-bold">{{ $t('who_we_are') }}</h2>
                        <p class="text-gray-500">{{ $t('who_we_are_b') }}</p>
                    </div>
                </div>
                <div class="data grid grid-cols-1 md:grid-cols-2 hidden md:grid items-center gap-10">
                    <div class="info">
                        <h2 class="text-2xl mb-10 font-bold">{{ $t('mission') }}</h2>
                        <p class="text-gray-500">{{ $t('mission_b') }}</p>
                    </div>
                    <div class="img">
                        <img class="rounded-md border-[15px]" src="@/assets/imgs/about/02.jpg" alt="">
                    </div>
                </div>
                <div class="data grid grid-cols-1 md:hidden md:grid-cols-2 items-center gap-10">
                    <div class="img">
                        <img class="rounded-md border-[15px]" src="@/assets/imgs/about/02.jpg" alt="">
                    </div>
                    <div class="info">
                        <h2 class="text-2xl mb-10 font-bold">{{ $t('mission') }}</h2>
                        <p class="text-gray-500">{{ $t('mission_b') }}</p>
                    </div>
                </div>
                <div class="data grid grid-cols-1 md:grid-cols-2 items-center gap-10">
                    <div class="img">
                        <img class="rounded-md border-[15px]" src="@/assets/imgs/about/03.jpg" alt="">
                    </div>
                    <div class="info">
                        <h2 class="text-2xl mb-5 font-bold">{{ $t('services') }}</h2>

                        <p class="text-gray-500 mb-4">{{ $t('services_b_1') }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>

#about-page header {
    background-image: url('@/assets/imgs/about/header-bg.jpg');
    @apply bg-center bg-cover
}

</style>