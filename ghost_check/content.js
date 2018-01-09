$(function(){
    window.setTimeout(function(){
        var mydiv = document.getElementById('Ghost_html_ori');
        var html = mydiv.value;

        // Compare the htmls here...
        // ........
        // ........
        // Comment the following line to see diffs
        document.body.removeChild(mydiv);
        document.documentElement.innerHTML = html

        var new_element = document.createElement('textarea');
        new_element.setAttribute("id", "Ghost_html_ori");
        new_element.style.display = 'none';
        new_element.value = document.documentElement.innerHTML
        document.body.appendChild(new_element)

    },1200);

});

