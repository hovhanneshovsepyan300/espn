<template>
  <div class="menu-fixed">
    <ul class="navbar-nav float-right flex-row">
      <li class="nav-item menufixed-hover">
        <a class="nav-link d-flex align-items-center search-icon" href="#" role="button">
          <b-icon class="margin-auto" icon="search" variant="secondary"></b-icon>
        </a>
      </li>
      <li class="nav-item menufixed-hover">
        <a class="nav-link d-flex align-items-center" href="#">
          <b-icon class="m-1" icon="person-circle" variant="secondary"></b-icon>
          <p class="person-name mb-0">SCORES</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'NavBarFixed',
  }
</script>

<style lang="scss" scoped>
  .person-name {
    display: none;
  }

  @media screen and (max-width: 768px){
    .person-name {
      display: block!important;
    }
    
    .search-icon {
      display: none!important;
    }
  }

  @media screen and (max-width: 991px) {
    .menu-fixed {
      .menufixed-hover:hover {
        display: none;
      }
    }
  }
</style>