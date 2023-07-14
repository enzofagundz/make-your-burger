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
                        <option :value="bread.tipo" v-for="bread in breads" :key="bread.id">
                            {{ bread.tipo }}
                        </option>
                    </select>
                </label>
            </fieldset>

            <fieldset>
                <label for="meat">Escolha a carne:
                    <select name="meat" id="meat" v-model="meatsForm" required>
                        <option value="" selected>Selecione o tipo de carne</option>
                        <option :value="meat.tipo" v-for="meat in meats" :key="meat.id">
                            {{ meat.tipo }}
                        </option>
                    </select>
                </label>
            </fieldset>

            <fieldset>
                <legend>
                    Escolha os opcionais:
                </legend>
                <label for="optional" v-for="optional in optionalData" :key="optional.id">
                    <input type="checkbox" name="optional" :value="optional.tipo" v-model="optionals">
                    {{ optional.tipo }}
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

const getIngredients = async () => {

    const req = await fetch('http://localhost:3000/ingredientes');
    const data = await req.json();

    breads.value = data.paes;
    meats.value = data.carnes;
    optionalData.value = data.opcionais;
}

const createBurger = async () => {
    let breads = breadsForm.value;
    let meats = meatsForm.value;
    
    const data = {
        nome: name.value,
        carne: meats,
        pao: breads,
        opcionais: Array.from(optionals.value),
        status: 'Solicitado'
    }
    
    const req = await fetch('http://localhost:3000/burgers',{
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data)
    });

    const res = await req.json();

    // Mensagem para o usuário

    msg.value = `Pedido N° ${res.id} adicionado com sucesso`;

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