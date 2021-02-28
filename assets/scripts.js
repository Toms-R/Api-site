var data = {
  resource_id: 'd499d2f0-b1ea-4ba2-9600-2c701b03bd4a'
};
$.ajax({
  url: 'https://data.gov.lv/dati/lv/api/3/action/datastore_search',
  data: data,
  dataType: 'jsonp',
  success: function(data) {
    alert('Total results found: ' + data.result.total)
  }
});
