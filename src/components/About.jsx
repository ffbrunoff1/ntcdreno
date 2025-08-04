import React from 'react'
import { motion } from 'framer-motion'
import { Target, Users, Trophy, TrendingUp, CheckCircle, MapPin } from 'lucide-react'

export default function About() {
  const stats = [
    {
      icon: Trophy,
      number: "15+",
      label: "Anos de Experiência",
      color: "text-primary-600"
    },
    {
      icon: Users,
      number: "500+",
      label: "Projetos Executados",
      color: "text-green-600"
    },
    {
      icon: TrendingUp,
      number: "98%",
      label: "Satisfação dos Clientes",
      color: "text-blue-600"
    },
    {
      icon: MapPin,
      number: "SP",
      label: "Base em São Paulo",
      color: "text-purple-600"
    }
  ]

  const features = [
    {
      title: "Expertise Técnica",
      description: "Conhecimento profundo em geossintéticos e sistemas de drenagem para rodovias."
    },
    {
      title: "Qualidade Garantida",
      description: "Produtos fabricados com PEAD de alta densidade, testados e certificados."
    },
    {
      title: "Suporte Completo",
      description: "Assessoria técnica desde o projeto até a instalação e pós-venda."
    },
    {
      title: "Inovação Constante",
      description: "Sempre buscando as melhores soluções e tecnologias do mercado."
    }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary-50/40 rounded-full blur-3xl"></div>
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
            Sobre a NTC Dreno
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Especialistas em{' '}
            <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              Drenagem
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A NTC Dreno é referência nacional em sistemas de drenagem com geossintéticos, 
            especializada em tubos dreno PEAD corrugados para rodovias e obras de infraestrutura.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Transformando a infraestrutura brasileira
            </h3>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Nossa missão é fornecer soluções de drenagem inovadoras e sustentáveis, 
              contribuindo para a longevidade e segurança das rodovias brasileiras. 
              Utilizamos tecnologia de ponta e materiais de alta qualidade para garantir 
              resultados excepcionais.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3 group hover:bg-primary-50/50 p-4 rounded-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <motion.div
                    className="flex-shrink-0"
                    whileHover={{ scale: 1.1 }}
                  >
                    <CheckCircle className="w-6 h-6 text-primary-600 mt-1" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <Target className="w-8 h-8 text-primary-600" />
              <div>
                <h4 className="font-semibold text-gray-900">Nossa Visão</h4>
                <p className="text-gray-600">Ser a principal referência em soluções de drenagem no Brasil.</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-primary-400/10 rounded-2xl blur-xl"
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              
              <img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754322934634_1p00myc52st_tubo_dreno_2.jpg"
                alt="Sistema de drenagem NTC Dreno"
                className="relative w-full h-auto rounded-2xl shadow-xl border border-gray-200 object-cover"
              />

              <motion.div
                className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-2xl p-4 border border-gray-100"
                initial={{ scale: 0, rotate: -10 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-800">Sistema Ativo</span>
                </div>
                <p className="text-xs text-gray-600 mt-1">Drenagem eficiente 24/7</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group hover:bg-white hover:shadow-lg rounded-xl p-6 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="flex justify-center mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </motion.div>
              <motion.div
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.6, type: "spring", stiffness: 300 }}
              >
                {stat.number}
              </motion.div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Video Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Veja nossos produtos em ação
          </h3>
          
          <motion.div
            className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative pb-[56.25%] h-0">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/SG1fVD2uBKE"
                title="NTC Dreno - Tubos para Drenagem"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}