# NuvioForge 🔨
> **The Free & Open-Source Setup Studio for Nuvio & Stremio**  
> A community-first alternative to paid tools like `xperience-app.com`. No subscriptions, no profile limits, and zero paywalls—forever.

---

## 🌟 Why NuvioForge?

* **100% Free & Open Source**: Runs completely client-side. No centralized database, no expensive server hosting costs to pass on to users.
* **1-Click Starter Kits**: Instant presets for **The Essentials**, **The 4K Cinephile**, and **Anime & Global Spotlight**.
* **Live Interactive TV & Mobile Simulator**: Preview your exact Nuvio home layout, movie backdrops, and poster cards in real time before exporting.
* **Drag-and-Drop Collections Builder**: Reorder, customize emojis, and set tile shapes (`LANDSCAPE`, `PORTRAIT`, `SQUARE`) adhering directly to Nuvio's native `collections.json` specification.
* **Scraper & Debrid Integrator**: Built-in support for Comet, Torrentio, MediaFusion, and StremThru with Real-Debrid, TorBox, AllDebrid, and Premiumize.
* **Instant TV QR Code & File Export**: Download `collections.json`, copy raw JSON, or scan the on-screen QR code directly from your TV or phone.
* **Import Existing Setups**: Upload any previous Nuvio or Xperience JSON configuration and edit it without restrictions.

---

## 🚀 Quick Start

```bash
# 1. Clone repository
git clone https://github.com/your-username/nuvio-forge.git
cd nuvio-forge

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 1-Click Free Deployment

You can host this tool publicly for your friends or community for **$0/month**:

### Deploy to Cloudflare Pages / Vercel:
1. Push this folder to a GitHub repository.
2. Link the repository to [Vercel](https://vercel.com) or [Cloudflare Pages](https://pages.cloudflare.com).
3. Build command: `npm run build`
4. Output directory: `dist`

---

## 📺 How to Use with Nuvio

1. Choose your catalogs and scraper settings in NuvioForge.
2. In **Step 5 (Export)**, click **Download JSON** to get `collections.json`.
3. Open **Nuvio** on your TV or Mobile device:
   * **Nuvio TV**: Go to `Settings` ➔ `Addons & Catalogs` ➔ `Collections` ➔ `Import Collections`.
   * **Nuvio Mobile / Desktop**: Go to `Settings` ➔ `Collections` ➔ `Import from File`.
4. Your customized home screen with poster rows and categories will load immediately!
