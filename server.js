import express from "express";
import admin from "firebase-admin";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 7550;

// ✅ Firebase Admin Initialization
try {
  const serviceAccount = {
    type: "service_account",
    project_id: process.env.FIREBASE_PROJECT_ID,
    private_key: `-----BEGIN PRIVATE KEY-----
<ISI_PRIVATE_KEY>
-----END PRIVATE KEY-----
`,
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
    token_uri: "https://oauth2.googleapis.com/token",
  };

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });

  console.log("✅ Firebase Admin initialized successfully!");
} catch (error) {
  console.error("⚠️ Firebase Admin initialization failed:", error.message);
}

// ✅ Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// ✅ Example API route (cek koneksi Firebase)
app.get("/test-firebase", async (req, res) => {
  try {
    const db = admin.firestore();
    const snapshot = await db.collection("test").get();
    res.json({
      message: "Firebase connected!",
      documents: snapshot.docs.map((doc) => doc.data()),
    });
  } catch (err) {
    res.status(500).json({ error: "Firebase connection failed", detail: err.message });
  }
});

// ✅ Serve main HTML
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// ✅ Start server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
