function calculateBTU() {
    const gpm = Number(document.getElementById('gpm').value);
    const deltaT = Number(document.getElementById('deltaT').value);
    const fluid = document.getElementById('fluid').value;

    if (isNaN(gpm) || isNaN(deltaT)) {
        document.getElementById('result').innerText = "Please fill in all fields with numbers.";
        return;
    }

    // Set correction factor based on selected fluid
    let correctionFactor = 1.0;
    if (fluid === "glycol") {
        correctionFactor = 0.93;
    }

    const btu = 500 * gpm * deltaT * correctionFactor;

    document.getElementById('result').innerText = `BTUs per hour: ${btu.toFixed(2)}`;
}