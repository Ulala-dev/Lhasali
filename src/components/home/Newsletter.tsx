
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Newsletter() {
  return (
    <section className="py-16 bg-himalaya-maroon text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
          <p className="mb-8">
            Subscribe to get special offers, free giveaways, and updates about our new products.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white text-gray-900"
            />
            <Button className="bg-himalaya-orange hover:bg-himalaya-gold text-white">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
