// Carousel Auto Slide
const carousel = document.getElementById("carousel");

setInterval(() => {
    carousel.classList.add("slide");

    const cardWidth = carousel.firstElementChild.offsetWidth + 20; // card + gap
    carousel.style.transform = `translateX(-${cardWidth}px)`;

    setTimeout(() => {
        carousel.classList.remove("slide");
        carousel.style.transform = "translateX(0)";
        const first = carousel.firstElementChild;
        carousel.appendChild(first);
    }, 600);
}, 5000);

// Modal Logic
const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalGithub = document.getElementById("modalGithub");
const modalDemo = document.getElementById("modalDemo");
const modalImage = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close-btn");

// Add styles to GitHub & Live Demo buttons
[modalGithub, modalDemo].forEach(btn => {
    btn.style.display = "inline-block";
    btn.style.margin = "10px";
    btn.style.padding = "10px 16px";
    btn.style.borderRadius = "8px";
    btn.style.background = "#000";
    btn.style.color = "#fff";
    btn.style.textDecoration = "none";
    btn.style.fontWeight = "500";
    btn.style.transition = "background 0.3s ease";
    btn.addEventListener("mouseover", () => {
        btn.style.background = "#333";
    });
    btn.addEventListener("mouseout", () => {
        btn.style.background = "#000";
    });
});

document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => {
        const img = card.querySelector("img");
        modalTitle.textContent = card.dataset.title;
        modalDesc.textContent = card.dataset.desc;
        modalGithub.href = card.dataset.github;
        modalDemo.href = card.dataset.demo;
        modalImage.src = img ? img.src : "";
        modalImage.alt = card.dataset.title || "Project Image";
        modal.style.display = "flex";
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", e => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
