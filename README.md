# GtoMaster - Poker GTO Training Website

A simple, interactive website to help casual poker players learn Game Theory Optimal (GTO) strategy through user-friendly quizzes.

## 🎯 Features

- **Clean, Modern Design** - Professional poker-themed interface
- **Interactive Quizzes** - 5 sample GTO poker scenarios with instant feedback
- **Mobile Responsive** - Works perfectly on all devices
- **No Dependencies** - Pure HTML, CSS, and JavaScript (no build tools needed)
- **Progress Tracking** - Visual progress bar and score display

## 🚀 How to Use

### Option 1: Open Locally (Easiest)

1. Simply double-click `index.html` to open it in your web browser
2. That's it! The website will work immediately

### Option 2: Use a Local Server (Recommended for Development)

If you have Python installed:

```bash
# Python 3
python -m http.server 8000

# Then open: http://localhost:8000
```

Or if you have Node.js:

```bash
# Install a simple server globally
npm install -g http-server

# Run it
http-server

# Then open: http://localhost:8080
```

## 🌐 Deploy Online (Free Options)

### Deploy to Netlify (Easiest)

1. Go to [netlify.com](https://www.netlify.com/)
2. Sign up for free
3. Drag and drop your project folder onto Netlify
4. Done! You'll get a live URL instantly

### Deploy to GitHub Pages

1. Create a GitHub account if you don't have one
2. Create a new repository
3. Upload these files to the repository
4. Go to Settings → Pages
5. Select your main branch as the source
6. Your site will be live at `https://yourusername.github.io/repository-name`

### Deploy to Vercel

1. Go to [vercel.com](https://vercel.com/)
2. Sign up for free
3. Click "New Project"
4. Import your GitHub repository or drag and drop files
5. Click "Deploy"

## 📁 Project Structure

```
windsurf-project/
├── index.html      # Main HTML file
├── styles.css      # All styling
├── script.js       # Quiz functionality
└── README.md       # This file
```

## 🎨 Customization

### Change Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2563eb;    /* Main blue color */
    --secondary-color: #10b981;  /* Green accent */
    --accent-color: #f59e0b;     /* Orange accent */
}
```

### Add More Quiz Questions

Edit the `quizQuestions` array in `script.js`:

```javascript
const quizQuestions = [
    {
        question: "Your question here?",
        scenario: "Position: Button | Stack: 100BB",
        options: [
            { text: "Option 1", correct: false },
            { text: "Option 2", correct: true },
            // ... more options
        ],
        explanation: "Explanation of the correct answer"
    },
    // Add more questions...
];
```

### Update Content

- **Hero Section**: Edit the `<section id="home">` in `index.html`
- **Features**: Edit the `<section id="features">` in `index.html`
- **Footer**: Edit the `<footer>` section in `index.html`

## 🔧 Browser Support

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 📝 License

Free to use for personal or commercial projects.

## 💡 Tips for Non-Coders

- **To edit text**: Open `index.html` in any text editor (Notepad, TextEdit, etc.)
- **To change colors**: Open `styles.css` and modify the color codes
- **To add questions**: Open `script.js` and copy the question format
- **Need help?**: Each file has comments explaining what each section does

## 🎓 Next Steps

1. Add more quiz questions to cover different GTO concepts
2. Add a scoring system that saves progress (requires a backend)
3. Add more pages (About, Contact, Pricing)
4. Integrate with a backend for user accounts
5. Add video tutorials or written lessons

---

**Built with ❤️ for poker players who want to improve their game**
