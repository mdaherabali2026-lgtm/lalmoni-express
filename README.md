# Lalmoni Express — GitHub Pages Landing Page

এই প্যাকেজটি আপনার দেওয়া landing-page mockup অনুসরণ করে তৈরি responsive static website।

## Folder structure
- `index.html` — মূল landing page
- `assets/css/style.css` — responsive design
- `assets/js/script.js` — mobile menu + section navigation
- `assets/images/` — logo, app screen, hero visual, marketplace illustration, Google Play badge
- `.nojekyll` — GitHub Pages-এর জন্য
- `CNAME` — আপনার আসল domain বসানোর placeholder

## GitHub Pages
1. `CNAME` ফাইলে `yourdomain.com`-এর জায়গায় আপনার আসল domain লিখুন।
2. Repository-তে সব ফাইল upload করুন।
3. GitHub → Settings → Pages → Deploy from branch → `main` → `/ (root)` নির্বাচন করুন।
4. Custom domain-এ একই domain দিন।
5. আপনার DNS provider-এ GitHub Pages-এর DNS records দিন।
6. HTTPS চালু করুন।

## যেগুলো পরে বদলাবেন
- Google Play URL
- APK download URL
- Privacy Policy URL
- Terms URL
- Contact email
- Social media links
- আপনার আসল domain

এই version-টি static landing page; অ্যাপের marketplace/backend Firebase বা আপনার API-এর মাধ্যমে আলাদা থাকবে।
