<template>
    <div id="product_page">
        <header class="py-16">
            <div class="container grid items-center grid-cols-1 md:grid-cols-2 gap-5 max-w-screen-lg">
                <div class="img rounded border">
                    <img class="w-72 h-72 mx-auto" :src="pageData.img" alt="">
                </div>
                <div class="product-info">
                    <h2 class="text-2xl mb-2">
                        {{ pageData.name }}
                    </h2>
                    <ul class="flex items-center gap-5 mb-5 font-bold text-gray-500">
                        <li>
                            Brand: {{ pageData.brand }}
                        </li>
                    </ul>
                    <p>
                        {{ pageData.discription }}
                    </p>
                    <!-- <span class="text-xl pt-5 inline-block font-bold">
                        {{ pageData.price }}
                    </span> -->
                </div>
            </div>
        </header>
        <div class="more-details bg-gray-100 py-10 mb-10">
            <div class="container max-w-screen-lg">
                <div class="product-extra-info bg-white rounded shadow">
                    <ul>
                        <li class="flex items-center gap-3" v-if="pageData.brand">
                            <span class="py-3 px-4 border-r w-1/2 md:w-3/12">Brand</span>
                            <span class="py-3 px-4">{{ pageData.brand }}</span>
                        </li>
                        <li class="flex items-center gap-3" v-if="pageData.deviceType">
                            <span class="py-3 px-4 border-r w-1/2 md:w-3/12">Device Type</span>
                            <span>{{ pageData.deviceType }}</span>
                        </li>
                        <li class="flex items-center gap-3" v-if="pageData.storage">
                            <span class="py-3 px-4 border-r w-1/2 md:w-3/12">Storage</span>
                            <span>{{ pageData.storage }}</span>
                        </li>
                        <li class="flex items-center gap-3" v-if="pageData.operatingSystem">
                            <span class="py-3 px-4 border-r w-1/2 md:w-3/12">Operating System</span>
                            <span>{{ pageData.operatingSystem }}</span>
                        </li>
                        <li class="flex items-center gap-3" v-if="pageData.connectivity">
                            <span class="py-3 px-4 border-r w-1/2 md:w-3/12">Connectivity</span>
                            <span>{{ pageData.connectivity }}</span>
                        </li>
                        <li class="flex items-center gap-3" v-if="pageData.size">
                            <span class="py-3 px-4 border-r w-1/2 md:w-3/12">Size</span>
                            <span>{{ pageData.size }}</span>
                        </li>
                        <li class="flex items-center gap-3" v-if="pageData.warranty">
                            <span class="py-3 px-4 border-r w-1/2 md:w-3/12">Warranty</span>
                            <span>{{ pageData.warranty }}</span>
                        </li>
                        <li class="flex items-center gap-3" v-if="pageData.color">
                            <span class="py-3 px-4 border-r w-1/2 md:w-3/12">Color</span>
                            <span class="w-8 h-8 rounded" :style="{backgroundColor:pageData.color}"></span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import products from "~/api/products.json"
    const $route = useRoute()
    const pageData=ref({})

    pageData.value = products.find(el=> el.id == $route.params.id)

</script>