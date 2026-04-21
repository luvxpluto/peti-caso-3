const body = document.body;
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const reveals = document.querySelectorAll(".reveal");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = body.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      body.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if ("IntersectionObserver" in window && reveals.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  reveals.forEach((element) => observer.observe(element));
} else {
  reveals.forEach((element) => element.classList.add("is-visible"));
}

const canvas = document.getElementById("particle-canvas");

if (canvas) {
  const context = canvas.getContext("2d");
  const particles = [];
  const particleCount = window.innerWidth < 768 ? 36 : 64;

  const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  const createParticle = () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.8 + 0.4,
    speedX: (Math.random() - 0.5) * 0.28,
    speedY: (Math.random() - 0.5) * 0.28,
    alpha: Math.random() * 0.7 + 0.2,
  });

  const initParticles = () => {
    particles.length = 0;
    for (let index = 0; index < particleCount; index += 1) {
      particles.push(createParticle());
    }
  };

  const drawParticles = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle) => {
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
      if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

      context.beginPath();
      context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      context.fillStyle = `rgba(0, 245, 255, ${particle.alpha})`;
      context.fill();
    });

    requestAnimationFrame(drawParticles);
  };

  resizeCanvas();
  initParticles();
  drawParticles();
  window.addEventListener("resize", () => {
    resizeCanvas();
    initParticles();
  });
}

const comparisonChart = document.getElementById("comparison-chart");

if (comparisonChart && window.Chart) {
  // Datos de ejemplo para dejar la visualización montada desde ahora.
  new window.Chart(comparisonChart, {
    type: "radar",
    data: {
      labels: [
        "Implementación",
        "Profundidad técnica",
        "Enfoque estratégico",
        "Pymes",
        "Corporativos",
      ],
      datasets: [
        {
          label: "DMM",
          data: [4, 3, 4, 4, 3],
          borderColor: "rgba(0, 245, 255, 0.9)",
          backgroundColor: "rgba(0, 245, 255, 0.12)",
        },
        {
          label: "Deloitte",
          data: [3, 4, 5, 2, 5],
          borderColor: "rgba(0, 102, 255, 0.9)",
          backgroundColor: "rgba(0, 102, 255, 0.08)",
        },
        {
          label: "Gartner",
          data: [3, 4, 5, 2, 5],
          borderColor: "rgba(55, 243, 186, 0.9)",
          backgroundColor: "rgba(55, 243, 186, 0.08)",
        },
        {
          label: "CMMI",
          data: [2, 5, 3, 2, 4],
          borderColor: "rgba(255, 200, 87, 0.9)",
          backgroundColor: "rgba(255, 200, 87, 0.08)",
        },
        {
          label: "McKinsey DQ",
          data: [3, 4, 5, 3, 5],
          borderColor: "rgba(168, 142, 255, 0.9)",
          backgroundColor: "rgba(168, 142, 255, 0.08)",
        },
        {
          label: "BCG DAI",
          data: [4, 4, 4, 3, 5],
          borderColor: "rgba(255, 122, 162, 0.9)",
          backgroundColor: "rgba(255, 122, 162, 0.08)",
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      scales: {
        r: {
          min: 0,
          max: 5,
          ticks: {
            stepSize: 1,
            backdropColor: "transparent",
            color: "#9cb2c9",
          },
          angleLines: {
            color: "rgba(255, 255, 255, 0.08)",
          },
          grid: {
            color: "rgba(255, 255, 255, 0.08)",
          },
          pointLabels: {
            color: "#ecf8ff",
            font: {
              size: 12,
            },
          },
        },
      },
      plugins: {
        legend: {
          labels: {
            color: "#ecf8ff",
          },
        },
      },
    },
  });
}
