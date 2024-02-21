<template style="background-color: white;">
    <body class="helvetica" style="background-color: white;">
        <p class="logo_display">
            <img src="https://fourleaf-datacenter.s3-ap-southeast-1.amazonaws.com/partner1/media/invoice/group-34_V2DI.png"
                width="200">
        </p>
        <div v-for="(item, index) in json" :key="index">
            <template v-if="item.command === 'CenterText' && item.value.option[1] == 'H5'">
                <div>
                    <p class="text_display text_center B2 H5">{{ item.value.text.join(' ') }}</p>

                </div>
                <div class="text_display U">
                    <span style="float: left;"> </span>
                    <span style="float: right;"> </span>
                    <p style="clear: both;"></p>
                </div>
            </template>
            <template v-if="item.command === 'DoubleText' && item.value.option[0] == 'S'">
                <div class="text_display U S">
                    <span style="float: left;">{{ item.value.text[0] }}</span>
                    <span style="float: right;">{{ item.value.text[1] }}</span>
                    <p style="clear: both;"></p>
                </div>
            </template>
            <template v-if="item.command === 'DoubleText' && item.value.option[0] == 'HN8'">
                <div class="text_display HN8" :class="{ 'U': (index == 15 && index !==12) || (index == 12 && !index ==15)}">
                    <span style="float: left;">{{ item.value.text[0] }}</span>
                    <span style="float: right;">{{ item.value.text[1] }}</span>
                    <p style="clear: both;"></p>
                </div>
            </template>

            <template v-if="item.command === 'CenterText' && item.value.option[0] == 'S'">

                <div>
                    <p class="text_display text_center S">{{ item.value.text.join(' ') }}</p>

                </div>
            </template>

            <!-- <p class="text_display text_center B2 H5">PHOENIX POS Receipt</p>
            <p class="text_display text_left S" style="white-space: pre;">TRIGGERS PLUS CO., LTD.<br>
                 89/769 Nawamin 81 year 3-34, Buengkum, Bangkok 10240<br>
                 Tax ID: 0105563025500<br>
                POS ID: E12345678901234<br></p>
                
             <div class="text_display U">
                 <span style="float: left;"> </span>
                 <span style="float: right;"> </span>
                 <p style="clear: both;"></p>
             </div>
             <div class="text_display H3">
                 <span style="float: left;">Counter 3</span>
                 <span style="float: right;">#04104</span>
                 <p style="clear: both;"></p>
             </div>
             <div class="text_display U S">
             </div>
             <div class="text_display S">
                 <span style="float: left;">11-Feb-2024 05:50PM</span>
                 <span style="float: right;">#004 nisa</span>
                 <p style="clear: both;"></p>
             </div>
             <p class="text_display text_left S">Guest: 1</p>
             <div class="text_display H7">
                 <span style="float: left;">2 Tom Yam Pla</span>
                 <span style="float: right;">500.00</span>
                 <p style="clear: both;"></p>
             </div>
             <div class="text_display H7">
                 <span style="float: left;">1 prawn wonton</span>
                 <span style="float: right;">50.00</span>
                 <p style="clear: both;"></p>
             </div>
             <p class="text_display text_left H7"> เส้น:: Egg Noodle</p>
             <div class="text_display H7">
                 <span style="float: left;">1 prawn wonton</span>
                 <span style="float: right;">50.00</span>
                 <p style="clear: both;"></p>
             </div>
             <p class="text_display text_left H7">เส้น:: Green Noodle</p>
             <div class="text_display">
                 <span style="float: left;">Subtotal</span>
            //     <span style="float: right;">600.00</span>
            //     <p style="clear: both;"></p>
            // </div>
            // <div class="text_display U">
            //     <span style="float: left;">Vat 7%</span>
            //     <span style="float: right;">42.00</span>
            //     <p style="clear: both;"></p>
            // </div>
            // <div class="text_display B2 H5">
            //     <span style="float: left;">Total</span>
            //     <span style="float: right;">642.00</span>
            //     <p style="clear: both;"></p>
            // </div>
            // <p class="text_display text_center S">(vat included)</p>
            // <p class="text_display text_center ">--------------------------</p>
            // <div class="text_display U">
            //     <span style="float: left;"> </span>
            //     <span style="float: right;"> </span>
            //     <p style="clear: both;"></p>
            // </div>
            // <p class="text_display text_center S">Thank you. ............................ Customer Signature</p>
            // <p class="text_display text_center B2">Powered by PHOENIX POS</p> -->
        </div>
    </body>
</template>

<script>
import axios from 'axios';
import { BTable, BTh, BTr, BTd, BThead, BTbody, BTfoot, } from 'bootstrap-vue';
import { $themeConfig } from '@themeConfig';

export default {
    name: 'view',
    components: BTable,
    BTh,
    BTr,
    BTd,
    BThead,
    BTbody,
    BTfoot,
    data() {
        return {
            items: [],
            newItems: [],
            viewID: '',
            textProcessed: false,
            json: [],
        }
    },

    mounted() {
        this.loadData(this.$route.params.id);
        this.viewID = this.$route.params.id;
    },

    methods: {
        loadData(viewID) {
            axios
                .get(`https://walletcardapi.triggersplus.com/printQueue/${viewID}`)
                .then((res) => {

                    console.log(res)
                    this.items = res.data;
                    this.json = res.data.json
                    this.processText();
                    console.log(this.items)
                    console.log(this.json)
                })
                .catch((error) => {
                    console.error(error);
                });
        },
        processText() {
            this.textProcessed = true;
        },
    },
}
</script>

<style>
.helvetica {
    font-family: Arial, Helvetica, sans-serif;
    color: #000;
}

div {
    display: block;
}

.B2 {
    font-weight: bold;
    font-size: 24px;
}

.U {
    border-bottom: 1px solid;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: initial;
}

.text_display,
.logo_display {
    width: 95%;
    margin-left: 2.5%;
}

.text_left {
    white-space: pre;
}

.text_center {
    text-align: center;
}

p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}

body {
    display: block;
    margin: 8px;
}

.logo_display img {
    margin: 0 auto;
    margin-top: 0px;
    margin-right: auto;
    margin-bottom: 0px;
    margin-left: auto;
    display: block;
}

/* .center {
    text-align: center;
    border: 2px;
}


.left {
    text-align: left;
}

.right {
    text-align: right;
}

.with-top-bottom-border {
    border-top: 2px solid black !important;
    border-bottom: 2px solid black !important;
    height: fit-content;
}

.with-bottom-border {
    border-bottom: 1px solid black !important;
}

.with-top-border {
    border-top: 1px;
} */
</style>