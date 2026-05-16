# YTMusicUltimate

A clean, open-source tweak project for YouTube Music. This tweak enables background playback and structural improvements for non-premium users. 

**This package supports:**
- Jailbroken devices (Rootful and Rootless `.deb` packages).
- Non-Jailbroken devices (Sideloaded `.ipa` injected with the tweak).

*Notice: This repository does NOT provide any pre-injected IPAs or pirated app files. Users must provide their own legally obtained, decrypted IPA file.*

---

## 🚀 How to Build Your Own Injected IPA (No Mac Required)

You can use GitHub Actions to automatically compile the tweak and inject it into your own decrypted YouTube Music IPA. 

1. **Fork this repository** to your own GitHub account.
2. Go to the **Actions** tab in your forked repository.
3. If prompted, click **"I understand my workflows, go ahead and enable them"**.
4. Select the **Build Tweak & Inject** workflow on the left sidebar.
5. Click the **Run workflow** dropdown on the right.
6. **Paste a DIRECT URL** to a decrypted YouTube Music `.ipa` file into the input box.
    - *Note: Standard share links (like Google Drive, Mega, or MediaFire view pages) will NOT work. You must provide a hotlink that instantly starts the download.*
7. Click **Run workflow**. 
8. Wait for the action to finish (usually takes a few minutes). Once complete, your `.deb` files and `.ipa` file will be available in the **Releases** tab of your repository.

---

## 🛠 Troubleshooting common workflow errors

### "The downloaded file is not a valid IPA archive"
This happens when the URL you provided leads to a web page instead of the actual file file. 
* **Fix**: Ensure your URL ends in `.ipa` or use a service that provides direct linking (like a raw Discord attachment link or a properly formatted direct Dropbox link `dl=1`).

### "Library not found" or "Azule failed to inject"
This happens if the IPA you provided is **encrypted** (downloaded straight from the App Store without decryption) or heavily corrupted.
* **Fix**: Use a tool like TrollStore, Iridium, or a jailbroken device to dump a **decrypted** version of the YouTube Music app.

---

## 🧑‍💻 Manual Build (For Jailbroken Devs)

If you have a macOS setup with Theos installed:

```bash
# Build for rootless environments
make package THEOS_PACKAGE_SCHEME=rootless

# Build for standard rootful environments
make clean
make package
```
