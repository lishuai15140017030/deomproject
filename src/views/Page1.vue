<template>
<div class="container">
  <h1>page1</h1>
  <el-row>
    <el-col :span="8" class="item-chart"><ve-bar :data="chartData1" :settings="chartSettings" :extend="chartExtend"></ve-bar></el-col>
    <el-col :span="8" class="item-chart"><ve-bar :data="chartData2" :settings="chartSettings" :extend="chartExtend"></ve-bar></el-col>
    <el-col :span="8" class="item-chart"><ve-bar :data="chartData3" :settings="chartSettings" :extend="chartExtend"></ve-bar></el-col>
  </el-row>

</div>
</template>
<script>
export default {
  data () {
    this.chartSettings = {
      xAxisName: ['金额', 'xAxisName'],
      stack: {
        'x': ['合同', '目标成本'],
        'xxxx': ['完成产值', '实际成本']
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
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
      }
    }
    return {
      chartData1: {
        // columns: [
        //   '金额', '合同', '目标成本'
        // ],
        columns: ['金额', '合同', '目标成本', '预计收益', '完成产值', '实际成本', '综合收益', '业主计价金额', '业主批复金额'],
        rows: [
          { '金额': '', '合同': 150, '目标成本': -100, 50: '', '完成产值': 140, '实际成本': -90, '综合收益': 50, '业主计价金额': 140, '业主批复金额': 100 }
        ]
      },
      chartData2: {
        // columns: [
        //   '金额', '合同', '目标成本'
        // ],
        columns: ['金额', '合同', '目标成本', '预计收益', '完成产值', '实际成本', '综合收益', '业主计价金额', '业主批复金额'],
        rows: [
          { '金额': '', '合同': 250, '目标成本': -200, 50: '', '完成产值': 300, '实际成本': -310, '综合收益': -10, '业主计价金额': 300, '业主批复金额': 250 }
        ]
      },
      chartData3: {
        // columns: [
        //   '金额', '合同', '目标成本'
        // ],
        columns: ['金额', '合同', '目标成本', '预计收益', '完成产值', '实际成本', '综合收益', '业主计价金额', '业主批复金额'],
        rows: [
          { '金额': '', '合同': 150, '目标成本': -100, 50: '', '完成产值': 140, '实际成本': -90, '综合收益': 50, '业主计价金额': 140, '业主批复金额': 100 }
        ]
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.container{
  height: 100%;
  box-sizing: border-box;
  padding: 10px;
  .item-chart{
    padding: 5px;
  }
}
</style>
