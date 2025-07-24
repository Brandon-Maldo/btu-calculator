function calculateBTU() {
    // Take user input for BTU calculations
    const gpm = Number(document.getElementById('gpm').value);
    const deltaT = Number(document.getElementById('deltaT').value);
    const fluid = document.getElementById('fluid').value;

    // Check if any fields are empty
    if (isNaN(gpm) || isNaN(deltaT)) {
        document.getElementById('result').innerText = "Please fill in all fields with numbers.";
        return;
    }

    // Set correction factor based on selected fluid
    let correctionFactor = 1.0;
    if (fluid === "glycol") {
        correctionFactor = 0.93;
    }

    // Get result and format
    const btu = 500 * gpm * deltaT * correctionFactor;
    const btuFormatted = Math.round(btu).toLocaleString();

    document.getElementById('result').innerText = `BTUs per hour: ${btuFormatted}`;
}