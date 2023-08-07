<template>
    <MessageComponent v-if="msg" :msg="msg"/>
    <section id="#order">
        <h2>
            Faça seu pedido
        </h2>
        <form @submit.prevent="createBurger">
            <fieldset>
                <label for="name">
                    Nome do cliente:
                    <input type="text" name="name" placeholder="Digite o seu nome" v-model="name" required>
                </label>
            </fieldset>

            <fieldset>
                <label for="bread">Escolha o pão:
                    <select name="bread" id="bread" v-model="breadsForm" required>
                        <option value="" selected>Selecione o tipo de pão</option>
                        <option 
                            :value="bread.bread_id"
                            v-for="bread in breads"
                            :key="bread.bread_id"
                        >
                            {{ bread.name }}
                        </option>
                    </select>
                </label>
            </fieldset>

            <fieldset>
                <label for="meat">Escolha a carne:
                    <select name="meat" id="meat" v-model="meatsForm" required>
                        <option value="" selected>Selecione o tipo de carne</option>
                        <option
                            :value="meat.meat_id"
                            v-for="meat in meats"
                            :key="meat.meat_id"
                        >
                            {{ meat.name }}
                        </option>
                    </select>
                </label>
            </fieldset>

            <fieldset>
                <legend>
                    Escolha os opcionais:
                </legend>
                <label 
                    for="optional"
                    v-for="optional in optionalData"
                    :key="optional.id"
                >
                    <input 
                        type="checkbox"
                        name="optional"
                        :value="optional.name"
                        v-model="optionals"
                    >
                    {{ optional.name }}
                </label>
            </fieldset>

            <input type="submit" value="Realizar o pedido">
        </form>
    </section>
</template>

<script setup>

import { onMounted, ref } from 'vue';
import { MessageComponent } from './'

const name = ref('');

const breads = ref(); //Reativo e vem do banco
const meats = ref(); //Reativo e vem do banco 
const optionalData = ref();//Reativo e vem do banco 

const breadsForm = ref();
const meatsForm = ref();

const optionals = ref([]);

const msg = ref('');

const URL_INGREDIENTS = 'http://localhost:3333/ingredients';
const URL_CREATE_ORDER= 'http://localhost:3333/createOrder';

const getIngredients = async () => {

    try {
        const res = await fetch(URL_INGREDIENTS);
        const data = await res.json();

        breads.value = data.breads;
        meats.value = data.meats;
        optionalData.value = data.optionals;
    } catch (error) {
        console.log(error);
    }
}

const createBurger = async () => {
    let breads = breadsForm.value;
    let meats = meatsForm.value;

    // Transformar em JSON o array de opcionais para enviar para o backend

    // Verificar se o array de opcionais está vazio

    if (optionals.value.length === 0) {
        optionals.value = ['Sem opcionais'];
    }

    const data = {
        customer: name.value,
        meat_id: meats,
        bread_id: breads,
        // optional_json: JSON.stringify(optionals.value),
        status_id: 1,
        optional: optionals.value.toString()
    }
    
    const req = await fetch(URL_CREATE_ORDER, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data)
    });

    const res = await req.json();

    console.log(res);

    // Mensagem para o usuário

    msg.value = `Pedido N° ${res.order_id} adicionado com sucesso`;

    // Limpar mensagem

    setTimeout(() => { msg.value = ''}, 3000);

    // Limpar os campos

    name.value = '';
    breadsForm.value = '';
    meatsForm.value = '';
    optionals.value = [];
}

onMounted(() => {
    getIngredients();
});

</script>

<style scoped>
legend,
label {
    margin-bottom: 1em;
}
</style>