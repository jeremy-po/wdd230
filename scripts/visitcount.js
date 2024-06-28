document.addEventListener('DOMContentLoaded', () => {
    let visitCount = localStorage.getItem('visitCount') || 0;
    visitCount++;
    localStorage.setItem('visitCount', visitCount);
    document.getElementById('counter').textContent = visitCount;
});
