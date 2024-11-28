document.querySelectorAll('.randomize').forEach(skill => {
    const originalText = skill.textContent; // Store the original text
    const hoverText = skill.getAttribute('data-hover-text');
    let interval; // Declare interval globally for reference

    skill.addEventListener('mouseenter', () => {
        let iteration = 0;

        // Clear any previous interval in case of fast mouse movement
        clearInterval(interval);

        // Randomize letters
        interval = setInterval(() => {
            const randomized = hoverText
                .split('')
                .map((letter, index) => {
                    if (index < Math.floor(iteration)) {
                        return hoverText[index]; // Reveal correct letters
                    }
                    return String.fromCharCode(65 + Math.random() * 26); // Random letter
                })
                .join('');

            skill.textContent = randomized;

            // Progress to the final text quickly
            if (iteration >= hoverText.length) {
                clearInterval(interval);
                skill.textContent = hoverText;
            }

            iteration += 0.5; // Speed up the transition
        }, 20); // Faster update interval
    });

    // Reset to the original text when mouse leaves
    skill.addEventListener('mouseleave', () => {
        clearInterval(interval); // Stop the randomization
        skill.textContent = originalText; // Reset to original text
    });
});
