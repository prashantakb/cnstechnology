const lk=document.getElementById("lk");
document.getElementById("mb").onclick=()=>lk.classList.toggle("open");
document.querySelectorAll("[data-n]").forEach(el=>{const t=+el.dataset.n,s=el.dataset.s;let i=0;const id=setInterval(()=>{i++;el.textContent=Math.round(t*i/40)+s;if(i>=40)clearInterval(id)},25)});
const WA="https://wa.me/918287008400?text=";
const cf=document.getElementById("cf");
if(cf)cf.onsubmit=e=>{e.preventDefault();const t=`Hi Rank Zio, I’m ${n.value} (${e.target.e.value}). Interested in ${s.value}. ${m.value}`;window.open(WA+encodeURIComponent(t),"_blank")};
const sb=document.getElementById("sb");
if(sb)sb.onclick=()=>{const v=document.getElementById("em");if(v.value.includes("@")){sb.textContent="Subscribed ✓";v.value=""}};

const slider = document.getElementById("servicesSlider");
const track = document.getElementById("servicesTrack");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const progressBar = document.getElementById("progressBar");
const counter = document.getElementById("slideCounter");

const originalCards = Array.from(track.children);
const total = originalCards.length;

let currentIndex = 0;
let autoSlide;
let isAnimating = false;

function getVisibleCards() {
    if (window.innerWidth <= 600) return 1;
    if (window.innerWidth <= 900) return 2;
    return 3;
}

function getMaxIndex() {
    return Math.max(0, total - getVisibleCards());
}

function updateSlider() {
    const card = originalCards[0];
    const gap = 22;
    const cardWidth = card.getBoundingClientRect().width;

    track.style.transform =
        `translateX(-${currentIndex * (cardWidth + gap)}px)`;

    counter.textContent =
        `${String(currentIndex + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;

    progressBar.style.width =
        `${((currentIndex + 1) / total) * 100}%`;
}

function nextSlide() {
    currentIndex = currentIndex >= getMaxIndex()
        ? 0
        : currentIndex + 1;

    updateSlider();
}

function prevSlide() {
    currentIndex = currentIndex <= 0
        ? getMaxIndex()
        : currentIndex - 1;

    updateSlider();
}

function startAutoSlide() {
    stopAutoSlide();

    autoSlide = setInterval(() => {
        nextSlide();
    }, 3000);
}

function stopAutoSlide() {
    clearInterval(autoSlide);
}

nextBtn.addEventListener("click", () => {
    nextSlide();
    startAutoSlide();
});

prevBtn.addEventListener("click", () => {
    prevSlide();
    startAutoSlide();
});

slider.addEventListener("mouseenter", stopAutoSlide);
slider.addEventListener("mouseleave", startAutoSlide);

slider.addEventListener("touchstart", stopAutoSlide);
slider.addEventListener("touchend", startAutoSlide);

window.addEventListener("resize", () => {
    currentIndex = Math.min(currentIndex, getMaxIndex());
    updateSlider();
});

updateSlider();
startAutoSlide();

document.addEventListener("DOMContentLoaded", function () {
    const categoryButtons = document.querySelectorAll(".category[data-filter]");
    const productItems = document.querySelectorAll(".product-item");

    categoryButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const selectedCategory = button.dataset.filter;

            categoryButtons.forEach(function (item) {
                const isActive = item === button;
                item.classList.toggle("active", isActive);
                item.setAttribute("aria-pressed", String(isActive));
            });

            productItems.forEach(function (product) {
                const shouldShow =
                    selectedCategory === "all" ||
                    product.dataset.category === selectedCategory;

                product.hidden = !shouldShow;
            });
        });
    });
});