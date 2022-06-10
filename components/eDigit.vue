<template>
  <div class="e-digit">
    <div>{{ title }}</div>
  </div>
</template>
<script>
// import { defineComponent } from "@vue/composition-api";

// export default defineComponent({
//   setup() {},
// });
module.exports = {
  name: "edigit",
  props: ["title", "digit"],
  data: function () {
    return {};
  },
};
</script>
<style>
.e-digit {
  background: rgb(235, 212, 4);
  width: 5em;
  height: 5em;
  font-size: 1em;
  text-align: center;
  align-items: center;
  display: grid;
}

.e-digit > div {
  font-size: 4em;
}
</style>

