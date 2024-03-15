<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'

const props = defineProps(['result'])

const series = [
  {
    name: 'Issue Tracker',
    data: [...props.result],
  },
]

const darkModeOptions = {
  chart: {
    height: 600,
    type: 'bar',
    toolbar: {
      tools: {
        download: false,
      },
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      dataLabels: {
        position: 'top',
      },
    },
  },
  dataLabels: {
    enabled: true,
    formatter: function (val: number) {
      return val + '%'
    },
    offsetY: -20,
    style: {
      fontSize: '16px',
      colors: ['#fff'],
    },
  },
  xaxis: {
    labels: {
      style: {
        colors: ['#fff', '#fff', '#fff'],
      },
    },
    categories: ['Closed', 'Open', 'In Progress'],
    position: 'top',
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    crosshairs: {
      fill: {
        type: 'gradient',
        gradient: {
          colorFrom: '#D8E3F0',
          colorTo: '#BED1E6',
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        },
      },
    },
    tooltip: {
      enabled: true,
    },
  },
  yaxis: {
    max: 100,
    tickAmount: 4,
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      style: {
        colors: ['#fff'],
      },
      show: true,
      formatter: function (val: number) {
        return val + '%'
      },
    },
  },
  title: {
    text: 'Issue Tracker',
    floating: true,
    offsetY: 330,
    align: 'center',
    style: {
      color: '#fff',
    },
  },
}

const defaultOptions = {
  chart: {
    height: 600,
    type: 'bar',
    toolbar: {
      tools: {
        download: false,
      },
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      dataLabels: {
        position: 'top',
      },
    },
  },
  dataLabels: {
    enabled: true,
    formatter: function (val: number) {
      return val + '%'
    },
    offsetY: -20,
    style: {
      fontSize: '16px',
      colors: ['#304758'],
    },
  },
  xaxis: {
    categories: ['Closed', 'Open', 'In Progress'],
    position: 'top',
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    crosshairs: {
      fill: {
        type: 'gradient',
        gradient: {
          colorFrom: '#D8E3F0',
          colorTo: '#BED1E6',
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        },
      },
    },
    tooltip: {
      enabled: true,
    },
  },
  yaxis: {
    max: 100,
    tickAmount: 4,
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: true,
      formatter: function (val: number) {
        return val + '%'
      },
    },
  },
  title: {
    text: 'Issue Tracker',
    floating: true,
    offsetY: 330,
    align: 'center',
    style: {
      color: '#444',
    },
  },
}
</script>

<template>
  <div>
    <VueApexCharts
      v-if="$colorMode.preference === 'dark'"
      type="bar"
      height="350"
      :options="darkModeOptions"
      :series="series"
    />
    <VueApexCharts
      v-else
      type="bar"
      height="350"
      :options="defaultOptions"
      :series="series"
    />
  </div>
</template>
