/**
 * shpService.js
 * CWH
 */
const params = new URLSearchParams(location.search);
let sw = params.get('sw') == null? '' : params.get('sw'); // searchWord(검색어)
let pg = params.get('pg') == null? 1 : params.get('pg'); // page
let sc = params.get('sc') == null? '' : params.get('sc'); // showCase (정렬케이스)
let cg = params.get('cg') == null? '' : params.get('cg'); // category

let st = params.get('st') == null? 0 : params.get('st');
let en = params.get('en') == null? 9999999 : params.get('st');

console.log(sc);
let vo = {'sw':'', 'pg':1, 'sc':'', 'sc': '', 'cg': ''};
const svc = {
    // list print
    shopList(vo, successCall, errorCall) {
        url = 'prodShopList.do?';
        url += 'sw=' + vo.sw;
        url += '&pg=' + vo.pg;
        url += '&sc=' + vo.sc;
        url += '&cg=' + vo.cg;
        fetch(url)
        .then(resolve => resolve.json())
        .then(successCall)
        .catch(errorCall);
    },
    // page print
    pagingList(vo, successCall, errorCall){
        url = 'prodCount.do?';
        url += 'sw=' + vo.sw;
        url += '&pg=' + vo.pg;
        url += '&sc=' + vo.sc;
        url += '&cg=' + vo.cg;
        fetch(url)
        .then(resolve => resolve.json())
        .then(successCall)
        .catch(errorCall);
    },
    // category print
    getCategory(successCall, errorCall){
        fetch('categoryCount.do')
        .then(resolve => resolve.json())
        .then(successCall)
        .catch(errorCall);
    }
}