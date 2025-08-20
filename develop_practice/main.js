let products;

$.get('./store.json')
.done((res) => {
    products = res.products;
    products.forEach((p) => {
        createProduct(p);
    });
})

$('#search').on('input',function(e){
    let keyword = e.target.value;
    let filterProducts = products.filter((p) => {
        return p.title.includes(keyword, 0) || p.brand.includes(keyword, 0);
    });
    $('.product').html('');
    filterProducts.forEach((p) => {
        createProduct(p, keyword);
    });
});

function createProduct(product, keyword) {
    let card = $('<div>').addClass('card').attr('style', 'width: 18rem');
    let img = $('<img>').attr('src', product.photo).addClass('card-img-top');
    let card_body = $('<div>').addClass('card-body');
    let title, company;
    if(keyword !== null && keyword !== undefined) {
        let titleHtml = createTitleHtml(product.title, keyword);
        let brandHtml = createTitleHtml(product.brand, keyword);
        title = $('<p>').addClass('card-text').addClass('title').html(product.title);
        company = $('<p>').addClass('card-text').addClass('company').html(product.brand);
    }else {
        title = $('<p>').addClass('card-text').addClass('title').html(product.title);
        company = $('<p>').addClass('card-text').addClass('company').html(product.brand);
    }
    let price = $('<p>').addClass('card-text').addClass('price').html(`가격 : ${product.price}`);
    let button = $('<button>').attr('type', 'button').addClass('btn btn-dark').text('담기');
    
    card_body.append(title).append(company).append(price).append(button);
    card.append(img).append(card_body);
    $('.product').append(card);
}

function createTitleHtml(value, keyword) {
    let tmp = '';
    let idx = value.indexOf(keyword);
    if(idx == -1) {
        return value;
    }else {
        tmp += value.subString(0, );
    }
}