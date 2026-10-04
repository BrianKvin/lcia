# Mulembe Community NSW - Deployment Guide

## Leadership Expression of Interest

The homepage includes the leadership form, and `/#/leadership-interest` opens it
as a standalone page for sharing. Its **Copy form link** button uses the current
deployment address. The same three-step form is used in both locations:
constitution acknowledgment, position selection, and applicant details.
The constitution opens in an inline PDF preview with a download option and a
return-to-acknowledgment button, preserving the applicant's form progress.
Applicants must also provide a statement explaining why they would like to serve
in their selected role(s), up to 2,000 characters. The statement is validated on
the server and included in the review email and both attachments.

Keep `src/assets/OFFICIAL MULEMBE COMMUNITY NSW INC CONSTITUTION. 2026.pdf` with
the source when committing or deploying. Vite bundles this document into `dist/assets/`.
The checkbox records the applicant's acknowledgment that they have read the
document; opening a PDF alone cannot establish that they read it. Expressions of
interest are for review; formal nominations follow the constitution's process.

The form posts to `leadership-interest.php` alongside the deployed `index.html`.
Vite copies this endpoint from `public/` into `dist/`. It validates the required
details, selected roles, and the 2026 constitution acknowledgment on the server,
then emails the review details and CSV/JSON attachments to
`mulembecommunitysydneyau@gmail.com`. It uses
`no-reply@mulembecommunitynswinc.org.au` as the sender and the validated applicant
email as Reply-To. Configure the host to permit that sender and PHP `mail()`.

Deploy the full `dist/` contents to PHP-enabled hosting. Vite's local development
and preview servers do not execute PHP. A successful PHP mail result means the
host accepted the message for sending; inbox arrival must still be verified on
the deployed host. Before announcing the link, submit an authorized test and
check that the review email and its attachments arrive. No records are written
to an application database, and the existing community and welfare endpoints
remain separate.

Run `php tests/leadership-interest.test.php` to check endpoint validation, email
contents, and failure handling with a mock mail transport (no messages are sent).

## 🚀 Pre-Deployment Checklist

✅ **Build Status**: Project builds successfully with no errors  
✅ **Responsive Design**: Optimized for mobile, tablet, and desktop  
✅ **Form Functionality**: Welfare form with signature pad working  
✅ **Assets**: All images and files properly referenced  
✅ **Email Integration**: PHP form handler configured  
✅ **Lottie Animations**: All animations properly integrated and responsive  
✅ **TypeScript**: No compilation errors or linting issues  

## 📱 Responsive Design Features

The website is fully responsive across all devices:

### Mobile (320px - 768px)
- **Header**: Collapsible mobile menu with hamburger icon
- **Hero**: Single column layout with stacked content
- **Business Cards**: Single column grid
- **Welfare Form**: Stacked form fields for easy mobile input
- **Navigation**: Smooth scrolling to sections
- **Lottie Animations**: Responsive sizing (16x16 to 20x20px) with vertical stacking

### Tablet (768px - 1024px)
- **Business Cards**: 2-column grid layout
- **Welfare Form**: 2-4 column grid for form fields
- **Header**: Full navigation visible
- **Lottie Animations**: Medium sizing (20x20px) with horizontal layout

### Desktop (1024px+)
- **Business Cards**: 3-column grid layout
- **Welfare Form**: 4-column grid for optimal space usage
- **Full Navigation**: All menu items visible
- **Lottie Animations**: Large sizing (24x24px) with optimal spacing

## � Environment Configuration

Before deployment, ensure your `.env.production` file is set up with:
```
VITE_FORM_ENDPOINT=/form-submit.php
```

## �🛠️ Deployment Options

### Option 1: cPanel Hosting (Recommended)

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Upload files to cPanel**:
   - Upload the entire `dist/` folder contents to your domain's public_html directory
   - Upload `form-submit.php` to the same directory
   - Ensure `hakuna-matata-movers.jpg` is in the public directory

3. **Configure email**:
   - The form is already configured to send emails to `mulembecommunitysydneyau@gmail.com`
   - No additional configuration needed

### Option 2: Vercel (Static Hosting)

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel --prod
   ```

3. **Note**: Form submissions won't work with static hosting - you'll need a serverless function

### Option 3: Netlify

1. **Build and deploy**:
   ```bash
   npm run build
   # Upload dist/ folder to Netlify
   ```

2. **Add form handling**:
   - Use Netlify Forms or add a serverless function for form processing

## � Security Considerations

- **HTTPS Required**: Deploy with SSL certificate
- **Form Security**:
  - Rate limiting implemented
  - Input validation on both client and server
  - File upload restrictions
  - CSRF protection
- **Email Security**:
  - Secure SMTP configuration
  - Attachment scanning
  - Data encryption in transit
- **Server Security**:
  - Proper file permissions
  - Secure headers
  - CORS policy configured

## �📧 Form Submission Setup

The welfare form includes:
- **Digital signature pad** with canvas API
- **Multi-step form** with applicant and beneficiary details
- **Email integration** sending to `mulembecommunitysydneyau@gmail.com`
- **File attachments** (signature as PNG)

### Form Features:
- ✅ Client-side validation
- ✅ Signature capture
- ✅ Email with HTML formatting
- ✅ JSON and CSV attachments
- ✅ Professional email template

## 🎨 Design System

### Colors (Luhya Cultural Theme):
- **Primary**: Luhya Navy (#1e3a8a)
- **Accent**: Luhya Gold (#f59e0b)
- **Secondary**: Luhya Green (#10b981)
- **Warm**: Community Warm (#dc2626)

### Typography:
- **Headings**: Bold, responsive sizing
- **Body**: Clean, readable fonts
- **Mobile**: Optimized text sizes

## 📁 File Structure

```
dist/
├── index.html
├── assets/
│   ├── index-[hash].css
│   ├── index-[hash].js
│   └── [various images and videos]
├── form-submit.php
└── hakuna-matata-movers.jpg
```

## 🔧 Post-Deployment Testing

1. **Test all pages** on different devices
2. **Test form submission** with signature
3. **Verify email delivery** to community email
4. **Check image loading** (especially Hakuna Matata Movers)
5. **Test navigation** and smooth scrolling

## 📞 Support

For technical issues:
- Check browser console for errors
- Verify PHP is enabled on hosting
- Test form submission with different browsers

## 🌐 Live Features

- **Smooth scrolling navigation**
- **Responsive business directory**
- **Interactive welfare form**
- **Mobile-optimized design**
- **Professional email integration**

---

**Ready for deployment!** 🎉
