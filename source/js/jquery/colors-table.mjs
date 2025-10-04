import 'https://esm.sh/datatables.net@2.3.4';

import jq from 'https://esm.sh/jquery@3.7.1';

import { lang } from './html.mjs';


export const $table = jq('#colors-table');

const language = {
  url: $table.data(`lang-url-${lang}`),
};

async function ajax(tabledata, done, settings) {
  const page = Math.floor(tabledata.start / tabledata.length) + 1;

  const params = new URLSearchParams({ page: page, per_page: tabledata.length });

  const url = new URL($table.data('ajax-url'));
  url.search = params.toString();

  try {
    const response = await fetch(url, { headers: { 'x-api-key': 'reqres-free-v1' } });

    if (response.ok === false) throw new Error(response.statusText);

    const json = await response.json();

    console.debug('response json:', json);

    done({
      draw: tabledata.draw,
      recordsTotal: json.total,
      recordsFiltered: json.total,
      data: json.data,
    });

  } catch (err) {
    console.error(err);

    done({
      draw: tabledata.draw,
      recordsTotal: 0,
      recordsFiltered: 0,
      data: [],
    });

  }

};

const columns = [
  {
    data: 'id',
    title: 'ID',
    render: function (data, type, row, meta) {
      if (type === 'display') {
        return `<i>${data}</i>`;
      }

      return data;
    }
  },
  {
    data: 'name',
    title: 'Name',
    render: function (data, type, row, meta) {
      if (type === 'display') {
        return `<i>${data}</i>`;
      }

      return data;
    }
  },
  {
    data: 'year',
    title: 'Year',
    render: function (data, type, row, meta) {
      if (type === 'display') {
        return `<i>${data}</i>`;
      }

      return data;
    }
  },
  {
    data: 'color',
    title: 'Color',
    render: function (data, type, row, meta) {
      if (type === 'display') {
        return `<i>${data}</i>`;
      }

      return data;
    }
  },
  {
    data: 'pantone_value',
    title: 'Pantone Value',
    render: function (data, type, row, meta) {
      if (type === 'display') {
        return `<i>${data}</i>`;
      }

      return data;
    }
  },
];

export const $datatable = $table
  .DataTable({
    serverSide: true,
    processing: true,
    paging: true,
    searching: true,
    ordering: true,
    language,
    pageLength: 2,
    lengthMenu: [2, 4, 6, 8, 10],
    ajax,
    columns,
  });
