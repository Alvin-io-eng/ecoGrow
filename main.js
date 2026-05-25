window.addEventListener('scroll', () => {
    const heroBg = document.getElementById('hero-bg');
    if (heroBg) {
        const scrollVal = window.scrollY;
        heroBg.style.transform = `scale(${1.05 + scrollVal * 0.0003}) translateY(${scrollVal * 0.05}px)`;
    }
});

const amountInput = document.getElementById('donation-amount');
const allocationInputs = document.querySelectorAll('.allocation-input');
const allocationSum = document.getElementById('allocation-sum');
const allocationNote = document.getElementById('allocation-note');

if (amountInput && allocationInputs.length && allocationSum) {
    const updateAllocations = () => {
        let total = 0;
        allocationInputs.forEach((input) => {
            total += Number(input.value);
        });
        allocationSum.textContent = `${total}%`;
        allocationNote.textContent = total === 100
            ? 'Allocation totals 100%. This distribution will guide your contribution exactly where you choose.'
            : 'Allocation does not total 100%. Your donation will be distributed proportionally.';
    };
    allocationInputs.forEach((input) => input.addEventListener('input', updateAllocations));
    updateAllocations();
}
