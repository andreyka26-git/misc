This is sample / POC of the phishing / malicious site that was hiding the requests from Network tab via WebWorker.
The POC here is only from learning purposes and demonstrates simple version of reverse engineered malicious site

## How to Run

SharedWorkers require HTTP(S) protocol, not file:// protocol. Use one of these methods:

### Option 1: Python Server (Recommended)
```bash
python server.py
```

### Option 2: Node.js Server
```bash
node server.js
```

### Option 3: PowerShell One-liner
```powershell
python -m http.server 8000
```

Then open **http://localhost:8000/telegram-page.html** in your browser (Chrome or Edge).

## How to See Hidden Requests

1. Open **http://localhost:8000/** in Chrome/Edge
2. Open **DevTools** (F12) → **Network tab**
   - You'll see `non-webworker-request` (visible from main thread)
   - You'll **NOT** see `webworker-request` (hidden in SharedWorker)

3. To see the hidden requests:
   - Open new tab: `chrome://inspect/#workers` or `edge://inspect/#workers`
   - Click **"inspect"** on the SharedWorker
   - Check the **Network tab** in the SharedWorker's DevTools
   - You'll see `webworker-request` there!

## Files

- `telegram-page.html` - Main page with phone input UI
- `telegram-client-loader.js` - Creates SharedWorker and makes visible request
- `telegram-client.js` - SharedWorker code that makes hidden requests