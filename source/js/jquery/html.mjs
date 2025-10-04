import jq from 'https://esm.sh/jquery@3.7.1';

export const $html = jq('html');

export const lang = $html.attr('lang');
