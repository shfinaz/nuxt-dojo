<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum dolar sit amet consectetur adipisicing elit. At Labore voluptatem
           dicta, obcaecati possimus illum vel adipisci harum earum iure.</p>
        <p>Lorem ipsum dolar sit amet consectetur adipisicing elit. At Labore voluptatem
            dicta, obcaecati possimus illum vel adipisci harum earum iure.</p>
        <div> {{ data }}</div>
    </div>
</template>

<script setup>
    //call server/api
    const { data } = await useFetch('/api/currency/GBP')
</script>

<style scoped>
h2{
	margin-bottom: 20px;
	font-size: 36px;
}

p{
	margin: 20px 0;

}

</style>