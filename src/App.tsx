import React, { useState, useEffect } from 'react';
import { Menu, X, User, Code, Mail, ExternalLink, Github, Database, MapPin, Users, GraduationCap, Calendar, Award, BookOpen, Briefcase } from 'lucide-react';


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "Inventory Management System",
      description: "A comprehensive database-driven inventory management solution designed to streamline stock tracking, manage product catalogs, and optimize warehouse operations with real-time updates and detailed analytics.",
      technologies: ["Database Design", "SQL", "Data Management", "Analytics"],
      icon: <Database size={48} className="text-blue-600" />,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
      category: "Database Systems"
    },
    {
      title: "Apartment Visitor Management System",
      description: "Smart visitor management system for residential complexes built with Python and MySQL, featuring digital check-in/check-out, resident notifications, and comprehensive security management with automated logging.",
      technologies: ["Python", "MySQL", "Security Systems", "Automation"],
      icon: <Users size={48} className="text-emerald-600" />,
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50",
      borderColor: "border-emerald-200",
      category: "Full-Stack Development"
    },
    {
      title: "Vegetarian Restaurant Review Website",
      description: "A dedicated platform for vegetarian food enthusiasts in Ernakulam, built with HTML, CSS, SQL, and Google Maps API integration. Features comprehensive restaurant discovery, reviews, ratings, and location-based search for all vegetarian restaurants across Ernakulam district.",
      technologies: ["HTML", "CSS", "SQL", "Google Maps API", "Location Services"],
      icon: <MapPin size={48} className="text-orange-600" />,
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
      borderColor: "border-orange-200",
      category: "Web Development"
    }
  ];

  const skills = [
    { name: "Python", level: 85, color: "bg-blue-500" },
    { name: "SQL", level: 90, color: "bg-green-500" },
    { name: "Database Design", level: 88, color: "bg-purple-500" },
    { name: "HTML/CSS", level: 82, color: "bg-orange-500" },
    { name: "MySQL", level: 87, color: "bg-teal-500" },
    { name: "Google Maps API", level: 75, color: "bg-red-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-white/20 z-50 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Aiswarya P
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize text-sm font-medium transition-all duration-300 relative ${
                    activeSection === item 
                      ? 'text-blue-600' 
                      : 'text-slate-600 hover:text-blue-600'
                  }`}
                >
                  {item}
                  {activeSection === item && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100 bg-white/95 backdrop-blur-md">
              {['home', 'about', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-3 px-4 capitalize text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 rounded-lg mx-2"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in">
            <div className="mb-8">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                  <User size={64} className="text-white relative z-10" />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-xl -z-10"></div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6">
              Hello, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Aiswarya P
              </span>
            </h1>
            
            <div className="space-y-2 mb-8">
              <p className="text-xl md:text-2xl text-slate-600 font-medium">
                B.Tech Computer Science Engineering Student
              </p>
              <p className="text-lg text-slate-500">
                SCMS School of Engineering and Technology
              </p>
              <div className="flex items-center justify-center gap-6 mt-4">
                <div className="flex items-center gap-2 text-slate-500">
                  <GraduationCap size={18} className="text-blue-600" />
                  <span className="text-sm font-medium">4th Year</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <Calendar size={18} className="text-purple-600" />
                  <span className="text-sm font-medium">Class of 2026</span>
                </div>
              </div>
            </div>
            
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Passionate about creating innovative database-driven solutions and web applications 
              that solve real-world problems through elegant code and thoughtful design.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('projects')}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-1"
              >
                <Code size={20} />
                Explore My Work
                <div className="group-hover:translate-x-1 transition-transform duration-200">
                  <ExternalLink size={16} />
                </div>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="group border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-medium hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-1 backdrop-blur-sm bg-white/50"
              >
                <Mail size={20} />
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - About & Education */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                    <BookOpen size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-800">Academic Journey</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <GraduationCap size={16} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">Bachelor of Technology</h4>
                      <p className="text-blue-600 font-medium">Computer Science Engineering</p>
                      <p className="text-slate-600">SCMS School of Engineering and Technology</p>
                      <p className="text-sm text-slate-500">2022 - 2026 (4th Year)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                    <Award size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-800">Passion & Focus</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  I'm deeply passionate about database systems, web development, and creating innovative solutions 
                  that bridge the gap between complex technical requirements and user-friendly experiences. 
                  My academic journey has been focused on building practical, real-world applications that 
                  demonstrate both technical proficiency and creative problem-solving.
                </p>
              </div>
            </div>

            {/* Right Column - Skills */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center">
                    <Code size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-800">Technical Skills</h3>
                </div>
                
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-slate-700">{skill.name}</span>
                        <span className="text-sm text-slate-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-2 ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl border border-orange-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl flex items-center justify-center">
                    <Briefcase size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-800">Specializations</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {['Database Design', 'Web Development', 'System Architecture', 'API Integration', 'Security Systems', 'Location Services'].map((spec) => (
                    <div key={spec} className="bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg text-sm font-medium text-slate-700 border border-orange-200 text-center hover:bg-white transition-colors">
                      {spec}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -right-20 w-40 h-40 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/4 -left-20 w-40 h-40 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A showcase of my technical expertise through innovative database-driven applications 
              and web development projects that solve real-world challenges.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br ${project.bgGradient} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border ${project.borderColor} transform hover:-translate-y-2`}
              >
                <div className="p-8 relative">
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/80 backdrop-blur-sm text-slate-600 px-3 py-1 rounded-full text-xs font-medium border">
                      {project.category}
                    </span>
                  </div>
                  
                  <div className="mb-6 relative">
                    <div className={`w-16 h-16 bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">
                        {React.cloneElement(project.icon, { size: 32 })}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                    {project.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">Technologies</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="bg-white/80 backdrop-blur-sm text-slate-700 px-2 py-1 rounded-lg text-xs font-medium border border-white/50 hover:bg-white transition-colors">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-3 pt-4 border-t border-white/30">
                      <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors text-sm group">
                        <ExternalLink size={14} />
                        <span className="group-hover:underline">View Details</span>
                      </button>
                      <button className="flex items-center gap-2 text-slate-600 hover:text-slate-700 font-medium transition-colors text-sm group">
                        <Github size={14} />
                        <span className="group-hover:underline">Source Code</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-4">Let's Connect</h2>
          <div className="w-20 h-1 bg-white mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm always excited to discuss new opportunities, collaborate on innovative projects, 
            or simply connect with fellow technology enthusiasts and industry professionals.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Mail size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Email Me</h3>
              <a
                href="mailto:aiswaryavenu04@gmail.com"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-medium hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Mail size={18} />
                aiswaryavenu04@gmail.com
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <GraduationCap size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Academic Institution</h3>
              <div className="text-blue-100">
                <p className="font-medium">SCMS School of Engineering</p>
                <p className="text-sm opacity-90">and Technology</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 max-w-md mx-auto">
            <p className="text-blue-100 text-sm leading-relaxed">
              <strong className="text-white">Available for:</strong><br />
              Internships • Project Collaborations • Full-time Opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400">
            © 2024 Aiswarya P • Crafted with passion for innovation and excellence
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;