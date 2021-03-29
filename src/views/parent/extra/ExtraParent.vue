<template>
  <div class="d-flex justify-content-center">
    <br />
    <div class="card w-75">
      <div class="card-header">Extra Parent</div>
      <div class="card-body">
        <div id="nav">
          <router-link to="/parent/extra/child">child</router-link>
        </div>
        <!-- 子元件會在父元件的router-view位置被創建 -->
        <router-view />
      </div>
    </div>
  </div>
</template>
