let products;

// 서버 데이터로 엘리먼트 생성
$.get('./store.json')
.done((res) => {
    products = res.products;
    products.forEach((p, i) => {
        createProduct(p, i);
    });
})

// 검색어 입력 시 새로 HTML을 그리고, 검색어와 일치하는 상품명 or 회사명에 노란 배경 추가
$('#search').on('input',function(e){
    let keyword = e.target.value;
    let filterProducts = products.filter((p) => {
        return p.title.includes(keyword, 0) || p.brand.includes(keyword, 0);
    });
    $('.product').html('');
    filterProducts.forEach((p, i) => {
        createProduct(p, i, keyword);
    });
});

// 엘리먼트 생성 함수
function createProduct(product, index, keyword) {
    let card = $('<div>').addClass('card').attr('style', 'width: 18rem').attr('draggable', true).attr('id', `product-${index}`);
    let img = $('<img>').attr('src', product.photo).addClass('card-img-top');
    let card_body = $('<div>').addClass('card-body');
    let title, company;
    if(keyword !== null && keyword !== undefined) {
        let titleHtml = createHtml(product.title, keyword);
        let brandHtml = createHtml(product.brand, keyword);
        title = $('<p>').addClass('card-text').addClass('title').html(titleHtml);
        company = $('<p>').addClass('card-text').addClass('company').html(brandHtml);
    }else {
        title = $('<p>').addClass('card-text').addClass('title').html(product.title);
        company = $('<p>').addClass('card-text').addClass('company').html(product.brand);
    }
    let price = $('<p>').addClass('card-text').addClass('price').html(`가격 : ${product.price}`);
    let button = $('<button>').attr('type', 'button').addClass('btn btn-dark').text('담기').on('click', function() {
        
    });
    
    card_body.append(title).append(company).append(price).append(button);
    card.append(img).append(card_body);
    $('.product').append(card);
}

// 검색어와 일치하는 부분만 노란색 배경을 추가해주는 함수
function createHtml(value, keyword) {
    let res = '';
    let idx = value.indexOf(keyword);
    if(idx == -1) {
        return value;
    }else {
        res += value.substring(0, idx);
        res += `<span style='background: yellow;'>${value.substring(idx, idx + keyword.length)}</span>`
        res += value.substring(idx + keyword.length)
        return res;
    }
}

// 장바구니 담기
$(document).on('click', '.btn', function(e){
    let card = $(this).closest('.card')[0];
    let drop = $('#dragdrop');
    if(drop.find('#init').length > 0) drop.html('');
    if(drop.find(`#${card.id}`).length > 0) return;
    $('#dragdrop').append(card.cloneNode(true, true));
});

// Drag & Drop 기능
// Ajax 시점 문제로 동적으로 생성되는 요소에는 이벤트 위임을 권장한다고 함
$(document).on('dragstart', '.card', function(e) {
    e.originalEvent.dataTransfer.setData('targetId', e.target.id);
});

$(document).on('dragover', '#dragdrop', function(e){
    e.preventDefault();
}).on('drop', '#dragdrop', function(e) {
    e.preventDefault();
    if($(this).find('#init').length > 0) {
        $(this).html('');
    }
    let targetId = e.originalEvent.dataTransfer.getData('targetId');
    if($(this).find(`#${targetId}`).length > 0) return;
    let deepCopy = $(`#${targetId}`)[0].cloneNode(true, true);
    e.target.append(deepCopy);
});