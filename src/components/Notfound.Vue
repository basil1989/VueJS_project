<template>
    <div >
        <div class="account-pages"></div>
		<div class="clearfix"></div>
        <div class="wrapper-page">
            <div class="ex-page-content text-center">
                <div class="text-error"><span class="text-primary">4</span><span style="color:green" class="text-primary">0</span><span class="text-info">4</span></div>
                <h2>Sory, Page Not Found</h2><br>
                <p class="text-muted">This page cannot found or is missing.</p>
                <p class="text-muted">Use the button below to get back and track.</p>
                <br>
                <router-link to="/"  style="width:50px">
                <b-button  variant="success" v-on:click="home()">Return Home</b-button>
                </router-link>
                <router-view></router-view>
                
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        methods : {
            home (){
                this.$emit("authenticated", true);
            }
        }
    }
</script>

<style scoped>
.account-pages {
    background:url("~/static/geometry.png");
    position: absolute;
    height: 100%;
    width: 100%;
    margin-top: -100px;
}
* {
    outline: none !important;
}
* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
.wrapper-page {
    margin: 5% auto;
    position: relative;
    width: 420px;
}
.text-center {
    text-align: center;
}
.ex-page-content .text-error {
    color: #252932;
    font-size: 98px;
    font-weight: 700;
    line-height: 150px;
}
.text-primary {
    color: #5d9cec;
}
.text-info {
    color: #34d3eb;
}
.text-muted {
    color: #98a6ad;
}

.btn-default, .btn-default:hover, .btn-default:focus, .btn-default:active, .btn-default.active, .btn-default.focus, .btn-default:active, .btn-default:focus, .btn-default:hover, .open > .dropdown-toggle.btn-default {
    background-color: #5fbeaa !important;
    border: 1px solid #5fbeaa !important;
}

.btn-primary, .btn-success, .btn-default, .btn-info, .btn-warning, .btn-danger, .btn-inverse, .btn-purple, .btn-pink {
    color: #ffffff !important;
}
.btn {
    border-radius: 3px;
    outline: none !important;
}
.waves-effect {
    position: relative;
    cursor: pointer;
    display: inline-block;
    overflow: hidden;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    vertical-align: middle;
    z-index: 1;
    will-change: opacity, transform;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    -ms-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
}
.btn-default {
    color: #333;
    background-color: #fff;
    border-color: #ccc;
}
.btn {
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
}
a {
    color: #337ab7;
    text-decoration: none;
}
</style>