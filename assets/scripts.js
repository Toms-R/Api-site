let lastWeeksVaccinated = 0;
const peopleInLatvia = 1920000;
const vaccinationGoal = peopleInLatvia * 0.7;
var ctx = document.getElementById('heatmap').getContext('2d');
let data2 = {};


let data = {
  resource_id: '51725018-49f3-40d1-9280-2b13219e026f',
  q: "2.pote",
  limit: '10000000'
};
$.ajax({
  url: 'https://data.gov.lv/dati/lv/api/3/action/datastore_search',
  data: data,
  dataType: 'json',
  success: function(data) {

    let vaccinatedTotal = 0;
    let daysToSafety = 0;

    for (let row of Object.values(data.result.records)) {
      vaccinatedTotal += row[ 'Vakcinēto personu skaits' ];
      if (dateIsLastWeek(new Date(row[ 'Vakcinācijas datums' ]))) {
        
        lastWeeksVaccinated += row[ 'Vakcinēto personu skaits' ];
      }
    }

    const sevenDaysVacAvg = lastWeeksVaccinated / 8;
    let vaccinesNeeded = vaccinationGoal - vaccinatedTotal;
    daysToSafety = vaccinesNeeded / sevenDaysVacAvg;

    // console.log(daysToSafety.toFixed(2));
    // console.log(vaccinatedTotal + " - vakcinēto personu skaits " );
    // console.log(lastWeeksVaccinated + " - vakcinēto personu skaits pedējās 7 dienās" );
    //alert('Total results found: ' + data.result.total);
    $('#vaccinated').append(vaccinatedTotal);
    
    
    let myDate = new Date(new Date().getTime()+(daysToSafety*24*60*60*1000));
    let isoDateString = new Date(myDate).toISOString();
    let formattedDate =  isoDateString.split('T')[0];

    $('#safety-days').append(formattedDate);
  }


});

let data1 = {
  resource_id: 'd499d2f0-b1ea-4ba2-9600-2c701b03bd4a',
  limit: '1000'
};
$.ajax({
  url: 'https://data.gov.lv/dati/lv/api/3/action/datastore_search',
  data: data1,
  dataType: 'json',
  success: function(data1) {
    let totalTested = 0;


    data2.labels = ['0-9 gadi','10-19 gadi','20-29 gadi','30-39 gadi','40-49 gadi','50-59 gadi','60-69 gadi','70 un vairāk gadi','70-79 gadi','80 un vairāk gadi'];
    data2.datasets = [];
    i = 0;

 
    for (let row of Object.values(data1.result.records)) {
      
      i++;
      if (i === data1.result.records.length) {
        continue;
      }


      totalTested += row.TestuSkaits;

      if (dateIsLastWeek(new Date(row[ 'Datums' ]))) {
        data2.datasets.push({
          label: row[ 'Datums' ].split('T')[0],
          data: [parseInt(row['ApstiprinatiVecGr_0-9Gadi']), parseInt(row['ApstiprinatiVecGr_10-19Gadi']), parseInt(row['ApstiprinatiVecGr_20-29Gadi']), parseInt(row['ApstiprinatiVecGr_30-39Gadi']), parseInt(row['ApstiprinatiVecGr_40-49Gadi']), parseInt(row['ApstiprinatiVecGr_50-59Gadi']), parseInt(row['ApstiprinatiVecGr_60-69Gadi']),parseInt(row['ApstiprinatiVecGr_70-79Gadi']), parseInt(row['ApstiprinatiVecGr_70GadiUnVairak']),parseInt(row['ApstiprinatiVecGr_80GadiUnVairak'])]
        });
      }
    }
    $('#tested').append(totalTested);

    let newChart = new Chart(ctx).HeatMap(data2);
  } 
});



const _MS_PER_DAY = 1000 * 60 * 60 * 24;
const todayDate = new Date();


// a and b are javascript Date objects
function dateIsLastWeek(a) {

  // Discard the time and time-zone information.
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate());
  

  return Math.floor((utc2 - utc1) / _MS_PER_DAY) < 8;
}



var data3 = {
  labels : ['0-9 gadi','10-19 gadi','20-29 gadi','30-39 gadi','40-49 gadi','50-59 gadi','60-69 gadi','70 un vairāk gadi','70-79 gadi','80 un vairāk gadi'],
  datasets : [
    {
      label: 'Datumi',
      data: [7, 80, 50, 70, 90, 80, 100, 60, 70]
    },
    {
      label: 'Tuesday',
      data: [6, 8, 5, 6, 5, 5, 7, 0, 0, 3]
    },
    {
      label: 'Wednesday',
      data: [8, 5, 6, 4, 2, 2, 3, 0, 2, 0]
    },
    {
      label: 'Thursday',
      data: [4, 0, 7, 4, 6, 3, 2, 4, 2, 10]
    },
    {
      label: 'Friday',
      data: [1, 0, 0, 7, 0, 4, 1, 3, 4, 5]
    }
  ]
};


let options = {
        // String - background color for graph
      backgroundColor: '#fff',

      // Boolean - whether each box in the dataset is outlined
      stroke: false,

      // Number - width of the outline stroke.
      strokePerc: 0.05,

      // String - the outline stroke color.
      strokeColor: "rgb(128,128,128)",

      // String - the outline stroke highlight color.
      highlightStrokeColor: "rgb(192,192,192)",

      // Boolean - whether to draw the heat map boxes with rounded corners
      rounded: true,

      // Number - the radius (as a percentage of size) of the rounded corners
      roundedRadius: 0.1,

      // Number - padding between heat map boxes (as a percentage of box size)
      paddingScale: 0.05,

      // String - "gradient", "palette"
      colorInterpolation: "gradient",

      // Array[String] - the colors used for the active color scheme.
      // Any number of colors is allowed.
      colors: [ "#465682", "#FC585D"],

      // Boolean - whether boxes change color on hover.
      colorHighlight: true, 

      // Number - a floating point value which specifies how much lighter or
      // darker a color becomes when hovered, where 1 is no change, 
      // 0.9 is slightly darker, and 1.1 is slightly lighter.
      colorHighlightMultiplier: 0.92,

      // Boolean - Whether to draw labels on the boxes
      showLabels: true, 

      // Number - the font size of the label as percentage of box height
      labelScale: 0.2,

      // String - label font family
      labelFontFamily: '"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',

      // String - label font style
      labelFontStyle: "normal",

      // String - label font color
      labelFontColor: "yellow",

      // String - tooltipTemplate
      tooltipTemplate: "<%= xLabel %> | <%= yLabel %> : <%= value %>",

      // String - template for legend generation
      legendTemplate : '<div class="<%= name.toLowerCase() %>-legend">'+
              '<span class="<%= name.toLowerCase() %>-legend-text">'+
              '<%= min %>'+
              '</span>'+
              '<% for (var i = min; i <= max; i += (max-min)/6){ %>'+ // change 6 to number of divisions required
              '<span class="<%= name.toLowerCase() %>-legend-box" style="background-color: <%= colorManager.getColor(i).color %>;">  </span>'+
              '<% } %>'+
              '<span class="<%= name.toLowerCase() %>-legend-text">'+
              '<%= max %>'+
              '</span>'+
              '</div>'
};

//let newChart = new Chart(ctx).HeatMap(data3);
