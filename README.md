# Taylor & Tristan • July 24, 2027

## Upload this update
1. Extract the ZIP. Upload the files inside it to the same repository folder as your current index.html, replacing matching files.
2. MERGE the assets folder. Keep your existing assets/couple.jpg, assets/couple_standing.jpg, assets/holy-name.jpg, and assets/the-willow.jpg. These original photos were not supplied for this update and are not in this ZIP.
3. Upload the new gallery.html along with all seven other HTML files, styles.css, script.js, and all included artwork. Every page now uses version 30 CSS/JS links.
4. Commit the files. After the GitHub Pages deployment completes, reload the site. If you still see the old design, hard-refresh the page.

No build system, image API key, or JavaScript framework is required.

## What to edit
Search for `EDIT:` inside each HTML file. Comments are instructions only and do not appear on the website. Every photo path is relative and case-sensitive. Spaces, quotes, and punctuation inside visible prose are fine; use simple lowercase filenames with hyphens for images.

| File | Information to add |
| --- | --- |
| index.html | Story introduction, His Version (Tristan), Her Version (Taylor), three memory photos/captions, three map locations/descriptions |
| gallery.html | Twelve starter photo slots; duplicate/remove a complete figure to change the number |
| the-day.html | Confirm timeline, venue details, and two venue photos; existing addresses and 10 PM end time are preserved |
| wedding-party.html | Confirm all twenty names, roles, relationships, and replace numbered arches with portraits; repeated Logan entries are placeholders |
| travel.html | Hotel photos, room-block code, booking link/deadline, transportation, local favorites |
| faq.html | Confirm dress code, upload three outfit examples, add descriptions, and review all answers/policies |
| registry.html | Real registry URL and optional couple photo |
| rsvp.html | Real published RSVP form URL, deadline/contact details, and optional couple photo |

All eight files contain the same navigation. Update each copy if you change page names or links. Our Story stays on index.html, linked directly to its story section.

## Photos
Use JPG or WebP files around 1600–2000px wide, ideally under 1MB. Put them in assets/. Replace the placeholder image path with the real photo path and describe the actual photo in alt. Keep loading="lazy" for photos below the hero. The hero should keep fetchpriority="high".

### Gallery example
In a single gallery figure:
- change href="./assets/couple-placeholder.svg" to href="./assets/gallery-01.jpg"
- change src="./assets/couple-placeholder.svg" to src="./assets/gallery-01.jpg"
- replace the img alt text with a description, such as "Taylor and Tristan walking together at sunset"
- edit the figcaption, such as "Our favorite evening"
- update the link aria-label to "Open our favorite evening"

Both href and src must point to your uploaded image. No photo list needs editing in script.js. The full-size viewer automatically uses the HTML captions and images. Phones can swipe horizontally through the album; desktop has previous/next buttons and arrow-key support. Escape or Close dismisses the viewer and returns focus to the thumbnail. Without JavaScript, each link opens its image directly. The thumbnails form two columns on phones.

### More couple-photo spaces
- index.html: hero and story portrait, plus three new memory photographs
- gallery.html: twelve slots to start, unlimited additional figures
- registry.html and rsvp.html: one optional keepsake portrait each
- wedding-party.html: portrait instructions above the first group explain replacing a numbered div with an img

New slots use included placeholder SVGs until you upload real photographs. We have not invented couple or outfit photos.

## Our-story map pins
In index.html, find LOCAL MAP PINS. Each of the three cards has data-map-query="". Fill it with the full real place name and address, for example:

    data-map-query="Place Name, 123 Main St, City, PA"

Also replace the card's description with your story. script.js then creates its Google Maps search link. Empty cards say Location coming soon and do not link to an unrelated place. These individual map links require no API key. To put all pins on one embedded map, follow the OPTIONAL SHARED MAP comment and supply your own public Google My Maps embed. No private home address is required.

## Dress-code lookbook
In faq.html, find DRESS CODE and LOOKBOOK PHOTOS. State the actual formality and guidelines first. Then add dress/separates, suits/tailoring, and accessory/footwear reference photos and descriptions. The website's sky blue/gold palette does not establish a guest clothing requirement. Use images you have permission to publish. All dress guidance currently says coming soon until confirmed.

## Floral styling and motion
Three transparent watercolor assets are included: hydrangea and ivory rose bouquet, delicate white flowers with greenery spray, and wide garland. Bouquets and sprays frame page-heading corners and alternating section edges. The old bottom floral strip has been removed; the garland asset remains available if you want it later. Hero flowers are cropped off the corners, softened, and masked toward the center. Text and controls remain on the reading layer above decorative art. No floral images need to be added manually.

Search FLORAL PLACEMENT in styles.css to adjust size, opacity, or cropping. Reduce opacity for a lighter look. More-negative left/right/bottom values tuck flowers farther outside the frame. Mobile has its own smaller corner sizes. Avoid changing z-index unless you want to change layering.

Photos gently appear as they enter view and lift/zoom on hover. The site respects reduced-motion preferences. No animation is required to reveal content, and the gallery does not auto-advance.

## Other details
- The countdown uses calendar days in America/New_York and targets July 24, 2027.
- wedding.ics contains the calendar download. If the date changes, update HTML, script.js, and wedding.ics together.
- RSVP only opens from its link; there is no automatic jump to that page.
- Wedding party stays five across on desktop, two across on tablets/phones, ten people per group.
- CSS font/color settings are at the top of styles.css. Google Fonts has local fallback fonts if unavailable.

## Latest layout update (version 30)
- All separate-page titles share the Pinyon Script font, simple subtitle, and rounded gold frame. Our Story on the home page uses the same frame.
- Our Story displays Her Story, the couple photo, and His Story across desktop.
- The Day has alternating venue sections, gold timeline icons, photo fade-ins, and a compact map below each photograph. On phones EACH venue shows information first, then photograph, then map.
- Bridesmaids have a soft sky-blue background; groomsmen have a warm ivory background. Both groups retain gold accents and two portrait columns on phones.
- The countdown uses a darker metallic gold for clearer numbers.
- Favorite-place cards now have Coming soon photo placeholders instead of numbered pins. Replace src and alt inside each place-photo figure to add a real location photo. Edit its Coming soon caption when ready. A future interactive map can reuse these stories; no invented pins or coordinates have been added.
- FAQs appear before the outfit lookbook.
- Travel's subtitle is Hotel, Transportation, and Local Favorites.
- All original photo filenames are preserved. Keep your real photos when merging assets.
