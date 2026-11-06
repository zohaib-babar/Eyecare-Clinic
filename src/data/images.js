// All photographs used on the site live here.
//
// They load from Unsplash by default. To use your own photos, put the files in
// the /public/images folder and change a value to a path such as "/images/hero.jpg".
//
// If a photo cannot load, the site shows a built-in iris artwork instead,
// so a missing image never leaves an empty gap.
const unsplash = (id, width) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;

export const images = {
  hero: unsplash("photo-1494869042583-f6c911f04b4c", 2000), // close-up of an eye
  clinic: unsplash("photo-1579684385127-1ef15d508118", 1200), // clinic interior / care
  consult: unsplash("photo-1576091160550-2173dba999ef", 900), // consultation
  team: unsplash("photo-1551601651-2a8555f1a136", 1200), // clinical team
};
