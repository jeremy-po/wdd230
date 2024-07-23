function displayBanner() {
    const banner = document.getElementById('banner');
    const today = new Date();
    const dayOfWeek = today.getDay();
    
    if (dayOfWeek === 1 || dayOfWeek === 2 || dayOfWeek === 3) { 
        banner.style.display = 'block';
    }
}

function closeBanner() {
    document.getElementById('banner').style.display = 'none';
}

document.getElementById('close-banner').addEventListener('click', closeBanner);

displayBanner();
