<template>
    <div v-if="showPopup" class="popup-overlay">
        <div class="popup-container">
            <b-row>
                <b-col>
                    <h2 style="float: left;">Edit Item</h2>
                    <b-button v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="danger" @click.prevent="closePopup"
                        style="float: right;">
                        <feather-icon icon="XIcon" />
                    </b-button>
                </b-col>
            </b-row>
            <form @submit.prevent="submitForm">
                <b-row>
                    <b-col>
                        <label for="editedItemName">Name: </label>

                        <input v-model="editedItemName" type="text" id="editedItemName" />

                        <!-- ใช้ @click.prevent แทน @submit.prevent และลบการใช้ v-model บน form
                <button type="submit" @click.prevent="submitForm">Save Changes</button>
                <button @click.prevent="closePopup">Cancel</button> -->
                        
                    </b-col>
                    <b-button type="submit" v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="success"
                            @click.prevent="submitForm" style="float: right;">
                            <span>Save</span>
                        </b-button>
                </b-row>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EditSetting',
    props: {
        showPopup: Boolean,
        itemToEdit: Object,
    },
    data() {
        return {
            editedItemName: '',
        };
    },
    methods: {
        submitForm() {
            if (this.itemToEdit && this.editedItemName.trim() !== '') {
                this.$emit('save-changes', { id: this.itemToEdit.id, name: this.editedItemName });
                this.closePopup();
            } else {
                // จัดการกรณีที่ข้อมูลไม่ถูกต้อง
            }
        },
        closePopup() {
            this.$emit('close-popup');
        },
    },
};
</script>

<style scoped>
.popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}

.popup-container {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    width: 600px;
    height: 300px;
    /* ปรับขนาดตามที่ต้องการ */
    /* เพิ่มตำแหน่ง absolute เพื่อช่วยให้ Popup อยู่ตรงกลาง */
    position: absolute;

}
</style>
