<template>
    <main class="m-2">
        <h3 class="helvetica mb-2">Select Print queue to change</h3>
        <b-row class="helvetica text-nowrap">
            <h6 class="mt-1">Action:</h6>
            <b-col class="mr-1" cols="12" sm="6" md="3">

                <b-form-select class="card" v-model="selectAction" :options="action" />

            </b-col>
            <b-col class="mb-1" cols="12" sm="6" md="3">
                <b-button class="mr-1" variant="outline-secondary" :pressed.sync="confirm"
                    @click="handleConfirm"><strong>Confirm</strong></b-button> {{ selected.length }} of {{
                        listQueue.length }} selected
            </b-col>
        </b-row>
        <template>
            <template>

            </template>
            <div class="card">
                <b-table class="helvetica table table-hover" :items="listQueue" :fields="fields" :per-page="perPage"
                    :current-page="currentPage" @filtered="onFiltered">
                    <template #head(selectRow)>
                        <div class="text-nowrap">
                            <b-tr class="h4"><b-form-checkbox v-model="allSelected" :indeterminate="indeterminate"
                                    @change="toggleAll"></b-form-checkbox></b-tr>
                        </div>
                    </template>
                    <template v-slot:cell(selectRow)="data">
                        <div class="text-nowrap">
                            <b-form-checkbox :name="`${data.item.id}`" v-model="selected"
                                :value="data.item"></b-form-checkbox>
                        </div>
                    </template>
                    <template #head(printerName)>
                        <div class="text-nowrap">
                            <b-tr>Printer</b-tr>
                        </div>
                    </template>
                    <template #cell(printerName)="data">
                        <b-link style="color: rgba(0, 0, 0, 0.63)"
                            :to="{ name: 'printer', params: { id: data.item.id, createAt: data.item.createAt, updateAt: data.item.updateAt  } }"><strong>{{
                                data.item.printerName }}</strong></b-link>
                    </template>
                    <template #head(view)>
                        <b-tr>View</b-tr>
                    </template>
                    <template #cell(view)="data">
                        <b-link :to="{ path: '/view/'+data.item.id}"><b-icon-search
                                class="center"></b-icon-search></b-link>
                        <!-- class="align-middle mr-50" -->
                    </template>

                    <template #head(created)>
                        <div class="text-nowrap">
                            <b-tr class="h4">Created</b-tr>
                        </div>
                    </template>
                </b-table>

            </div>
            <b-row>
                <b-col>
                    <p>{{ listQueue.length }} Print Queues</p>
                </b-col>
                <b-col></b-col>
                <b-col></b-col>
                <b-col>
                    <div class="demo-spacing-0">
                        <b-pagination align="right" v-model="currentPage" :per-page="perPage" :total-rows="totalRows"
                            first-number last-number prev-class="prev-item" next-class="next-item">
                            <template #prev-text>
                                <feather-icon icon="ChevronLeftIcon" size="18" />
                            </template>
                            <template #next-text>
                                <feather-icon icon="ChevronRightIcon" size="18" />
                            </template>
                        </b-pagination>
                    </div>
                </b-col>
            </b-row>
        </template>
    </main>
</template>

<script>
import axios from 'axios'
import Vue from 'vue';
import {
    BRow, BCol, BFormGroup, BButton, BLink, BFormDatepicker, BTh, BTr, BTd, BThead, BTbody, BTfoot,
    BFormInput, BFormSelect, BTable, BDropdown, BDropdownItem, BPagination
} from 'bootstrap-vue';
import { $themeConfig } from '@themeConfig';
import FeatherIcon from '@/@core/components/feather-icon/FeatherIcon.vue';
import { BIconSearch } from 'bootstrap-vue';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

