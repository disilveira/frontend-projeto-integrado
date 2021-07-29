<template>
  <div class="home">
    <div class="container-scroller">
      <div class="container-fluid page-body-wrapper">
        <NavBarComponent />
        <SideBarComponent />
        <div class="main-panel">
          <div class="content-wrapper">
            <div class="row">
              <div class="col-md-3 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <p class="card-title text-md-center text-xl-left">Frota</p>
                    <div class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                      <h3 class="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">{{ totalVehicles }}</h3>
                      <i class="ti-truck icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                    </div>
                    <p class="mb-0 mt-2">Veículos</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <p class="card-title text-md-center text-xl-left">KM Rodados</p>
                    <div class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                      <h3 class="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">{{ totalTripKm }}</h3>
                      <i class="ti-map-alt icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                    </div>
                    <p class="mb-0 mt-2">Quilômetros rodados</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <p class="card-title text-md-center text-xl-left">Tempo Total de Viagem</p>
                    <div class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                      <h3 class="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">{{ totalTripTime }}</h3>
                      <i class="ti-timer icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                    </div>
                    <p class="mb-0 mt-2">horas em viagem</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <p class="card-title text-md-center text-xl-left">Tempo Médio de Viagem</p>
                    <div class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                      <h3 class="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">{{ tripAverageTime }}</h3>
                      <i class="ti-timer icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                    </div>
                    <p class="mb-0 mt-2">horas em viagem</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">KM Rodado da Frota</h4>
                    <line-chart :key="arrTotalKm.length" :chartData="arrTotalKm" :options="chartOptions" label="KM Rodado Diário" :chartColors="totalKmChartColors"></line-chart>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Tempo de Viagem Diário</h4>
                    <bar-chart :key="arrTotalTime.length" :chartData="arrTotalTime" :options="chartOptions" label="Tempo Viagem Diário em Horas" :chartColors="totalTimeChartColors"></bar-chart>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">TOP 10 KM Rodado</h4>
                    <radar-chart :key="arrTopVehicleKm.length" :chartData="arrTopVehicleKm" :options="chartOptions" label="Top 10 KM Rodado" :chartColors="totalTopVehicleKmChartColors"></radar-chart>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Top 10 Tempo Rodado em Horas</h4>
                    <polar-chart :key="arrTopVehicleTime.length" :chartData="arrTopVehicleTime" :options="chartOptions" label="Top 10 Tempo Rodado" :chartColors="totalTopVehicleTimeChartColors"></polar-chart>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBarComponent from '../../components/Layout/NavBarComponent.vue'
import SideBarComponent from '../../components/Layout/SideBarComponent.vue'
import LineChart from '../../components/Charts/LineChart.vue'
import BarChart from '../../components/Charts/BarChart.vue'
import RadarChart from '../../components/Charts/RadarChart.vue'
import PolarChart from '../../components/Charts/PolarChart.vue'

export default {
  name: 'Home',
  components: {
    NavBarComponent,
    SideBarComponent,
    LineChart,
    BarChart,
    RadarChart,
    PolarChart
  },
  data () {
    return {
      totalVehicles: '',
      totalTripKm: '',
      totalTripTime: '',
      tripAverageTime: '',
      arrTotalKm: [],
      totalKmChartColors: {
        borderColor: '#077187',
        pointBorderColor: '#0E1428',
        pointBackgroundColor: '#AFD6AC',
        backgroundColor: '#74A57F'
      },
      arrTotalTime: [],
      totalTimeChartColors: {
        borderColor: '#251F47',
        pointBorderColor: '#260F26',
        pointBackgroundColor: '#858EAB',
        backgroundColor: '#858EAB'
      },
      arrTopVehicleKm: [],
      totalTopVehicleKmChartColors: {
        borderColor: '#190B28',
        pointBorderColor: '#190B28',
        pointBackgroundColor: '#E55381',
        backgroundColor: '#E55381'
      },
      arrTopVehicleTime: [],
      totalTopVehicleTimeChartColors: {
        borderColor: '#E06D06',
        pointBorderColor: '#E06D06',
        pointBackgroundColor: '#402A2C',
        backgroundColor: '#402A2C'
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  methods: {
    getChartdata: async function () {
      await this.$http.get('https://api-projeto-integrado.herokuapp.com/trips').then((res) => {
        this.arrTotalKm = JSON.parse(JSON.stringify(res.body))
        this.arrTotalTime = JSON.parse(JSON.stringify(res.body))
      })
    },
    getTopChartdata: async function () {
      await this.$http.get('https://api-projeto-integrado.herokuapp.com/trips/vehicles-numbers').then((res) => {
        this.arrTopVehicleKm = JSON.parse(JSON.stringify(res.body))
        this.arrTopVehicleTime = JSON.parse(JSON.stringify(res.body))
      })
    },
    getTripNumbers: async function () {
      await this.$http.get('https://api-projeto-integrado.herokuapp.com/trips/numbers').then((res) => {
        this.totalVehicles = res.body[0].totalVehicles
        this.totalTripKm = res.body[0].totalTripKm
        this.totalTripTime = res.body[0].totalTripTime
        this.tripAverageTime = res.body[0].tripAverageTime
      })
    }
  },
  created () {
    this.getChartdata()
    this.getTopChartdata()
    this.getTripNumbers()
  }
}
</script>
