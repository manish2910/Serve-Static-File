function toggleMenu()
{
    let menuLinkHandler = document.getElementById('menuLinkHandler');
    let menuHeading = document.getElementById('menuHeading');
    let menuLink = document.getElementById('menuLink');
    if(menuLinkHandler.classList.contains('change') && menuLink.classList.contains('open_links') && menuHeading.classList.contains('open_links_padding_bottom'))
    {
        menuLinkHandler.classList.remove('change');
        menuHeading.classList.remove('open_links_padding_bottom');
        menuLink.classList.remove('open_links');
        menuLink.classList.add('left_circle');
    }
    else
    {
        menuLink.classList.remove('left_circle');
        menuLink.classList.add('open_links');
        menuLinkHandler.classList.add('change');
        menuHeading.classList.add('open_links_padding_bottom');
    }
}
