
import { Project, Skill, Experience, Testimonial } from './types';

export const USER_DATA = {
  name: "Hammad Sheikh bin Nadeem",
  title: "Software Developer | Founder of Internee.pk",
  bio: "A technology entrepreneur and software developer dedicated to building platforms that bridge the gap between education and employment. Founder of Internee.pk, empowering thousands of students through digital internships and real-world project experience.",
  email: "hammad@example.pk",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com"
  }
};

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Internee.pk",
    description: "The leading internship platform in Pakistan focused on career growth, skills development, and connecting talent with industry opportunities.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&h=800",
    tools: ["React", "Node.js", "Express", "MongoDB", "Cloudflare"],
    link: "https://internee.pk",
    featured: true
  },
  {
    id: "p2",
    title: "Community Learning Portal",
    description: "A digital hub for mentoring sessions, webinar archives, and collaborative learning resources.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&h=600",
    tools: ["Next.js", "Firebase", "Tailwind CSS"],
    link: "#"
  },
  {
    id: "p3",
    title: "Enterprise HR Engine",
    description: "Internal dashboard for managing candidate pipelines and automated skill assessments.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=600",
    tools: ["React", "PostgreSQL", "AWS"],
    link: "#"
  }
];

export const GALLERY_IMAGES = [
  { url: "https://images.unsplash.com/photo-1540575861501-7ad058df328d?auto=format&fit=crop&w=800&q=80", caption: "Tech Summit Keynote" },
  { url: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80", caption: "Community Workshop" },
  { url: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80", caption: "Founders Meetup" },
  { url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80", caption: "Mentorship Session" },
  { url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80", caption: "Internal Team Sprints" },
  { url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80", caption: "Internee.pk Office Culture" }
];

export const SKILLS: Skill[] = [
  { name: "React & Next.js", category: "Frontend" },
  { name: "Node.js & TypeScript", category: "Backend" },
  { name: "RESTful APIs", category: "Backend" },
  { name: "MongoDB & SQL", category: "Database" },
  { name: "Cloud & DevOps", category: "Cloud" },
  { name: "Team Leadership", category: "Leadership" },
  { name: "Strategic Mentoring", category: "Leadership" },
  { name: "Product Scaling", category: "Leadership" }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "e1",
    title: "Founder & Lead Developer",
    company: "Internee.pk",
    period: "2023 - Present",
    achievements: [
      "Scaled the platform to support 50k+ active users and hundreds of partnering organizations.",
      "Architected the entire tech stack for high-concurrency internship applications.",
      "Established a community-driven mentor network for skill-based certifications."
    ]
  },
  {
    id: "e2",
    title: "Full Stack Engineer",
    company: "Tech Innovation Hub",
    period: "2021 - 2023",
    achievements: [
      "Developed enterprise-grade CRM solutions using the MERN stack.",
      "Optimized database queries reducing API latency by 45%.",
      "Led internal agile sprints for rapid feature deployment."
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Zoya Ahmed",
    role: "Full Stack Intern",
    content: "Internee.pk gave me my first real-world project experience. Hammad's mentorship and the platform structure were life-changing for my career.",
    avatar: "https://i.pravatar.cc/150?u=zoya"
  },
  {
    name: "Bilal Khan",
    role: "Hiring Manager",
    content: "The quality of talent coming out of Hammad's platform is exceptional. He's building a vital bridge for our industry.",
    avatar: "https://i.pravatar.cc/150?u=bilal"
  }
];
