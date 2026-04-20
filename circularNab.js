const menu = document.getElementById('menuContainer');
        const bubbles = document.querySelectorAll('.bubble');
        const checkbox = document.getElementById('mainButton');

        checkbox.addEventListener('change', () => {

            const rect = menu.getBoundingClientRect();

            let direction = 'bottom';

            let startAngle = 0;

            const step = 90 / (bubbles.length - 1);

            bubbles.forEach((bubble, i) => {

                const angle = startAngle + i * step;
                const rad = angle * Math.PI / 180;

                const x = Math.cos(rad) * 166;
                const y = Math.sin(rad) * 120;

                const label = bubble.querySelector('.label');

                if (checkbox.checked) {

                    bubble.style.transform = `translate(${x}px, ${y}px)`;

                    // Smart label flip
                    if (x < 0) {
                        label.style.left = "auto";
                        label.style.right = "100%";
                        label.style.transform = "translate(-10px, -50%)";
                    } else {
                        label.style.left = "100%";
                        label.style.right = "auto";
                        label.style.transform = "translate(10px, -50%)";
                    }

                } else {
                    bubble.style.transform = `translate(0, 0)`;
                }

            });

        });