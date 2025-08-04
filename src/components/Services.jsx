import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Zap, Award, Truck, Settings, CheckCircle, ArrowRight, Star } from 'lucide-react'

export default function Services() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const productImages = [
    "https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754322931395_s1uf4od3p2m_tubos-corrugados-para-drenagem-1-1024x768.jpg",
    "https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754322932450_dpea2yctyr_tubos-para-drenagem-1-576x1024.jpg",
    "https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754322933567_9m6sqomh0xe_tubos-para-drenagem-2-576x1024.jpg",
    "https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754322934634_1p00myc52st_tubo_dreno_2.jpg"
  ]

  const benefits = [
    {
      icon: ShieldCheck,
      title: "Resistência Química e Mecânica",
      description: "PEAD de alta densidade garante durabilidade excepcional contra agentes químicos e pressão do solo."
    },
    {
      icon: Zap,
      title: "Escoamento Rápido",
      description: "Estrutura corrugada favorece o fluxo eficiente da água, prevenindo alagamentos e erosões."
    },
    {
      icon: Award,
      title: "Longa Vida Útil",
      description: "Materiais premium e engenharia avançada garantem décadas de funcionamento sem manutenção."
    },
    {
      icon: Truck,
      title: "Fácil Transporte",
      description: "Design leve e compacto facilita o transporte e reduz custos logísticos dos projetos."
    },
    {
      icon: Settings,
      title: "Instalação Simplificada",
      description: "Sistema prático de instalação reduz tempo de obra e custos de mão de obra."
    },
    {
      icon: CheckCircle,
      title: "Versatilidade de Aplicação",
      description: "Adequado para obras civis, agrícolas e de infraestrutura em diversos terrenos."
    }
  ]

  const applications = [
    "Drenagem de rodovias e estradas",
    "Sistemas de drenagem urbana",
    "Obras de infraestrutura civil",
    "Projetos agrícolas e rurais",
    "Controle de erosão em taludes",
    "Drenagem de aterros sanitários"
  ]

  const specifications = [
    { label: "Material", value: "PEAD (Polietileno de Alta Densidade)" },
    { label: "Estrutura", value: "Corrugado para máximo desempenho" },
    { label: "Resistência", value: "Química e mecânica superior" },
    { label: "Instalação", value: "Rápida e econômica" },
    { label: "Manutenção", value: "Mínima ou inexistente" },
    { label: "Vida Útil", value: "Decades de funcionamento" }
  ]

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-primary-50/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Nossos Produtos
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tubo Dreno{' '}
            <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              PEAD Corrugado
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A solução ideal para sistemas de drenagem eficientes e duráveis. 
            Fabricado em polietileno de alta densidade com excelente resistência química e mecânica.
          </p>
        </motion.div>

        {/* Product Overview */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Images Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {productImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={image}
                    alt={`Tubo Dreno PEAD Corrugado ${index + 1}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="absolute -top-4 -right-4 bg-primary-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, type: "spring", stiffness: 300 }}
            >
              <Star className="w-4 h-4 inline mr-1" />
              Premium
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Tecnologia Avançada para Drenagem
            </h3>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              O Tubo Dreno PEAD Corrugado é a solução ideal para sistemas de drenagem eficientes e duráveis. 
              Fabricado em polietileno de alta densidade, este tubo apresenta excelente resistência química e mecânica, 
              garantindo longa vida útil. Sua estrutura corrugada favorece o escoamento rápido da água, 
              prevenindo alagamentos e erosões em terrenos diversos.
            </p>

            {/* Specifications */}
            <div className="space-y-4 mb-8">
              {specifications.map((spec, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors duration-300"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  <span className="font-semibold text-gray-800">{spec.label}:</span>
                  <span className="text-gray-600">{spec.value}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              onClick={scrollToContact}
              className="btn-primary flex items-center space-x-2 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <span>Solicitar Cotação</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </motion.div>
        </div>

        {/* Benefits Grid */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Vantagens do Nosso Sistema
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-primary-200 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-4 group-hover:bg-primary-200 transition-colors"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <benefit.icon className="w-6 h-6 text-primary-600" />
                </motion.div>
                
                <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
                  {benefit.title}
                </h4>
                
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Applications Section */}
        <motion.div
          className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl p-8 md:p-12 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h3 className="text-3xl font-bold mb-6">
                Aplicações Versáteis
              </h3>
              
              <p className="text-primary-100 text-lg mb-8 leading-relaxed">
                Nossos tubos dreno são adequados para uma ampla variedade de aplicações, 
                desde grandes obras de infraestrutura até projetos agrícolas específicos.
              </p>

              <motion.button
                onClick={scrollToContact}
                className="bg-white text-primary-600 hover:bg-primary-50 font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2 group"
                whileHover={{ scale: 1.05 }}
              >
                <span>Consultar Projeto</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </motion.div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {applications.map((application, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  <CheckCircle className="w-6 h-6 text-primary-200 flex-shrink-0" />
                  <span className="text-white font-medium">{application}</span>
                </motion.div>
              ))}
            </motion.div>
            
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Pronto para otimizar seu projeto?
          </h3>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como nossos tubos dreno podem 
            fazer a diferença no seu sistema de drenagem.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <button
              onClick={scrollToContact}
              className="btn-primary flex items-center space-x-2 group"
            >
              <span>Solicitar Orçamento</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            
            <a
              href="tel:+551152424280"
              className="btn-secondary flex items-center space-x-2"
            >
              <span>Ligar Agora</span>
              <span>(11) 5242-4280</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}