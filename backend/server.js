const express = require('express');
const cors = require('cors');
const crypto = require('crypto');

const app = express();
const PORT = process.env.PORT || 3001;

// Basic middleware
app.use(cors());
app.use(express.json());

const CLOUDINARY_API_SECRET = 'wbwdZsteOZ7IDuK9ExXAgSzTXuE';
const CLOUDINARY_API_KEY = '362756543927552';
// Cloud Name is decdsc7rn

// Get Cloudinary Signature for Direct Upload
app.post('/api/admin/cloudinary-signature', (req, res) => {
    const adminEmail = req.headers['x-admin-email'];
    const adminPassword = req.headers['x-admin-password'];
    
    // Simplistic admin check
    if (adminEmail !== 'RouterentOwner800@routerent.com' || adminPassword !== 'admin123') {
        return res.status(401).json({ success: false, message: 'Unauthorized: Invalid admin credentials.' });
    }

    const timestamp = Math.round((new Date).getTime()/1000);
    const publicId = 'sharent-latest-apk';

    // The signature string MUST be alphabetical order of parameters according to Cloudinary spec.
    // Parameters to sign: public_id, timestamp
    const stringToSign = `public_id=${publicId}&timestamp=${timestamp}${CLOUDINARY_API_SECRET}`;
    
    const signature = crypto.createHash('sha1').update(stringToSign).digest('hex');

    res.json({
        success: true,
        signature: signature,
        timestamp: timestamp,
        api_key: CLOUDINARY_API_KEY,
        public_id: publicId
    });
});

// Mock analytics/contact
app.post('/api/contact', (req, res) => {
    res.json({ success: true, message: 'Message received!' });
});

app.post('/api/analytics', (req, res) => {
    res.json({ success: true });
});

// For local dev, we run app.listen. For Vercel, we export.
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
} else {
    // Export for Vercel Serverless
    module.exports = app;
}
