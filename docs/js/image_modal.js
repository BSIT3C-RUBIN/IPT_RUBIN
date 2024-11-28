//Image Click and modal update
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('imageModal');
    const modalImage = modal.querySelector('.modal-image');

    document.querySelectorAll('[data-bs-toggle="modal"]').forEach((thumbnail) => {
        thumbnail.addEventListener('click', function () {
            const imageSrc = this.getAttribute('data-bs-image');
            modalImage.setAttribute('src', imageSrc);
        });
    });
});