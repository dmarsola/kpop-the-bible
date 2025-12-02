const rootStyles = getComputedStyle(document.documentElement);
const darkColor = rootStyles.getPropertyValue("--secondary-color").trim();
const lightColor = rootStyles.getPropertyValue("--text-light").trim();

const links = [
  { url: "https://kpop-the-bible.pages.dev/", text: "K-pop the Bible website" },
  {
    url: "https://music.apple.com/ca/album/k-pop-the-bible/1856992194",
    text: "Apple Music",
  },
  {
    url: "https://open.spotify.com/artist/5fLyEuMO17v9J8pqO3BHoV?si=8Ra-eAv1ShKI1PkGomeYhA",
    text: "Spotify",
  },
  {
    url: "https://music.youtube.com/playlist?list=OLAK5uy_lzumcgx1iwwADPmEIyQ30WZRnwKFPNzAw",
    text: "Youtube Music",
  },
];

qrCodes;

const container = document.getElementById("qrCodes");

links.forEach((link) => {
  // Create wrapper element
  const wrapper = document.createElement("div");
  wrapper.classList.add("qr-item");

  // Create element that will hold the QR code
  const qrDiv = document.createElement("div");
  qrDiv.classList.add("qr-code");

  // Optional: add a caption under QR
  const caption = document.createElement("p");
  caption.textContent = link.text;

  // Append elements
  wrapper.appendChild(qrDiv);
  wrapper.appendChild(caption);
  container.appendChild(wrapper);

  // Generate QR code
  new QRCode(qrDiv, {
    text: link.url,
    width: 180,
    height: 180,
    colorDark: darkColor,
    colorLight: lightColor,
    correctLevel: QRCode.CorrectLevel.H,
  });
});

// new QRCode(document.getElementById("qrCodes"), {
//   class: "qrcode",
//   text: "https://example.com",
//   width: 128,
//   height: 128,
//   colorDark: darkColor,
//   colorLight: lightColor,
// });
