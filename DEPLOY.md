# BlockShield Intelligence — Vercel Deploy Guide

## What this is

A **static demo** of BlockShield Intelligence with pre-computed data from the real Elliptic++ dataset.
No backend required. All data is baked in at build time.

## Credentials

Any username + any password works.

Demo quick-login buttons on the login page:
- `admin / Admin@BlockShield1`
- `analyst / Analyst@BlockShield1`

---

## Deploy to Vercel (3 steps)

### Option A — Vercel CLI (fastest)

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. From this directory
cd blockshield-demo
vercel

# 3. Follow prompts:
#    - Set up project? Y
#    - Which scope? (your account)
#    - Link to existing? N
#    - Project name: blockshield-intelligence
#    - Directory: ./  (current)
#    - Override settings? N
```

Done. Vercel gives you a URL like `https://blockshield-intelligence.vercel.app`

### Option B — GitHub + Vercel Dashboard

1. Push this `blockshield-demo` folder to a GitHub repo
2. Go to https://vercel.com/new
3. Import the repo
4. Framework: **Next.js** (auto-detected)
5. Root directory: leave blank (or `./`)
6. Click **Deploy**

No environment variables needed.

---

## Local preview

```bash
cd blockshield-demo
npm run dev   # → http://localhost:3001
```

---

## What's in the demo

| Page | What it shows |
|------|--------------|
| Login | Any credentials work; quick-login buttons for jury |
| Dashboard | Real KPIs from Elliptic++ — 203,769 TX, 534,807 wallets, 1,318 alerts |
| Wallet Explorer | Top 15 flagged wallets, filterable, with full detail view |
| Wallet Detail | Risk breakdown, WHY FLAGGED, 1-hop/2-hop graph |
| Transaction Explorer | Sample of real TX IDs with classification |
| Alert Center | Top 10 alerts, full detail, analyst feedback |
| Alert Detail | Full WHY FLAGGED explanation, evidence features, risk components |
| Blockchain Graph | Interactive canvas graph — wallet graph, TX graph, path trace |
| ML Analytics | Algorithm docs, model card, risk formula |
| Dataset & Integrity | SHA-256 hashes of all 5 Elliptic++ files, provenance chain |
| Investigations | Sample case with entities, notes, evidence; create new case |

---

## Notes

- The **DEMO MODE** banner is always visible — never misrepresented as live
- Graph is rendered on an HTML5 Canvas — no external graph library needed for static export
- Click any node in the graph to see its details
- The "jury demo" example buttons on the graph page load real pre-computed neighborhoods instantly
- All risk scores, anomaly counts, SHA-256 hashes and entity addresses are genuine
