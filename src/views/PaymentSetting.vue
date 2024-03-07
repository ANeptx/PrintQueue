<template>
    <b-form style="padding: 1%; width: 75%; 
    position: relative; top: 25%; transform: translateY(-50%); 
    transform: translateX(-50%);left: 50%;" class="card">
        <div>
            <div>
                <b-form ref="form" :style="{ height: trHeight }" class="repeater-form" @submit.prevent="repeateAgain">
                    <b-row>
                        <b-col>
                            <h1 style="float: left;">Payment Setting</h1>
                            <b-button v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="warning" @click="repeateAgain"
                                style="float: right;">
                                <feather-icon icon="PlusIcon" class="mr-25" />
                                <span>Add New</span>
                            </b-button>
                        </b-col>
                    </b-row>
                    <b-col cols="12">
                        <hr>
                    </b-col>
                    <edit-setting :showPopup="isPopupOpen" :itemToEdit="itemToEdit" @save-changes="saveChanges"
                        @close-popup="closeEditPopup"></edit-setting>

                    <!-- Row Loop -->
                    <b-row v-for="(item, index) in items" :id="item.id" :key="item.id" ref="row">

                        <!-- Item Name -->
                        <b-col lg="1" md="2" class="mb-50">
                            <b-form-group style="margin: 30px;" label-for="item-name">
                                <b-form-checkbox id="select" @click="hasSelected" />
                            </b-form-group>
                        </b-col>

                        <!-- Cost -->
                        <b-col md="2">
                            <b-form-group style="margin: 5px;" label="Name" label-for="cost">
                                {{ item.name }}
                            </b-form-group>
                        </b-col>

                        <!-- Quantity -->
                        <b-col md="2">
                            <!-- <b-form-group label="Quantity" label-for="quantity">
                                <b-form-input id="quantity" type="number" placeholder="1" />
                            </b-form-group> -->
                        </b-col>
                        <b-col>
                        </b-col>
                        <!-- Edit Button -->
                        <b-col lg="2" md="3" class="mb-50">
                            <b-button style="margin-left: 40px;" v-ripple.400="'rgba(84, 234, 234, 0.15)'"
                                variant="outline-primary" class="mt-0 mt-md-2" @click.stop="openEditPopup(item)">
                                <feather-icon icon="EditIcon" class="mr-25" />
                                <span>Edit</span>
                            </b-button>
                        </b-col>

                        <!-- Remove Button -->
                        <b-col lg="2" md="3" class="mb-50" style="float: right;">
                            <b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger" class="mt-0 mt-md-2"
                                @click.stop="removeItem(index)">
                                <feather-icon icon="XIcon" class="mr-25" />
                                <span>Delete</span>
                            </b-button>
                        </b-col>
                        <b-col cols="12">
                            <hr>
                        </b-col>
                    </b-row>

                </b-form>
            </div>
            <!-- Edit Button -->
            <b-button v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="success"  @click="saveData" style="float: right;">
                <span>Save</span>
            </b-button>
        </div>
    </b-form>
</template>

<script>
import {
    BForm, BFormGroup, BFormInput, BRow, BCol, BButton, BFormCheckbox
} from 'bootstrap-vue'
import { heightTransition } from '@core/mixins/ui/transition'
import Ripple from 'vue-ripple-directive'
import EditSetting from './EditSetting.vue';

export default {
    components: {
        BForm,
        BRow,
        BCol,
        BButton,
        BFormGroup,
        BFormInput,
        BFormCheckbox,
        EditSetting,
    },
    directives: {
        Ripple,
    },
    mixins: [heightTransition],
    data() {
        return {
            isPopupOpen: false,
            itemToEdit: null,
            items: [
                { id: 1, name: 'Item 1' },
                { id: 2, name: 'Item 2' },
            ],
            nextTodoId: 2,
            selected: [],
        }
    },
    mounted() {
        this.initTrHeight()
    },
    created() {
        window.addEventListener('resize', this.initTrHeight)
    },
    destroyed() {
        window.removeEventListener('resize', this.initTrHeight)
    },
    methods: {
        repeateAgain() {
            this.items.push({
                id: this.nextTodoId += this.nextTodoId,
            })

            this.$nextTick(() => {
                this.trAddHeight(this.$refs.row[0].offsetHeight)
            })
        },
        removeItem(index) {
            this.items.splice(index, 1)
            this.trTrimHeight(this.$refs.row[0].offsetHeight)
        },
        initTrHeight() {
            this.trSetHeight(null)
            this.$nextTick(() => {
                this.trSetHeight(this.$refs.form.scrollHeight)
            })
        },
        openEditPopup(item) {
            // เปิด Popup และกำหนดข้อมูลที่ต้องการแก้ไข
            console.log(item)
            this.isPopupOpen = true;
            this.itemToEdit = item;
        },
        closeEditPopup() {
            // ปิด Popup
            this.isPopupOpen = false;
        },
        saveData() {
        // ทำการบันทึกข้อมูลทั้งหมดที่มีการแก้ไข
        console.log(this.items);
        // ปิด Popup
        this.isPopupOpen = false;
    },
        saveChanges(editedItem) {
            // ทำการบันทึกข้อมูลที่แก้ไข
            const index = this.items.findIndex(item => item.id === editedItem.id);
            if (index !== -1) {
                this.items[index].name = editedItem.name;
            }
            // ปิด Popup
            this.isPopupOpen = false;
        },
    },
    computed: {
        hasSelected() {
            this.selected = [];
        }
    }
}
</script>

<style lang="scss" scoped>
.repeater-form {
    overflow: hidden;
    transition: .35s height;
}
</style>