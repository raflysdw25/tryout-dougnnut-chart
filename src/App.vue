<template>
  <div class="container">
    <h1>Status Upload</h1>
    <div class="doughnut-container">
      <Doughnut :data="data" :options="options" />
    </div>
  </div>
</template>

<script lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'vue-chartjs';
import * as chartConfig from './chartConfig.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default {
  name: 'App',
  components: {
    Doughnut,
  },
  data() {
    return chartConfig;
  },
};
</script>

<style>
.container {
  width: max-content;
  min-width: 400px;
  max-height: 100%;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  padding: 48px 32px;
}
.doughnut-container {
  width: 350px;
}
canvas {
  background: radial-gradient(
    circle at center,
    rgba(0, 0, 0, 0) 0,
    rgba(0, 0, 0, 0) 55%,
    rgba(0, 0, 0, 0.2) 56%,
    rgba(0, 0, 0, 0.2) 60%,
    rgba(0, 0, 0, 0.2) 64%,
    rgba(0, 0, 0, 0) 65%,
    rgba(0, 0, 0, 0) 100%
  );
}
</style>
