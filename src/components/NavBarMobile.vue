<template>
  <div class="collapse menu-title menu-mobile" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link " 
              href="#" id="navbarDropdownMenuLink" 
              role="button" 
              data-toggle="dropdown" 
              aria-haspopup="true"
            >
          <b-icon class="margin-auto" 
              icon="search" 
              variant="secondary">
            </b-icon>
          <p>Search</p>
        </a>
          <div class="dropdown-menu dropdown-menu2 menu2-1 px-3 py-0" aria-labelledby="navbarDropdownMenuLink">
              <input type="text" class="form-control" id="validationDefault02" value="Search" required>
              <b-icon class="margin-auto" icon="search" variant="secondary"></b-icon>
        </div>
      </li>

      <li class="nav-item">
        <a class="nav-link " href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true">
          <b-icon icon="trophy-fill"  variant="secondary"></b-icon>
            <p>Sports</p>
        </a>
        <div class="dropdown-menu dropdown-menu2 menu2-2 px-3 py-0" aria-labelledby="navbarDropdownMenuLink">
          <a v-for="(subItem, index) in sportsMenuItems"
            :key="subItem.title + index + 'menu-mobile'"
            class="dropdown-item drropdown-titl pl-0" href="#">{{ subItem.title }}</a>
        </div>
      </li>

      <li v-for="(item, index) in menuItems"
        class="nav-item active"
        :key="item.title + index + 'menu-mobile main'">
        <a class="nav-link " href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true">
          <b-icon class="margin-auto"
            :icon="item.icon"
            variant="secondary" />
          <p>{{ item.title }}</p>
        </a>

        <div v-if="item.subItems"
          class="dropdown-menu dropdown-menu2 menu2-2 px-3 py-0"
          aria-labelledby="navbarDropdownMenuLink">
          <a v-for="(subItem, index) in item.subItems"
            :key="subItem.title + index + 'menu-mobile sub more'"
            class="dropdown-item drropdown-titl pl-0" href="#">{{ subItem.title }}</a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import menuItems from "../utils/menu-items.json"
import sportsMenuItems from "../utils/sports-menu-items.json"

export default {
  name: 'NavBarMobile',
  data: () => ({
    menuItems: menuItems,
    sportsMenuItems: sportsMenuItems
  })
}
</script>


<style lang="scss" scoped>
  @media screen and (min-width: 991px) {
    .menu-mobile {
      &.show {
        display: none;
      }
    }
  }
</style>