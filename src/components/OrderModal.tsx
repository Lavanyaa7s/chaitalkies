import { motion } from "framer-motion"
import type { MenuItem } from "./Menu"
import { useState, useEffect } from "react"

interface OrderModalProps {
  item: MenuItem
  onClose: () => void
}

export function OrderModal({ item, onClose }: OrderModalProps) {
  const [quantity, setQuantity] = useState(1)

  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [])

  // Parse price number for total calculation
  const priceNumber = parseFloat(item.price.replace("RM ", ""))
  const total = (priceNumber * quantity).toFixed(2)

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-navy/80 backdrop-blur-sm cursor-pointer"
      />

      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative bg-navy-card w-full max-w-4xl rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.8)] border border-gold/20 overflow-y-auto max-h-full flex flex-col md:flex-row z-10"
      >
        {/* Left Side: Large Image */}
        <div className="md:w-1/2 bg-gradient-to-br from-navy to-navy-card p-10 flex flex-col items-center justify-center relative overflow-hidden group min-h-[300px] md:min-h-full">
          <div className="absolute inset-0 bg-gold/5 blur-3xl rounded-full scale-150 pointer-events-none" />
          <motion.img 
            initial={{ rotate: -15, scale: 0.8 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ type: "spring", damping: 20, delay: 0.1 }}
            src={item.img} 
            alt={item.title} 
            className="w-[200px] md:w-full h-auto max-w-[320px] object-cover rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.6)] border-[6px] border-gold/30 z-10"
          />
        </div>

        {/* Right Side: Details & Actions */}
        <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-between bg-cream text-navy relative">
          
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 bg-navy/5 hover:bg-navy/10 text-navy rounded-full flex items-center justify-center transition-colors z-20"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div>
            <div className="text-gold font-bold text-xs uppercase tracking-widest mb-2 mt-4 md:mt-0">Selected Item</div>
            <h2 className="text-3xl font-bold mb-4 pr-10">{item.title}</h2>
            <p className="text-navy/70 leading-relaxed mb-6 font-medium">
              {item.desc}
            </p>

            {/* Ingredients */}
            <div className="mb-8">
              <h4 className="font-bold text-sm mb-3">Key Ingredients</h4>
              <div className="flex flex-wrap gap-2">
                {item.ingredients?.map((ing, idx) => (
                  <span key={idx} className="bg-navy/5 px-3 py-1.5 rounded-full text-[11px] uppercase tracking-wider font-bold text-navy/80 border border-navy/10">
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 md:mt-0">
            {/* Quantity Selector */}
            <div className="flex items-center justify-between mb-6 border-y border-navy/10 py-4">
              <span className="font-bold">Quantity</span>
              <div className="flex items-center gap-4 bg-navy/5 rounded-full p-1.5 border border-navy/10">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-navy font-bold hover:bg-gold hover:text-navy transition-colors"
                >
                  -
                </button>
                <span className="w-6 text-center font-bold text-lg">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-navy font-bold hover:bg-gold hover:text-navy transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Order Button */}
            <button 
              onClick={() => {
                alert(`Added ${quantity}x ${item.title} to order!`)
                onClose()
              }}
              className="w-full bg-navy text-gold py-4 rounded-full font-bold text-lg flex items-center justify-between px-8 hover:shadow-[0_10px_30px_rgba(11,17,32,0.3)] hover:-translate-y-1 transition-all duration-300 group"
            >
              <span>Add to Order</span>
              <span className="bg-gold/10 px-4 py-1.5 rounded-full group-hover:bg-gold group-hover:text-navy transition-colors">RM {total}</span>
            </button>
          </div>
          
        </div>
      </motion.div>
    </div>
  )
}
