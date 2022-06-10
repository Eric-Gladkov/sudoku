<template>
  <div class="e-center-hint">
    <div>{{ title }}</div>
  </div>
</template>
<script>
// import { defineComponent } from "@vue/composition-api";

// export default defineComponent({
//   setup() {},
// });
module.exports = {
  name: "ecenterhint",
  props: ["title", "digit"],
  data: function () {
    return {};
  },
};
</script>
<style>
.e-center-hint {
  background: rgb(179, 14, 14);
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

