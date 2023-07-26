// 버튼 0 누르면
// 모든 버튼에 붙은 orange 클래스명 제거
// 버튼0에 orange 클래스명 추가
// 모든 div에 붙은 show 클래스명 제거
// div0에 show 클래스명 추가
let len = document.getElementsByClassName('tab-button').length;
// 또는
let len2 = $('.tab-button').length;
// for (let i = 0; i < len;  i++) {
//     openTab(i);
// }

function openTab(n) {
    $('.tab-button').eq(n).on('click', () => { 
        $('.tab-button').removeClass('orange');
        $('.tab-button').eq(n).addClass('orange');
        $('.tab-content').removeClass('show');
        $('.tab-content').eq(n).addClass('show');
    })
}
// 성능 개선 -> 이벤트리스너 줄이기 (이벤트 버블링 활용)
// 상위 태그에 이벤트 리스너 붙임

$('.list').click(function(e) {
    // if(e.target == document.querySelectorAll('.tab-button')[0]) {
    //     openTab(0)
    // }

    // dataset 문법 활용
    openTab(parseInt(e.target.dataset.id));
})

// $('.tab-button').eq(1).on('click', () => {
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(1).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(1).addClass('show');
// })

// $('.tab-button').eq(2).on('click', () => {
//      $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(2).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(2).addClass('show');
// })





// 좋은 관습 : 자주 쓰는 셀렉터 변수에 저장하기 -> 성능 상 좋다

// var btn = $('.tab-button');
// btn.eq(1).on('click', () => {
//     btn.removeClass('orange');
//     btn.eq(1).addClass('orange');
//     btn.removeClass('show');
//     btn.eq(1).addClass('show');
// })