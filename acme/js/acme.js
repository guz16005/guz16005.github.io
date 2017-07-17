// Calls the Call function...
$(document).ready(function () {
    getData();
    $('#PWrapper').hide();
});

function getData() {
    $.ajax({
        url: "js/acme.json",
        dataType: "json",
        success: function (data) {
            console.log(data);
            $("#1").html(data.Navigation.link1);
            $("#2").html(data.Navigation.link2);
            $("#3").html(data.Navigation.link3);
            $("#4").html(data.Navigation.link4);
            $("#5").html(data.Navigation.link5);
        }
    });
}

$("#pageNav").on("click", "a", function (evt)
{
    evt.preventDefault();
    var link = $(this).text();
    console.log(link);
    while (link != 'Home')
     {
         $('#HomePageWrapper').hide();
        $('#PWrapper').show();
        $.ajax(
            {
            url: "js/acme.json",
            dataType: "json",
            success: function (data) {
                console.log(data);
                var picPath=(data[link].path);
                console.log(picPath);
                $('title').replaceWith("<title>" + link + ' | Acme' + "'</title>");
                $('#contentTitle').text(data[link].name);
                $("#productImg").html("<img src='" + picPath + "'alt=' + link + '>");


            }
        });
    }
});
