// ============================================================
// MEMBERS CLUB FUNCTIONALITY
// ============================================================

export function initMembersClub() {
    const memberCtaButtons = document.querySelectorAll('.member-card__cta');

    memberCtaButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();

            // Get the membership plan name
            const memberCard = button.closest('.member-card');
            const planName = memberCard.querySelector('.member-card__name').textContent;

            // Add click feedback animation
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 100);

            // Show confirmation feedback
            const originalText = button.textContent;
            button.textContent = '✓ Plano selecionado!';
            button.style.backgroundColor = 'rgba(229, 9, 20, 0.3)';

            // Reset after 2 seconds
            setTimeout(() => {
                button.textContent = originalText;
                button.style.backgroundColor = '';
            }, 2000);

            // Log the selection (in a real app, this would send to a backend)
            console.log(`Plano selecionado: ${planName}`);
        });

        // Add hover feedback
        button.addEventListener('mouseenter', () => {
            button.style.transition = 'all 0.25s ease';
        });

        button.addEventListener('mouseleave', () => {
            if (button.textContent.includes('✓')) return;
            button.style.transition = 'all 0.15ms ease';
        });
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMembersClub);
} else {
    initMembersClub();
}
