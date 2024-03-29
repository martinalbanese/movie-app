export const createCustomButtons = () => {
    const buttonSection = document.getElementById('buttonSection');

    // Crea tre bottoni con icone diverse
    const icons = ['bi-camera-reels', 'bi-tv'];
    const buttonColors = ['btn-primary', 'btn-secondary'];

    // Array di URL delle pagine HTML desiderate
    const pageUrls = ['movie.html', 'series.html'];

    for (let i = 0; i < 2; i++) {
        const button = document.createElement('button');
        button.classList.add('btn', 'custom-button', buttonColors[i]);

        // Aggiungi icona
        const iconSpan = document.createElement('span');
        iconSpan.classList.add('bi', 'custom-icon', icons[i]);
        button.appendChild(iconSpan);

        // Aggiungi evento di click per reindirizzare alla pagina HTML corrispondente
        button.addEventListener('click', () => {
            window.location.href = pageUrls[i];
        });

        buttonSection.appendChild(button);
    }
};