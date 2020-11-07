<template>
  <div class="demo-slot">
      <h1>Demo Slot</h1>
      <comp-tab title="Tiêu đề của tab">
          <ul class="tab-header">
            <li 
                v-for="(item,index) in tabsHeader" 
                v-bind:key="index"
                v-on:click="setActiveTab(index)"
                v-bind:class="{ active : tabActive ===index }"
            >
                {{item.text}}
            </li>
          </ul>

          <div class="tab-content tab1" v-if="tabActive===0">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eaque velit sint odio aut veritatis quidem ipsum tenetur dolor recusandae veniam unde consequuntur praesentium, deserunt voluptas numquam! Reiciendis, voluptatum aliquam?</p>
          </div>
          <div class="tab-content tab2" v-else-if="tabActive===1">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet pariatur aut maiores aspernatur omnis ut distinctio repellat iste adipisci quam error, labore aliquid totam, atque autem? Itaque autem neque vel.</p>
          </div>
          <div class="tab-content tab3" v-else>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur vitae alias tempora veritatis laudantium nesciunt dolores necessitatibus doloremque accusamus ut qui quae, facilis exercitationem sit. Ea asperiores cumque excepturi quibusdam?</p>
          </div>
      </comp-tab>

      <slot></slot>
  </div>
</template>

<script>
import CompTab from './CompTab'
export default {
    name: 'demoSlot',
    data(){ 
        return {
            tabsHeader : [
                { text: 'Tab 1' },
                { text: 'Tab 2' },
                { text: 'Tab 3' },
            ],
            tabActive:0
        }
    },
    methods: {
        setActiveTab(index){
            this.tabActive = index
        }
    },
    components: {
        CompTab
    }
}
</script>

<style>
.demo-slot {
    margin-top: 100px;
    padding:100px 30px;
    border: 1px solid #bbbbbb;
}
</style>