<template>
    <article id="modal">
        <header>
            <p>
                {{ props.msg }}
            </p>
        </header>
    </article>
</template>

<script setup>
const props = defineProps({
    msg: String
});

</script>

<style scoped>
header {
    margin-bottom: 0;
}

article {
    padding: 0;
    margin: 2em 1em 2em 1em;
}

p {
    margin-bottom: 0;
}

</style>