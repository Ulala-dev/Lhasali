import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { MountainBackground } from "@/components/mountain/MountainBackground";
import { motion } from "framer-motion";

const ContactIcon = ({ icon: Icon, href, label }: { icon: any; href: string; label: string }) => (
  <motion.a
    href={href}
    whileHover={{ scale: 1.1, rotate: 5 }}
    whileTap={{ scale: 0.95 }}
    className="text-himalaya-orange hover:text-himalaya-gold transition-colors"
    aria-label={label}
  >
    <Icon className="w-6 h-6" />
  </motion.a>
);

const FormInput = ({ type = "text", placeholder, icon: Icon }: { type?: string; placeholder: string; icon: any }) => (
  <div className="relative group">
    <Input
      type={type}
      placeholder={placeholder}
      className="w-full pl-10 bg-white/80 backdrop-blur-sm border-himalaya-maroon/20 focus:border-himalaya-orange transition-all duration-300"
    />
    <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-himalaya-maroon/60 group-focus-within:text-himalaya-orange transition-colors" />
  </div>
);

export default function Contact() {
  return (
    <section className="py-16 relative overflow-hidden">
      <MountainBackground
        layers={3}
        opacity={0.15}
        color="maroon"
        className="absolute inset-0"
      />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold text-himalaya-maroon mb-4">
            Contact Us
          </h2>
          <p className="text-himalaya-maroon/80 max-w-2xl mx-auto">
            Have a question, need support, or want to place a{" "}
            <span className="font-semibold">corporate order</span>? Fill out the form below or use the contact information provided. Our team will get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Send Us a Message */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 bg-white/80 backdrop-blur-md shadow-xl rounded-2xl border border-white/20"
          >
            <h3 className="text-xl font-semibold text-himalaya-maroon mb-6">
              Send Us a Message
            </h3>
            <form
              action="https://formspree.io/f/myzwrzvy"
              method="POST"
              className="space-y-6 bg-white rounded-2xl shadow-xl border border-himalaya-maroon/10 p-8"
            >
              <Input type="text" name="name" placeholder="Full Name" required className="rounded-lg border-himalaya-maroon/20 focus:border-himalaya-orange focus:ring-2 focus:ring-himalaya-orange/30 px-4 py-3 text-base mb-2" />
              <Input type="email" name="email" placeholder="Email Address" required className="rounded-lg border-himalaya-maroon/20 focus:border-himalaya-orange focus:ring-2 focus:ring-himalaya-orange/30 px-4 py-3 text-base mb-2" />
              <Input type="tel" name="phone" placeholder="Phone Number" className="rounded-lg border-himalaya-maroon/20 focus:border-himalaya-orange focus:ring-2 focus:ring-himalaya-orange/30 px-4 py-3 text-base mb-2" />
              <Textarea name="message" placeholder="Your Message" required className="rounded-lg border-himalaya-maroon/20 focus:border-himalaya-orange focus:ring-2 focus:ring-himalaya-orange/30 px-4 py-3 text-base mb-2 min-h-[120px]" />
              <Button
                type="submit"
                className="w-full bg-himalaya-orange hover:bg-himalaya-gold text-white font-bold py-3 rounded-lg text-lg shadow-md transition-all duration-300 transform hover:scale-[1.02]"
              >
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-8 bg-white/80 backdrop-blur-md shadow-xl rounded-2xl border border-white/20 relative"
          >
            <h3 className="text-xl font-semibold text-himalaya-maroon mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-4 text-himalaya-maroon"
              >
                <Phone className="text-himalaya-orange" />
                <a href="tel:+9771234567890" className="hover:underline">+977 1234567890</a>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-4 text-himalaya-maroon"
              >
                <Mail className="text-himalaya-orange" />
                <a href="mailto:lhasaligear@gmail.com" className="hover:underline">lhasaligear@gmail.com</a>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-4 text-himalaya-maroon"
              >
                <MapPin className="text-himalaya-orange" />
                <span>JP Road, Thamel, Kathmandu 44600, Nepal</span>
              </motion.div>
            </div>
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-himalaya-maroon mb-4">
                Follow Us
              </h4>
              <div className="flex space-x-6">
                <ContactIcon icon={Facebook} href="https://www.facebook.com/share/1BZg6BQso4/" label="Facebook" />
                <ContactIcon icon={Instagram} href="https://www.instagram.com/lhasaligear?igsh=MWFhMW03bjE4eTk0aA==" label="Instagram" />
                <ContactIcon icon={FaTiktok} href="https://www.tiktok.com/@lhasaligear?_t=ZS-8wi3iky3X0a&_r=1" label="TikTok" />
              </div>
            </div>
            {/* Google Map */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-himalaya-maroon mb-4">Location Map</h4>
              <div className="aspect-video w-full overflow-hidden rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.1513329765817!2d85.30785507478754!3d27.712613425260397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18fc381916c9%3A0xaf58c8a13dfad3d8!2sSilver!5e0!3m2!1sen!2sjp!4v1748362744549!5m2!1sen!2sjp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
