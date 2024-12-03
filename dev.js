const root = document.getElementById("root");
for (let i = 0; i < 500; i++) {
  let div = document.createElement("div");
  let span = document.createElement("span");
  div.append(span);
  div.addEventListener("mouseenter", () => {
    span.classList.add("hover");
  });

  div.addEventListener("mouseleave", () => {
    setTimeout(() => {
      span.classList.remove("hover");
    }, 600);
  });
  root.append(div);
}
