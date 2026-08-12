// ─────────────────────────────────────────────────────────────
// FIREBASE CONFIG — fill this in with your own project's values.
// You get these from: Firebase Console → Project settings →
// General tab → "Your apps" → the web app (</> icon) → SDK setup.
// ─────────────────────────────────────────────────────────────
const firebaseConfig = {
    apiKey: "PASTE_YOUR_API_KEY",
    authDomain: "PASTE_YOUR_PROJECT.firebaseapp.com",
    projectId: "PASTE_YOUR_PROJECT_ID",
    storageBucket: "PASTE_YOUR_PROJECT.appspot.com",
    messagingSenderId: "PASTE_YOUR_SENDER_ID",
    appId: "PASTE_YOUR_APP_ID"
};

// ─────────────────────────────────────────────────────────────
// CLOUDINARY CONFIG — fill this in with your own account values.
// cloudName: found on your Cloudinary dashboard home page.
// uploadPreset: the name of the UNSIGNED upload preset you create
// under Settings → Upload → Upload presets.
// ─────────────────────────────────────────────────────────────
const cloudinaryConfig = {
    cloudName: "PASTE_YOUR_CLOUD_NAME",
    uploadPreset: "PASTE_YOUR_UPLOAD_PRESET"
};

// ─────────────────────────────────────────────────────────────
// ADMIN PASSWORD — a simple shared password for the admin page.
// This is NOT real security (anyone who reads this file can see
// it) — it just keeps random visitors from casually opening the
// upload page. Change it to something only your team knows.
// ─────────────────────────────────────────────────────────────
const ADMIN_PASSWORD = "changeme";
