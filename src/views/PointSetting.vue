<template>
    <b-form style="padding: 1%; width: 35%; 
    position: relative; top: 25%; transform: translateY(-50%); 
    transform: translateX(-50%);left: 50%;" @submit.prevent class="card">
        <h2 style="padding-bottom: 1%;">Point Setting</h2>
        <b-row>
            <b-col md="6">
                <b-form-group label="Spend Every" label-for="h-spend" label-cols-md="6">
                    <b-form-input id="h-spend" placeholder="Amount" />
                </b-form-group>
            </b-col>
            <b-col md="4">
                <b-form-group label="Earn" label-for="h-earn" label-cols-md="4">
                    <b-form-input id="h-earn" type="text" placeholder="Point" />

                </b-form-group>
                
            </b-col>
            <b-col>
                <b-form-group label="Point" label-cols-md="12"></b-form-group>
            </b-col>

            <!-- submit and reset -->
            <b-col offset-md="9" style="padding-top: 1%; padding-left: 7%;">
                <b-button v-ripple.400="'rgba(255, 255, 255, 0.15)'" type="submit" variant="primary">
                    Save
                </b-button>
            </b-col>
        </b-row>

    </b-form>
</template>
  
<script>
import {
    BRow, BCol, BFormGroup, BFormInput, BFormCheckbox, BForm, BButton,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
    name: 'pointsetting',
    components: {
        BRow,
        BCol,
        BFormGroup,
        BFormInput,
        BFormCheckbox,
        BForm,
        BButton,
        data() {
            return {
                form: {
                    spend: '',
                    earn: '',
                }
            }
        }
    },
    directives: {
        Ripple,
    },
}
</script>
   