<template>
  <div id="app">
      <NuxtLayout>
        <Navbar />
        <NuxtPage></NuxtPage>

        <div class="locations mt-5">
          <h1 class="text-2xl uppercase mb-10 font-bold text-center">
              
              {{ $t('location') }}
          </h1>
          <iframe class="w-full h-72" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3333.905529316837!2d44.444744075685364!3d33.32128517344104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDE5JzE2LjYiTiA0NMKwMjYnNTAuNCJF!5e0!3m2!1sen!2siq!4v1702493163174!5m2!1sen!2siq"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div class="brands-section py-3 bg-gray-100 mb-5">
          <div class="container">
            <Splide :options="brands" aria-label="My Favorite Images">
                <SplideSlide v-for="item in 18">
                    <div class="logo py-2 px-4 bg-white rounded-md">
                      <img class="h-32 w-32 object-cover mx-auto" :src="`./imgs/brands/${item}.jpeg`" alt="">
                    </div>  
                </SplideSlide>
            </Splide> 
          </div>
        </div>

        <div id="footer" class="pb-10">
          <div class="container max-w-screen-lg flex items-center justify-between">

            <img v-if="$i18n.locale == 'en'" class="w-32" src="@/assets/imgs/logo/logo-png.png" >
            <img v-else class="w-32" src="@/assets/imgs/logo/ar-logo.jpg" >
            <span class="text-gray-600">
              All Copyright Resaved
            </span>
          </div>
        </div>
      </NuxtLayout>
  </div>
</template>
<script setup>

const brands = ref({ 
        rewind: true,
        autoplay: true,
        perPage:8,
        gap:20,
        pagination:false,
        type   : 'loop',
        perMove: 1,
        breakpoints: {
		      990: {
			      perPage: 5,
		      },
          768: {
			      perPage: 4,
		      },
          640: {
			      perPage: 2,
		      },
        }
      })

</script>
