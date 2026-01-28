function $(id) {
    return document.getElementById(id);
}

$("btn-ver").addEventListener("click", () => {
    const rutaCv = "assets/docs/CVGabrielFernandezWaisberg.pdf";
    
    window.open(rutaCv, "_blank");
});
