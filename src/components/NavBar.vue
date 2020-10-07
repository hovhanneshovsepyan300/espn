<template>
  <div class="navbar p-0">
    <nav class="navbar navbar-expand-lg navbar-light bg-light nav-menu d-flex ">
      <div class="d-flex justify-content-between">
        <div class="logo-container">
          <div class="logo">
            <span>ENPN</span>
          </div>
        </div>
      </div>
  
      <button class="navbar-toggler burger-menu" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" >
        <span class="navbar-toggler-icon"></span>
      </button>

      <nav-bar-desktop />

      <nav-bar-mobile />

      <nav-bar-fixed />
    </nav>
   
  </div>
</template>

<script>
import NavBarDesktop from "./NavBarDesktop"
import NavBarMobile from "./NavBarMobile"
import NavBarFixed from "./NavBarFixed"

export default {
  name: 'NavBar',
  components: {
    NavBarFixed,
    NavBarDesktop,
    NavBarMobile
  }
}
</script>

<style lang="scss">
.navbar {
 .nav-menu {
  background: #222 !important;
  padding: 0 3rem;
  height: 50px;
  display: flex;
  align-items: stretch;
  width: 100%;
  
  .logo-container {
    padding: 0 10px;
    transform: skew(-20deg);
    color: rgb(12, 4, 4);
    height: 50px;
    background: #ee3322aa;
    text-align: center;

    .logo {
      background: #ee3322;
      color: #fff;
      height: 50px;
      padding: 0 15px;
      font-weight: bold;
      line-height: 50px;

      span {
        display: inline-block;
        transform: skew(20deg);
      }
    }
  }
 }
}

@media screen and (max-width: 991px) {
  button {
    border-color: transparent!important;
    &:focus {
      border-color: transparent!important;
      outline: 0px!important;
    }

    span {
      color: #fff;
    }
  }

  .menu-title {
    background-color: #1d1e1f;
    left: 0;
    position: absolute;
    top: 50px;
    width: 100%;
    height: 100vh;
    bottom: 0;
    z-index: 1000043 !important;

    ul {
      width: 68px;
      background: #222 !important;
      opacity: none;
      z-index: 1000072 !important;

      li {
        .drropdown-titl {
          border-bottom: #dcdddf 1px solid;
          width: 100%;
          color: #6c6d6f!important;
          display: flex;
          align-items: center;
          font-size: 14px;
        }
      }
    }
  }

  .burger-menu {
    float: left;
    height: 50px;
    position: absolute;
    width: 68px;
    z-index: 2;
    left: 0;
    background-color: #ee3322 !important;
    color: #fff;
    border: none;
    border-radius: 0;

    &:focus {
      border: none;
      border-radius: 0;
      color: #ee3322;
    }
  }

  ul {
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border-bottom: 1px rgba(255,255,255,0.1) solid;

      &:hover {
        background-color: #ee3322 !important;
      }

      &.show {
        svg {
          fill: #fff;
        }

        p {
          color: #fff;
        }
      }

      a {
        color: #6c6d6f;
        display: block;
        font-size: 10px;
        font-weight: 600;
        height: 54px;
        padding-top: 8px;
        position: relative;
        text-align: center;
        width: 54px;

        &:hover {
           svg { 

            fill: #fff;
          }

          p {
            color: #fff;
          }
        }

        svg {
          height: 22px;
          width: 22px;
          margin-bottom: 2px;
        }

        p {
          color: #6c757d ;
        }
      }
      
      .dropdown-menu2 {
        position: absolute !important;
        top: -245px;
        left: 67px !important;
        height: 100vh;
        width: 360px;
        border-radius: 0;

        input {
          position: relative !important;
          margin-top: 15px;
        }

        svg {
          position: absolute;
          top: 23px;
          right: 33px;
          width: 20px;
          height: 20px;
        }
      }
      
      .menu2-1 {
        top: -3px;
      }

      .menu2-2 {
        top: -3px;
      }

      .menu2-3 {
        top: -3px;
      }

      .menu2-4 {
        top: -195px;
      }

      .menu2-5 {
        top: -3px;
      }

      .menu2-6 {
        top: -3px;
      }

      .menu2-7 {
        top: -3px;
      }
    }
  }
}
</style>