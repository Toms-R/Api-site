let lastWeeksVaccinated = 0;
const peopleInLatvia = 1920000;
const vaccinationGoal = peopleInLatvia * 0.7;

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

    let vaccinatedSkaitsTotal = 0;
    let daysToSafety = 0;

    for (let ieraksts of Object.values(data.result.records)) {
      vaccinatedSkaitsTotal += ieraksts[ 'Vakcinēto personu skaits' ];
      if (dateIsLastWeek(new Date(ieraksts[ 'Vakcinācijas datums' ]))) {
        lastWeeksVaccinated += ieraksts[ 'Vakcinēto personu skaits' ];
      }
    }

    const sevenDaysVacAvg = lastWeeksVaccinated / 7;
    let vaccinesNeeded = vaccinationGoal - vaccinatedSkaitsTotal;
    daysToSafety = vaccinesNeeded / sevenDaysVacAvg;

    // console.log(daysToSafety.toFixed(2));
    // console.log(vaccinatedSkaitsTotal + " - vakcinēto personu skaits " );
    // console.log(lastWeeksVaccinated + " - vakcinēto personu skaits pedējās 7 dienās" );
    //alert('Total results found: ' + data.result.total);
    $('#vaccinated').append(vaccinatedSkaitsTotal);
    $('#safety-days').append(Math.ceil(daysToSafety));
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
    let testuSkaitsTotal = 0;


    for (let ieraksts of Object.values(data1.result.records)) {
      testuSkaitsTotal += ieraksts.TestuSkaits;

    }
    $('#tested').append(testuSkaitsTotal);
  }
});

const _MS_PER_DAY = 1000 * 60 * 60 * 24;
const todayDate = new Date();

// a and b are javascript Date objects
function dateIsLastWeek(a) {

  // Discard the time and time-zone information.
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY) < 7;
}

