<!-- layout file for all the products -->

<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4">
                <NuxtLink to="/products" class ="font-bold"> Next Dojo Merch</NuxtLink>
            </nav>
        </header>

       <!-- output the page content -->
        <div class="container mx-auto p-4">
            <slot />
             <!-- built component, all page content will show-->
        </div>

        <footer class="container mx-auto p-4 flex justify-between border-t-2">
            <ul class="flex gap-4">
                <li><NuxtLink to = "/">Home</NuxtLink></li>
                <li><NuxtLink to = "/about">About</NuxtLink></li>
                <li><NuxtLink to = "/products">Products</NuxtLink></li>
            </ul>
        </footer>
    </div> 
</template>


<style scoped>
/* path untuk style muxtlink */
    .router-link-exact-active {
        color: #12b488;
    }
</style>