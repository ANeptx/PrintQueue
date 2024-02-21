<template>
    <body class="popup app-printer model-printer change-form" style="zoom: 1">
        <div id="container">
            <div id="content" class="colM">
                <h1>Change printer</h1>
                <div id="content-main">
                    <form >
                        <div>
                            <fieldset class="module aligned">
                                <h2>Properties</h2>
                                <div class="form-row field-name">
                                    <div>
                                        <label class="required">Name:</label>
                                        <input class="vTextField" id="id_name" maxlength="100" name="name" type="text" value="mPOP">
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    </form>

                </div>

            </div>
        </div>
    </body>
</template>

<script>
export default {
    name: "addprinter",
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
    }),
    
}
</script>


<style>

.form-row {
    overflow: hidden;
    padding: 8px 12px;
    font-size: 20px;
}

.aligned label {
    display: block;
    padding: 3px 10px 0 0;
    float: left;
    width: 8em;
    word-wrap: break-word;
}

.required label, label.required {
    font-weight: bold !important;
    color: #2f3033 !important;
}

.form-row img, .form-row input {
    vertical-align: middle;
}

input, textarea, select, .form-row p, form .button {
    margin: 2px 0;
    padding: 2px 3px;
    vertical-align: middle;
    font-family: "Lucida Grande", Verdana, Arial, sans-serif;
    font-weight: normal;
    font-size: 20px;
}

.vTextField {
    width: 20em;
}

.form-row {
    /* overflow: hidden; */
    padding: 8px 12px;
    font-size: 20px;
}

label {
    font-weight: normal !important;
    color: #2f3033;
    font-size: 20px;
    line-height: 20px;
}

#container {
    position: relative;
    width: 100%;
    min-width: 760px;
    padding: 0;
}

#content-main {
    width: 100%;
    padding-top: 8px;
}

#content {
    margin: 10px 15px;
}

.popup .colM {
    width: 95%;
}

div {
    display: block;
}

.module {
    border: 1px solid #929292;
    margin-bottom: 5px;
    background: #EDF3FE;
    border: 1px solid #95989b;
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

body {
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-family: "Lucida Grande", "DejaVu Sans", "Bitstream Vera Sans", Verdana, Arial, sans-serif;
    color: #2f3033;
    background: #052447;
    background: -moz-linear-gradient(top, #052447 0%, #052447 0%, #5a7899 100%);
    background: -webkit-gradient(left top, left bottom, color-stop(0%, #052447), color-stop(0%, #052447), color-stop(100%, #5a7899));
    background: -webkit-linear-gradient(top, #052447 0%, #052447 0%, #5a7899 100%);
    background: -o-linear-gradient(top, #052447 0%, #052447 0%, #5a7899 100%);
    background: -ms-linear-gradient(top, #052447 0%, #052447 0%, #5a7899 100%);
    background: #fff linear-gradient(to bottom, #fff 0%, #fff 0%, #7cbbff 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#052447', endColorstr='#5a7899', GradientType=0);
}

body {
    display: block;
    margin: 8px;
}
</style>