$( document ).ready(function() {
    let number = $('.blog-post').length;
    console.log(number)
    let post1 = `post-title-${number}`;
    let post2 = `post-title-${number - 1}`;
    let post3 = `post-title-${number - 2}`;
    let clone1 = $('#' + post1).clone();
    let clone2 = $('#' + post2).clone();
    let clone3 = $('#' + post3).clone();
    $('#mini-blog-post-1').append(clone1);
    $('#mini-blog-post-2').append(clone2);
    $('#mini-blog-post-3').append(clone3);
});

function goHome() {
    $('#my-books-page').css('display', 'none');
    $('#blog-page').css('display', 'none');
    $('#updates-page').css('display', 'none');
    $('#contact-page').css('display', 'none');
    $('#home-page').css('display', 'inline-block');
}

function goMyBooks() {
    $('#home-page').css('display', 'none');
    $('#blog-page').css('display', 'none');
    $('#updates-page').css('display', 'none');
    $('#contact-page').css('display', 'none');
    $('#my-books-page').css('display', 'inline-block');
}

function goBlog() {
    $('#my-books-page').css('display', 'none');
    $('#home-page').css('display', 'none');
    $('#updates-page').css('display', 'none');
    $('#contact-page').css('display', 'none');
    $('#blog-page').css('display', 'inline-block');
}

function goUpdates() {
    $('#my-books-page').css('display', 'none');
    $('#blog-page').css('display', 'none');
    $('#home-page').css('display', 'none');
    $('#contact-page').css('display', 'none');
    $('#updates-page').css('display', 'inline-block');
}

function goContact() {
    $('#my-books-page').css('display', 'none');
    $('#blog-page').css('display', 'none');
    $('#updates-page').css('display', 'none');
    $('#home-page').css('display', 'none');
    $('#contact-page').css('display', 'inline-block');
}

function openEmail() {
    window.open('mailto:joneshyrum@gmail.com');
}