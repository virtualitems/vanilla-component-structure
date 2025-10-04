import jq from 'https://esm.sh/jquery@3.7.1';
import 'https://esm.sh/datatables.net@2.3.4';

const apiKey = 'reqres-free-v1';

const $html = jq('html');
const $table = jq('table');

const lang = $html.attr('lang');

const language = {
  url: $html.data(`lang-url-${lang}`)
};

$table.DataTable({
  serverSide: true,
  processing: true,
  paging: true,
  searching: true,
  ordering: true,
  language,
  pageLength: 2,
  lengthMenu: [2, 4, 6, 8, 10],
  ajax: function (tabledata, done, settings) {
    const page = Math.floor(tabledata.start / tabledata.length) + 1;

    const params = new URLSearchParams({ page: page, per_page: tabledata.length });

    const url = new URL($table.data('ajax-url'));
    url.search = params.toString();

    fetch(url, { headers: { 'x-api-key': apiKey } })
      .then(response => response.json())
      .then(json => {
        done({
          draw: tabledata.draw,
          recordsTotal: json.total,
          recordsFiltered: json.total,
          data: json.data,
        });
      })
      .catch(err => {
        console.error(err);
        done({
          draw: tabledata.draw,
          recordsTotal: 0,
          recordsFiltered: 0,
          data: [],
        });
      });
  },
  columns: [
    { data: 'id', title: 'ID' },
    { data: 'name', title: 'Name' },
    { data: 'year', title: 'Year' },
    { data: 'color', title: 'Color' },
    { data: 'pantone_value', title: 'Pantone Value' },
  ],
});
