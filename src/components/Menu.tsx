import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FadeUp } from "./animations/FadeUp"
import { StaggerContainer } from "./animations/StaggerContainer"
import { StaggerItem } from "./animations/StaggerItem"

import { OrderModal } from "./OrderModal"

export type MenuItem = {
  title: string
  desc: string
  price: string
  img: string
  ingredients: string[]
}

const MENU_DATA: Record<string, MenuItem[]> = {
  chai: [
    { title: "Signature Masala Chai", desc: "Our famous house blend of strong Assam tea brewed with crushed ginger, cardamom, and secret spices.", price: "RM 6.90", img: "images/chaiwithmurruku.jpg", ingredients: ["Assam Black Tea", "Fresh Ginger", "Green Cardamom", "Cloves", "Cinnamon", "Fresh Milk"] },
    { title: "Filter Kaapi", desc: "Traditional slow-brewed decoction, frothed tableside in a classic steel davara-tumbler for the perfect start.", price: "RM 6.50", img: "images/claypot.png", ingredients: ["Plantation A Coffee Beans", "Chicory (15%)", "Fresh Milk", "Brown Sugar"] },
    { title: "Saffron Chai", desc: "A luxurious blend infused with premium Kashmiri saffron strands, slow-cooked for a rich golden hue.", price: "RM 8.90", img: "images/masalachai.jpg", ingredients: ["Assam Tea", "Kashmiri Saffron", "Cardamom", "Almonds", "Milk"] },
    { title: "Rose Chai", desc: "A fragrant twist on our classic tea, infused with dried rose petals and a hint of cardamom.", price: "RM 7.50", img: "images/falooda.jpg", ingredients: ["Black Tea", "Dried Rose Petals", "Cardamom", "Rose Water", "Milk"] },
    { title: "Iced Masala Chai", desc: "Our signature spiced tea, chilled over ice for a refreshing kick on a hot afternoon.", price: "RM 8.00", img: "images/mojito.jpg", ingredients: ["Assam Tea", "Masala Spices", "Ice", "Fresh Milk", "Simple Syrup"] },
    { title: "Ginger Chai", desc: "A fiery and strong brew packed with extra freshly grated ginger for an instant energy boost.", price: "RM 6.50", img: "images/chaiwithmurruku.jpg", ingredients: ["Black Tea", "Extra Fresh Ginger", "Milk", "Sugar"] },
  ],
  snacks: [
    { title: "Chai & Murukku", desc: "Strong, spiced masala chai poured tableside, perfectly paired with our crisp, hand-twisted murukku.", price: "RM 7.00", img: "images/chaiwithmurruku.jpg", ingredients: ["Rice Flour", "Urad Dal", "Cumin Seeds", "Butter", "Salt"] },
    { title: "Medu Vada", desc: "Crisp and golden lentil doughnuts with a fluffy interior, served with hot sambar and fresh coconut chutney.", price: "RM 8.50", img: "images/bajji.jpg", ingredients: ["Urad Dal", "Black Pepper", "Onion", "Green Chili", "Curry Leaves"] },
    { title: "Samosa Chaat", desc: "Crushed golden samosas topped with yogurt, sweet tamarind chutney, spicy mint chutney, and sev.", price: "RM 10.90", img: "images/chappatichickenkeema.jpg", ingredients: ["Potato Samosa", "Sweet Yogurt", "Tamarind Chutney", "Mint Chutney", "Sev", "Pomegranate"] },
    { title: "Paneer Tikka Roll", desc: "Charcoal-grilled paneer cubes marinated in spices, wrapped in a soft paratha with mint mayo.", price: "RM 12.50", img: "images/capati.jpg", ingredients: ["Paneer", "Yogurt", "Tikka Spices", "Paratha", "Mint Mayo", "Onions"] },
    { title: "Onion Pakora", desc: "Crispy, golden-fried onion fritters spiced with carom seeds and served with mint chutney.", price: "RM 7.90", img: "images/podi tosai.jpg", ingredients: ["Sliced Onions", "Gram Flour", "Rice Flour", "Carom Seeds", "Green Chilis"] },
    { title: "Masala Fries", desc: "Crispy potato fries dusted with our secret house chaat masala blend.", price: "RM 8.50", img: "images/chickenkeemaidly.jpg", ingredients: ["Potatoes", "Chaat Masala", "Red Chili Powder", "Salt", "Oil"] },
  ],
  meals: [
    { title: "South Indian Thali", desc: "A complete meal featuring rice, authentic sambar, rasam, two varieties of poriyal, and crisp papadum.", price: "RM 16.90", img: "images/setmeals.png", ingredients: ["Ponni Rice", "Sambar", "Tomato Rasam", "Cabbage Poriyal", "Papadum", "Pickle"] },
    { title: "Vegetable Biryani", desc: "Slow-cooked fragrant basmati rice layered with aromatic spices and mixed vegetables, served with cool raita.", price: "RM 15.90", img: "images/briyani.jpg", ingredients: ["Basmati Rice", "Mixed Vegetables", "Biryani Spices", "Ghee", "Mint", "Raita"] },
    { title: "Ghee Roast Dosa", desc: "Paper-thin crisp dosa brushed with rich ghee, served with three signature chutneys and flavorful sambar.", price: "RM 11.90", img: "images/podi tosai.jpg", ingredients: ["Rice Batter", "Urad Dal", "Ghee", "Coconut Chutney", "Tomato Chutney", "Sambar"] },
    { title: "Parotta & Kurma", desc: "Flaky, multi-layered flatbread paired with a rich, creamy mixed vegetable kurma for a satisfying dinner.", price: "RM 12.90", img: "images/capati.jpg", ingredients: ["Maida Flour", "Ghee", "Mixed Veg Kurma", "Coconut Milk", "Spices"] },
    { title: "Coconut Shell Idly", desc: "Pillow-soft idlies steamed and plated in a hand-carved coconut shell, finished with podi and ghee.", price: "RM 9.90", img: "images/idly.jpg", ingredients: ["Idly Batter", "Gunpowder (Podi)", "Ghee", "Coconut Chutney"] },
    { title: "Chettinad Chicken", desc: "A fiery and fragrant curry made with roasted Chettinad spices, coconut, and fresh curry leaves.", price: "RM 18.90", img: "images/mangoputtu.jpg", ingredients: ["Chicken", "Chettinad Masala", "Coconut", "Curry Leaves", "Dried Red Chilies"] },
  ]
}

