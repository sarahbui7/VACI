# Setting up the Photo Admin page

This gives your team a page (`admin.html`) where anyone can upload a photo and
have it appear on the live site automatically — no code, no GitHub, nothing.

You only have to do this setup once. It takes about 10–15 minutes.

## What you're setting up

- **Cloudinary** — free image storage. This is where the actual photo files live.
- **Firebase (Firestore)** — a free tiny database that remembers *which* photo
  goes in *which* spot on the site (e.g. "this URL is the hero photo").

## Part 1 — Cloudinary (image storage)

1. Go to https://cloudinary.com/users/register/free and create a free account.
2. Once logged in, your **Cloud name** is shown right on the dashboard homepage
   — copy it.
3. Go to **Settings** (gear icon) → **Upload** tab → scroll to **Upload presets**
   → click **Add upload preset**.
4. Set **Signing Mode** to **Unsigned**. Give it a name you'll remember (e.g.
   `vaci-lions-uploads`). Save.
5. Copy that preset name too.

## Part 2 — Firebase (remembers where each photo goes)

1. Go to https://console.firebase.google.com and create a free project (name
   it anything, e.g. "vaci-lions").
2. In the left sidebar, click **Build → Firestore Database** → **Create
   database** → choose **Start in test mode** for now (you can lock it down
   later) → pick any location → Enable.
3. In the left sidebar, click the gear icon → **Project settings** → scroll
   down to **Your apps** → click the **</>** (web) icon → give the app any
   nickname → **Register app**.
4. Firebase will show you a code block with a `firebaseConfig = { ... }`
   object. Copy those values.

## Part 3 — Fill in `firebase-config.js`

Open `firebase-config.js` in this folder and paste in the values you copied:

```js
const firebaseConfig = {
    apiKey: "...",
    authDomain: "...",
    projectId: "...",
    storageBucket: "...",
    messagingSenderId: "...",
    appId: "..."
};

const cloudinaryConfig = {
    cloudName: "...",
    uploadPreset: "..."
};

const ADMIN_PASSWORD = "pick-something-only-your-team-knows";
```

Save the file, commit it, and push it up with the rest of the site.

## Part 4 — Using it

Once that's filled in and pushed to GitHub Pages, anyone on your team can go to:

```
https://your-username.github.io/your-repo/admin.html
```

...type in the admin password, and upload a photo for any spot on the site
(hero photo, gallery photos, leader photos, event photos, the flyer, etc).
The photo shows up on the actual site the next time someone loads the page —
no code editing required.

## A note on security

The admin password is a simple deterrent, not real security — anyone who
looks at the page's code can see it. That's fine for keeping random visitors
out of a small club's upload page, but don't use this pattern for anything
sensitive. If you want real login-based security later, Firebase
Authentication is the natural next step and isn't much more setup.
