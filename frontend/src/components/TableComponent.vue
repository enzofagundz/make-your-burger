<template>
  <MessageComponent v-if="msg" :msg="msg"/>
  <table role="grid">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Cliente</th>
        <th scope="col">Pão</th>
        <th scope="col">Carne</th>
        <th scope="col">Opcionais</th>
        <th scope="col">Ações</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="burger in burgers" :key="burger.id">
        <th scope="row">{{ burger.id }}</th>
        <td>{{ burger.nome }}</td>
        <td>{{ burger.pao }}</td>
        <td>{{ burger.carne }}</td>

        <td>
          <ul>
            <li v-for="(optionals, index) in burger.opcionais" :key="index">
              {{ optionals == 0 ? 'S/ opcionais' : optionals }}
            </li>
          </ul>
        </td>

        <td class="actions">
          <button class="secondary" @click="deleteBurger(burger.id)">
            Cancelar
          </button>
          <select name="" id="" @change="updateStatus($event, burger.id)">
            <option value="">Selecione</option>
            <option :value="state.tipo" v-for="state in status" :key="state.id" :selected="burger.status === state.tipo">
              {{ state.tipo }}
            </option>
          </select>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { MessageComponent } from './';

const burgers = ref();
const status = ref([]);
const msg = ref();


const URL_BURGERS = 'http://localhost:3000/burgers';
const URL_STATUS = 'http://localhost:3000/status';

// console.log(URL_BURGERS + '/1')

const getOrder = async () => {
  const req = await fetch(URL_BURGERS);
  const data = await req.json();
  
  burgers.value = data;

  getStatus();
}

const getStatus = async () => {
  const req = await fetch(URL_STATUS);
  const data = await req.json();

  status.value = data;
}

const updateStatus = async (event, burgerId) => {
  
  const status = event.target.value;
  
  const req = await fetch(URL_BURGERS + `/${burgerId}`, {
    method: 'PATCH',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ status })
  });

  const res = await req.json();

  msg.value = `Status do pedido N°${res.id} atualizado para "${res.status}" com sucesso!`;
  removeMsg();
}

const deleteBurger = async (burgerId) => {
  await fetch(URL_BURGERS + `/${burgerId}`, {
    method: 'DELETE'
  });

  getOrder();

  msg.value = `Pedido N°${burgerId} removido com sucesso!`;
  removeMsg();
}

function removeMsg() {
  setTimeout(() => { msg.value = ''}, 3000);
}

onMounted(() => {
  getOrder();
})

</script>

<style scoped>
@media (max-width: 520px) {

  th,
  td,
  button,
  select {
    font-size: 70%;
  }

  button,
  select {
    width: 70%;
    margin-top: 1em;
  }
}

button,
select {
  width: 70%;
  font-size: 70%;
  margin-bottom: 1em;
}

</style>