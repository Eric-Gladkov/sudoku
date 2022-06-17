<template>
  <div class="e-center-hint">
    <div>{{ str }}</div>
  </div>
</template>
<script>
// import { defineComponent } from "@vue/composition-api";

// export default defineComponent({
//   setup() {},
// });
module.exports = {
  name: "ecenterhint",
  props: ["title", "cell"],
  data: function () {
    return {
      str: "",
    };
  },
  watch: {
    // cell: function () {
    //   this.m_join();
    // },
  },
  mounted: function () {
    console.log("mounted cell");
    console.log(this.cell);
    this.m_join();
  },
  methods: {
    m_join: function () {
      console.log("cell");
      console.log(this.cell);
      this.str = this.cell.candidate.join("");
      console.log("str");
      console.log(this.str);
    },
  },
};
</script>
<style>
.e-center-hint {
  /* background: rgb(179, 14, 14); */
  width: 5em;
  height: 5em;
  font-size: 1em;
  text-align: center;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(5, auto);
}

.e-center-hint > div {
  font-size: 1em;
}
</style>

