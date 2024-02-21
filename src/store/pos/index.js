import { accessPathMain } from "@/constants/api.constants";
import { instanceDjango } from "@/resource/axios.resource";
import Vue from "vue";
import { logInfoApi } from "@/@core/utils/helpers/logInfo";
import { alertReloadPage } from "@/@core/utils/helpers/sweetAlert";

export default {
  namespaced: true,
  state: {
    menuData: [],
  },
  getters: {},
  mutations: {
    RECIVED_MENU_DATA(state, menus) {
      state.menuData = menus;
    },
  },
  actions: {
    async fetchMenuFromDjango(context) {
      // const data = mockDjango

      const loader = Vue.$loading.show();
      try {
        const { data } = await instanceDjango.get(accessPathMain.getMenuDjango);
        if (data) {
          data.datas = data.datas.filter((f) => f.active_emenu === true);
          context.commit("RECIVED_MENU_DATA", data.datas);
        }
      } catch (e) {
        alertReloadPage({ title: "Load Menus" });
        logInfoApi(e, "fetchMenuFromDjango");
      }
      loader.hide();
    },
  },
};
