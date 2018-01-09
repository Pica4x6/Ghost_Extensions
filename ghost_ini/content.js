
$(function() {
    var new_element = document.createElement('textarea');
    new_element.setAttribute("id", "Ghost_html_ori");
    new_element.style.display = 'none';
    new_element.value = document.documentElement.innerHTML
    document.body.appendChild(new_element)
 });
