<template>
  <div class="collapse menu-title menu-desktop justify-content-between d-flex" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li v-for="(item, index) in secondaryMenue"
        class="nav-item dropdown"
        :key="item.title + index + 'menu-desktop'">
        <a class="nav-link "
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true" >
          {{ item.title }}
        </a>

        <div v-if="item.subItems"
          class="dropdown-menu dropdown-menu2 menu2-7 px-3 py-0"
          aria-labelledby="navbarDropdownMenuLink">
          <a v-for="(subItem, index) in item.subItems"
            :key="subItem.title + index + 'menu-desktop sub'"
            class="dropdown-item drropdown-titl pl-0 dropdown-web"
            href="#">{{ subItem.title }}</a>
        </div>
      </li>

      <li class="nav-item dropdown">
        <a class="nav-link " href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" >
          <b-icon  icon="three-dots" variant="secondary"></b-icon>
        </a>
          <div class="dropdown-menu dropdown-menu2 menu2-7 px-3 py-0" aria-labelledby="navbarDropdownMenuLink">
            <a v-for="(subItem, index) in secondaryMenueMore"
            :key="subItem.title + index + 'menu-desktop sub more'"
            class="dropdown-item drropdown-titl pl-0 dropdown-web"
            href="#">{{ subItem.title }}</a>
        </div>
      </li>
    </ul>

    <ul class="navbar-nav float-right">
      <li v-for="(item, index) in menuItems"
        class="nav-item dropdown"
        :key="item.title + index + 'menu-desktop main'">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <template v-if="item.title !== 'More'">{{ item.title }}</template>
          <b-icon v-else :icon="item.icon" variant="secondary"></b-icon>
        </a>

        <div v-if="item.subItems"
          class="dropdown-menu dropdown-menu2 menu2-2 px-3 py-0"
          aria-labelledby="navbarDropdownMenuLink">
          <a v-for="(subItem, index) in item.subItems"
            :key="subItem.title + index + 'menu-desktop sub main'"
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
  name: 'NavBarDesktop',
  data: () => ({
    menuItems: menuItems,
    sportsMenuItems: sportsMenuItems
  }),
  computed: {
    secondaryMenue () {
      return this.sportsMenuItems.slice(0, 6)
    },
    secondaryMenueMore () {
      return this.sportsMenuItems.slice(6,this.sportsMenuItems.length)
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-desktop {
  display: flex!important;
  width: 100%;

  ul {
    li {
      position: relative;

      &.dropdown {
        &::before{
          display: none;
          border-color: transparent transparent #fff transparent;
          border-style: solid;
          border-width: 0 8px 8px 8px;
          bottom: -14px;
          content: '';
          left: 50%;
          position: absolute;
          width: 15px;
          height: 15px;
          z-index: 100;
          background-color: #fff;
          transform: rotate(45deg) translateX(-50%);
        }
      }

      &:hover {
        &::before {
          display: block;
        }

        .dropdown-menu2 {
          display: block;
        }
      }

      .dropdown-menu2 {
        left: 0;
      }
      
      a.nav-link  {
        color: #fff ;
        height: 50px;
        display: flex;
        align-items: center;
        
        &::after {
          display: none;
        }

        &:hover {
          color: grey
        }
       
        svg {
          fill: #fff !important;
          width: 27px;
          margin: 0 5px ;
        }
      }

      .dropdown-web {
        color: rgb(44, 41, 41);

        &:hover {
          background-color: #ee3322;
          border-radius: 4px;
        }

        &:active {
          display: none;
        }
      }
    }
  }
}

@media screen and (max-width: 991px) {
  .menu-desktop {
    display: none!important;
  }
}
</style>