<template>
  <div>
    <vue-top-progress ref="topProgress"></vue-top-progress>
    <div
      class="m-auto mt-3 mb-5 bg-white rounded p-3 box-shadow electricity-cost-calculator"
    >
      <h3>Select a household appliance</h3>
      <div class="mt-3">
        <div
          v-for="(item, key) in devices"
          :key="key"
          class="d-inline-block me-3"
        >
          <div
            @click="setActiveDevice(key)"
            class="text-center text-white px-3 py-2 rounded household-appliance-item"
            :class="{ active: key === activeDevice }"
            role="button"
          >
            <div>
              <img src="@/assets/images/dryer.png" alt="" />
            </div>
            <div class="mt-1 text-capitalize">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div class="mt-4">
        <div v-for="(item, key) in devices" :key="key">
          <table
            v-if="key === activeDevice"
            class="table table-striped table-hover"
          >
            <tbody>
              <tr>
                <td class="row">
                  <div class="col-8 middle">
                    <div class="w-100">Watts (1 Kilowatt = 1000 Watts)</div>
                  </div>
                  <div class="col-4">
                    <input
                      v-model="item.watts"
                      type="number"
                      class="form-control form-control-sm w-auto d-inline-block"
                    />
                    <span class="ms-1 d-inline-block">Watts</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="row">
                  <div class="col-8 middle">
                    <div class="w-100">Watts/1000 = Kilowatts or Kwh</div>
                  </div>
                  <div class="col-4 middle">
                    <div class="w-100">
                      <span class="d-inline-block">{{ item.kw }}</span>
                      <span class="ms-1 d-inline-block">Kwh</span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="row">
                  <div class="col-8 middle">
                    <div class="w-100">Hours Used</div>
                  </div>
                  <div class="col-4">
                    <input
                      v-model="item.hours"
                      type="number"
                      class="form-control form-control-sm w-auto d-inline-block"
                    />
                    <span class="ms-1 d-inline-block">hours</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="row">
                  <div class="col-8 middle">
                    <div class="w-100">
                      Kilowatts x Total Hours = Kilowatt Hours (Kwh)
                    </div>
                  </div>
                  <div class="col-4 middle">
                    <div class="w-100">
                      <span class="d-inline-block">{{ item.kwh }}</span>
                      <span class="ms-1 d-inline-block">Kwh</span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="row">
                  <div class="col-8 middle">
                    <div class="w-100">Pence Per Kwh</div>
                  </div>
                  <div class="col-4">
                    <input
                      v-model="item.pence"
                      type="number"
                      class="form-control form-control-sm w-auto d-inline-block"
                    />
                    <span class="ms-1 d-inline-block">pence</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="row">
                  <div class="col-8 middle">
                    <div class="w-100">Kwh x Pence Per Kwh = Cost</div>
                  </div>
                  <div class="col-4 middle">
                    <div class="w-100">
                      <span class="me-1 d-inline-block">£</span>
                      <span class="d-inline-block">{{ item.cost }}</span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="row">
                  <div class="col-8 middle">
                    <div class="w-100">Number of items in home</div>
                  </div>
                  <div class="col-4">
                    <input
                      v-model="item.items"
                      type="number"
                      class="form-control form-control-sm w-auto d-inline-block"
                    />
                    <span class="ms-1 d-inline-block">item(s)</span>
                  </div>
                </td>
              </tr>
              <tr class="bg-success">
                <td class="bg-success text-white row">
                  <div class="col-8 middle">
                    <div class="w-100">Total Cost</div>
                  </div>
                  <div class="col-4 middle">
                    <div class="w-100">
                      <span class="me-1 d-inline-block">£</span>
                      <span class="d-inline-block">{{ item.totalCost }}</span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr class="bg-success d-none">
                <td class="bg-success text-white row">
                  <div class="col-8 middle">
                    <div class="w-100">
                      Cost if you were on the cheapest electricity tariff in the
                      market
                    </div>
                  </div>
                  <div class="col-4 middle">
                    <div class="w-100">
                      <span class="me-1 d-inline-block">£</span>
                      <span class="d-inline-block">{{ item.tariffCost }}</span>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueTopProgress from "vue-top-progress/src/top-progress.vue";

export default {
  name: "ElectricityCostCalculator",
  components: {
    VueTopProgress,
  },
  data() {
    return {
      devices: [
        {
          name: "dryer",
          watts: 3000,
          kw: null,
          hours: 1,
          kwh: null,
          pence: 51.9,
          cost: null,
          items: 1,
          totalCost: 1.56,
          tariffCost: 1,
        },
        {
          name: "hoover",
          watts: 3000,
          kw: null,
          hours: 1,
          kwh: null,
          pence: 51.9,
          cost: null,
          items: 1,
          totalCost: 1.56,
          tariffCost: 1,
        },
        {
          name: "iron",
          watts: 3000,
          kw: null,
          hours: 1,
          kwh: null,
          pence: 51.9,
          cost: null,
          items: 1,
          totalCost: 1.56,
          tariffCost: 1,
        },
      ],
      activeDevice: 0,
    };
  },
  created() {
    let arr = [];
    this.devices.forEach((item) => {
      arr.push(this.calculator(item));
    });
    this.devices = arr;
  },
  mounted() {
    this.$refs.topProgress.start();
    // // Use setTimeout for demo
    setTimeout(() => {
      this.$refs.topProgress.done();
    }, 500);
  },
  methods: {
    setActiveDevice(key) {
      this.activeDevice = key;
    },
    calculator(device) {
      let obj = JSON.parse(JSON.stringify(device));
      obj.kw = obj.watts / 1000;
      obj.kwh = obj.kw * obj.hours;
      obj.cost = ((obj.kwh * obj.pence) / 100).toFixed(2);
      return obj;
    },
  },
};
</script>
