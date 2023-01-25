import $ from 'jquery';
import 'jquery'
import { tns } from "./node_modules/tiny-slider/src/tiny-slider";

//check to ready DOM structure

$(document).ready(function() {
    $('.list-item').hover(function() {
        $(this).toggleClass('active');

    });

    $('.list-item:eq(2)').on('click', function() {
        $('.image:even').fadeToggle();

    });

    $('.list-item:eq(4)').on('click', function() {
        $('.image:odd').animate({
            opacity: 'toggle',
            height: 'toggle'
        }, 2000)

    });

    tns({
        container: '.wrapper',
        items: 1,
        slideBy: 'page',
        autoplay: true
      });
});

console.log(btn);