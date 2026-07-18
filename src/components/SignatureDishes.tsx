import { FadeUp } from "./animations/FadeUp"
import { StaggerContainer } from "./animations/StaggerContainer"
import { StaggerItem } from "./animations/StaggerItem"

const SIGNATURE_DISHES = [
  {
    title: "Coconut Shell Idly",
    description: "Pillow-soft idlies steamed and plated in a hand-carved coconut shell, finished with podi and a spoon of ghee.",
    image: "images/idly.jpg",
    tags: ["Gluten-free", "Breakfast"],
    badge: "Signature"
  },
  {
    title: "Chai & Murukku",
    description: "Strong, spiced masala chai poured tableside, always with a side of crisp, hand-twisted murukku.",
    image: "images/chaiwithmurruku.jpg",
    tags: ["All-day", "Vegetarian"],
    badge: "Signature"
  },
  {
    title: "Podi Tosai",
    description: "Crisp and golden dosa, generously dusted with our house-made spicy gun powder (podi) and ghee.",
    image: "images/podi tosai.jpg",
    tags: ["Spicy", "Breakfast"],
    badge: "Signature"
  },
  {
    title: "Poori Masala",
    description: "Perfectly puffed, golden fried wheat bread served with a mildly spiced, flavorful potato curry.",
    image: "images/poori.jpg",
    tags: ["Classic", "Morning"],
    badge: "Signature"
  },
  {
    title: "Chicken Keema Idly",
    description: "A unique twist on the classic. Soft steamed idly paired with a rich, spiced minced chicken curry.",
    image: "images/chickenkeemaidly.jpg",
    tags: ["Hearty", "Lunch"],
    badge: "Special"
  },
  {
    title: "Banana Paal Appam",
    description: "Lacy, soft centered rice hoppers served with sweet coconut milk and a hint of caramelized banana.",
    image: "images/bananapaalappam.jpg",
    tags: ["Sweet", "Dessert"],
    badge: "Signature"
  }
]

export function SignatureDishes() {
  return (
    <section id="dishes" className="py-24 md:py-32 bg-navy relative">
      <div className="max-w-7xl mx-auto px-6">
        <FadeUp className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold text-xs uppercase font-semibold mb-3 tracking-[0.2em]">Served our way</p>
          <h2 className="font-script text-gold text-5xl md:text-6xl mb-4">Signature Dishes</h2>
          <p className="text-cream/60">
            Every plate here carries a little theatre — the coconut shell idly and murukku-side chai are how conversations start at our tables.
          </p>
        </FadeUp>

        <div className="flex items-center justify-center gap-4 mb-12 opacity-80">
          <div className="h-px bg-gold/30 flex-1 max-w-[100px]" />
          <span className="text-gold text-[10px] md:text-xs uppercase tracking-[0.2em]">Chef Recommendation</span>
          <span className="text-gold/50 mx-2">•</span>
          <span className="text-gold text-[10px] md:text-xs uppercase tracking-[0.2em]">Today's Best Sellers</span>
          <div className="h-px bg-gold/30 flex-1 max-w-[100px]" />
        </div>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7" staggerChildren={0.15}>
          {SIGNATURE_DISHES.map((dish, i) => (
            <StaggerItem key={i}>
              <article className="border border-gold/10 hover:border-gold/30 hover:shadow-[0_0_20px_rgba(242,196,26,0.1)] bg-navy-card rounded-2xl overflow-hidden group transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                <div className="h-56 relative bg-navy flex items-center justify-center overflow-hidden">
                  <img 
                    src={dish.image} 
                    alt={dish.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-card to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                  <span className="absolute top-4 left-4 bg-gold text-navy text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full z-10 shadow-lg group-hover:shadow-[0_0_10px_rgba(242,196,26,0.5)] transition-shadow duration-300">
                    {dish.badge}
                  </span>
                </div>
                <div className="p-6 relative z-10 flex-1 flex flex-col">
                  <h3 className="font-script text-3xl text-gold mb-1">{dish.title}</h3>
                  <p className="text-cream/60 text-sm leading-relaxed mb-4 flex-1">
                    {dish.description}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {dish.tags.map(tag => (
                      <span key={tag} className="text-[11px] border border-gold/30 text-gold/90 px-2.5 py-1 rounded-full bg-gold/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
