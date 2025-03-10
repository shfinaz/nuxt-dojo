<template>
    
        <head>
            <Title>Nuxt Dojo | {{ product.title }}</Title>
            <Meta name="description" :content = "product.description"/>
        </head>
        <ProductDetails :product="product"/>
    
</template>

<script setup>
    const { id } = useRoute().params
    const uri = 'https://fakestoreapi.com/products/' + id

    //fetch product
    const {data : product } = await useFetch (uri, {key : id})

    //for identify error page or not
    if (!product.value) {
        throw createError({ statusCode : 404, statusMessage: 'Product not found', fatal: true})
    }

    definePageMeta({
        layout: 'products'
    })

     
</script>