<template>
  <article class="grid" id="banner">
    <hgroup>
      <h2>
        Make Your Burguer
      </h2>
      <p>
        Seja o chef do seu lanche no Make Your Burger! Aqui, você monta seu hambúrguer com os ingredientes que mais gosta, do pão ao molho. Temos opções para todos os paladares e preços. Venha provar essa delícia. Make Your Burger, o seu lanche, do seu jeito!
      </p>
    </hgroup>
    <div id="burguer"></div>
    <footer>
      <a href="#orders" role="button" class="outline">
        Monte seu hamburguer agora!
      </a>
    </footer>
  </article>
</template>

<script setup>

</script>

<style scoped>
a {
  width: 100%;
}

footer {
  margin-top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

hgroup,
button {
  margin-bottom: 0;
}

#banner {
  margin-top: 3em;
  margin-bottom: 3em;
}

@media (min-width: 992px) {

  footer {
    display: none;
  }

  #burguer {
    background-image: url('/img/burguer.jpg');
    background-position: center;
    background-size: cover;
  }

  article {
    padding: 0;
  }

  hgroup {
    margin: 4em;
  }
}</style>