
$(function(){
    window.setTimeout(function(){
        var mydiv = document.getElementById('Ghost_html_ori');
        var html = mydiv.value;

        // Compare the htmls here...
        // ........
        // ........
        // Comment the following line to see diffs
        document.body.removeChild(mydiv);

    },0);
});

