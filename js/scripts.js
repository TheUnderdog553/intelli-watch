// Sidebar Toggle 

var sidebarOpen = false;

var sidebar = document.getElementById("sidebar");

function openSidebar() {
    if (!sidebarOpen) {
        sidebar.classList.add("sidebar-responsive");
        sidebarOpen = true;
    }
}

function closeSidebar() {
    if (sidebarOpen) {
        sidebar.classList.remove("sidebar-responsive");
        sidebarOpen=false;
    }
}    


// Charts using ApexCharts

// Bar Chart
      
barChartOptions = {
  series: [{
    data: [102,35,83,47,23]
  }],
  chart: {
    type: 'bar',
    height: 350,
    toolbar: {
      show: false
    }
  },
  colors: [
    "#246dec",
    "#cc3c43",
    "#367952",
    "$f5b74f",
    "#4f35a1"
  ],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '40%'
    }
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false
  },
  xaxis: {
    categories: ["High", "Medium", "Low", "Trojan", "Suspected"]
  },
  yaxis: {
    title: {
      text: "Count"
    }
  }
}

var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
barChart.render();


// Area Chart

var areaChartOptions = {
  series: [{
    name: 'THREATS IDENTIFIED',
    data: [57, 75, 41, 67, 51, 53, 44, 61, 51, 67, 43, 56]
  }, {
    name: 'THREATS TACKLED',
    data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43, 46]
  }],
  chart: {
    height: 350,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  colors: ["#4f35a1", "#246dec"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth'
  },
  labels: ['Jan', 'Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
  markers: {
    size: 0
  },
  yaxis: [
    {
      title: {
        text: 'Threats Identified',
      },
    },
    {
      opposite: true,
      title: {
        text: 'Threats Tackled',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
  }
};

var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
areaChart.render();