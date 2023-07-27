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
      <tr 
        v-for="burger in burgers" 
        :key="burger.order_id"
      >
        <th scope="row">{{ burger.order_id }}</th>
        <td>{{ burger.customer_name }}</td>
        <td>{{ burger.bread.name }}</td>
        <td>{{ burger.meat.name }}</td>

        <td>
          <ul>
            <li
              v-for="optional in burger.optional_json"
              :key="optional.id"
            >
              {{ optional.length != 0 ? optional : 'Sem op' }}
            </li>
          </ul>
        </td>

        <td class="actions">
          <button class="secondary" @click="deleteBurger(burger.order_id)">
            Cancelar
          </button>
          <select name="" id="" @change="updateStatus($event, burger.order_id)">
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

/*
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
*/

const URL_GET_ORDERS = 'http://localhost:3333/orders';

const getOrder = async () => {
  const req = await fetch(URL_GET_ORDERS);
  const data = await req.json();
  
  burgers.value = data;

  // Transformar o data.optional_json em um array

  burgers.value.forEach(burger => {
    burger.optional_json = JSON.parse(burger.optional_json);
  });
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