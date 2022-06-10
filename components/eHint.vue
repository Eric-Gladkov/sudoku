<template>
  <div class="e-hint">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>{{ title }}</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
    <div>9</div>
  </div>
</template>
<script>
// import { defineComponent } from "@vue/composition-api";

// export default defineComponent({
//   setup() {},
// });
module.exports = {
  name: "ehint", // имя маленькими буквами
  props: ["title", "digit"],
  data: function () {
    return {};
  },
};
</script>
<style>
.e-hint {
  /* background: rgb(176, 224, 176); */
  width: 5em;
  height: 5em;
  font-size: 1em;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 2px;
  align-items: center;
  /**/
  text-align: center;
}
</style>

