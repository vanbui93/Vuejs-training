<template>
  <div class="comp-tab">
      <div class="tab-title">
          {{title}}
          <ion-icon name="battery-charging-outline"></ion-icon>
      </div>
      <div class="tabs-content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
    name: 'CompTab',
    props: {
        title: String,
    },
    data(){
        return {

        }
    }
}
</script>

<style>
    .tabs-content {
        margin-top: 2px;
        padding: 2px;
        border: 2px solid blue;
    }
    .tab-title {
        border: 2px solid #000;
        padding: 15px 30px;
        display: flex;
        justify-content: space-between;
    }
    .tab-header {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
    }
    .tab-header li {
        padding: 8px 15px;
        background-color: #ccc;
        transition: all .3s ease;
    }
    .tab-header li.active {
        background:green;
        color: #fff;
    }
    .tab-header li:hover {
        background-color: #333;
        color: #fff;
        cursor: pointer;
    }
    .tab-content {
        padding: 15px;
        border: 2px solid green;
        text-align: left;
    }
</style>