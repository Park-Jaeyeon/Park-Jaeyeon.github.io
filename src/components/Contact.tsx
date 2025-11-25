import React from 'react';
import { Github, Linkedin, Instagram, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 max-w-2xl mx-auto px-6 sm:px-10 text-center mb-20">
      <p className="text-green font-mono mb-4">04. 다음 단계는?</p>
      <h2 className="text-4xl md:text-5xl font-bold text-lightest-slate mb-6">연락하기</h2>
      <p className="text-slate text-lg mb-12 leading-relaxed">
        현재 새로운 기회를 찾고 있지는 않지만, 제 메일함은 항상 열려 있습니다.
        문의사항이 있거나 가볍게 인사하고 싶으시다면 언제든 연락 주세요!
      </p>
      
      <a
        href="mailto:example@email.com"
        className="inline-block px-8 py-4 border border-green text-green font-mono rounded hover:bg-green/10 transition-colors mb-24"
      >
        메일 보내기
      </a>

      <footer className="flex flex-col items-center space-y-6">
        <div className="flex space-x-8 md:hidden">
           {/* Social icons only visible on mobile in footer */}
          <a href="https://github.com/Park-Jaeyeon" className="text-slate hover:text-green transition-colors">
            <Github size={20} />
          </a>
          <a href="#" className="text-slate hover:text-green transition-colors">
            <Linkedin size={20} />
          </a>
           <a href="#" className="text-slate hover:text-green transition-colors">
            <Instagram size={20} />
          </a>
        </div>
        <p className="text-sm text-slate font-mono hover:text-green cursor-pointer transition-colors">
          Designed & Built by Park Jaeyeon
        </p>
      </footer>
      
      {/* Fixed Sidebars for Desktop */}
      <div className="hidden md:block fixed bottom-0 left-10 z-10">
          <div className="flex flex-col items-center space-y-6 after:block after:w-[1px] after:h-24 after:bg-slate after:mx-auto after:mt-6">
            <a href="https://github.com/Park-Jaeyeon" className="text-slate hover:text-green hover:-translate-y-1 transition-all">
                <Github size={20} />
            </a>
            <a href="#" className="text-slate hover:text-green hover:-translate-y-1 transition-all">
                <Instagram size={20} />
            </a>
            <a href="#" className="text-slate hover:text-green hover:-translate-y-1 transition-all">
                <Twitter size={20} />
            </a>
            <a href="#" className="text-slate hover:text-green hover:-translate-y-1 transition-all">
                <Linkedin size={20} />
            </a>
          </div>
      </div>

      <div className="hidden md:block fixed bottom-0 right-10 z-10">
          <div className="flex flex-col items-center space-y-6 after:block after:w-[1px] after:h-24 after:bg-slate after:mx-auto after:mt-6">
            <a href="mailto:example@email.com" className="text-slate hover:text-green hover:-translate-y-1 transition-all font-mono text-xs tracking-widest rotate-90 mb-24">
                example@email.com
            </a>
          </div>
      </div>

    </section>
  );
};

export default Contact;