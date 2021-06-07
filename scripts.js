$( document ).ready(function() {
    let number = $('.blog-post').length;
    let id1 = number;
    let id2 = number - 1;
    let id3 = number - 2;
    let posttitle1 = `post-title-${id1}`;
    let posttitle2 = `post-title-${id2}`;
    let posttitle3 = `post-title-${id3}`;
    $('#mini-blog-post-1').attr('data-blog-id', 'blog-post-' + id1);
    $('#mini-blog-post-2').attr('data-blog-id', 'blog-post-' + id2);
    $('#mini-blog-post-3').attr('data-blog-id', 'blog-post-' + id3);
    let clone1 = $('#' + posttitle1).clone().removeAttr('id').css('font-size', '15pt');
    let clone2 = $('#' + posttitle2).clone().removeAttr('id').css('font-size', '15pt');
    let clone3 = $('#' + posttitle3).clone().removeAttr('id').css('font-size', '15pt');
    $('#mini-blog-1-title').append(clone1);
    $('#mini-blog-2-title').append(clone2);
    $('#mini-blog-3-title').append(clone3);
    let post1 = `post-${id1}`;
    let post2 = `post-${id2}`;
    let post3 = `post-${id3}`;
    let text1 = $('#' + post1).clone().removeAttr('id').css('font-size', '9pt');
    let text2 = $('#' + post2).clone().removeAttr('id').css('font-size', '9pt');
    let text3 = $('#' + post3).clone().removeAttr('id').css('font-size', '9pt');
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

function scrollToBlog(blogID) {
    goBlog();
    let postNum = blogID.slice(-1);
    let scrollTo = `post-title-${postNum}`;
    $('#' + scrollTo).get(0).scrollIntoView({behavior: "smooth", block: "start"});
}

function openEmail() {
    window.open('mailto:joneshyrum@gmail.com');
}