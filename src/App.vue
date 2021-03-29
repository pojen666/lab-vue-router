<template>
  <div id="app">
    <br />
    <div class="d-flex justify-content-center">
      <div class="card w-75">
        <div class="card-header">Main Router</div>
        <div class="card-body">
          <div id="nav">
            | <router-link to="/">Empty</router-link> |
            <br/>
            | <router-link to="/parent/good"
              >Parent give children router view</router-link
            >
            |
            <br/>
            | <router-link to="/parent/bad"
              >Parent doesn't give children rotuer view</router-link
            >
            |
            <!-- 就算routing mapping得到只要父層沒有對應的component也不會被創建 -->
            <br/>
            | <router-link to="/parent/none/child"
              >try to connect to child who doesn't have parent</router-link
            >
            |
            <br/>
            | <router-link to="/parent/extra"
              >try to connect to child import from other file</router-link
            >
            |
          </div>
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
