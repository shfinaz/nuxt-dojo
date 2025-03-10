<template>
    <div>
        <div class = "grid grid-cols-4 gap-5">
        <!-- bawah ni call every product (p) dan products=array untuk loop -->
            <div v-for="p in products">
                <!-- untuk tengok output based on link -->
                 <ProductCard :product="p" />  
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'products'
    })

    //fetch products
    const { data : products } = await useFetch('https://fakestoreapi.com/products')

    //override meta tag, link, title
    useHead({
        title: 'Nuxt Dojo | Merch',
        meta:[
            {name: 'description', content: 'Nuxt 3 Merch'}
        ]
    })
</script>