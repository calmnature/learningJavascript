var car2 = {name: '소나타', price: [50000, 3000, 4000]}
$('#name').html(car2.name);
$('#price').html(car2.price[0]);

// $('.tab-button').eq(0).on('click', function(){
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(0).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(0).addClass('show');
// });

// $('.tab-button').eq(1).on('click', function(){
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(1).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(1).addClass('show');
// });

// $('.tab-button').eq(2).on('click', function(){
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(2).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(2).addClass('show');
// });

// var i로 선언하게 되면 반복문이 돌아가지 않음
// 변수의 범위 문제
// let length = $('.tab-button').length;
// for(let i = 0; i < length; i++) {
//     $('.tab-button').eq(i).on('click', function(){
//         탭열기(i);
//     });
// }

$('.list').click(function(e){
    // 지금 누른 게 버튼 0이면 탭열기(0)
    // 지금 누른 게 버튼 1이면 탭열기(1)
    // 지금 누른 게 버튼 2이면 탭열기(2)
    // if(e.target == document.querySelectorAll('.tab-button')[0]){
    //     탭열기(0);
    // }else if(e.target == document.querySelectorAll('.tab-button')[1]){
    //     탭열기(1);
    // }else if(e.target == document.querySelectorAll('.tab-button')[2]){
    //     탭열기(2);
    // }else if(e.target == document.querySelectorAll('.tab-button')[3]){
    //     탭열기(3);
    // }
    탭열기(e.target.dataset.id);
});

function 탭열기(숫자) {
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(숫자).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(숫자).addClass('show');
}

// $('.tab-button').on('click', function(){
//     $('.tab-button').removeClass('orange');
//     $(this).addClass('orange');
//     $('.tab-content').removeClass('show');
//     let idx = $('.tab-button').index(this);
//     $('.tab-content').eq(idx).addClass('show');
// });

