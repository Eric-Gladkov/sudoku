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

        modes: [
            "цифра",
            "угловая натация",
            "центральная натация",
            "очистить",
        ],

        cell_components: [
            "edigit",
            "ehint",
            "ecenterhint",
            "",
        ],

        currentMode: "",

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
                    // candidate: [],
                    candidate: ["", "", "", "", "", "", "", "", "",],
                    color: "",
                };
                c.push(e);
            }
            r.push(c);
            d.push(j + 1);
        }
        // console.log(this.rows);

    },

    methods: {
        setCoordinates: function (x, y) {
            // console.log(x);
            // console.log(y);
            this.currentX = x;
            this.currentY = y;
        },

        cellClick: function (x, y) {
            // var cell = this.rows[y][x];
            this.rows[y][x].color = this.currentColor;
            // this.rows[y][x].v = this.currentDigit;
            this.rows[y][x].component = this.cell_components[this.currentMode];
            switch (this.currentMode) {
                case 0://Цифра
                    this.rows[y][x].v = this.currentDigit;
                    this.rows[y][x].candidate = ["", "", "", "", "", "", "", "", "",];
                    // ["4","9"]
                    break;
                case 1://
                case 2:
                    this.rows[y][x].v = "";
                    this.rows[y][x].candidate[this.currentDigit - 1] = this.currentDigit;
                    console.log();
                    break;
                default://Очистить
                    this.rows[y][x].v = "";
                    this.rows[y][x].color = "";
                    this.rows[y][x].candidate = ["", "", "", "", "", "", "", "", "",];
                    this.varsClear();
                    break;
            }




        },

        varsClear: function () {
            this.currentColor = "";
            this.currentDigit = "";
        },
    },
});