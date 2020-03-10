<template>
  <div>1</div>
</template>

<script>
export default {
  created() {
    const a = {
      a: 1,
      get b() {
        console.log("getter");
        return this.a + 2;
      },
      set b(val) {
        console.log("setter");
        this.a = val;
        console.log(this);
      }
    };

    /** 控制台打印的 是一个引用, 展开查看为最新引用 */

    console.log(a);
    console.log(a.b);
    a.b = 3;
  }
};
</script>