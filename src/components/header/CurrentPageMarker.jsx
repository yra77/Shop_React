

export const CurrentPageMarker = (addClass, location) => {
    const listChild = addClass.current.children;

    for (let i = 0; i < listChild.length; i++) {

        const element = listChild[i];
        let path = element.href.split('/');

        if (location.pathname === '/' + path[path.length - 1] || location.pathname === '/') {
            element.classList.add("currentPageMarker");
        }
        else  // element.className = ('');
        {
            element.classList.remove("currentPageMarker");
        } 
    }
}