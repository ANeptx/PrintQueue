<template>
  <b-container>
    <b-row>
      <ul class="logo">
        <component :is="resolveNavItemComponent(item)" v-for="item in items" :key="item.header || item.title"
          :item="item" />
        <b-col>
          <b-row>
            <b-navbar-nav class="nav align-items-center">
              <br>
              <h6>SALE REPORT</h6>
              <div class="breadcrumb-wrapper">
                <b-breadcrumb>
                  <feather-icon icon="MonitorIcon" size="30" variant="light-primary" badge :src="''"
                    badge-variant="success" />
                  <b-breadcrumb-item to="/option">
                    <h6>Option</h6>
                  </b-breadcrumb-item>
                </b-breadcrumb>
              </div>
            </b-navbar-nav>
          </b-row>
          <b-row>
            <b-navbar-nav class="nav align-items-center">
              <div class="breadcrumb-wrapper">
                <b-breadcrumb>
                  <feather-icon icon="MonitorIcon" size="30" variant="light-primary" badge :src="''"
                    badge-variant="success" />
                  <b-breadcrumb-item to="/void">
                    <h6>Void</h6>
                  </b-breadcrumb-item>
                </b-breadcrumb>
              </div>
            </b-navbar-nav>
          </b-row>
        </b-col>

        <b-col>
          <b-row>
            <b-navbar-nav class="nav align-items-center ml-auto">
              <br>
              <h6>STAFF REPORT</h6>
              <div class="breadcrumb-wrapper">
                <b-breadcrumb>
                  <feather-icon icon="MonitorIcon" size="30" variant="light-primary" badge :src="''"
                    badge-variant="success" />
                  <b-breadcrumb-item to="/transaction">
                    <h6>Transaction</h6>
                  </b-breadcrumb-item>
                </b-breadcrumb>
              </div>
            </b-navbar-nav>
          </b-row>
        </b-col>
      </ul>
    </b-row>
  </b-container>
</template>


<script>
import { resolveVerticalNavMenuItemComponent as resolveNavItemComponent } from '@core/layouts/utils'
import { provide, ref } from '@vue/composition-api'
import VerticalNavMenuHeader from '../vertical-nav-menu-header'
import VerticalNavMenuLink from '../vertical-nav-menu-link/VerticalNavMenuLink.vue'
import VerticalNavMenuGroup from '../vertical-nav-menu-group/VerticalNavMenuGroup.vue'
import { BNavbarNav } from 'bootstrap-vue'

export default {
  components: {
    VerticalNavMenuHeader,
    VerticalNavMenuLink,
    VerticalNavMenuGroup,
    BNavbarNav,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  setup() {
    provide('openGroups', ref([]))

    return {
      resolveNavItemComponent,
    }
  },
}
</script>
