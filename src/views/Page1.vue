<template>
  <div class="container">
    <h1>page1</h1>
    <el-row class="chart-list1">
      <el-col
        :span="8"
        class="item-chart"
      >
        <ve-bar
          :data="monthChartData"
          :settings="chartSettings"
          :extend="chartExtend"
          :events="chartEvents"
        ></ve-bar>
      </el-col>
      <el-col
        :span="8"
        class="item-chart"
      >
        <ve-bar
          :data="yearChartData"
          :settings="chartSettings"
          :extend="chartExtend"
        ></ve-bar>
      </el-col>
      <el-col
        :span="8"
        class="item-chart"
      >
        <ve-bar
          :data="overChartData"
          :settings="chartSettings"
          :extend="chartExtend"
        ></ve-bar>
      </el-col>
    </el-row>
    <el-dialog
      title="提示"
      fullscreen
      :visible.sync="dialogVisible"
      >
      <div class="chart-box">
        <el-col
        class="item-chart"
      >
        <ve-bar
          :data="monthDetailData"
          :extend="chartExtend"
        ></ve-bar>
      </el-col>
      </div>

    </el-dialog>
  </div>
</template>
<script>
import { monthChartData, yearChartData, overChartData, monthDetailData } from '../mock/page1.js'
export default {
  data () {
    this.chartSettings = {
      xAxisName: ['金额', 'xAxisName'],
      stack: {
        x: ['合同', '目标成本'],
        xxxx: ['完成产值', '实际成本']
      }
    }
    this.chartExtend = {
      series: {
        barWidth: 20,
        label: {
          show: true
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
      }
    }
    var self = this
    this.chartEvents = {
      click: function (e) {
        self.name = e.name
        self.dialogVisible = true
        console.log(e)
      }
    }
    return {
      dialogVisible: false,
      monthChartData,
      yearChartData,
      overChartData,
      monthDetailData
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  height: 100%;
  box-sizing: border-box;
  padding: 10px;
  .item-chart {
    padding: 5px;
  }
}
.chart-box{
  height: 800px;
  .item-chart{
    height: 100%;
  }
}
</style>
