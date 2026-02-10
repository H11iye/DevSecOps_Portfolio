import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, ExternalLink, Code2, Shield, Zap } from "lucide-react";

interface GitHubProject {
  id: number;
  name: string;
  description: string;
  url: string;
  language: string;
  stars: number;
}

/**
 * DevSecOps Portfolio Homepage
 * Design: Minimalist Security-First Aesthetic
 * - Bauhaus precision with cybersecurity visual metaphors
 * - Monochromatic foundation with security orange accents
 * - Split-screen layout: fixed sidebar + masonry grid projects
 */
export default function Home() {
  const [projects, setProjects] = useState<GitHubProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const githubUsername = "your-github-username"; // Replace with actual GitHub username

  // Fetch GitHub projects
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${githubUsername}/repos?sort=stars&per_page=6`);
        if (!response.ok) throw new Error("Failed to fetch projects");
        const data = await response.json();
        const filteredProjects = data.map((repo: any) => ({
          id: repo.id,
          name: repo.name,
          description: repo.description || "No description provided",
          url: repo.html_url,
          language: repo.language || "N/A",
          stars: repo.stargazers_count,
        }));
        setProjects(filteredProjects);
      } catch (error) {
        console.error("Error fetching GitHub projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setFormStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 1000);
  };

  const skills = [
    "Kubernetes",
    "Terraform",
    "CI/CD Pipelines",
    "Docker",
    "Cloud Security",
    "AWS/GCP",
    "Infrastructure as Code",
    "DevOps Automation",
    "Security Scanning",
    "Policy as Code",
    "Monitoring & Logging",
    "Secret Management",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-primary" />
            <h1 className="text-xl font-mono font-bold">DevSecOps Portfolio</h1>
          </div>
          <nav className="flex items-center gap-6">
            <a href="#about" className="text-sm hover:text-primary transition-colors">About</a>
            <a href="#skills" className="text-sm hover:text-primary transition-colors">Skills</a>
            <a href="#projects" className="text-sm hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="text-sm hover:text-primary transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-cover bg-center py-20 md:py-32" style={{
        backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/GVEOHwNfyVyV8nk6Yirc1v/sandbox/QulauJz2cRCbHrre40kp0a-img-1_1770735009000_na1fn_aGVyby1iYWNrZ3JvdW5k.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvR1ZFT0h3TmZ5VnlWOG5rNllpcmMxdi9zYW5kYm94L1F1bGF1SnoyY1JDYkhycmU0MGtwMGEtaW1nLTFfMTc3MDczNTAwOTAwMF9uYTFmbl9hR1Z5YnkxaVlXTnJaM0p2ZFc1ay5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=WyVNopDtApGHT0gdvH~gw3d9GbXnPuLSmTb8Xo7Yy4PsXjgfVONSufztj0SxuLvudJ5fd9C-5za928aohh02WiRwjUGQXRrYnKP3JZEUIUJNALYbtZxfBbonlo9tUs1icI1fYKXYdTYjvuCXQasNn9tSJb-EYAz9JZ2EPD82edQdIfOc36cipRdl0MLF8A6BZNIA4l6q-TePA4982s1QhUPeYVPHLhUAF~cssD5q13gHYXCXAvhVYPmNz5TvpSkSTI-eXLcLzGwG7NVN81WV-fGiMGTcVxCTG-PIvyttTKqGUqOIB5-xH6nslzFqft9-mrmoexvGyK-O77ZpKJi1cA__')`
      }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <div className="accent-line mb-6"></div>
            <h1 className="text-5xl md:text-6xl font-mono font-bold text-white mb-4">
              DevSecOps Engineer
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Building secure, scalable infrastructure with automation and best practices. Passionate about integrating security throughout the entire development lifecycle.
            </p>
            <div className="flex gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                View My Work
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-card border-b border-border">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="accent-line mb-4"></div>
              <h2 className="text-4xl font-mono font-bold mb-6">About Me</h2>
              <p className="text-lg text-muted-foreground mb-4">
                I'm a DevSecOps engineer with a passion for building secure, automated infrastructure. With expertise in cloud platforms, containerization, and CI/CD pipelines, I help organizations implement security best practices from day one.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                My approach combines infrastructure as code, automated security scanning, and continuous monitoring to create resilient systems that scale with confidence.
              </p>
              <div className="flex gap-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:your.email@example.com" className="text-primary hover:text-primary/80 transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="bg-secondary rounded-lg p-8 border border-border">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-mono font-bold mb-2">Security-First Mindset</h3>
                    <p className="text-sm text-muted-foreground">Integrating security into every stage of the development pipeline.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Code2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-mono font-bold mb-2">Infrastructure as Code</h3>
                    <p className="text-sm text-muted-foreground">Provisioning and managing cloud resources through version-controlled code.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-mono font-bold mb-2">Automation & Efficiency</h3>
                    <p className="text-sm text-muted-foreground">Building automated pipelines that reduce manual work and human error.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 md:py-24">
        <div className="container">
          <div className="accent-line mb-4"></div>
          <h2 className="text-4xl font-mono font-bold mb-12">Core Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <h3 className="font-mono font-semibold">{skill}</h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-24 bg-card border-b border-border">
        <div className="container">
          <div className="accent-line mb-4"></div>
          <h2 className="text-4xl font-mono font-bold mb-12">Featured Projects</h2>
          
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="project-card animate-pulse">
                  <div className="h-6 bg-muted rounded mb-4"></div>
                  <div className="h-4 bg-muted rounded mb-4"></div>
                  <div className="h-4 bg-muted rounded w-2/3"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <Card key={project.id} className="project-card group">
                  <div className="mb-4">
                    <div className="w-2 h-2 bg-primary rounded-full mb-3"></div>
                    <h3 className="font-mono font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="skill-badge">{project.language}</span>
                    {project.stars > 0 && (
                      <span className="text-xs text-muted-foreground">⭐ {project.stars}</span>
                    )}
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-mono"
                  >
                    View Repository <ExternalLink className="w-4 h-4" />
                  </a>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24">
        <div className="container max-w-2xl">
          <div className="accent-line mb-4"></div>
          <h2 className="text-4xl font-mono font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Have a project in mind or want to discuss DevSecOps practices? I'd love to hear from you.
          </p>
          
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-mono font-semibold mb-2">
                Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="border-border"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-mono font-semibold mb-2">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="border-border"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-mono font-semibold mb-2">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell me about your project or inquiry..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="border-border min-h-32"
              />
            </div>
            
            <Button
              type="submit"
              disabled={formStatus === "sending"}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              {formStatus === "sending" ? "Sending..." : "Send Message"}
            </Button>
            
            {formStatus === "success" && (
              <p className="text-sm text-green-600 font-mono">✓ Message sent successfully!</p>
            )}
            {formStatus === "error" && (
              <p className="text-sm text-destructive font-mono">✗ Failed to send message. Please try again.</p>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container text-center text-sm text-muted-foreground">
          <p className="font-mono">© 2026 DevSecOps Portfolio. Built with security-first principles.</p>
        </div>
      </footer>
    </div>
  );
}
