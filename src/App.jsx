import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Download, 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  Filter,
  ChevronRight,
  User,
  Briefcase,
  Code,
  MessageCircle,
  Award,
  BookOpen,
  CheckCircle,
  Menu,
  X
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  // Sample projects data
  const projects = [
    {
      id: 1,
      title: "Network Vulnerability Scanner",
      description: "Developed a comprehensive network scanning tool using Python and Nmap to identify security vulnerabilities in enterprise networks.",
      technologies: ["Python", "Nmap", "Socket Programming", "JSON"],
      category: "Network Security",
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400"
    },
    {
      id: 2,
      title: "Web Application Penetration Testing",
      description: "Conducted comprehensive security assessment of web applications using OWASP methodology and automated testing tools.",
      technologies: ["Burp Suite", "OWASP ZAP", "SQLMap", "Metasploit"],
      category: "Penetration Testing",
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400"
    },
    {
      id: 3,
      title: "Incident Response Dashboard",
      description: "Created a real-time security incident monitoring and response dashboard using React and cybersecurity APIs.",
      technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
      category: "Security Monitoring",
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400"
    },
    {
      id: 4,
      title: "Malware Analysis Lab",
      description: "Built a secure malware analysis environment with automated threat detection and behavioral analysis capabilities.",
      technologies: ["VMware", "Wireshark", "Cuckoo Sandbox", "Python"],
      category: "Malware Analysis",
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400"
    }
  ];

  // Sample blog posts
  const blogPosts = [
    {
      id: 1,
      title: "Understanding SQL Injection Attacks",
      category: "Web Security",
      excerpt: "A comprehensive guide to understanding, detecting, and preventing SQL injection vulnerabilities in web applications.",
      link: "#",
      date: "2024-05-15"
    },
    {
      id: 2,
      title: "Network Security Best Practices",
      category: "Network Security",
      excerpt: "Essential security practices every organization should implement to protect their network infrastructure.",
      link: "#",
      date: "2024-05-10"
    },
    {
      id: 3,
      title: "Introduction to Ethical Hacking",
      category: "Ethical Hacking",
      excerpt: "Getting started with ethical hacking: tools, techniques, and methodologies for penetration testing.",
      link: "#",
      date: "2024-05-05"
    }
  ];

  const skills = [
    "Penetration Testing", "Network Security", "Ethical Hacking", "Vulnerability Assessment",
    "Threat Detection", "Malware Analysis", "Email Security", "Risk Assessment",
    "SIEM Tools", "Cryptography", "Web Application Security", "Social Engineering"
  ];

  const certifications = [
    "EC-Council Certified Ethical Hacker (CEH) v13 | 2025",
    "OPSWAT Email & Network Security | 2025",
    "Cisco Operating System and Computer Hardware Basics | 2024",
    "IBM Frontend Development (Coursera) | 2024",
    "LearnQuest Cloud Computing (Coursera) | 2024"
  ];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  const categories = ['all', ...new Set(projects.map(p => p.category))];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simulate form submission (replace with actual EmailJS implementation)
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus(''), 3000);
    }, 1000);
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'services', 'blog', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-purple-500" />
              <span className="text-xl font-bold">Mahesh Katare</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Projects', 'Services', 'Blog', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-colors duration-200 hover:text-purple-400 ${
                    activeSection === item.toLowerCase() ? 'text-purple-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              {['Home', 'About', 'Projects', 'Services', 'Blog', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 px-4 text-gray-300 hover:text-purple-400"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="relative inline-block">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-600 p-1">
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                  <User className="w-16 h-16 text-purple-400" />
                </div>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Mahesh Katare
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Securing the Future with Cybersecurity Expertise
          </p>
          
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Passionate cybersecurity professional specializing in penetration testing, 
            network security, and ethical hacking. Dedicated to protecting digital assets 
            and educating others about cybersecurity best practices.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="cybermk\MAHESH_KATARE.PDF"
              download
              className="inline-flex items-center px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors duration-200"
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </a>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center px-8 py-3 border-2 border-purple-600 hover:bg-purple-600 rounded-lg font-semibold transition-colors duration-200"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Get In Touch
            </button>
          </div>
          
          <div className="flex justify-center space-x-6 mt-8">
            <a href="https://www.linkedin.com/in/maheshkatare0807/" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/hopesalive0807" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://x.com/kataremayur0807" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-gray-400">Get to know more about my background and expertise</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-purple-400">My Journey</h3>
              <p className="text-gray-300 mb-6">
                I'm a cybersecurity enthusiast with a BTech in Cybersecurity, passionate about 
                protecting digital infrastructure and staying ahead of emerging threats. My expertise 
                spans across penetration testing, network security, and ethical hacking.
              </p>
              <p className="text-gray-300 mb-6">
                I believe in continuous learning and sharing knowledge with the cybersecurity community. 
                Through hands-on projects and real-world experience, I've developed a comprehensive 
                understanding of modern security challenges and solutions.
              </p>
              
              <h4 className="text-xl font-bold mb-4 text-purple-400">Education</h4>
              <div className="bg-gray-800 p-4 rounded-lg mb-6">
                <h5 className="font-semibold">B.Tech CSE-Cybersecurity</h5>
                <p className="text-gray-400">GHRCEM PUNE | SPPU • 2022-2026</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-purple-400">Core Skills</h3>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                    <span className="text-sm text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
              
              <h3 className="text-2xl font-bold mb-6 text-purple-400">Certifications</h3>
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-3 mb-3">
                  <Award className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Projects</h2>
            <p className="text-xl text-gray-400">Showcasing my cybersecurity projects and contributions</p>
          </div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                  selectedFilter === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {category === 'all' ? 'All Projects' : category}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/20">
                <div className="h-48 bg-gray-700 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Services</h2>
            <p className="text-xl text-gray-400">Professional cybersecurity services I offer</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg text-center hover:bg-gray-750 transition-colors">
              <Shield className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Cybersecurity Consulting</h3>
              <p className="text-gray-400">
                Comprehensive security assessments and strategic guidance to strengthen your organization's security posture.
              </p>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-lg text-center hover:bg-gray-750 transition-colors">
              <Code className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Vulnerability Scanning</h3>
              <p className="text-gray-400">
                Thorough vulnerability assessments using industry-standard tools and methodologies to identify security gaps.
              </p>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-lg text-center hover:bg-gray-750 transition-colors">
              <BookOpen className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Student Workshops</h3>
              <p className="text-gray-400">
                Educational workshops and training sessions for students interested in cybersecurity careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Blog</h2>
            <p className="text-xl text-gray-400">Latest articles and cybersecurity insights</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-gray-800 rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">{post.date}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Read More
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-400">Let's discuss cybersecurity opportunities and collaborations</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-purple-400">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-purple-400" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-400">cybermk0807@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-purple-400" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-400">+91 8767653287</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-purple-400" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-gray-400">Pune, Maharashtra, India</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/in/maheshkatare0807/" className="p-3 bg-gray-800 rounded-lg hover:bg-purple-600 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="https://github.com/hopesalive0807" className="p-3 bg-gray-800 rounded-lg hover:bg-purple-600 transition-colors">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="https://x.com/kataremayur0807" className="p-3 bg-gray-800 rounded-lg hover:bg-purple-600 transition-colors">
                    <Twitter className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                    placeholder="Your message here..."
                  />
                </div>
                
                <button
                  onClick={handleFormSubmit}
                  disabled={formStatus === 'sending'}
                  className="w-full px-8 py-3 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-800 rounded-lg font-semibold transition-colors duration-200"
                >
                  {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
                
                {formStatus === 'success' && (
                  <p className="text-green-400 text-center">Message sent successfully!</p>
                )}
              </div>
            </div> 
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Shield className="w-6 h-6 text-purple-500" />
            <span className="text-lg font-bold">Mahesh Katare</span>
          </div>
          <p className="text-gray-400 mb-4">
            Cybersecurity Professional | Penetration Tester | Security Researcher
          </p>
          <p className="text-gray-500 text-sm">
            © 2025 Mahesh Katare. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;