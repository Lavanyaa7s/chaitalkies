import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FadeUp } from "./animations/FadeUp"
import { StaggerContainer } from "./animations/StaggerContainer"
import { StaggerItem } from "./animations/StaggerItem"

const MENU_DATA = {
  breakfast: [
    { title: "Coconut Shell Idly", desc: "Pillow-soft idlies steamed and plated in a hand-carved coconut shell, finished with podi, ghee, and coconut chutney.", price: "RM 9.90", img: "images/idly.jpg" },
    { title: "Ghee Roast Dosa", desc: "Paper-thin crisp dosa brushed with rich ghee, served with three signature chutneys and flavorful sambar.", price: "RM 11.90", img: "images/podi tosai.jpg" },
    { title: "Ven Pongal", desc: "Comforting temple-style rice and moong dal, tempered with cashew, black pepper, and cumin in ghee.", price: "RM 9.50", img: "images/bananapaalappam.jpg" },
    { title: "Medu Vada", desc: "Crisp and golden lentil doughnuts with a fluffy interior, served with hot sambar and fresh coconut chutney.", price: "RM 8.50", img: "images/bajji.jpg" },
    { title: "Chai & Murukku", desc: "Strong, spiced masala chai poured tableside, perfectly paired with our crisp, hand-twisted murukku.", price: "RM 7.00", img: "images/chaiwithmurruku.jpg" },
    { title: "Filter Kaapi", desc: "Traditional slow-brewed decoction, frothed tableside in a classic steel davara-tumbler for the perfect start.", price: "RM 6.50", img: "images/claypot.png" },
  ],
  lunch: [
    { title: "South Indian Thali", desc: "A complete meal featuring rice, authentic sambar, rasam, two varieties of poriyal, and crisp papadum.", price: "RM 16.90", img: "images/setmeals.png" },
    { title: "Sambar Rice", desc: "A delicious one-pot meal of steamed rice and lentil-vegetable stew, served hot with a dollop of ghee.", price: "RM 10.90", img: "images/claypot.png" },
    { title: "Curd Rice", desc: "Cooling yoghurt rice tempered with mustard seeds, urad dal, and curry leaves for a refreshing lunch.", price: "RM 8.90", img: "images/nasilemak.jpg" },
    { title: "Lemon Rice", desc: "Tangy turmeric infused rice tossed with roasted peanuts, curry leaves, and a squeeze of fresh lemon.", price: "RM 9.90", img: "images/briyani.jpg" },
    { title: "Rasam & Papadum", desc: "A deeply flavorful, peppery tamarind broth served alongside hot rice and crispy papadum.", price: "RM 6.90", img: "images/chappatichickenkeema.jpg" },
    { title: "Mixed Veg Poriyal", desc: "Fresh seasonal vegetables stir-fried with grated coconut, mustard seeds, and mild spices.", price: "RM 8.00", img: "images/chickenkeemaidly.jpg" },
  ],
  dinner: [
    { title: "Vegetable Biryani", desc: "Slow-cooked fragrant basmati rice layered with aromatic spices and mixed vegetables, served with cool raita.", price: "RM 15.90", img: "images/briyani.jpg" },
    { title: "Parotta & Kurma", desc: "Flaky, multi-layered flatbread paired with a rich, creamy mixed vegetable kurma for a satisfying dinner.", price: "RM 12.90", img: "images/capati.jpg" },
    { title: "Chettinad Curry", desc: "A fiery and fragrant curry made with roasted Chettinad spices, coconut, and fresh curry leaves.", price: "RM 13.90", img: "images/mangoputtu.jpg" },
    { title: "Rava Dosa Night", desc: "Lace-thin and crispy semolina dosa, embedded with finely chopped onions and green chillies.", price: "RM 11.50", img: "images/browniesicecream.jpg" },
    { title: "Chapati & Dal", desc: "Soft and healthy wheat flatbread served with a comforting bowl of slow-cooked yellow dal tadka.", price: "RM 10.50", img: "images/falooda.jpg" },
    { title: "Payasam", desc: "A sweet, rich pudding made with roasted vermicelli, milk, and nuts to end the day perfectly.", price: "RM 8.50", img: "images/mojito.jpg" },
  ]
}

type TabType = "breakfast" | "lunch" | "dinner"

export function Menu() {
  const [activeTab, setActiveTab] = useState<TabType>("breakfast")

  return (
    <section id="menu" className="py-24 md:py-32 bg-navy">
      <div className="max-w-5xl mx-auto px-6">
        <FadeUp className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-gold text-xs uppercase font-semibold mb-3 tracking-[0.2em]">What's cooking</p>
          <h2 className="font-script text-gold text-5xl md:text-6xl mb-4">Menu Highlights</h2>
          <p className="text-cream/60">Breakfast, lunch, dinner — three menus, one kitchen.</p>
        </FadeUp>

        <FadeUp delay={0.2} className="flex justify-center gap-2 md:gap-3 mb-10 flex-wrap">
          {(["breakfast", "lunch", "dinner"] as TabType[]).map((tab) => (
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
                  <div className="relative bg-cream p-6 rounded-[2rem] flex flex-col items-center text-center shadow-xl border-b-4 border-gold/30 group-hover:border-gold group-hover:shadow-[0_15px_40px_rgba(242,196,26,0.2)] transition-all duration-500 h-full group">
                    <div className="absolute -top-20 w-40 h-40 rounded-full border-[5px] border-gold bg-navy flex items-center justify-center shadow-xl z-10 group-hover:-translate-y-3 transition-transform duration-500">
                      <img 
                        src={item.img} 
                        className="w-[92%] h-[92%] object-cover rounded-full shadow-lg z-20 group-hover:scale-[1.05] transition-transform duration-500" 
                        alt={item.title} 
                      />
                    </div>
                    <div className="mt-28 flex flex-col h-full items-center justify-between w-full">
                      <div>
                        <h3 className="text-xl font-bold text-navy mb-2">{item.title}</h3>
                        <p className="text-navy/70 text-xs leading-relaxed mb-6 font-medium">
                          {item.desc}
                        </p>
                      </div>
                      <div className="bg-gold text-navy font-bold px-8 py-2 rounded-full shadow-md text-sm whitespace-nowrap group-hover:shadow-[0_0_25px_rgba(242,196,26,0.8)] group-hover:text-black transition-all duration-300">
                        {item.price}
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
