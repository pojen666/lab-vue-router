<template>
  <div class="d-flex justify-content-center">
    <br />
    <div class="card w-75">
      <div class="card-header">Bad Parent</div>
      <div class="card-body">
        <div id="nav">
          <router-link to="/parent/bad/one">one</router-link> |
          <router-link to="/parent/bad/two">two</router-link>
        </div>
        <!-- 如果父元件沒有配置router-view
        盡管router有mappgin到component
        子元件仍則不會出現 -->
      </div>
    </div>
  </div>
</template>
