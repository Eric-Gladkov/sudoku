// Vue.component("tab-home", {
//     template: "<div>Home component</div>"
//   });
//   Vue.component("tab-posts", {
//     template: "<div>Posts component</div>"
//   });
//   Vue.component("tab-archive", {
//     template: "<div>Archive component</div>"
//   });
//

var app = new Vue({
    el: "#app",
    data: {
        n: 9,
        rows: [],
        div_dig: [],
        currentX: "",
        currentY: "",
        colors: [
            "red",
            "yellow",
            "green",
            "plum",
            "burlywood",
            "aquamarine",
        ],

        currentTabComponent: "ehint",

        currentColor: "",
        currentDigit: "",

    },

    components: {
        "edigit": httpVueLoader("./components/eDigit.vue"),
        "ecenterhint": httpVueLoader("./components/eCenterHint.vue"),
        "ehint": httpVueLoader("./components/eHint.vue"),
    },

    mounted: function () {
        // var a = this.cells;
        var r = this.rows;
        var d = this.div_dig;

        for (let j = 0; j < (this.n); j++) {
            let c = [];
            for (let i = 0; i < (this.n); i++) {
                let e = {
                    x: i,
                    y: j,
                    v: null,
                    component: "edigit",
                    candidate: [],
                    color: "",
                };
                c.push(e);
            }
            r.push(c);
            d.push(j + 1);
        }
        console.log(this.rows);

    },

    methods: {
        setCoordinates: function (x, y) {
            console.log(x);
            console.log(y);
            this.currentX = x;
            this.currentY = y;
        },

        cellClick: function (x, y) {
            this.rows[y][x].color = this.currentColor;
            this.rows[y][x].v = this.currentDigit;
        },

        varsClear: function () {
            this.currentColor = "";
            this.currentDigit = "";
        },
    },
});