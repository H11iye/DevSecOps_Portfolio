# DevSecOps Portfolio Website

A professional, modern portfolio website built with React, Tailwind CSS, and showcasing GitHub projects. Designed with a **Minimalist Security-First** aesthetic that reflects DevSecOps principles.

## 🎨 Design Philosophy

This portfolio follows the **Minimalist Security-First** design approach, combining Bauhaus precision with cybersecurity visual metaphors. The design features:

- **Color Palette**: Deep charcoal (#1a1a1a) and off-white (#f5f5f5) foundation with security orange (#ff6b35) accents
- **Typography**: IBM Plex Sans for body text and IBM Plex Mono for headings, reflecting technical precision
- **Layout**: Clean, professional design with emphasis on clarity and information hierarchy
- **Visual Elements**: Security-themed graphics and network infrastructure imagery

## 🚀 Features

- **Dynamic GitHub Integration**: Automatically pulls your repositories from GitHub
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Contact Form**: Built-in contact form for inquiries
- **Skills Showcase**: Display your core DevSecOps competencies
- **Project Cards**: Beautiful project cards with links to your GitHub repositories
- **Professional Navigation**: Sticky header with smooth navigation
- **Modern Styling**: Tailwind CSS with custom design tokens

## 📋 Setup Instructions

### Prerequisites

- Node.js 18+ and pnpm installed
- A GitHub account with public repositories

### Installation

1. **Clone or navigate to the project directory**:
   ```bash
   cd devsecops-portfolio
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Start the development server**:
   ```bash
   pnpm dev
   ```

   The portfolio will be available at `http://localhost:3000`

### Build for Production

```bash
pnpm build
```

The production-ready files will be in the `dist/` directory.

## ⚙️ Customization Guide

### 1. Update Your GitHub Username

Open `client/src/pages/Home.tsx` and find this line:

```typescript
const githubUsername = "your-github-username"; // Replace with actual GitHub username
```

Replace `"your-github-username"` with your actual GitHub username. The portfolio will automatically fetch your latest repositories.

### 2. Personalize Your Bio

In the **About Me** section of `Home.tsx`, update the text to reflect your experience:

```typescript
<p className="text-lg text-muted-foreground mb-4">
  I'm a DevSecOps engineer with a passion for building secure, automated infrastructure...
</p>
```

### 3. Update Skills

Modify the `skills` array in `Home.tsx` to match your expertise:

```typescript
const skills = [
  "Kubernetes",
  "Terraform",
  "CI/CD Pipelines",
  // Add your skills here
];
```

### 4. Update Social Links

Replace the placeholder links in the About section:

```typescript
<a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer">
  <Github className="w-6 h-6" />
</a>
<a href="https://linkedin.com/in/YOUR_PROFILE" target="_blank" rel="noopener noreferrer">
  <Linkedin className="w-6 h-6" />
</a>
<a href="mailto:your.email@example.com">
  <Mail className="w-6 h-6" />
</a>
```

### 5. Configure Contact Form

The contact form currently simulates submission. To integrate with a real backend service:

1. Update the `handleFormSubmit` function in `Home.tsx`
2. Replace the setTimeout with an actual API call to your backend or a service like Formspree, EmailJS, or Netlify Forms

Example with Formspree:

```typescript
const handleFormSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setFormStatus("sending");
  
  try {
    const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    
    if (response.ok) {
      setFormStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setFormStatus("error");
    }
  } catch (error) {
    setFormStatus("error");
  }
};
```

### 6. Update Hero Background

The hero section uses a generated security-themed background. To customize:

1. Replace the image URL in the `style` prop of the hero section
2. Or generate a new background image and update the URL

### 7. Customize Colors

All colors are defined in `client/src/index.css`. To change the color scheme:

```css
:root {
  --primary: #ff6b35;           /* Security orange - change this */
  --background: #f5f5f5;        /* Light background */
  --foreground: #1a1a1a;        /* Dark text */
  /* ... other colors */
}
```

## 📱 Responsive Breakpoints

The portfolio is optimized for:

- **Mobile**: 320px and up
- **Tablet**: 768px and up (md)
- **Desktop**: 1024px and up (lg)

## 🔧 Project Structure

```
client/
├── src/
│   ├── pages/
│   │   ├── Home.tsx          # Main portfolio page
│   │   └── NotFound.tsx      # 404 page
│   ├── components/           # Reusable UI components
│   ├── contexts/             # React contexts
│   ├── lib/                  # Utility functions
│   ├── App.tsx               # Main app component
│   ├── main.tsx              # React entry point
│   └── index.css             # Global styles and design tokens
├── public/                   # Static assets
└── index.html               # HTML template
```

## 🎯 Deployment

### Deploy to Manus

1. Create a checkpoint of your work
2. Click the "Publish" button in the Manus UI
3. Your portfolio will be live at a Manus-provided URL

### Deploy to Other Platforms

**Vercel**:
```bash
vercel
```

**Netlify**:
```bash
netlify deploy --prod --dir=dist/public
```

**GitHub Pages**:
```bash
# Update vite.config.ts with your repo name
pnpm build
# Push dist/ to gh-pages branch
```

## 🛠️ Technology Stack

- **React 19**: UI framework
- **Tailwind CSS 4**: Utility-first CSS
- **TypeScript**: Type safety
- **Vite**: Build tool
- **shadcn/ui**: Component library
- **Lucide React**: Icons
- **Wouter**: Client-side routing

## 📝 Best Practices

- Keep your GitHub repositories public and well-documented
- Update your portfolio regularly with new projects
- Ensure all links are working (GitHub, LinkedIn, email)
- Test the portfolio on multiple devices before deployment
- Monitor form submissions if integrated with a backend service

## 🤝 Contributing

This is your personal portfolio. Feel free to customize and extend it as needed.

## 📄 License

This project is open source and available under the MIT License.

## 💡 Tips for a Strong Portfolio

1. **Showcase Security Focus**: Highlight projects that demonstrate security best practices
2. **Document Your Process**: Include detailed README files in your GitHub projects
3. **Keep It Updated**: Regularly add new projects and update your skills
4. **Professional Tone**: Maintain a professional, clear communication style
5. **Mobile-First**: Ensure your portfolio looks great on all devices

---

**Built with the Minimalist Security-First design philosophy** 🔒
