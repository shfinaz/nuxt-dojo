<template>
    <div>
        <header class ="shadow-sm bg-white">
            <nav class ="container mx-auto p-4 flex justify-between">
                <!-- left -->
                <NuxtLink to="/" class = "font-bold"> Next Dojo</NuxtLink>
                <!-- right -->
                <ul class ="flex gap-4"> 
                    <li><NuxtLink to = "/">Home</NuxtLink></li>
                    <li><NuxtLink to = "/about">About</NuxtLink></li>
                    <li><NuxtLink to = "/products" class ="btn">Products</NuxtLink></li>
                    <li><NuxtLink to = "/products/abc" class ="btn">Products abc</NuxtLink></li>
                </ul>
            </nav>
        </header>

       <!-- output the page content -->
        <div class="container mx-auto p-4">
            <slot />
             <!-- built component, all page content will show-->
        </div>
    </div> 
</template>


<style scoped>
/* path untuk style muxtlink */
    .router-link-exact-active {
        color: #12b488;
    }
</style>