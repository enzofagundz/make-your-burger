<template>
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
          <button class="secondary">
            Cancelar
          </button>
          <select name="" id="">
            <option value="">Em produção</option>
            <option value="">Finalizado</option>
          </select>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { onMounted, ref } from "vue";

const burgers = ref();
const burgers_id = ref();
const status = ref([]);

const getOrder = async () => {
  const req = await fetch('http://localhost:3000/burgers');
  const data = await req.json();

  console.log(data);

  burgers.value = data;
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
  font-size: 90%;
  margin-bottom: 1em;
}

button {
  padding: .8em .5em;
}


.actions {
  padding: 1em 0 1em 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>