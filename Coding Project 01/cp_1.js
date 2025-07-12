// cp_1.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("feedback-form");
  const comments = document.getElementById("comments");
  const charCount = document.getElementById("char-count");
  const feedbackDisplay = document.getElementById("feedback-display");

  // Tooltips setup
  const tooltips = {
    username: "Please enter your full name",
    email: "Please enter a valid email address.",
    comments: "Type your feedback here. Maximum 500 characters",
  };

  const tooltip = document.createElement("div");
  tooltip.classList.add("tooltip");
  document.body.appendChild(tooltip);

  // Character counter
  const MAX_CHARS = 500;

comments.addEventListener("input", () => {
  const currentLength = comments.value.length;

  if (currentLength > MAX_CHARS) {
    comments.value = comments.value.slice(0, MAX_CHARS); // Prevent overflow
  }

  const remaining = MAX_CHARS - comments.value.length;
  charCount.textContent = `Characters remaining: ${remaining}/${MAX_CHARS}`;
});


  // Event delegation for tooltip
  form.addEventListener("mouseover", (e) => {
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
      const tip = tooltips[e.target.id];
      if (tip) {
        tooltip.textContent = tip;
        tooltip.style.display = "block";
        tooltip.style.top = `${e.pageY + 10}px`;
        tooltip.style.left = `${e.pageX + 10}px`;
      }
    }
  });

  form.addEventListener("mousemove", (e) => {
    tooltip.style.top = `${e.pageY + 10}px`;
    tooltip.style.left = `${e.pageX + 10}px`;
  });

  form.addEventListener("mouseout", (e) => {
    tooltip.style.display = "none";
  });

  // Form submit
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopPropagation();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const comment = comments.value.trim();

    if (!username || !email || !comment) {
      alert("All fields are required!");
      return;
    }

    const entry = document.createElement("div");
    entry.innerHTML = `<strong>${username}</strong> (${email}) said:<br>${comment}`;
    entry.style.marginBottom = "10px";
    feedbackDisplay.appendChild(entry);

    form.reset();
    charCount.textContent = "Characters: 0";
  });

  // Prevent bubbling on feedback display
  feedbackDisplay.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});
