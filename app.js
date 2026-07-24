// Dynamic UI and Logic Controller for ARNIS Pocket Edition

/**
 * Automatically adjusts input rules and caps dimensions based on the chosen Minecraft version.
 * Ensures strict constraints for Classic modes to protect game performance.
 */
function adjustLimits(version) {
    const widthInput = document.getElementById('width');
    const lengthInput = document.getElementById('length');
    
    if (version === 'classic') {
        // Enforce the strict historic 128x128 double slab / cloth canvas limits
        widthInput.value = 128;
        widthInput.max = 128;
        widthInput.disabled = true;

        lengthInput.value = 128;
        lengthInput.max = 128;
        lengthInput.disabled = true;
        
        console.log("Classic Mode locked: 128x128 boundaries enforced.");
    } else {
        // Restore standard boundaries for modern/advanced options
        widthInput.disabled = false;
        lengthInput.disabled = false;
        widthInput.max = 1099;
        lengthInput.max = 3097;
        
        // Reset defaults if previous values were stuck on old limits
        if (widthInput.value == 128) widthInput.value = 1099;
        if (lengthInput.value == 128) lengthInput.value = 3097;
    }
}

/**
 * Validates form fields and fires the block extraction sequence
 */
function startGeneration() {
    const location = document.getElementById('location').value.trim();
    const year = document.getElementById('timeline').value;
    const version = document.getElementById('version').value;
    const width = parseInt(document.getElementById('width').value, 10);
    const length = parseInt(document.getElementById('length').value, 10);

    // Basic Form Protection
    if (!location) {
        alert("📍 Error: Please enter a target Google Maps region or street location to process.");
        return;
    }

    // Input Constraint Checking
    if (version !== 'classic') {
        if (width > 1099 || length > 3097 || width < 1 || length < 1) {
            alert("📐 Dimension Limit Blown: Keeping blocks within 1,099 x 3,097 guarantees mobile device stability.");
            return;
        }
    }

    // Format log metadata for testing
    let logMessage = `Initializing Generation Loop:\n` +
                     `• Target: ${location}\n` +
                     `• Timeline Baseline: ${year}\n` +
                     `• Engine: ${version.toUpperCase()}\n` +
                     `• Scale Area: ${width}x${length} blocks`;

    alert(logMessage);
    
    // Future pipeline hooks go here (e.g., maps-api integration)
}