export default {
    name: "Print",
    components: {
        BRow,
        BCol,
        BFormGroup,
        BTable,
        BPagination,
        BFormInput,
        BButton,
        BLink,
        BFormDatepicker,
        BFormSelect,
        BTh,
        BTr,
        BTd,
        BThead,
        BTbody,
        BTfoot,
        BDropdown,
        BDropdownItem,
        BIconSearch,
        FeatherIcon,
        BootstrapVue,
        BootstrapVueIcons,
    },

    data() {
        return {


            showCustomizer: $themeConfig.layout.customizer,
            dir: 'ltr',
            data: [
                { id: 1, printerName: 'mPOP', view: '', createAt: 'Jan. 23, 2024, 2:08 p.m.' },
                { id: 2, printerName: 'mPOP', view: '', createAt: 'Jan. 23, 2024, 2:11 p.m.' },
                { id: 3, printerName: 'mPOP (COFFEE)', view: '', createAt: 'Jan. 23, 2024, 2:11 p.m.' },
                { id: 4, printerName: 'mPOP (COFFEE)', view: '', createAt: 'Jan. 23, 2024, 2:13 p.m.' },
                { id: 5, printerName: 'mPOP (COFFEE)', view: '', createAt: 'Jan. 23, 2024, 2:15 p.m.' },
                { id: 6, printerName: 'mPOP', view: '', createAt: 'Jan. 23, 2024, 2:15 p.m.' },
                { id: 7, printerName: 'mPOP (COFFEE)', view: '', createAt: 'Jan. 23, 2024, 2:15 p.m.' },
                { id: 8, printerName: 'mPOP (COFFEE)', view: '', createAt: 'Jan. 23, 2024, 2:35 p.m.' },
                { id: 9, printerName: 'mPOP', view: '', createAt: 'Jan. 23, 2024, 2:35 p.m.' },
                { id: 10, printerName: 'mPOP', view: '', createAt: 'Jan. 23, 2024, 2:36 p.m.' },
                { id: 11, printerName: 'mPOP', view: '', createAt: 'Jan. 23, 2024, 2:38 p.m.' },
                { id: 12, printerName: 'mPOP (COFFEE)', view: '', createAt: 'Jan. 23, 2024, 2:41 p.m.' },
                { id: 13, printerName: 'mPOP (COFFEE)', view: '', createAt: 'Jan. 23, 2024, 2:41 p.m.' },
            ],

            selected: [],
            allSelected: false,
            indeterminate: false,
            selectedRow: false,
            confirm: false,
            selectAction: "",
            printQue: [],
            checkRow: [],
            option: [],
            spl: [],
            spc: [],
            join: [],
            spl2: [],
            spc2: [],
            join2: [],
            spl3: [],
            spc3: [],
            join3: [],
            spl4: [],
            spc4: [],
            join4: [],
            value: '',
            formatted: '',
            pageOptions: [5, 10, 15, 20, 25, { value: 200, text: "Show a lot" }],
            currentPage: 1,
            perPage: 20,
            totalRows: 1,
            rows: 200,

            listQueue: [],
            newList: [],
            list: [],

            fields: [
                {
                    key: 'selectRow', label: ""
                },
                {
                    key: 'printerName',
                    label: "Printer",
                    sortable: true
                },
                {
                    key: 'view',
                    label: "View",
                    sortable: true,
                },
                {
                    key: 'createAt',
                    label: "Created",
                    sortable: true
                },
            ],



            action: [
                {
                    text: '---------',
                    value: null,
                },
                {
                    text: 'Delete Select Print Queues',
                    value: 'del',
                },
            ],

        }
    },
    computed: {
        sortOptions() {
            // Create an options list from our fields
            return this.fields
                .filter(f => f.sortable)
                .map(f => ({ text: f.label, value: f.key }))
        },

    },
    mounted() {
        axios.get('https://walletcardapi.triggersplus.com/printQueue')
            .then((resp) => {
                this.listQueue = resp.data
                this.newList.push(this.listQueue);
                //console.log(this.newList)
                for (let i = 0; i < this.listQueue.length; i++) {
                    this.newList.forEach((data, index) => {
                        if (data && data.length) {

                            this.spl = data[i].createAt.split('T');
                            this.spc = this.spl.splice(0, 1);
                            this.join = this.spc.join('');
                            this.spl2 = this.spl.join('');

                            data[i].createAt = this.spl;

                            this.spc2 = this.spl2.split(".");
                            this.join2 = this.spc2.splice(0, 1);

                            data[i].createAt = this.join + " " + this.join2.join('');

                            this.spl3 = data[i].updateAt.split('T');
                            this.spc3 = this.spl.splice(0, 1);
                            this.join3 = this.spc.join('');
                            this.spl4 = this.spl.join('');

                            data[i].updateAt = this.spl;

                            this.spc4 = this.spl4.split(".");
                            this.join4 = this.spc4.splice(0, 1);

                            data[i].updateAt = this.join + " " + this.join2.join('');


                        }
                    });
                }
                // this.printQue.push(this.newList);

                //console.log("print", this.printQue)

            })
    },
    methods: {
        onFiltered(data) {
            // Trigger pagination to update the number of buttons/pages due to filtering
            this.totalRows = data.length
            this.currentPage = 1
        },

        toggleAll(checked) {
            this.selected = checked ? this.listQueue.slice() : []
        },

        handleConfirm() {
            if (this.selectAction && this.selectAction == 'del') {
                // console.log("action", this.selectAction)
                // console.log("row", this.selected)

                this.listQueue = this.listQueue.filter(a => !this.selected.includes(a))
                this.selected = []

                //     axios.post('https://walletcardapi.triggersplus.com/printQueue/remove_select/${this.selected.id}')
                // .then(res => {
                //     console.log("All", this.selected);
                // })


            }
        },
        // selectedRow(newValue){
        //     console.log(newValue)
        //     if(this.allSelected == true && this.selected.length == this.data.length){
        //             newValue = true

        //         }
        //         else if(this.selected.length !== this.data.length){
        //             newValue = false
        //         }
        //         else{
        //             this.allSelected = true
        //             newValue = true
        //         }
        // },
        // selectRowHandler(data) {
        //     this.data[data.index].isSelected = !this.data[data.index].isSelected;
        // },
        // removeRowsHandler() {
        //     this.data = this.data.filter(item => !item.isSelected);
        //     this.$emit('input', this.data);
        // },
        handleDeleteRows(row) {

            if (Array.isArray(this.selected)) {
                this.checkRow = this.selected.findIndex(rowSelect => {
                    return rowSelect.id == row.id
                })

                if (this.checkRow == -1) {
                    this.selected.push(row);
                    console.log("Success", this.checkRow)
                }
                else {
                    this.selected.splice(this.checkRow, 1)
                    console.log("Fail", this.checkRow)
                }

                if (this.selected.length === 0) {
                    this.indeterminate = false
                    this.allSelected = false

                }
                else if (this.allSelected === true && this.selected.length === this.data.length) {
                    this.indeterminate = false


                } else if (this.selected.length === this.listQueue.length) {
                    this.indeterminate = false
                    this.selectRow = true
                    this.allSelected = true

                } else {
                    this.indeterminate = true
                    this.allSelected = false

                }



                // if (this.selected.findIndex(rowSelect =>{
                //    return rowSelect.id == row.id 
                // }) == -1) {
                //     this.selected.push(row);
                // }
            }
        },
    },
}

</script>

<style lang="scss">
.helvetica {
    font-family: Arial, Helvetica, sans-serif;
}

.grid-container {
    display: grid;
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
}
</style>