type TabType = "chai" | "snacks" | "meals"

export function Menu() {
  const [activeTab, setActiveTab] = useState<TabType>("chai")
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)

  return (
    <section id="menu" className="py-24 md:py-32 bg-navy">
      <div className="max-w-5xl mx-auto px-6">
        <FadeUp className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-gold text-xs uppercase font-semibold mb-3 tracking-[0.2em]">Our Offerings</p>
          <h2 className="font-script text-gold text-5xl md:text-6xl mb-4">The Menu</h2>
          <p className="text-cream/60">From our signature chai to hearty meals, everything is crafted fresh.</p>
        </FadeUp>

        <FadeUp delay={0.2} className="flex justify-center gap-2 md:gap-3 mb-10 flex-wrap">
          {(["chai", "snacks", "meals"] as TabType[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300 ${
                activeTab === tab ? "text-navy" : "text-cream/70 hover:text-gold"
              }`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="activeMenuTab"
                  className="absolute inset-0 bg-gold rounded-full shadow-[0_0_15px_rgba(242,196,26,0.3)]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10 capitalize">{tab}</span>
            </button>
          ))}
        </FadeUp>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-32 pt-28" staggerChildren={0.1}>
              {MENU_DATA[activeTab].map((item, i) => (
                <StaggerItem key={i}>
                  <div 
                    onClick={() => setSelectedItem(item)}
                    className="relative bg-cream p-6 rounded-[2rem] flex flex-col items-center text-center shadow-xl border-b-4 border-gold/30 hover:border-gold hover:shadow-[0_15px_40px_rgba(242,196,26,0.3)] hover:-translate-y-2 transition-all duration-500 h-full group cursor-pointer"
                  >
                    <div className="absolute -top-20 w-40 h-40 rounded-full border-[5px] border-gold bg-navy flex items-center justify-center shadow-xl z-10 group-hover:-translate-y-3 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-500">
                      <img 
                        src={item.img} 
                        className="w-[92%] h-[92%] object-cover rounded-full shadow-lg z-20 group-hover:scale-[1.08] group-hover:rotate-12 transition-all duration-700 ease-out" 
                        alt={item.title} 
                      />
                    </div>
                    <div className="mt-24 flex flex-col h-full items-center justify-between w-full">
                      <div>
                        <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-gold transition-colors duration-300">{item.title}</h3>
                        <p className="text-navy/70 text-xs leading-relaxed mb-6 font-medium line-clamp-3">
                          {item.desc}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-gold/10 text-navy font-bold px-6 py-2 rounded-full border border-gold/30 text-sm whitespace-nowrap transition-all duration-300">
                          {item.price}
                        </div>
                        <button className="bg-navy text-gold w-10 h-10 rounded-full flex items-center justify-center shadow-md group-hover:bg-gold group-hover:text-navy group-hover:shadow-[0_0_20px_rgba(242,196,26,0.6)] group-hover:rotate-90 transition-all duration-500">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Order Modal */}
      <AnimatePresence>
        {selectedItem && (
          <OrderModal item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}
