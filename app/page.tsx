"use client"

import { useState, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { Float, Environment } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Menu,
  X,
  Zap,
  Target,
  TrendingUp,
  Users,
  ChevronDown,
  ChevronRight,
  Star,
  Quote,
  ArrowRight,
  Sparkles,
  Rocket,
  Heart,
  Share2,
  MessageCircle,
} from "lucide-react"
import Image from "next/image"

// 3D Floating Elements Component
function FloatingElements() {
  return (
    <>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[-4, 2, -2]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color="#8b5cf6" />
        </mesh>
      </Float>
      <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
        <mesh position={[4, -1, -1]}>
          <boxGeometry args={[0.8, 0.8, 0.8]} />
          <meshStandardMaterial color="#06b6d4" />
        </mesh>
      </Float>
      <Float speed={1.8} rotationIntensity={0.8} floatIntensity={2.5}>
        <mesh position={[2, 3, -3]}>
          <cylinderGeometry args={[0.3, 0.3, 1]} />
          <meshStandardMaterial color="#f59e0b" />
        </mesh>
      </Float>
    </>
  )
}

// Image Slider Component
function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative h-96 overflow-hidden rounded-2xl shadow-2xl">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
              index === currentSlide ? "translate-x-0" : index < currentSlide ? "-translate-x-full" : "translate-x-full"
            }`}
          >
            <Image src={slide || "/placeholder.svg"} alt={`Demo slide ${index + 1}`} fill className="object-cover" />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-purple-500 scale-125" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  const navItems = [
    { name: "Home", id: "hero" },
    { name: "Features", id: "features" },
    { name: "Demo", id: "demo" },
    { name: "FAQ", id: "faq" },
    { name: "Testimonials", id: "testimonials" },
  ]

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI-Powered Content",
      description: "Generate engaging social media content with advanced AI algorithms tailored to your brand voice.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Audience Targeting",
      description: "Reach the right audience with precision targeting and demographic analysis tools.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Analytics & Insights",
      description: "Track performance with detailed analytics and actionable insights to optimize your strategy.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Collaboration",
      description: "Collaborate seamlessly with your team using our integrated workflow management system.",
    },
  ]

  const faqs = [
    {
      question: "How does SOCIOPEN generate content?",
      answer:
        "SOCIOPEN uses advanced AI algorithms to analyze your brand voice, target audience, and trending topics to generate highly engaging and relevant social media content.",
    },
    {
      question: "Can I customize the generated content?",
      answer:
        "All generated content can be fully customized, edited, and refined to match your specific requirements and brand guidelines.",
    },
    {
      question: "What social media platforms are supported?",
      answer:
        "SOCIOPEN supports all major social media platforms including Instagram, Facebook, Twitter, LinkedIn, TikTok, and more.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a 14-day free trial with full access to all features so you can experience the power of SOCIOPEN risk-free.",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechStart Inc.",
      content:
        "SOCIOPEN transformed our social media strategy. Our engagement rates increased by 300% in just two months!",
      rating: 5,
    },
    {
      name: "Mike Chen",
      role: "Content Creator",
      company: "Creative Agency",
      content: "The AI-generated content is incredibly natural and on-brand. It saves me hours of work every week.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Social Media Manager",
      company: "Fashion Brand",
      content: "The analytics insights helped us understand our audience better and create more targeted content.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              SOCIOPEN
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white/80 hover:text-white transition-colors duration-300 hover:scale-105"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-white/80 hover:text-white py-2"
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <FloatingElements />
            <Environment preset="night" />
          </Canvas>
        </div>

        <div
          className="relative z-10 text-center px-4 max-w-6xl mx-auto"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <div className="mb-8">
            <Badge className="mb-4 bg-purple-500/20 text-purple-300 border-purple-500/30">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Social Media Content
            </Badge>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
            SOCIOPEN
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your social media presence with AI-powered content creation, advanced analytics, and seamless team
            collaboration.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
            >
              Start Free Trial
              <Rocket className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
            >
              Watch Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        >
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
              <Zap className="w-4 h-4 mr-2" />
              Powerful Features
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Everything You Need to
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}
                Succeed
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Discover the tools that will revolutionize your social media content creation and management workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 backdrop-blur-lg hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 group"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 text-purple-400 group-hover:text-cyan-400 transition-colors duration-300 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Widget Section */}
      <section id="demo" className="py-20 relative">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          style={{
            transform: `translateY(${scrollY * 0.05}px)`,
          }}
        >
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-pink-500/20 text-pink-300 border-pink-500/30">
              <Heart className="w-4 h-4 mr-2" />
              Live Demo
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              See SOCIOPEN in
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                Action
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto mb-12">
              Experience the power of our platform with this interactive demo showcasing real content creation
              workflows.
            </p>
          </div>

          <ImageSlider />

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Share2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Multi-Platform Publishing</h3>
              <p className="text-white/70">
                Publish to all your social media platforms simultaneously with optimized formatting.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Smart Content Generation</h3>
              <p className="text-white/70">
                AI analyzes trends and generates content that resonates with your audience.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Real-Time Analytics</h3>
              <p className="text-white/70">
                Track performance metrics and optimize your content strategy in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 relative">
        <div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
          style={{
            transform: `translateY(${scrollY * 0.03}px)`,
          }}
        >
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
              <MessageCircle className="w-4 h-4 mr-2" />
              FAQ
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Frequently Asked
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                {" "}
                Questions
              </span>
            </h2>
            <p className="text-xl text-white/70">Get answers to the most common questions about SOCIOPEN.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-lg">
                <CardContent className="p-0">
                  <button
                    className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors duration-300"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span className="text-lg font-semibold text-white">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronDown className="w-5 h-5 text-purple-400" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-purple-400" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 relative">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          style={{
            transform: `translateY(${scrollY * 0.02}px)`,
          }}
        >
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-500/20 text-green-300 border-green-500/30">
              <Quote className="w-4 h-4 mr-2" />
              Testimonials
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              What Our Clients
              <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent"> Say</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Join thousands of satisfied customers who have transformed their social media presence with SOCIOPEN.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 backdrop-blur-lg hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20"
              >
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-white/80 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-white/60">{testimonial.role}</p>
                    <p className="text-purple-400 text-sm">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-lg border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                SOCIOPEN
              </div>
              <p className="text-white/70 mb-4">
                Revolutionizing social media content creation with AI-powered tools and analytics.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-white/70">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-white/70">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-white/70">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60">
            <p>&copy; {new Date().getFullYear()} SOCIOPEN. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
