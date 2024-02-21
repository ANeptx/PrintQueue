<template>
  <layout-vertical>
    <div id="app">
  <b-table responsive="sm" :customers="customers" />

  <b-row>
    <table id="void-table" responsive="sm" :item="items" :current-page="currentPage">
      <tbody>
        <tr>
          <td>{{ item.Billing_ID }}</td>
        </tr>
      </tbody>
    </table>
  </b-row>
</div>
</layout-vertical>
</template>

<script>

import axios from 'axios'
import { BTable } from 'bootstrap-vue'


export default {
  name: "App",
  components: {
    BTable,
  },
  data() {
    return {
      items: [
      ]
    }
  },
}
</script>

<style></style>
