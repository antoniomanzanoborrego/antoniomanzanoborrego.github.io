document.addEventListener("DOMContentLoaded", () => {
    const loadComponent = (id, file) => {
        fetch(file)
            .then(response => response.ok ? response.text() : Promise.reject())
            .then(data => document.getElementById(id).innerHTML = data)
            .catch(() => console.error(`Error al cargar ${file}. ¿Estás usando Live Server?`));
    };

    loadComponent('header-container', 'header.html');
    loadComponent('footer-container', 'footer.html');
});

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-img");
    const closeBtn = document.getElementById("modal-close");
    const zoomableImages = document.querySelectorAll(".framed-image");

    zoomableImages.forEach(img => {
        img.addEventListener("click", () => {
            modal.style.display = "flex";
            modalImg.src = img.src;
        });
    });

    const closeModal = () => {
        modal.style.display = "none";
    };

    closeBtn.addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
    });
});