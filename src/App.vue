<template>
  <div id="app">
    <v-header/>
    <img src="./assets/eth1.jpg">
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script>

/* eslint-disable */ 
import Header from '@/components/Header'
import {default as web3js} from "./utils/getWeb3"
import { serverBus } from './main';

export default {
  name: 'App',

  components: {
    'v-header': Header
  },
  data() {
    return {
      activeAccount: null,
    };
  },
  mounted(){ 
    web3js.then( web3 => {
      this.activeAccount = web3.accounts[0];
      serverBus.$emit('activeAccount', this.activeAccount);
      serverBus.$emit('provider', web3);
    });
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
}

h1 {
  margin: 0.67em 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.wrapper {
  max-width: 50%;
  position: relative;
  margin: auto;
}
</style>
