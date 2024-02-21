<template class="helvetica">
    <div id="app" class="h-100">
        <div class="breadcrumbs">
            <b-breadcrumb>
                <b-breadcrumb-item href="/setting/print">
                    <h2>Print queues</h2>
                </b-breadcrumb-item>
                <b-breadcrumb-item active>
                    <h2>{{ this.selected }}</h2>
                </b-breadcrumb-item>
            </b-breadcrumb>
        </div>
        <div id="content" class="colM">
            <h3>Change Print queue</h3>
            <div id="content-main">
                <ul class="object-tools">
                    <li>
                        <a href="partner1.triggersplus.com/admin/printer/print_queue/printID/history"
                            class="historylink">History</a>
                    </li>
                </ul>
                <form>
                    <fieldset class="module aligned">
                        <div class="form-row field-printer">
                            <label class="required">Printer:</label>
                            <div class="related-widget-wrapper">
                                <b-form-select v-model="selected" :options="options" />
                            </div>
                            <b-link><b-icon-pencil style="margin-left: 15px; margin-top: 10px; color: black;"></b-icon-pencil></b-link>
                            <b-link><b-icon-plus-square-fill style="margin-left: 15px; margin-top: 10px; color: black;"></b-icon-plus-square-fill></b-link>

                        </div>
                        <div class="form-row field-created">
                            <label>Created:</label>
                            <p>{{ this.$route.params.createAt }}</p>
                        </div>
                        <div class="form-row field-modified">
                            <label>Modified:</label>
                            <p>{{ this.$route.params.updateAt }}</p>
                        </div>
                    </fieldset>
                    <div class="submit-row">
                        <b-row>
                            <b-col md="6">
                                <b-button pill variant="danger" @click="deleteQueue()">DELETE</b-button>
                            </b-col>
                            <b-col class="row" md="6">
                                <b-button pill variant="success" type="submit" @click="saveQueue()">SAVE</b-button>
                            </b-col>
                        </b-row>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';
import FeatherIcon from '@/@core/components/feather-icon/FeatherIcon.vue';
import {
    BRow, BCol, BFormGroup, BButton, BLink, BTh, BTr, BTd, BThead, BTbody, BTfoot,
    BFormInput, BFormSelect, BTable, BDropdown, BDropdownItem, BPagination, BBreadcrumb
} from 'bootstrap-vue';

export default {


    name: 'printer',
    components: {
        BRow,
        BCol,
        BFormGroup,
        BTable,
        BPagination,
        BFormInput,
        BButton,
        BLink,
        BFormSelect,
        BTh,
        BTr,
        BTd,
        BThead,
        BTbody,
        BTfoot,
        BDropdown,
        BDropdownItem,
        BBreadcrumb,
        FeatherIcon,
    },

    data: () => ({
        selected: null,
        printID: '',
        errorList: '',
        printName: '',
        options: [
            { value: null, text: '-----------' },
            { value: "Cashier", text: 'Cashier' },
            { value: "mPOP (COFFEE)", text: 'mPOP (COFFEE)' },
            { value: "mPOP", text: 'mPOP' },
            { value: "mPOP", text: 'mPOP' },
            { value: "Chinese", text: 'Chinese' },
            { value: "Thai", text: 'Thai' },
        ],
        headers: [
            { text: 'Id', value: 'id' },
            { text: 'Name', value: 'name' },
        ],
    }),


    mounted() {
        //console.log(this.$route.params.id);
        this.printID = this.$route.params.id
        this.getPrintQueue(this.$route.params.id);

    },

    methods: {
        getPrintQueue(printID) {
            axios.get(`https://walletcardapi.triggersplus.com/printQueue/${printID}`)
                .then(res => {
                    console.log(res.data)
                    this.selected = res.data.printerName
                })
                .catch(function (error) {
                    if (error.response) {
                        if (error.response.status == 404) {
                            alert(error.response.data.message);
                        }
                    }
                })

        },
        saveQueue() {
            var mythis = this;
            axios.patch(`https://walletcardapi.triggersplus.com/printQueue/${this.printID}`, { printerName: this.selected })
                .then(res => {
                    console.log("SUCCESS", res.data)
                    alert(res.data.message);
                    this.errorList = '';
                })
                .catch(function (error) {
                    if (error.response) {
                        if (error.response.status == 422) {
                            mythis.errorList = error.response.data.errors;
                        }
                        if (error.response.status == 404) {
                            alert(error.response.data.message);
                        }
                    }
                })
        },
        deleteQueue() {
            var mythis = this;
            axios.post(`https://walletcardapi.triggersplus.com/printQueue/remove_select/${this.printID}`)
                .then(res => {
                    console.log("SUCCESS", res.data)
                    alert(res.data.message);
                    this.errorList = '';
                })
                .catch(function (error) {
                    if (error.response) {
                        if (error.response.status == 422) {
                            mythis.errorList = error.response.data.errors;
                        }
                        if (error.response.status == 404) {
                            alert(error.response.data.message);
                        }
                    }
                })
        },

        pushOtherPage() {
            console.log('click in Id column');
            this.$router.push({ name: 'other-page' });

        },
    },
};
</script>

