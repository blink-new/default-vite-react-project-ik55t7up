
// Previous code remains the same until GenderSection component...

function GenderSection({ title, subtitle, fragrances, imageSrc, reversed = false }) {
  return (
    <div className={`flex flex-col lg:flex-row ${reversed ? 'lg:flex-row-reverse' : ''} min-h-screen`}>
      <div className="lg:w-1/2 relative">
        <motion.div 
          className="sticky top-0 h-screen overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {title === "For Him" ? (
            <div className="relative h-full">
              <img 
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80"
                alt={title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"/>
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent"/>
              
              <motion.div 
                className="absolute bottom-[20%] left-[10%] text-white/90 max-w-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="h-[1px] w-16 bg-white/50 mb-8"/>
                <p className="text-sm tracking-wider mb-3 text-white/70">POWER & CONFIDENCE</p>
                <h3 className="font-serif text-3xl mb-4">Strength Meets Sophistication</h3>
                <p className="text-sm leading-relaxed text-white/80">
                  Commanding fragrances that embody raw power and unwavering confidence,
                  designed for men who demand excellence.
                </p>
              </motion.div>
            </div>
          ) : (
            <>
              <img 
                src={imageSrc} 
                alt={title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
              <div className="absolute inset-0 flex items-center justify-center text-white text-center p-8">
                <div>
                  <motion.p 
                    className="text-sm tracking-[0.2em] uppercase mb-4 opacity-90"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {subtitle}
                  </motion.p>
                  <motion.h2 
                    className="text-6xl font-serif mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    {title}
                  </motion.h2>
                </div>
              </div>
            </>
          )}
        </motion.div>
      </div>
      <div className="lg:w-1/2 bg-[#FDFBF7] p-12 lg:p-24">
        <div className="grid grid-cols-1 gap-12">
          {fragrances.map((fragrance, index) => (
            <FragranceCard key={fragrance.id} fragrance={fragrance} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

// Rest of the code remains the same...