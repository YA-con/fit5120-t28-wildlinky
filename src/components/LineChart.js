import React from 'react';
import ReactECharts from 'echarts-for-react';

const LineChart = () => {
  const option = {
    title: {
        text: '',
        left: 0
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '10%',
        containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ['1600', '1650', '1700', '1750', '1800', '1850', '1900', '1950', '2000', '2025']
    },
    yAxis: {
      type: 'value'
    },
    series: [
        {
            name: 'Population',
            type: 'line',
            stack: 'Number',
            data: [30000, 27342, 25000, 24000, 15000, 10000, 5000, 4000, 12000, 20000]
        }
    ]
  };

  return <ReactECharts option={option} style={{ height: "100%" }} />;
};

export default LineChart