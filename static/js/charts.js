$(document).ready(function(){
    var socket = io.connect('http://' + document.domain + ':' + location.port + '/data');
    var data_received = [];

    function getData() {
        socket.on('newdata', function(msg) {
            data_received.push(msg.datalist)
            if (data_received.length >= 1){
                state1 = '<p class="status-type" style="font-size: 20px; font-family: "Noto Sans", sans-serif;">idle</p>'
                state2 = '<p class="status-type" style="font-size: 20px; font-family: "Noto Sans", sans-serif;">Bat. nominal</p>'
                state3 = '<p class="status-type" style="font-size: 20px; font-family: "Noto Sans", sans-serif;">Comms available</p>'
            } else {
                state1 = '<p class="status-type" style="font-size: 20px; font-family: "Noto Sans", sans-serif;">error</p>'
                state2 = '<p class="status-type" style="font-size: 20px; font-family: "Noto Sans", sans-serif;">Bat. error</p>'
                state3 = '<p class="status-type" style="font-size: 20px; font-family: "Noto Sans", sans-serif;">Comms error</p>'
            }
            $('#status-state1').html(state1);
            $('#status-state2').html(state2);
            $('#status-state3').html(state3);
        })
        return data_received[data_received.length - 1];
    };

    state1 = '<p class="status-type" style="font-size: 20px; font-family: "Noto Sans", sans-serif;">N/A</p>'
    state2 = '<p class="status-type" style="font-size: 20px; font-family: "Noto Sans", sans-serif;">Bat. N/A</p>'
    state3 = '<p class="status-type" style="font-size: 20px; font-family: "Noto Sans", sans-serif;">Comms unvailable</p>'

    $('#status-state1').html(state1);
    $('#status-state2').html(state2);
    $('#status-state3').html(state3);

    var canvas = document.getElementById('accX');
    var canvas2 = document.getElementById('accY');
    var canvas3 = document.getElementById('accZ');
    var canvas4 = document.getElementById('temp');
    var canvas5 = document.getElementById('gyroX');
    var canvas6 = document.getElementById('gyroY');
    var canvas7 = document.getElementById('gyroZ');

    var data = {
        labels: [],
        datasets: [
            {
                label: "GyroX (deg/10)",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 0,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 0,
                pointHitRadius: 10,
                data: [],
            }
        ]
    };

    
    var data2 = {
        labels: [],
        datasets: [
            {
                label: "GyroY (deg/10)",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(192,75,75,0.4)",
                borderColor: "rgba(192,75,75,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 0,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 0,
                pointHitRadius: 10,
                data: [],
            }
        ]
    };

    var data3 = {
        labels: [],
        datasets: [
            {
                label: "GyroZ (deg/10)",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(192,192,75,0.4)",
                borderColor: "rgba(192,192,75,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 0,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 0,
                pointHitRadius: 10,
                data: [],
            }
        ]
    };

    var data4 = {
        labels: [],
        datasets: [
            {
                label: "Temp (°C)",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,75,192,0.4)",
                borderColor: "rgba(75,75,192,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 0,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 0,
                pointHitRadius: 10,
                data: [],
            }
        ]
    };

    var data5 = {
        labels: [],
        datasets: [
            {
                label: "AccX",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,75,192,0.4)",
                borderColor: "rgba(75,75,192,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 0,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 0,
                pointHitRadius: 10,
                data: [],
            }
        ]
    };

    var data6 = {
        labels: [],
        datasets: [
            {
                label: "AccY",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,75,192,0.4)",
                borderColor: "rgba(75,75,192,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 0,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 0,
                pointHitRadius: 10,
                data: [],
            }
        ]
    };

    var data7 = {
        labels: [],
        datasets: [
            {
                label: "AccZ",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,75,192,0.4)",
                borderColor: "rgba(75,75,192,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 0,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 0,
                pointHitRadius: 10,
                data: [],
            }
        ]
    };


    var count = 0

    setInterval(function(){
        myLineChart.data.datasets[0].data[count] = getData()[0];
        myLineChart.data.labels[count] = count;
        myLineChart.update();

        myLineChart2.data.datasets[0].data[count] = getData()[1];
        myLineChart2.data.labels[count] = count;
        myLineChart2.update();

        myLineChart3.data.datasets[0].data[count] = getData()[2];
        myLineChart3.data.labels[count] = count;
        myLineChart3.update();

        myLineChart4.data.datasets[0].data[count] = getData()[3];
        myLineChart4.data.labels[count] = count;
        myLineChart4.update();

        myLineChart5.data.datasets[0].data[count] = getData()[4];
        myLineChart5.data.labels[count] = count;
        myLineChart5.update();

        myLineChart6.data.datasets[0].data[count] = getData()[5];
        myLineChart6.data.labels[count] = count;
        myLineChart6.update();

        myLineChart7.data.datasets[0].data[count] = getData()[6];
        myLineChart7.data.labels[count] = count;
        myLineChart7.update();

        if (count > 1000) {
            location.reload();
        }

        count++;
    }, 2000);

    var option = {
        showLines: true
    };

    var myLineChart = Chart.Line(canvas,{
        data:data,
        options:option
    });

    var myLineChart2 = Chart.Line(canvas2,{
        data:data2,
        options:option
    });

    var myLineChart3 = Chart.Line(canvas3,{
        data:data3,
        options:option
    });

    var myLineChart4 = Chart.Line(canvas4,{
        data:data4,
        options:option
    });

    var myLineChart5 = Chart.Line(canvas5,{
        data:data5,
        options:option
    });

    var myLineChart6 = Chart.Line(canvas6,{
        data:data6,
        options:option
    });

    var myLineChart7 = Chart.Line(canvas7,{
        data:data7,
        options:option
    });
});
