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
        <Filters />
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
import Filters from "./components/Filters";

export default {
  name: 'App',
  components: {
    Filters,
    MenuContent: MenuContent
  },
  computed: {
    selectedTab: function () {
      return this.$store.state.menu.selectedTab;
    }
  },
  data() {
    return {
      links: [
        'Wegen',
        'Files',
        'Werkzaamheden'
      ]
    }
  },
  methods: {
    selectTab: function (tabTitle) {
      this.$store.dispatch('menu/changeTab', tabTitle);
    }
  },
  created() {
    this.$store.dispatch('menu/changeTab', 'Wegen')
  }
}
</script>

<style>
</style>
