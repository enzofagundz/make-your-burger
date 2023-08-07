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
              v-for="optional in burger.optional"
              :key="optional.id"
            >
              {{ optional.length != 0 ? optional : 'Sem op' }}
            </li>
          </ul>
        </td>

        <td class="actions">
          <button 
            class="secondary" 
            @click="deleteOrder(burger.order_id)"
          >
            Cancelar
          </button>

          <select 
            name="status" 
            id="status" 
            @change="updateStatus($event, burger.order_id)"
          >
            <option value="">Selecione</option>
            <option 
              v-for="state in status"
              :key="state.id"
              :value="state.id"
              :selected="state.tipo == burger.status.name"
            >
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
const msg = ref();

const URL_GET_ORDERS = 'http://localhost:3333/orders';
const URL_DELETE_ORDER = 'http://localhost:3333/deleteOrder';
const URL_UPDATE_STATUS = 'http://localhost:3333/updateStatus';

const status = [
    { id: 1, tipo: 'Solicitado' },
    { id: 2, tipo: 'Em produção' },
    { id: 3, tipo: 'Finalizado' }
  ]

const getOrder = async () => {
  const req = await fetch(URL_GET_ORDERS);
  const data = await req.json();
  burgers.value = data;
  burgers.value.forEach(burger => {
    burger.optional = burger.optional.split(',');
  });
}

const deleteOrder = async (id) => {
  await fetch(URL_DELETE_ORDER + `/${id}`, {
    method: 'DELETE'
  });

  msg.value = `Pedido N°${id} removido com sucesso!`;
  removeMsg();

  burgers.value = burgers.value.filter(burger => burger.order_id != id);
}

const updateStatus = async (event, id) => {
  
  const status = event.target.value;

  console.log(status);

  const req = await fetch(URL_UPDATE_STATUS,{
    method: 'PUT',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
      status_id: status,
      id: id
    })
  });

  const res = await req.json();
  msg.value = `Status do pedido N°${res.order_id} atualizado com sucesso!`;
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