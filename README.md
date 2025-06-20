# Node.js Log Parser (TypeScript)

a simple log parser provides:

- ✅ Total number of unique IP addresses
- ✅ Top 3 most visited URLs
- ✅ Top 3 most active IPs

## 📦 Asumptions

- ✅ Target log file is in Common Log Format (CLF)
- ✅ Please consider using fs.readFile() for large log file

---

## 📦 Installation

```bash
npm install
```

## 🚀 Usage

```bash
npx ts-node parseLog.ts http.log
```

## 🧪 Run Tests

```bash
npm test
```

## 📝 Example Log Line Format

```
72.44.32.10 - - [09/Jul/2018:15:48:20 +0200] "GET /download/counter/ HTTP/1.1" 200 3574 "-" "Mozilla/5.0 (X11; U; Linux x86; en-US) AppleWebKit/534.7 (KHTML, like Gecko) Epiphany/2.30.6 Safari/534.7"
50.112.00.11 - admin [11/Jul/2018:17:33:01 +0200] "GET /asset.css HTTP/1.1" 200 3574 "-" "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/536.6 (KHTML, like Gecko) Chrome/20.0.1092.0 Safari/536.6"
```

---

## 🛠 Requirements

- Node.js
- TypeScript
