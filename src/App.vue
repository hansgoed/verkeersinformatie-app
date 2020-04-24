<template>
  <div>
    <Header></Header>
    <Table></Table>
  </div>
</template>

<script>
import './assets/overall_style.scss';
import Header from "@/components/Header";
import Table from "@/components/Table/Table";

export default {
  name: 'App',
  components: {
    Table,
    Header
  }
}
</script>

<style>
</style>
