import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-start max-w-6xl mx-auto px-6 sm:px-10 pt-24">
      <div className="space-y-5">
        <p className="text-green font-mono text-base md:text-lg animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          안녕하세요, 제 이름은
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-lightest-slate tracking-tight animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          박재연입니다.
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-slate tracking-tight animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          웹을 통해 가치를 만듭니다.
        </h2>
        <p className="max-w-xl text-lg text-slate leading-relaxed animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          저는 사용자 경험을 최우선으로 생각하는 소프트웨어 엔지니어입니다.
          현재는 접근성이 뛰어나고 사람 중심적인 디지털 제품을 만드는 데 집중하고 있습니다.
        </p>
        <div className="pt-10 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
          <a
            href="#projects"
            className="inline-block px-8 py-4 border border-green text-green font-mono text-sm rounded hover:bg-green/10 transition-colors"
          >
            프로젝트 보기
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;