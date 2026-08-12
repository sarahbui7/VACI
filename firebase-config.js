// ─────────────────────────────────────────────────────────────
// FIREBASE CONFIG — fill this in with your own project's values.
// You get these from: Firebase Console → Project settings →
// General tab → "Your apps" → the web app (</> icon) → SDK setup.
// ─────────────────────────────────────────────────────────────
const firebaseConfig = {
    apiKey: "AIzaSyCj2ji-lKgSmfA1VYFqVPLGSGwKBEgIxf0",
    authDomain: "vaci-lions.firebaseapp.com",
    projectId: "vaci-lions",
    storageBucket: "vaci-lions.firebasestorage.app",
    messagingSenderId: "463587709213",
    appId: "1:463587709213:web:fc499ffe53ed0ac93411f4",
};

// ─────────────────────────────────────────────────────────────
// CLOUDINARY CONFIG — fill this in with your own account values.
// cloudName: found on your Cloudinary dashboard home page.
// uploadPreset: the name of the UNSIGNED upload preset you create
// under Settings → Upload → Upload presets.
// ─────────────────────────────────────────────────────────────
const cloudinaryConfig = {
    cloudName: "kbn2frg6",
    uploadPreset: "vaci-lions-upload"
};

// ─────────────────────────────────────────────────────────────
// ADMIN PASSWORD — a simple shared password for the admin page.
// This is NOT real security (anyone who reads this file can see
// it) — it just keeps random visitors from casually opening the
// upload page. Change it to something only your team knows.
// ─────────────────────────────────────────────────────────────
// const ADMIN_PASSWORD = "changeme";
