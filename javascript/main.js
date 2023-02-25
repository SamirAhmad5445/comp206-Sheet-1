const icons = document.querySelectorAll(".icon");
const apps = document.querySelectorAll(".app");

icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    openApp(icon.getAttribute("data-index"));
  });
  icon.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      openApp(icon.getAttribute("data-index"));
    }
  });
});

apps.forEach((app) => {
  app.addEventListener("click", () => {
    openApp(app.getAttribute("data-index"));
  });

  app.querySelector(".close").addEventListener("click", () => {
    setTimeout(() => {
      app.classList.remove("opened");
    }, 100);
  });
});

const openApp = (index) => {
  apps.forEach((app) => {
    app.classList.remove("active");
    if (app.classList.contains(`app-${index}`)) {
      app.classList.add("active");
      // demo only
      document.querySelector(`.app-${index}`).classList.add("opened");
    }
  });
};
