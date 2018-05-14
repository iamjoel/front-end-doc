<template>
  <div class="main">
    <!-- TODO -->
    <!-- <el-switch
      style="display: block"
      v-model="viewType"
      @change="viewTypeChange"
      active-value="classify"
      inactive-value="tag"
      active-text="分类视图"
      inactive-text="标签视图"
      >
    </el-switch> -->
    <el-menu
      class="el-menu-vertical-demo"
      :unique-opened="true"
      :default-openeds="defaultOpen">
      <el-submenu :index="item.name" v-for="item in menu" :key="item.name">
        <template slot="title">
          <span>{{item.name}}</span>
        </template>
        <el-menu-item :index="subItem.name"  v-for="(subItem, index) in item.children" @click="$emit('change', getSnippentInfo(item, subItem))" :key="subItem.name">{{subItem.name}}</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import {classifyList, tagList} from '@/setting'
var menuSource = {
  classifyList,
  tagList
}
export default {
  data() {
    return {
      menu: [],
      viewType: 'classify',
      defaultOpen: []
    }
  },
  methods: {
    viewTypeChange() {
      this.menu = menuSource[this.viewType + 'List']
    },
    // id 为 文件路径的拼接
    getSnippentInfo(parent, item) {
      var id = [parent.path || parent.name, item.path || item.name].join('/')
      return {
        id,
        language: item.language || parent.language
      }
      
    }
  },
  mounted() {
    this.menu = classifyList
  }
}
</script>

<style scoped>
  .main {
    width: 200px;
  }
</style>