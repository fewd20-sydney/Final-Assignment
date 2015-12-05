$(document).ready(function() {

    $('.noRefresh').click(function(event){
        event.preventDefault();
    });

    $('.noLink').click(function(event){
        alert("Sorry! This link is not available at this time!")
        event.preventDefault();
    });

    $('.hamButt').click(function() {
         $('.hamButt').toggleClass('expanded').siblings('div').slideToggle();
    });

    var cosplayArray = ['Anime/Manga', 'Video Games', 'Sci-fi/Comics', 'Fantasy'];
    // list of cosplay options for user to filter through

    for(var i = 0; i < cosplayArray.length; i++){
         var results = $('#cosplayMenu').append('<option>'+cosplayArray[i]+'</option>');   
    }
    //loop items

    $('#cosplayMenu').change(function(){
            selected = $('#cosplayMenu option:selected').val();


                if (selected === "Anime/Manga") {
                    $('.anime').show();
                    $('.vgs').hide();
                    $('.scifi').hide();
                    $('.fanta').hide();

                } else if (selected === "Video Games") {
                    $('.anime').hide();
                    $('.vgs').show();
                    $('.scifi').hide();
                    $('.fanta').hide();

                } else if (selected === "Sci-fi/Comics") {
                    $('.anime').hide();
                    $('.vgs').hide();
                    $('.scifi').show();
                    $('.fanta').hide();

                } else if (selected === "Fantasy") {
                    $('.anime').hide();
                    $('.vgs').hide();
                    $('.scifi').hide();
                    $('.fanta').show();

                } else {
                    $('.anime').show();
                    $('.vgs').show();
                    $('.scifi').show();
                    $('.fanta').show();
                }
    });
  

    $('.readmore').click(function(){
        $('#show-this-on-click').slideDown(500);
        $('.readmore').hide();
        $('.readless').show();
    });

    $('.readless').click(function(){
        $('#show-this-on-click').slideUp(500);
        $('.readless').delay(500).hide(0);
        $('.readmore').delay(500).show(0)
    });

 });



