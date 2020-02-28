<template>
  <div class="semantic">
    <header>header</header>
    <nav>nav</nav>
    <article>
      article
      <section>section</section>
    </article>
    <aside>aside</aside>
    <footer>footer</footer>
  </div>
</template>

<style scoped lang="less">
.styled {
  padding: 14px;
  border-radius: 6px;
  text-align: center;
  background: #46bd87;
  margin: 6px;
  color: #fff;
  font-weight: 600;
  font-size: 20px;
}

.semantic {
  padding: 20px;
  margin: 20px auto;
  width: 400px;
  position: relative;
  border: 1px dashed #ddd;

  header {
    .styled();
  }

  nav {
    .styled();
  }

  article {
    display: inline-block;
    width: 278px;
    height: 200px;
    box-sizing: border-box;
    .styled();

    section {
      padding: 20px;
      border: 1px solid #71b76f;
      background-color: #71b76f;
      margin-top: 20px;
      border-radius: 8px;
    }
  }

  aside {
    display: inline-block;
    width: 100px;
    height: 200px;
    position: absolute;
    box-sizing: border-box;
    .styled();
  }

  footer {
    .styled();
  }
}
</style>