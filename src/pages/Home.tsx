import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Instagram,
  ChevronDown,
  Leaf,
  ExternalLink,
  Menu,
  X,
} from "lucide-react";

type MenuCategory = "klassiker" | "vegan" | "spezialitaeten";

interface Pizza {
  name: string;
  description: string;
  price: string;
  vegan?: boolean;
}

const pizzaMenu = {
  klassiker: [
    {
      name: "Marinara",
      description: "Tomatensoße, Knoblauch, Oregano, Olivenöl",
      price: "7,00",
      vegan: true,
    },
    {
      name: "Margherita",
      description: "Tomatensoße, Mozzarella, Basilikum",
      price: "8,00",
    },
    {
      name: "Salami",
      description: "Tomatensoße, Mozzarella, würzige Salami",
      price: "9,00",
    },
    {
      name: "Funghi",
      description: "Tomatensoße, Mozzarella, frische Champignons",
      price: "9,00",
    },
    {
      name: "Tonno",
      description: "Tomatensoße, Mozzarella, Thunfisch, rote Zwiebeln",
      price: "9,50",
    },
  ],
  vegan: [
    {
      name: "Marinara Vegan",
      description: "Tomatensoße, Knoblauch, Oregano, frisches Basilikum",
      price: "7,00",
      vegan: true,
    },
    {
      name: "Verdura Vegan",
      description: "Tomatensoße, gegrilltes Gemüse, Rucola, Olivenöl",
      price: "9,00",
      vegan: true,
    },
    {
      name: "Carciofo Vegan",
      description: "Tomatensoße, Artischocken, Oliven, Kapern",
      price: "9,50",
      vegan: true,
    },
  ],
  spezialitaeten: [
    {
      name: "Bufala",
      description: "San Marzano Tomaten, Büffelmozzarella, Basilikum",
      price: "10,50",
    },
    {
      name: "Bufalina",
      description: "Büffelmozzarella, Kirschtomaten, Rucola, Parmesan",
      price: "11,00",
    },
    {
      name: "Quattro Formaggi",
      description: "Mozzarella, Gorgonzola, Parmesan, Ricotta",
      price: "10,00",
    },
    {
      name: "Salsiccia e Friarielli",
      description: "Tomatensoße, Mozzarella, italienische Wurst, Stängelkohl",
      price: "11,50",
    },
    {
      name: "Capricciosa",
      description:
        "Tomatensoße, Mozzarella, Schinken, Artischocken, Pilze, Oliven",
      price: "11,00",
    },
  ],
};

