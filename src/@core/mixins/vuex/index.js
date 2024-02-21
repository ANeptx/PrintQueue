import { mapState, mapActions, mapMutations, mapGetters } from "vuex";

export const mapVuex = {
  computed: {
    ...mapState({
      pos: (state) => state.pos,
      pos_menuData: (state) => state.pos.menuData,
    }),
    ...mapGetters([]),
  },
  methods: {
    ...mapActions({
      pos_fetchMenuFromDjango: "pos/fetchMenuFromDjango",
    }),
    ...mapMutations([]),
  },
};

// export const _ = null
