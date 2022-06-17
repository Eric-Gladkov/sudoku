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
            "black",
            "grey",
            "pink",
        ],

        counter: 0,

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
        games: [],

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
        this.updateGames();
    },



    methods: {
        setCoordinates: function (x, y) {
            // console.log(x);
            // console.log(y);
            this.currentX = x;
            this.currentY = y;
        },

        updateGames: function () {
            this.games = [];
            for (let i = 0; i < localStorage.length; i++) {
                let key = localStorage.key(i);
                this.games.push({ key: key, val: localStorage.getItem(key) })
            }
        },

        saveGame: function () {
            var d = new Date();
            var options = {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric'
            };
            var key = d.toLocaleString("ru", options);
            var game = JSON.stringify(this.rows);
            localStorage.setItem(key, game);
            this.updateGames();
        },

        restoreGame: function (key) {
            var row = localStorage.getItem(key);
            this.rows = JSON.parse(row);
        },

        deleteGame: function (key) {
            localStorage.removeItem(key);
            this.updateGames();
        },

        cellClick: function (x, y) {
            console.log("rows");
            console.log(this.rows[y][x]);
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


            this.counter++;

        },

        varsClear: function () {
            this.currentColor = "";
            this.currentDigit = "";
        },
    },
});