<style>
.helvetica {
    font-family: Arial, Helvetica, sans-serif;
}

#content {
    margin: 10px 15px;
}

#content-main {
    width: 100%;
    padding-top: 8px;
}

.object-tools a:link,
.object-tools a:visited {
    display: block;
    float: left;
    color: #2f3033;
    padding: .4em 16px;
    background: #99bbfa;
    margin-top: -5px;
}

.object-tools li {
    display: block;
    float: left;
    margin-left: 5px;
    height: 16px;
}

.object-tools {
    font-size: 10px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    padding-left: 0;
    float: right;
    position: relative;
    margin-top: -3.4em;
    margin-bottom: -2em;
}

p,
ol,
ul,
dl {
    margin: .2em 0 .8em 0;
}

ul li {
    list-style-type: square;
    padding: 1px 0;
}

li,
dt,
dd {
    font-size: 18px;
    line-height: 20px;
}

ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}

li {
    text-align: -webkit-match-parent;
}


.object-tools a {
    border-radius: 15px;
}

.form-row {
    overflow: hidden;
    padding: 8px 12px;
    font-size: 20px;
}

fieldset {
    margin: 0;
    padding: 0;
}

fieldset {
    display: block;
    margin-inline-start: 2px;
    margin-inline-end: 2px;
    padding-block-start: 0.35em;
    padding-inline-start: 0.75em;
    padding-inline-end: 0.75em;
    padding-block-end: 0.625em;
    min-inline-size: min-content;
    border-width: 2px;
    border-style: groove;
    border-color: rgb(192, 192, 192);
    border-image: initial;
}

.submit-row {
    padding: 5px 7px;
    text-align: right;
    background: #EDF3FE;
    border: 1px solid #929292;
    margin: 5px 0;
    overflow: hidden;
}

.submit-row input {
    margin: 0 0 0 5px;
}

input {
    text-rendering: auto;
    letter-spacing: normal;
    word-spacing: normal;
    line-height: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    -webkit-rtl-ordering: logical;
}

.button,
input[type=submit],
input[type=button],
.submit-row input,
a.button {
    background: #fff url(https://partner1.triggersplus.com/static/admin/img/nav-bg.gif) bottom repeat-x;
    padding: 3px 5px;
    color: black;
    border: 1px solid #bbb;
    border-color: #ddd #aaa #aaa #ddd;
}

input,
textarea,
select,
.form-row p,
form .button {
    margin: 2px 0;
    padding: 2px 3px;
    vertical-align: middle;
    font-family: "Lucida Grande", Verdana, Arial, sans-serif;
    font-weight: normal;
    font-size: 20px;
}

input[type="submit" i] {
    appearance: auto;
    user-select: none;
    align-items: flex-start;
    text-align: center;
    cursor: default;
    box-sizing: border-box;
    background-color: buttonface;
    color: buttontext;
    white-space: pre;
    padding-block: 1px;
    padding-inline: 6px;
    border-width: 2px;
    border-style: outset;
    border-color: buttonborder;
    border-image: initial;
}

p.deletelink-box {
    display: block;
    float: left;
    color: white;
    padding: 0.1em 25px 0.1em 25px;
    margin: 0px;
    height: 42px;
    padding-bottom: 11px;
    font-size: 29px;
}

.module {
    border: 1px solid #929292;
    margin-bottom: 5px;
    background: #EDF3FE;
    border: 1px solid #95989b;
}

option {
    font-weight: normal;
    display: block;
    min-height: 1.2em;
    padding: 0px 2px 1px;
    white-space: nowrap;
}

select {
    text-rendering: auto;
    color: fieldtext;
    letter-spacing: normal;
    word-spacing: normal;
    line-height: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    text-align: start;
    -webkit-rtl-ordering: logical;
    cursor: default;
    white-space: pre;
}

div.breadcrumbs {
    padding: 6px 22px 7px 22px;
    font-size: 22px;
    color: #2f3033;
    border-bottom: 1px solid #8C8C8C;
    text-align: left;
}

label {
    font-weight: normal !important;
    color: #2f3033;
    font-size: 20px;
    line-height: 20px;
}

form a.change-related {
    margin-left: 10px;
}

form a.add-another,
form a.add-related {
    margin-left: 8px;
}

.required label,
label.required {
    font-weight: bold !important;
    color: #2f3033 !important;
}

.aligned label {
    display: block;
    padding: 3px 10px 0 0;
    float: left;
    width: 8em;
    word-wrap: break-word;
}

body {
    font-size: 16px;
    font-family: "Lucida Grande", "DejaVu Sans", "Bitstream Vera Sans", Verdana, Arial, sans-serif;
    color: #2f3033;
}

div {
    display: block;
}
</style>