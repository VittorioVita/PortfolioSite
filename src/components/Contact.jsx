import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent to the server! (Not really, just a demo)");
  };

  return (
    <section id="contact" className="py-24 bg-arcade-dark relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
<h2 className="font-pixel text-xl sm:text-2xl md:text-3xl lg:text-5xl text-neon-cyan neon-text mb-4 tracking-tighter sm:tracking-normal">
  &gt; CONTACT_FORM.tsx
</h2>
          <div className="w-32 h-1 bg-neon-pink mx-auto"></div>
          <p className="text-2xl text-neon-yellow mt-6 font-retro">Ready to start a new quest together?</p>
        </div>
        
        <div className="max-w-2xl mx-auto bg-arcade-bg border-4 border-neon-pink p-8 pixel-border">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-neon-cyan mb-2 font-pixel text-sm">PLAYER NAME</label>
              <input type="text" className="w-full bg-arcade-dark border-4 border-neon-cyan px-4 py-3 text-white text-lg focus:border-neon-yellow focus:outline-none transition-colors font-retro" placeholder="Enter your name" />
            </div>
            <div>
              <label className="block text-neon-cyan mb-2 font-pixel text-sm">EMAIL ADDRESS</label>
              <input type="email" className="w-full bg-arcade-dark border-4 border-neon-cyan px-4 py-3 text-white text-lg focus:border-neon-yellow focus:outline-none transition-colors font-retro" placeholder="your@email.com" />
            </div>
            <div>
              <label className="block text-neon-cyan mb-2 font-pixel text-sm">MESSAGE</label>
              <textarea rows="6" className="w-full bg-arcade-dark border-4 border-neon-cyan px-4 py-3 text-white text-lg focus:border-neon-yellow focus:outline-none transition-colors resize-none font-retro" placeholder="Tell me about your project..."></textarea>
            </div>
            <button type="submit" className="w-full group relative px-8 py-4 bg-neon-pink text-white font-pixel text-lg border-4 border-black hover:bg-neon-cyan hover:text-arcade-bg transition-all duration-300 hover:scale-105">
              <span className="relative z-10">SEND MESSAGE</span>
              <div className="absolute inset-0 bg-neon-yellow transform translate-x-1 translate-y-1 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;