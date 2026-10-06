# Taylor & Tristan — July 24, 2027

A sky-blue-and-gold wedding website. The blue (#B2CADA) is an approximate match sampled from your supplied Azazie dress photo, not an official manufacturer color specification. Plain HTML, CSS, and JavaScript. No installation, build command, paid service, external font, or custom domain required.

## Upload to your existing GitHub repository

1. Extract this ZIP (on Windows: right-click → Extract All).
2. Open the extracted folder. You should see index.html, styles.css, and the other files listed below.
3. In your repository on GitHub, choose Add file → Upload files.
4. Upload the CONTENTS of the folder, not the ZIP and not the enclosing folder. Replace existing same-named template files if needed. Keep a copy of any previous website you want to preserve.
5. Choose Commit changes. This publishes the changes if Pages already uses main / (root).
6. Confirm Settings → Pages uses Deploy from a branch, main, /(root). If your existing publishing folder is /docs, put these files in that folder instead or change the source to /(root).
7. Open the URL shown by GitHub Pages after deployment finishes. No custom domain is needed.

The .nojekyll file is included. Some file pickers hide it; if needed, use Add file → Create new file in GitHub, name it .nojekyll, and save it (a comment is fine). This basic site also works with GitHub's default processing.

## Preview before uploading

Double-click index.html to open it in your browser. Keep the other files beside it. The calendar download can behave differently when opened as a local file; test it again on your live site.

## Edit the details

Edit index.html in a plain text editor (Notepad or VS Code), or open it in GitHub and click the pencil icon. Search for EDIT to locate the main editable sections. Search for OPTIONAL to find photo and story instructions. Save/commit your changes.

Known details are already filled in: Taylor & Tristan; Saturday, July 24, 2027.
Unknown details deliberately say “coming soon.” No venue, event time, hotel, RSVP deadline, or registry has been invented.

- Hero: update the location line with your city/state.
- Ceremony/reception: replace the coming-soon text with real times, venues, and addresses.
- Travel: add hotel links, booking deadline, parking, and shuttle details.
- FAQs: confirm your dress code, guest/children policy, and contact method.
- Registry: replace the coming-soon paragraph with the commented registry link; insert your registry URL and remove the surrounding <!-- and --> comment markers.
- RSVP: replace the “RSVPs will open soon” paragraph with the commented RSVP link; insert the published Google Forms responder URL and remove the surrounding comment markers. Add the RSVP deadline and update the FAQ answer and supporting text.
- Contact: add a contact email when ready; for a link use <a href="mailto:YOUR_EMAIL">Email us</a>.
- Photo: copy your own photo into the same folder as index.html, name it couple.jpg, and uncomment the provided img line. Update alt text to describe the photo. Upload the photo to GitHub too.
- Colors: edit the variables at the top of styles.css.

The RSVP section is intentionally an announcement until you add a real form link. This template does not collect or pretend to save responses. Registry links are likewise inactive until supplied.

## File guide

- index.html — website content and all editable sections
- styles.css — appearance and responsive phone layout
- script.js — optional FAQ enhancement; core site works without JavaScript
- favicon.svg — T&T browser tab icon
- wedding.ics — all-day save-the-date calendar file (no ceremony time assumed)
- 404.html — missing-page message
- .nojekyll — direct static-file publishing
- README.md — these instructions

## Calendar note

The calendar file reserves July 24, 2027 as a tentative all-day event, not a timed ceremony. DTEND July 25 is the required exclusive end for this one-day event. Downloaded calendar events do not automatically update when you edit the website. Once the schedule is final, create a new accurate timed event with the venue's time zone or keep this as a save-the-date only.

## Final checks

- Confirm all details and FAQ policies.
- Test on a phone and desktop, including keyboard navigation.
- Test the published form while signed out, and verify a test submission reaches your private response sheet.
- Keep form response summaries disabled and the response spreadsheet private.
- Test calendar download, hotel/registry links, and directions.
- Keep website asset links relative (./styles.css) for github.io project addresses.
- GitHub Pages and the public repository are public. Do not upload guest lists, response exports, passwords, or private invitation codes.

## Updating later

Edit the files and commit to your Pages publishing branch. Check the Actions tab if deployment fails. If the live site still shows the old version after deployment succeeds, try a hard refresh. No custom domain or additional hosting setup is required.

## Applying this color update to an existing site

If you already uploaded the original template, replace styles.css, favicon.svg, and 404.html with these versions. In index.html, update the theme-color meta tag to #b2cada (or replace index.html too if you have not customized its content). This preserves any wedding details you have added. Hard-refresh the live page after deployment to see the new colors.


## Photo redesign (latest version)

Upload ALL files in this ZIP, including the assets folder, to your publishing folder. The homepage now uses your supplied black-and-white image, a reference-inspired header, sky blue, and brighter metallic yellow-gold accents. CSS visually crops the screenshot edges; the original photo bytes are unchanged. For the sharpest full-screen image, replace assets/couple.png with a high-resolution original photo without slideshow controls.

The stylesheet and script links include ?v=3 to help browsers load the new design. The actual filenames remain styles.css and script.js. If you already changed other text on GitHub, keep a copy first and merge those edits into this new index.html.

Ceremony: Holy Name Catholic Church, Ebensburg, Pennsylvania.
Reception: The Willow, Johnstown, Pennsylvania.
Times remain unannounced. Map links search by the supplied venue names and towns; confirm their destinations before sharing with guests.

Wedding party: search for id="wedding-party" in index.html. Edit the three placeholder cards with names and roles, duplicate or remove cards as needed, and replace each party-portrait div with an image when photos are ready. No people's names or roles have been invented.

The day countdown uses America/New_York calendar dates and refreshes every minute. It displays Today on July 24, 2027, then Married afterward. With JavaScript disabled, the wedding date remains visible. The count is days to the date, not to an assumed ceremony time.
