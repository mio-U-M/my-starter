import Vue from "vue";
import App from "@/vue/App";
import router from "@/router";
import store from "@/store";

Vue.config.productionTip = false;
// Vue Production Mode
if (process.env.NODE_ENV === "production") {
    Vue.config.devtools = false;
    Vue.config.debug = false;
    Vue.config.silent = true;
}

new Vue({
    router,
    store,
    el: "#app",
    render: h => h(App)
});
