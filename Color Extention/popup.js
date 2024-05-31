document.addEventListener('DOMContentLoaded', () => {
    const colorPicker = document.getElementById('colorPicker');
    const colorDisplay = document.getElementById('colorDisplay');
    const colorCode = document.getElementById('colorCode');

    colorPicker.addEventListener('input', (event) => {
        const color = event.target.value;
        colorDisplay.style.backgroundColor = color;
        colorCode.textContent = `Selected Color: ${color}`;
    });
});