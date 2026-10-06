/* The site and FAQ accordions work without JavaScript.
   This small enhancement closes other FAQ answers when a new one opens. */
document.querySelectorAll('details').forEach((current) => {
  current.addEventListener('toggle', () => {
    if (!current.open) return;
    document.querySelectorAll('details').forEach((other) => {
      if (other !== current) other.open = false;
    });
  });
});
