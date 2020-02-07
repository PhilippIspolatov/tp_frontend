const frontendElement =
    document.getElementsByClassName('frontend')[0];
frontendElement.addEventListener('mouseover', () => {
    frontendElement.style.opacity = 0;
});

frontendElement.addEventListener('mouseleave', () => {
    frontendElement.style.opacity = 1;
});