function changeFontSize(type) {

    let ids = ["#implicationHashID"]

    ids.forEach(id => {

        let el = document.querySelector(id);

        let opacity = window.getComputedStyle(el, null).getPropertyValue("opacity")

        opacity = parseFloat(opacity);

        if (type === "mine") {
            el.style.opacity = (opacity = 0);
        }
    })

    let idsTwo = ["#implicationTextID"]

    idsTwo.forEach(id => {

        let el = document.querySelector(id);

        let opacity = window.getComputedStyle(el, null).getPropertyValue("font-size")

        opacity = parseFloat(opacity);

        if (type === "mine") {
            el.style.opacity = (fontSize = 1);
        }
    })

    let idsThree = ["#impactTextID"]

    idsThree.forEach(id => {

        let el = document.querySelector(id);

        let opacity = window.getComputedStyle(el, null).getPropertyValue("font-size")

        opacity = parseFloat(opacity);

        if (type === "mine") {
            el.style.opacity = (fontSize = 1);
        }
    })
}