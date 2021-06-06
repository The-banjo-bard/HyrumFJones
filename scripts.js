$( document ).ready(function() {
    let number = $('.blog-post').length;
    console.log(number)
    let posttitle1 = `post-title-${number}`;
    let posttitle2 = `post-title-${number - 1}`;
    let posttitle3 = `post-title-${number - 2}`;
    let clone1 = $('#' + posttitle1).clone().css('font-size', '15pt');
    let clone2 = $('#' + posttitle2).clone().css('font-size', '15pt');
    let clone3 = $('#' + posttitle3).clone().css('font-size', '15pt');
    $('#mini-blog-1-title').append(clone1);
    $('#mini-blog-2-title').append(clone2);
    $('#mini-blog-3-title').append(clone3);
    let post1 = `post-${number}`;
    let post2 = `post-${number - 1}`;
    let post3 = `post-${number - 2}`;
    let text1 = $('#' + post1).clone().css('font-size', '9pt');
    let text2 = $('#' + post2).clone().css('font-size', '9pt');
    let text3 = $('#' + post3).clone().css('font-size', '9pt');
    $('#mini-blog-text-1').append(text1);
    $('#mini-blog-text-2').append(text2);
    $('#mini-blog-text-3').append(text3);
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

function showAbout() {
    $('#hobbies-info').css('display', 'none');
    $('#prof-info').css('display', 'none');
    $('#about-info').css('display', 'flex');
}

function showProf() {
    $('#about-info').css('display', 'none');
    $('#hobbies-info').css('display', 'none');
    $('#prof-info').css('display', 'flex');
}

function showHobbies() {
    $('#about-info').css('display', 'none');
    $('#prof-info').css('display', 'none');
    $('#hobbies-info').css('display', 'flex');
}

function openEmail() {
    window.open('mailto:joneshyrum@gmail.com');
}