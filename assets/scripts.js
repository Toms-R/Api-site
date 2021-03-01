var data = {
  resource_id: '51725018-49f3-40d1-9280-2b13219e026f'
};
$.ajax({
  url: 'https://data.gov.lv/dati/lv/api/3/action/datastore_search',
  data: data,
  dataType: 'json',
  success: function(data) {
    alert('Total results found: ' + data.result.total)
  }
});
