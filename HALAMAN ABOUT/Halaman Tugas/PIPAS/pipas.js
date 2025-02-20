document.querySelector('.burger-icon').addEventListener('click', function() {
    document.getElementById('menu').classList.toggle('active');
});

function toggleMenu() {
    var menu = document.getElementById('menu');
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

function calculateCarbon() {
    const distance = document.getElementById('distance').value;
    const fuel = document.getElementById('fuel').value;
    const emissionFactor = 2.31; // Faktor emisi untuk bensin (kg CO2 per liter)

    if (distance && fuel) {
        const totalEmissions = (distance / 100) * fuel * emissionFactor;
        document.getElementById('result').textContent = `Total emisi CO2: ${totalEmissions.toFixed(2)} kg`;
    } else {
        document.getElementById('result').textContent = 'Mohon isi semua kolom.';
    }
}
