<template>
  <div>
    <!-- Date-filter -->
    <section class="card p-2 mb-0">
      <validation-observer ref="simpleRulesFilter">
        <b-form>
          <b-row>
            <b-col :sm="isShowCustomRange ? '6' : '12'">
              <b-form-group label="Date Filters" label-for="Date">
                <v-select
                  v-model="currentFilter"
                  :clearable="false"
                  :options="dateFilters"
                  input-id="Date"
                  :reduce="(val) => val.value"
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                />
              </b-form-group>
            </b-col>

            <!-- Costom range -->
            <b-col sm="6" v-if="isShowCustomRange">
              <b-form-group label="dateRange" label-for="dateRange">
                <validation-provider
                  #default="{ errors }"
                  name="Date Range"
                  rules="required"
                >
                  <flat-pickr
                    v-model="dateRange"
                    :config="{ mode: 'range' }"
                    :class="{ 'is-invalid bg-white': errors.length > 0 }"
                    type="text"
                    class="form-control bg-white"
                  />

                  <small class="text-danger"> {{ errors[0] }} </small>
                </validation-provider>
              </b-form-group>
            </b-col>

            <!-- Shift filter -->
            <b-col sm="6" v-if="activeShift">
              <b-form-group label="Shift:" label-for="shift">
                <v-select
                  v-model="shiftFilter"
                  :clearable="false"
                  :options="walletShiftList"
                  label="name"
                  input-id="shift"
                  :reduce="(val) => val.name"
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  placeholder="Choose shift"
                >
                </v-select>
              </b-form-group>
            </b-col>

            <!-- Staff filter -->
            <b-col sm="6" v-if="activeStaff">
              <b-form-group label="Staff:" label-for="staff">
                <v-select
                  v-model="staffFilter"
                  :clearable="false"
                  :options="staffList"
                  label="name"
                  input-id="staff"
                  :reduce="(val) => val.name"
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  placeholder="Enter your staff name"
                >
                </v-select>
              </b-form-group>
            </b-col>

            <!-- Button apply -->
            <b-col cols="12">
              <b-button
                variant="info"
                type="submit"
                class="mt-1 width_btn"
                @click.prevent="validationForm"
                >Apply</b-button
              >
            </b-col>
          </b-row>
        </b-form>
      </validation-observer>
    </section>
  </div>
</template>
<script>
import { watch, reactive, toRefs, computed, ref } from "@vue/composition-api";
import flatPickr from "vue-flatpickr-component";
import XLSX from "xlsx";
import { required } from "@validations";
import { alertPopUp } from "@/@core/utils/helpers/sweetAlert";

export default {
  name: "DateFilter",
  props: {
    activeShift: {
      type: Boolean,
      default: true,
    },
    activeStaff: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    flatPickr,
    XLSX,
  },
  setup(props, context) {
    const store = ref(context.root.$store);
    const wallet = ref(store.value.state.wallet);
    const pos = ref(store.value.state.pos);
    const simpleRulesFilter = ref(null);

    //Declare variable reactive
    const state = reactive({
      currentFilter: "",
      dateRange: "",
      staffFilter: "---------------",
      shiftFilter: "---------------",
      token: "token",
    });

    //Create filter select date.
    const dateFilters = [
      { label: "Today", value: "today" },
      { label: "Yesterday", value: "yesterday" },
      { label: "Last 7 Days", value: "last7days" },
      { label: "Last 30 Days", value: "last30days" },
      { label: "This Month", value: "thismonth" },
      { label: "Last Month", value: "lastmonth" },
      { label: "Custom Range", value: "custom" },
    ];
    //State tracking boolean display daterange from.
    const isShowCustomRange = computed(() => state.currentFilter === "custom");
    const walletShiftList = computed(() => [
      { id: 0, name: "---------------" },
      ...wallet.value.shiftList,
    ]);
    const staffList = computed(() => [
      { id: "0", name: "---------------" },
      ...pos.value.staffList.filter((staff) => staff.perm_cashier),
    ]);

    const validationForm = () => {
      simpleRulesFilter.value.validate().then((success) => {
        if (success) {
          // Check date maximum of 90 days, When current filter is custom.
          if (isShowCustomRange.value) {
            const [dateStart, dateEnd] = state.dateRange.split("to");
            if (dateEnd) {
              const diffDate = Math.ceil(
                Math.abs(
                  new Date(dateStart.trim()) - new Date(dateEnd.trim())
                ) /
                  (24 * 60 * 60 * 1000)
              );

              if (diffDate && diffDate > 90) {
                alertPopUp({
                  icon: "warning",
                  title: "Select by day up to a maximum of 90 days at a time.",
                  text: "Please select a date again.",
                });
                return;
              }
            }
          }
          // eslint-disable-next-line
          Apply();
        }
      });
    };

    //Filter value
    const Apply = async () => {
      context.emit("loadFilter", {
        currentFilter: state.currentFilter,
        dateRange: state.dateRange,
        staffFilter:
          state.staffFilter !== "---------------" ? state.staffFilter : "",
        shiftFilter:
          state.shiftFilter !== "---------------" ? state.shiftFilter : "",
      });
    };

    return {
      //Variable
      dateFilters,
      isShowCustomRange,
      walletShiftList,
      staffList,
      simpleRulesFilter,
      required,
      ...toRefs(state),
      //Fn
      Apply,
      validationForm,
    };
  },
  mounted() {
    this.currentFilter =
      this.dateFilters.length > 0 ? this.dateFilters[0].value : "";
    this.Apply();
    //   this.onApply();
  },
  methods: {},
};
</script>
<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
@import "@core/scss/vue/libs/vue-flatpicker.scss";
</style>
<style scoped>
.width_btn {
  width: -webkit-fill-available;
}
</style>
