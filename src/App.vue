<template>
  <div>
    <b-card title="Verkeersinformatie" no-body>
      <b-card-header header-tag="nav">
        <b-nav card-header tabs>
          <b-nav-item
            v-for="title in links"
            v-bind:key="title"
            v-bind:active="selectedTab === title"
            v-on:click="selectTab(title)"
          >
            {{ title }}
          </b-nav-item>

          <b-nav-item
            disabled
          >
            Flitsers
          </b-nav-item>
        </b-nav>
      </b-card-header>
      <b-card-body>
        <b-card-text>
          <MenuContent v-bind:selectedTab="selectedTab"/>
        </b-card-text>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import './assets/overall_style.scss';

import MenuContent from "./components/MenuContent";

export default {
  name: 'App',
  components: {
    MenuContent: MenuContent
  },
  data() {
    return {
      selectedTab: 'Wegen',
      links: [
        'Wegen',
        'Files',
        'Werkzaamheden'
      ]
    }
  },
  methods: {
    selectTab: function (tab) {
      this.selectedTab = tab;
    }
  }
}
</script>

<style>
</style>
