
function showPopup() {
    document.getElementById("popup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function hidePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}
function showPopup() {
            document.getElementById('popup').style.display = 'block';
        }
        function nextPopup() {
            document.getElementById('popup').style.display = 'none';
            document.getElementById('popup2').style.display = 'block';
        }
        function showConfirmation() {
            document.getElementById('popup2').style.display = 'none';
            alert('Bilkul Sahi Jawab! 7 Crore(kisses)! 💖');
            generateHearts();
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        }
        function showWarning() {
            document.getElementById('warning').style.display = 'block';
            setTimeout(() => {
                document.getElementById('warning').style.display = 'none';
                document.getElementById('popup2').style.display = 'block';
            }, 6000);
        }
        function showYodaPopup(date) {
            const today = new Date();
            const targetDate = new Date(today.getFullYear(), 1, date);
            const diff = targetDate - today;
            
            if (diff > 0) {
                const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
                document.getElementById('yoda-text').innerText = "Patience, you must have. " + days + " days remain, hmmm.";
                document.getElementById('yoda-popup').style.display = 'block';
                setTimeout(() => {
                    document.getElementById('yoda-popup').style.display = 'none';
                }, 5000);
            }
        }
        function generateHearts() {
            for (let i = 0; i < 50; i++) {
                let heart = document.createElement("div");
                heart.innerHTML = "❤️";
                heart.classList.add("heart");
                heart.style.left = Math.random() * window.innerWidth + "px";
                heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // Random speed
                document.body.appendChild(heart);
                setTimeout(() => heart.remove(), 5000); // Remove hearts after animation
            }
        }
        function updateCountdown() {
            const targetDate = new Date("February 14, 2024 00:00:00").getTime();
            const now = new Date().getTime();
            const diff = targetDate - now;

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            document.getElementById("days").innerText = days;
            document.getElementById("hours").innerText = hours;
            document.getElementById("minutes").innerText = minutes;
            document.getElementById("seconds").innerText = seconds;
        }

        setInterval(updateCountdown, 1000);
        updateCountdown(); // Initial call
    