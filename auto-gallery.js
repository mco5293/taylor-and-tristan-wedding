/* AUTOMATIC GALLERY
   Upload photos using consecutive filenames:
   assets/gallery/pic (1).jpg
   assets/gallery/pic (2).jpg
   assets/gallery/pic (3).jpg

   Filenames are case-sensitive.
   The first missing number ends the gallery.
*/

(async function buildGallery() {
  const grid = document.getElementById("auto-gallery");
  if (!grid) return;

  // Check whether a numbered photo exists.
  function photoExists(path) {
    return new Promise((resolve) => {
      const photo = new Image();
      photo.onload = () => resolve(true);
      photo.onerror = () => resolve(false);
      photo.src = path;
    });
  }

  let number = 1;

  while (true) {
    const path = `./assets/gallery/pic (${number}).jpg`;

    if (!(await photoExists(path))) break;

    const figure = document.createElement("figure");
    figure.className = "gallery-tile";

    const link = document.createElement("a");
    link.href = path;
    link.setAttribute("data-gallery", "");
    link.setAttribute("aria-label", `Open photo ${number}`);

    const photo = document.createElement("img");
    photo.src = path;
    photo.alt = `Taylor and Tristan — photo ${number}`;
    photo.loading = "lazy";
    photo.decoding = "async";
    photo.width = 900;
    photo.height = 1100;

    // An empty caption keeps compatibility with your existing viewer.
    const caption = document.createElement("figcaption");
    caption.hidden = true;

    link.append(photo);
    figure.append(link, caption);
    grid.append(figure);

    number++;
  }

  if (number === 1) {
    const message = document.createElement("p");
    message.textContent = "Our photos are coming soon.";
    grid.append(message);
  }

  // Initialize photo animations and the full-size viewer AFTER
  // the automatic gallery has created its photo elements.
  const viewerScript = document.createElement("script");
  viewerScript.src = "./script.js?v=31";
  document.body.append(viewerScript);
})();