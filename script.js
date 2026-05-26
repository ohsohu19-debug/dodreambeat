const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".preview-grid");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.target;

    tabs.forEach((item) => {
      const selected = item === tab;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-selected", String(selected));
    });

    panels.forEach((panel) => {
      const active = panel.id === target;
      panel.classList.toggle("active", active);
      panel.hidden = !active;
    });
  });
});
