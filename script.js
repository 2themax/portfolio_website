document.addEventListener('DOMContentLoaded', () => {
    const colors = ['#ff00cc', '#ff3300', '#00ffcc', '#ffff00', '#ff00ff', '#00ccff', '#ffcc00'];
    const body = document.body;

    // Change background color every few seconds
    setInterval(() => {
        const randomColor1 = colors[Math.floor(Math.random() * colors.length)];
        const randomColor2 = colors[Math.floor(Math.random() * colors.length)];
        body.style.background = `linear-gradient(45deg, ${randomColor1}, ${randomColor2})`;
    }, 4000);

    // Interactive Ball Effect
    const ball = document.querySelector('.bouncing-ball');
    let ballDirection = 1;

    setInterval(() => {
        ballDirection *= -1;
        ball.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        ball.style.transform = `scale(${Math.random() * 1.5 + 0.5}) translateX(-50%)`;
    }, 2000);

    // Add a slight mouse movement effect to header
    const header = document.querySelector('header');
    document.addEventListener('mousemove', (event) => {
        const x = (window.innerWidth - event.pageX) / 50;
        const y = (window.innerHeight - event.pageY) / 50;
        header.style.transform = `translate(${x}px, ${y}px)`;
    });
});

