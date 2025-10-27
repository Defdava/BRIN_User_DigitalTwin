```markdown
# Digital Twin Website - Express API (Vercel)

Kerangka Express.js untuk repo Digital-Twin-Website_user, disiapkan agar mudah dideploy ke Vercel sebagai serverless functions.

File penting:
- api/app.js      -> Express app dan route mounting
- api/index.js    -> serverless wrapper (serverless-http) digunakan oleh Vercel
- server.js       -> executable lokal untuk testing (node server.js)
- vercel.json     -> konfigurasi build & routes Vercel
- public/         -> file static (opsional)
- .env.example    -> contoh environment variables

Cara menjalankan lokal (quick):
1. Install
   npm install

2a. Jalankan lokal tanpa Vercel (quick test):
   npm run start  # menjalankan server.js di port 3000

2b. Jalankan dengan Vercel dev (mendekati lingkungan serverless):
   npm run dev     # membutuhkan vercel CLI terinstall (npm i -g vercel)

Deploy ke Vercel:
1. Commit dan push ke GitHub.
2. Di dashboard Vercel, buat project baru dari repository ini.
3. Vercel akan menjalankan builds dan membuat endpoint serverless dari `api/index.js`.

Environment variables:
- Tambahkan variabel di `.env` (lokal) atau di Vercel dashboard (Production).
- Contoh di `.env.example`

Contoh endpoints:
- GET /            -> API root
- GET /api/health  -> health check
- GET /api/users   -> contoh daftar user (in-memory)
- POST /api/users  -> buat user (in-memory)
- POST /api/echo   -> echo body request

Catatan:
- File `lib/firebase.js` berisi stub untuk inisialisasi Firebase (opsional). Isi variabel env yang diperlukan jika mengaktifkan Firebase.
```