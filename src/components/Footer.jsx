import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Facebook, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const footerLinks = [
    {
      title: "Navegação",
      links: [
        { name: "Início", action: () => scrollToSection('hero') },
        { name: "Sobre", action: () => scrollToSection('about') },
        { name: "Produtos", action: () => scrollToSection('services') },
        { name: "Contato", action: () => scrollToSection('contact') }
      ]
    },
    {
      title: "Produtos",
      links: [
        { name: "Tubo Dreno PEAD Corrugado", action: () => scrollToSection('services') },
        { name: "Sistemas de Drenagem", action: () => scrollToSection('services') },
        { name: "Geossintéticos", action: () => scrollToSection('services') },
        { name: "Soluções Técnicas", action: () => scrollToSection('contact') }
      ]
    },
    {
      title: "Suporte",
      links: [
        { name: "Orçamentos", action: () => scrollToSection('contact') },
        { name: "Assistência Técnica", action: () => window.open('tel:+551152424280') },
        { name: "Documentação", action: () => scrollToSection('contact') },
        { name: "FAQ", action: () => scrollToSection('contact') }
      ]
    }
  ]

  const contactInfo = [
    {
      icon: Phone,
      text: "(11) 5242-4280",
      action: () => window.open('tel:+551152424280')
    },
    {
      icon: Mail,
      text: "contato@ntcbrasil.com.br",
      action: () => window.open('mailto:contato@ntcbrasil.com.br')
    },
    {
      icon: MapPin,
      text: "São Paulo, SP",
      action: null
    }
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-400/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            
            {/* Company Info */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="flex items-center mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1754322940934_0.png" 
                  alt="NTC Dreno"
                  className="h-10 w-auto filter brightness-0 invert"
                />
              </motion.div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Especialistas em drenagem de rodovias com tubos dreno PEAD corrugados. 
                Soluções eficientes e resistentes para sistemas de drenagem.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={index}
                    className={`flex items-center space-x-3 ${
                      contact.action ? 'cursor-pointer hover:text-primary-400 transition-colors' : ''
                    }`}
                    onClick={contact.action}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    whileHover={contact.action ? { scale: 1.05 } : {}}
                  >
                    <contact.icon className="w-5 h-5 text-primary-400" />
                    <span className="text-gray-300">{contact.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Footer Links */}
            {footerLinks.map((section, sectionIndex) => (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 + 0.2 }}
              >
                <h3 className="text-xl font-bold mb-6 text-white">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.li key={linkIndex}>
                      <button
                        onClick={link.action}
                        className="text-gray-300 hover:text-primary-400 transition-colors duration-300 text-left block w-full"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {link.name}
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Newsletter Section */}
          <motion.div
            className="bg-primary-900/30 backdrop-blur-sm border border-primary-800/30 rounded-2xl p-8 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                Fique por dentro das novidades!
              </h3>
              <p className="text-gray-300 mb-6">
                Receba informações sobre novos produtos, projetos e tecnologias em drenagem.
              </p>
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="btn-primary inline-flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Entre em Contato</span>
                <Mail className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>

          {/* Social Media & Bottom */}
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400">
                © 2024 NTC Dreno. Todos os direitos reservados.
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Especialistas em tubos dreno PEAD corrugados
              </p>
            </div>

            <div className="flex items-center space-x-6">
              {/* Social Media */}
              <motion.a
                href="https://www.facebook.com/ntcbrasil"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="w-6 h-6" />
              </motion.a>

              {/* Back to Top */}
              <motion.button
                onClick={scrollToTop}
                className="bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent"></div>
      </div>
    </footer>
  )
}