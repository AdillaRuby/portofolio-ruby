// Array untuk menyimpan riwayat perhitungan
let history = [];

document.getElementById('carbonForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Mengambil nilai dari input
    const electricity = document.getElementById('electricityUsage').value;
    const gasoline = document.getElementById('gasolineUsage').value;

    // Menghitung jejak karbon
    const carbonElectricity = electricity * 0.85; // Faktor emisi listrik rata-rata (kg CO2/kWh)
    const carbonGasoline = gasoline * 2.31; // Faktor emisi bensin rata-rata (kg CO2/liter)

    const totalCarbon = carbonElectricity + carbonGasoline;

    // Menyimpan hasil ke dalam riwayat
    history.push(totalCarbon.toFixed(2));

    // Menampilkan hasil
    displayResult(totalCarbon);
});

// Fungsi untuk menampilkan hasil dan riwayat
function displayResult(totalCarbon) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>Jejak karbon bulanan Anda adalah ${totalCarbon.toFixed(2)} kg CO2.</p>`;
    
    // Menampilkan riwayat
    if (history.length > 0) {
        resultDiv.innerHTML += '<h3>Riwayat Perhitungan:</h3><ul>';
        history.forEach((carbon, index) => {
            resultDiv.innerHTML += `<li>Perhitungan ${index + 1}: ${carbon} kg CO2</li>`;
        });
        resultDiv.innerHTML += '</ul>';
    }

    // Menampilkan hasil dari perhitungan 1 dan 2 jika ada
    if (history.length >= 2) {
        const lastTwoResults = history.slice(-2); // Ambil dua hasil terakhir
        const sum = (parseFloat(lastTwoResults[0]) + parseFloat(lastTwoResults[1])).toFixed(2); // Jumlahkan dua hasil terakhir
        resultDiv.innerHTML += `<p>Hasil dari perhitungan sebelumnya: ${lastTwoResults[0]} kg CO2 dan ${lastTwoResults[1]} kg CO2.</p>`;
        resultDiv.innerHTML += `<p>Total dari Perhitungan 1 dan 2: ${sum} kg CO2.</p>`;
    } else if (history.length === 1) {
        resultDiv.innerHTML += `<p>Hasil dari perhitungan sebelumnya: ${history[0]} kg CO2.</p>`;
    }
}

function toggleMenu() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('show');
}
