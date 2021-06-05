$( document ).ready(function() {
    console.log('started one')
    let number = $('.blog-post').length;
    console.log(number)
    let post1 = `blog-title-${number}`;
    let post2 = `blog-title-${number - 1}`;
    let post3 = `blog-title-${number - 2}`;
    let clone1 = $('#' + post1).clone();
    let clone2 = $('#' + post2).clone();
    let clone3 = $('#' + post3).clone();
    $('#mini-blog-1-title').append(clone1);
    $('#mini-blog-2-title').append(clone2);
    $('#mini-blog-3-title').append(clone3);
});