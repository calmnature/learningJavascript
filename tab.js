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
//         $('.tab-button').removeClass('orange');
//         $('.tab-button').eq(i).addClass('orange');
//         $('.tab-content').removeClass('show');
//         $('.tab-content').eq(i).addClass('show');
//     });
// }

$('.tab-button').on('click', function(){
    $('.tab-button').removeClass('orange');
    $(this).addClass('orange');
    $('.tab-content').removeClass('show');
    let idx = $('.tab-button').index(this);
    $('.tab-content').eq(idx).addClass('show');
});
