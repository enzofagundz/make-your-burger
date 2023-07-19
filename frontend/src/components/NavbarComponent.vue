<template>
    <nav class="container">
        <ul>
            <li>
                <RouterLink to="/">
                    <BurgerIcon />
                </RouterLink>
            </li>
        </ul>
        <ul>
            <li>
                <RouterLink to="/">
                    Home
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/orders">
                    Pedidos
                </RouterLink>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { BurgerIcon } from './';
import { RouterLink } from 'vue-router';

</script>

<style></style>