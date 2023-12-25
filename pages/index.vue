<template>
    <div id="home-page">
        <header>
            <Splide :options="{ rewind: true , autoplay: true , type  : 'fade', }" aria-label="My Favorite Images">
                <SplideSlide v-for="item in 4">
                    <img :src="`./imgs/slider/${item}.png`" alt="Sample 1">
                </SplideSlide>
            </Splide>
        </header>
        <div id="new-arrival" class="new py-16">
            <div class="container max-w-screen-lg">
                <h1 class="text-2xl uppercase mb-10 font-bold text-center">
                    {{ $t('new_arrival') }}
                </h1>
                <Splide :options="newArrival" aria-label="My Favorite Images">
                    <SplideSlide v-for="product in products.filter(el=>el.brand == 'Apple')">
                        <NuxtLink :to="`/product/${product.id}`" class="grid h-full text-center grid-cols-1 p-2 rounded border">
                            <img :src="product.img" alt="">
                            <span class="pt-3 mb-5">
                                {{ product.name }}
                            </span>
                            <!-- <span class="font-bold">
                                {{product.price}}
                            </span> -->
                        </NuxtLink>
                    </SplideSlide>
                </Splide> 
            </div>
        </div>
        
        <div class="banars pb-16">
            <div class="container grid grid-cols-1 md:grid-cols-2 gap-10 max-w-screen-lg">
                <img class="rounded-md" src="/imgs/banars/1.jpg" alt="">
                <img class="rounded-md" src="/imgs/banars/2.jpg" alt="">
            </div>
        </div>
        <div id="categories" class="categories pb-16">
            <div class="container max-w-screen-lg">
                <h1 class="text-2xl uppercase mb-10 font-bold text-center">
                    {{ $t('categories') }}
                </h1>
                <Splide :options="categoriesSilder" aria-label="My Favorite Images">
                    <SplideSlide v-for="category in categories" class="">
                        <div class="grid grid-cols-1 p-2 rounded border">
                            <img class="mx-auto" :src="category.img" alt="">
                            <span class="bg-gray-100 p-1 text-center font-bold text-gray-500">
                                {{category.name}}
                            </span>
                        </div>
                    </SplideSlide>
                </Splide> 
            </div>
        </div>
        <div id="products" class="products pb-16">
            <div class="container max-w-screen-lg">
                <h1 class="text-2xl uppercase mb-3 font-bold text-center">
                    {{ $t('products') }}
                </h1>
                <ul class="flex gap-5 md:gap-8 uppercase flex-wrap items-center mb-10 font-bold text-xl text-gray-500 justify-center">
                    <li class="cursor-pointer" @click="activeFilter = item" v-for="item in fiterProducts">
                        {{item}}
                    </li>
                </ul>
                <div class="products grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <div class="product" v-for="product in productData">
                        <NuxtLink :to="`/product/${product.id}`" class="grid h-full text-center grid-cols-1 p-2 rounded border">
                            <img :src="product.img" alt="">
                            <span class="pt-3 mb-5">
                                {{product.name}}
                            </span>
                            <!-- <span class="font-bold">
                                {{ product.price }}
                            </span> -->
                        </NuxtLink>
                    </div>  
                </div> 
            </div>
        </div>
    </div>
</template>

<script setup>
    import categories from "~/api/categories.json"
    import products from "~/api/products.json"
    const fiterProducts = ref(['all' , 'Apple' , 'Samsung' , 'Huawei' , 'Xiaomi'])
    const activeFilter=ref('')
    const productData = ref(products)
    const categoriesSilder = ref({ 
        rewind: true,
        autoPlay:true,
        perPage:4,
        gap:20,
        pagination:false,
        breakpoints: {
        640: {
			perPage: 1,
		},
		768: {
			perPage: 3,
		},
    }
    })
    const newArrival = ref({ 
        rewind: true,
        autoPlay:true,
        perPage:3,
        gap:20,
        pagination:false,
        breakpoints: {
            640: {
                perPage: 1,
            },
            768: {
                perPage: 2,
            },
        }
    })

    watch(activeFilter , (value)=>{
        console.log(value)
        if(value == "all"){
            productData.value = products
        }else{
            productData.value = products.filter(el=> el.brand == value)
        }
    })

</script>