const openingHours = [
  { day: "Montag", hours: "Ruhetag" },
  { day: "Dienstag", hours: "12:00 – 21:00" },
  { day: "Mittwoch", hours: "12:00 – 21:00" },
  { day: "Donnerstag", hours: "12:00 – 21:00" },
  { day: "Freitag", hours: "12:00 – 22:00" },
  { day: "Samstag", hours: "12:00 – 22:00" },
  { day: "Sonntag", hours: "13:00 – 20:00" },
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600",
    alt: "Frisch gebackene Pizza",
  },
  {
    src: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600",
    alt: "Pizza aus dem Ofen",
  },
  {
    src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600",
    alt: "Pizza mit frischen Zutaten",
  },
  {
    src: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=600",
    alt: "Gemütliche Pizzeria",
  },
  {
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600",
    alt: "Restaurant Atmosphäre",
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600",
    alt: "Innenraum",
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenuCategory, setActiveMenuCategory] =
    useState<MenuCategory>("klassiker");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionName: string) => {
    const sectionIds: Record<string, string> = {
      "über uns": "ueber-uns",
      speisekarte: "speisekarte",
      öffnungszeiten: "oeffnungszeiten",
      kontakt: "kontakt",
    };
    const id = sectionIds[sectionName.toLowerCase()] || sectionName;
    setMobileMenuOpen(false);

    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] font-sans">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
            >
              <span className="font-serif text-2xl tracking-wide text-[#2D3B2D]">
                Nini e Pettirosso
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {["Über uns", "Speisekarte", "Öffnungszeiten", "Kontakt"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="text-sm text-[#2D3B2D]/80 hover:text-[#C4654A] transition-colors duration-300 tracking-wide"
                  >
                    {item}
                  </button>
                ),
              )}
              <a
                href="https://www.lieferando.de"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#C4654A] text-white px-4 py-2 rounded-full text-sm hover:bg-[#a85440] transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Lieferando
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#2D3B2D]" />
              ) : (
                <Menu className="w-6 h-6 text-[#2D3B2D]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#FAF8F5] border-t border-[#2D3B2D]/10"
            >
              <div className="px-6 py-4 space-y-4">
                {["Über uns", "Speisekarte", "Öffnungszeiten", "Kontakt"].map(
                  (item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className="block w-full text-left text-[#2D3B2D] py-2 border-b border-[#2D3B2D]/10"
                    >
                      {item}
                    </button>
                  ),
                )}
                <a
                  href="https://www.lieferando.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#C4654A] text-white px-4 py-3 rounded-full text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  Bei Lieferando bestellen
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1920&q=80"
            alt="Pizza Background"
            className="w-full h-full object-cover"
          />
          {/* White Overlay for Contrast */}
          <div className="absolute inset-0 bg-white/70" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Decorative Element */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-[1px] bg-[#C4654A]" />
              <div className="mx-4 text-[#C4654A] text-xs tracking-[0.3em] uppercase">
                Seit 2011
              </div>
              <div className="w-16 h-[1px] bg-[#C4654A]" />
            </div>

            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#2D3B2D] mb-6 tracking-tight">
              Nini e Pettirosso
            </h1>

            <p className="text-xl md:text-2xl text-[#5A6B4D] mb-4 font-light tracking-wide">
              Echte Pizza. Echte Liebe. Echt Berlin.
            </p>

            <p className="text-[#2D3B2D]/60 mb-12 max-w-md mx-auto">
              Dein italienischer Stopp am Körnerpark – für alle, die gute Pizza
              zu schätzen wissen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection("speisekarte")}
                className="bg-[#2D3B2D] text-white px-8 py-4 rounded-full text-sm tracking-wide hover:bg-[#3d4d3d] transition-colors"
              >
                Speisekarte ansehen
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="https://www.lieferando.de"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border-2 border-[#C4654A] text-[#C4654A] px-8 py-4 rounded-full text-sm tracking-wide hover:bg-[#C4654A] hover:text-white transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                Jetzt bestellen
              </motion.a>
            </div>

            {/* Scroll Indicator */}
            <motion.button
              className="mt-12 cursor-pointer"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              onClick={() => {
                const element = document.getElementById("ueber-uns");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <ChevronDown className="w-6 h-6 text-[#2D3B2D]/40 mx-auto" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="ueber-uns" className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1579751626657-72bc17010498?w=800"
                    alt="Pizza Zubereitung"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-[#C4654A] text-xs tracking-[0.3em] uppercase mb-4">
                Unsere Geschichte
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-[#2D3B2D] mb-6">
                Mehr als nur eine Pizzeria
              </h2>
              <div className="space-y-4 text-[#2D3B2D]/70 leading-relaxed">
                <p>
                  Seit 2011 backen wir am Körnerpark Pizza, wie wir sie aus
                  Italien kennen – ehrlich, einfach und mit den besten Zutaten.
                  Was als kleine Idee begann, ist heute ein fester Teil der
                  Nachbarschaft.
                </p>
                <p>
                  Bei uns gibt's keine Kompromisse: frischer Teig, handverlesene
                  Tomaten und Mozzarella, der wirklich schmeckt. Ob du auf dem
                  Weg durch den Park bist oder einfach Hunger hast – bei uns
                  bist du immer willkommen.
                </p>
                <p>
                  Unsere veganen Pizzen sind übrigens genauso gut wie die
                  klassischen. Versprochen.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex items-center gap-2 text-[#5A6B4D]">
                  <Leaf className="w-5 h-5" />
                  <span className="text-sm">Vegane Optionen</span>
                </div>
                <div className="w-1 h-1 bg-[#2D3B2D]/30 rounded-full" />
                <div className="text-sm text-[#5A6B4D]">
                  Frisch aus dem Ofen
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="speisekarte" className="py-24 md:py-32 bg-[#F5F0E8]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="text-[#C4654A] text-xs tracking-[0.3em] uppercase mb-4">
              Was gibt's?
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-[#2D3B2D] mb-4">
              Unsere Pizzen
            </h2>
            <p className="text-[#2D3B2D]/60 max-w-md mx-auto">
              Alle Pizzen werden frisch zubereitet – mit Liebe und den besten
              Zutaten.
            </p>
          </motion.div>

          {/* Category Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white rounded-full p-1 shadow-sm">
              {[
                { key: "klassiker", label: "Klassiker" },
                { key: "vegan", label: "Vegan" },
                { key: "spezialitaeten", label: "Spezialitäten" },
              ].map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveMenuCategory(cat.key as MenuCategory)}
                  className={`px-6 py-3 rounded-full text-sm transition-all duration-300 ${
                    activeMenuCategory === cat.key
                      ? "bg-[#2D3B2D] text-white"
                      : "text-[#2D3B2D]/70 hover:text-[#2D3B2D]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Items */}
          <motion.div
            key={activeMenuCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {pizzaMenu[activeMenuCategory].map(
              (pizza: Pizza, index: number) => (
                <motion.div
                  key={pizza.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <h3 className="font-serif text-xl text-[#2D3B2D]">
                        {pizza.name}
                      </h3>
                      {pizza.vegan && (
                        <span className="bg-[#5A6B4D]/10 text-[#5A6B4D] text-xs px-2 py-1 rounded-full flex items-center gap-1">
                          <Leaf className="w-3 h-3" />
                          Vegan
                        </span>
                      )}
                    </div>
                    <span className="font-serif text-xl text-[#C4654A]">
                      {pizza.price} €
                    </span>
                  </div>
                  <p className="text-sm text-[#2D3B2D]/60">
                    {pizza.description}
                  </p>
                </motion.div>
              ),
            )}
          </motion.div>

          <div className="text-center mt-12">
            <p className="text-sm text-[#2D3B2D]/50">
              Alle Preise inkl. MwSt. • Allergene auf Anfrage
            </p>
          </div>
        </div>
      </section>

      {/* Opening Hours & Location */}
      <section id="oeffnungszeiten" className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Opening Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#C4654A]/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-[#C4654A]" />
                </div>
                <h3 className="font-serif text-2xl text-[#2D3B2D]">
                  Öffnungszeiten
                </h3>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm">
                {openingHours.map((item, index) => (
                  <div
                    key={item.day}
                    className={`flex justify-between py-3 ${
                      index !== openingHours.length - 1
                        ? "border-b border-[#2D3B2D]/10"
                        : ""
                    }`}
                  >
                    <span
                      className={`${item.hours === "Ruhetag" ? "text-[#2D3B2D]/40" : "text-[#2D3B2D]"}`}
                    >
                      {item.day}
                    </span>
                    <span
                      className={`${item.hours === "Ruhetag" ? "text-[#C4654A]/60" : "text-[#2D3B2D]/70"}`}
                    >
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#5A6B4D]/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#5A6B4D]" />
                </div>
                <h3 className="font-serif text-2xl text-[#2D3B2D]">
                  Hier findest du uns
                </h3>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                {/* Google Maps Embed */}
                <div className="h-48 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.5!2d13.4351!3d52.4705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84f1c8c8c8c8c%3A0x0!2sK%C3%B6rnerpark%2C%20Berlin!5e0!3m2!1sde!2sde!4v1699999999999!5m2!1sde!2sde"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Standort Nini e Pettirosso"
                    className="absolute inset-0"
                  />
                </div>

                <div className="p-8">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#C4654A] mt-0.5" />
                      <div>
                        <p className="text-[#2D3B2D] font-medium">
                          Körnerstraße 42
                        </p>
                        <p className="text-[#2D3B2D]/60">
                          12051 Berlin-Neukölln
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-[#C4654A]" />
                      <p className="text-[#2D3B2D]">030 1234 5678</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-[#C4654A]" />
                      <p className="text-[#2D3B2D]">ciao@niniepettirosso.de</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 md:py-32 bg-[#2D3B2D]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="text-[#C4654A] text-xs tracking-[0.3em] uppercase mb-4">
              Einblicke
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
              Bei uns vor Ort
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative overflow-hidden rounded-xl ${
                  index === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full object-cover hover:scale-105 transition-transform duration-500 ${
                    index === 0
                      ? "h-full min-h-[300px] md:min-h-[500px]"
                      : "aspect-square"
                  }`}
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://www.instagram.com/niniepettirosso/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span>Folge uns auf Instagram</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 px-6 bg-[#C4654A]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">
              Hunger bekommen?
            </h2>
            <p className="text-white/80 mb-8 max-w-md mx-auto">
              Komm vorbei oder bestell dir deine Lieblingspizza direkt nach
              Hause.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="https://www.lieferando.de"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#C4654A] px-8 py-4 rounded-full text-sm tracking-wide hover:bg-[#FAF8F5] transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Bei Lieferando bestellen
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection("oeffnungszeiten")}
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full text-sm tracking-wide hover:bg-white hover:text-[#C4654A] transition-all"
              >
                <Clock className="w-4 h-4" />
                Öffnungszeiten
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="kontakt" className="bg-[#2D3B2D] text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <h3 className="font-serif text-2xl mb-4">Nini e Pettirosso</h3>
              <p className="text-white/60 max-w-sm mb-6">
                Echte italienische Pizza seit 2011 – dein Stopp am Körnerpark in
                Berlin-Neukölln.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/niniepettirosso/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.lieferando.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span className="text-sm">Lieferando</span>
                </a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-medium mb-4 text-white/90">Kontakt</h4>
              <div className="space-y-3 text-white/60 text-sm">
                <p>Körnerstraße 42</p>
                <p>12051 Berlin-Neukölln</p>
                <p>030 1234 5678</p>
                <p>ciao@niniepettirosso.de</p>
              </div>
            </div>

            {/* Hours */}
            <div>
              <h4 className="font-medium mb-4 text-white/90">Öffnungszeiten</h4>
              <div className="space-y-2 text-white/60 text-sm">
                <p>Di – Do: 12:00 – 21:00</p>
                <p>Fr – Sa: 12:00 – 22:00</p>
                <p>So: 13:00 – 20:00</p>
                <p className="text-[#C4654A]/80">Mo: Ruhetag</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} Nini e Pettirosso. Alle Rechte
              vorbehalten.
            </p>
            <div className="flex gap-6 text-sm text-white/40">
              <a href="#" className="hover:text-white/60 transition-colors">
                Impressum
              </a>
              <a href="#" className="hover:text-white/60 transition-colors">
                Datenschutz
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
