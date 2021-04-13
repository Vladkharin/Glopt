function link (selector) {
    const links = document.querySelectorAll(selector);

    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#ec644b'; 
        });
    
        link.addEventListener('mouseout', () => {
            link.style.color = '#ffffff'; 
        });
    });
}

export default link;