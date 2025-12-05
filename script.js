// Scroll to letter section
document.getElementById("start").addEventListener("click", () => {
    document.getElementById("letter").scrollIntoView({ behavior: "smooth" });
});

// Letter text typing
const letter = `
Hey there bitchhhh ❤ (saleh) 
Happy birthday ,💗 firstly wish you many many happy returns of the day ✨🎉 , you are one of the kindest souls i ever met 💕, you, i want you to achieve every single thing you want in your life✨ ,you always make me feel welcoming and respectful  🥹,you are the most hardworking women i ever seen😌, I'm so proud of you , I'm glad that I have you as my friend ( like literally) ,you make me laugh as hell 🤣,I wish we will spend more years with laughter, fun and  together moments that will enjoy in our vintage year 😁 i always want to irritate you,there is so much to say but I'm  out of words , but I'll be always there for you always no matter what 💕
Happy birthday sagarvaa queen 👑
`;

let i = 0;
function type() {
    if (i < letter.length) {
        document.getElementById("typed").innerHTML += letter.charAt(i);
        i++;
        setTimeout(type, 40);
    }
}
setTimeout(type, 800);

// Birthday countdown
function updateCountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();
    let birthday = new Date(currentYear, 11, 5); // December 5th (month is 0-indexed)

    // If birthday has passed this year, set to next year
    if (now > birthday) {
        birthday = new Date(currentYear + 1, 11, 5);
    }

    const timeDiff = birthday - now;

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    const countdownDisplay = document.getElementById("countdown-display");
    countdownDisplay.innerHTML = `
        <div class="countdown-item">
            <span class="countdown-number">${days}</span>
            <span class="countdown-label">Days</span>
        </div>
        <div class="countdown-item">
            <span class="countdown-number">${hours}</span>
            <span class="countdown-label">Hours</span>
        </div>
        <div class="countdown-item">
            <span class="countdown-number">${minutes}</span>
            <span class="countdown-label">Minutes</span>
        </div>
        <div class="countdown-item">
            <span class="countdown-number">${seconds}</span>
            <span class="countdown-label">Seconds</span>
        </div>
    `;
}

// Update countdown immediately and then every second
updateCountdown();
setInterval(updateCountdown, 1000);

// Heart animation
function createHeart() {
    const heartsContainer = document.querySelector('.hearts');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDelay = Math.random() * 6 + 's';
    heart.style.animationDuration = (Math.random() * 2 + 4) + 's';
    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

// Create hearts continuously
function startHeartAnimation() {
    createHeart();
    setTimeout(startHeartAnimation, Math.random() * 2000 + 1000); // Random interval between 1-3 seconds
}

// Start heart animation on page load
startHeartAnimation();

// Surprise popup
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const popup = document.getElementById('surprise-popup');
        popup.classList.add('show');
    }, 3000); // Show popup after 3 seconds
});

document.getElementById('close-popup').addEventListener('click', () => {
    const popup = document.getElementById('surprise-popup');
    popup.classList.remove('show');
});


