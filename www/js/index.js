function contains(text_one , text_two){
    if (text_one.indexOf(text_two) != -1)
        return true;
}
$("#searchText").keyup(function(){

    var searchText = $("#searchText").val().toLowerCase();

    $("ul li").each(function () {
        if (!contains($(this).text().toLowerCase(), searchText))
            $(this).hide();
        else
            $(this).show();

    });
});