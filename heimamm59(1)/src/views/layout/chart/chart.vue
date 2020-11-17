<template>
  <div class="chart">
    <el-card>
      <ul class="chart-top">
        <li class="item">
          <div class="circle">{{ info.increment_users }}</div>
          <div class="txt">今日新增用户</div>
        </li>
        <li class="item">
          <div class="circle">{{ info.total_users }}</div>
          <div class="txt">总用户量</div>
        </li>
        <li class="item">
          <div class="circle">{{ info.increment_questions }}</div>
          <div class="txt">新增试题</div>
        </li>
        <li class="item">
          <div class="circle">{{ info.total_questions }}</div>
          <div class="txt">总试题量</div>
        </li>
        <li class="item">
          <div class="circle">{{ info.total_done_questions }}</div>
          <div class="txt">总刷题量</div>
        </li>
        <li class="item">
          <div class="circle">{{ info.personal_questions }}</div>
          <div class="txt">人均刷题量</div>
        </li>
      </ul>
    </el-card>
    <el-card>
      <!-- echarts
    1:安装插件 npm i echarts
    2:导入  import echarts from 'echarts'
    3:初始化   myEcharts=echarts.init(dom选择dom需要有宽高)
    4:写配制   options={配制}
    5:应用配制 myEcharts.setOption(options)  
    注意点:在数据加载完成后再使用echarts(注意数据异步问题)
 -->
      <div class="echarts" ref="echarts"></div>
    </el-card>
  </div>
</template>
<script>
import { dataTitle, dataStatistics } from '@/api/chart.js'
import echarts from 'echarts'
export default {
  data () {
    return {
      info: '',
      myEcharts: '',
      list: [],
      nameArr: []
    }
  },
  created () {
    dataTitle().then(res => {
      this.info = res.data.data
      window.console.log('chart数据:', res)
    })
    dataStatistics().then(res => {
      this.list = res.data.data
      window.console.log('echarts:', res)
      /*
        map:循环数组,
        返回值[]=数组.map((item,index)=>{
        return 值   返回值.push(值)
        })
        生成一个新数组,新数组每一项就是它map内部return的每一项     
            */
      this.nameArr = this.list.map(item => {
        return item.name
      })
      this.myEcharts = echarts.init(this.$refs.echarts)
      const option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          right: 10,
          data: this.nameArr
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '30',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: this.list
          }
        ]
      }
      this.myEcharts.setOption(option)
      window.console.log(this.nameArr)
    })
    //异步也是有队列
  },
  mounted () {}
}
</script>
<style lang="less">
.chart {
  .chart-top {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .circle {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      text-align: center;
      line-height: 100px;
      border: 2px solid green;
    }
    .txt {
      text-align: center;
    }
  }
  .echarts {
    height: 400px;
  }
}
</style>
