const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3001;

// Basic middleware
app.use(cors());
app.use(express.json());

// Ensure uploads directory exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// Multer storage config for APK
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        // Set a standard filename
        cb(null, 'sharent-latest.apk');
    }
});

const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        if (file.originalname.match(/\.apk$/) || file.mimetype === 'application/vnd.android.package-archive') {
            cb(null, true);
        } else {
            cb(new Error('Only APK files are allowed!'), false);
        }
    }
});

// Admin APK Upload endpoint
// We check password before multer processes it for better security natively, but for MVP checking after is fine too.
app.post('/api/admin/upload-apk', (req, res, next) => {
    // Intercept to check password first
    const adminPassword = req.headers['x-admin-password'];
    const adminEmail = req.headers['x-admin-email'];
    
    // Simplistic admin check (hardcoded MVP)
    if (adminEmail !== 'RouterentOwner800@routerent.com' || adminPassword !== 'admin123') {
        return res.status(401).json({ success: false, message: 'Unauthorized: Invalid admin credentials.' });
    }
    next();
}, upload.single('apk'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ success: false, message: 'No APK file provided.' });
    }

    res.json({ success: true, message: 'APK uploaded successfully.', filename: req.file.filename });
});

// Mock endpoint for error handler in multer
app.use((err, req, res, next) => {
    if (err) {
        return res.status(400).json({ success: false, message: err.message });
    }
    next();
});

// Download endpoint
app.get('/api/download/apk', (req, res) => {
    console.log('APK download triggered! Tracking +1');
    const apkPath = path.join(uploadDir, 'sharent-latest.apk');
    
    if (fs.existsSync(apkPath)) {
        res.download(apkPath);
    } else {
        res.status(404).json({ success: false, message: 'APK not available for download yet.' });
    }
});

// Mock analytics/contact
app.post('/api/contact', (req, res) => {
    console.log('Contact form received:', req.body);
    res.json({ success: true, message: 'Message received!' });
});

app.post('/api/analytics', (req, res) => {
    console.log('Analytics event:', req.body);
    res.json({ success: true });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
