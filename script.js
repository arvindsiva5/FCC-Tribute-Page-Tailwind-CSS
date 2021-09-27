$(document).ready(function(){
    $('body').addClass('font-mono');
    $('main').addClass('bg-blue-50 p-8 m-0 text-indigo-800 text-lg text-center dark: bg-black');
    $('#name').text('Dr. Norman Borlaug').addClass('font-extrabold text-4xl p-3 animate__animated animate__backInDown');
    $('header > p').text('The man who saved a billion lives').addClass('animate__animated animate__backInDown');
    $('#image-div').addClass('text-center p-4 m-0 bg-blue-100 animate__animated animate__backInDown');
    $('#image').addClass('max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl rounded-2xl border-gray-400 border-2');
    $('#img-caption').text('Dr. Norman Borlaug, third from the left, trains biologists in Mexico on how to increase wheat yields - part of his life-long war on hunger').addClass('text-base italic p-2');
    $('#tribute-info').addClass('p-3 bg-blue-800 lg:p-10')
    $('#tribute-info > h2').text('Here\'s a time line of Dr. Borlaug\'s life:').addClass('text-2xl text-center p-2 font-bold text-gray-50');
    $('#tribute-info-list').addClass('p-2 bg-blue-200 rounded-lg shadow-lg lg:text-justify lg:p-10');
    $('#tribute-info-list > ul > li > b').addClass('text-xl')
    $('#tribute-info-list > ul > li').hover(
      function(){
          $(this).addClass('text-2xl');
        },
      function(){
          $(this).removeClass('text-2xl');
        }   
    );   
    $('#extra-tribute-info').addClass('bg-green-100 p-5');
    $('#tribute-info-quote').html('<p>"Borlaug\'s life and achievement are testimony to the far-reaching contribution that one man\'s towering intellect, persistence and scientific vision can make to human peace and progress."<br><br>-- Indian Prime Minister Manmohan Singh</p>').addClass('bg-green-600 p-3 text-gray-50 text-lg italic rounded-lg shadow-lg');
    $('#tribute-info-wiki').addClass('text-center p-5');
    $('#tribute-link').addClass('text-green-800 font-bold');    
  });
  