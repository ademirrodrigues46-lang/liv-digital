import { ArrowRight, Sparkles, TrendingUp, Bell, Wifi } from "lucide-react";
import Logo from "./Logo";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-28 pb-20 bg-liv-black overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-liv-gold/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-liv-gold/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative grid lg:grid-cols-2 gap-16 items-center">
        {/* Texto */}
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-liv-gold/30 bg-liv-gold/5 text-liv-gold text-xs font-medium tracking-wider mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-liv-gold animate-pulse-slow" />
            EM BREVE • NOVAS SOLUÇÕES DIGITAIS
          </div>

          <div className="mb-6">
            <Logo className="h-20 w-20 rounded-full shadow-gold" />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-white mb-6">
            Tecnologia que{" "}
            <span className="text-gradient-gold">transforma negócios.</span>
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-10">
            Desenvolvemos sites, aplicativos e sistemas personalizados para
            transformar sua ideia em uma solução digital que realmente
            funciona.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contato"
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-liv-gold text-liv-black font-semibold hover:bg-liv-goldLight hover:shadow-gold transition-all duration-300"
            >
              Solicitar um projeto
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#solucoes"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-white/15 text-white font-medium hover:border-liv-gold/50 hover:text-liv-gold transition-all duration-300"
            >
              Conheça nossas soluções
            </a>
          </div>
        </div>

        {/* Composição visual tecnológica */}
        <div className="relative h-[480px] hidden lg:block animate-fade-in">
          {/* Dashboard mockup */}
          <div className="absolute top-6 left-0 w-[380px] glass rounded-2xl p-5 shadow-2xl animate-float">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-liv-gold/15 flex items-center justify-center">
                  <TrendingUp size={16} className="text-liv-gold" />
                </div>
                <span className="text-sm text-gray-300 font-medium">
                  Painel LIV
                </span>
              </div>
              <Bell size={16} className="text-gray-500" />
            </div>

            <div className="grid grid-cols-3 gap-3 mb-5">
              {["Pedidos", "Agenda", "Clientes"].map((label, i) => (
                <div
                  key={label}
                  className="bg-liv-graphite/80 rounded-xl p-3 border border-white/5"
                >
                  <p className="text-[10px] text-gray-500 mb-1">{label}</p>
                  <p className="text-lg font-bold text-white">
                    {[128, "94%", 312][i]}
                  </p>
                </div>
              ))}
            </div>

            <div className="h-24 rounded-xl bg-liv-graphite/60 border border-white/5 flex items-end gap-2 p-3">
              {[40, 70, 55, 90, 65, 100, 80].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm bg-gradient-to-t from-liv-gold/30 to-liv-gold"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          {/* Smartphone mockup */}
          <div
            className="absolute bottom-0 -right-12 w-[220px] h-[440px] rounded-[2.5rem] bg-liv-graphite border-[6px] border-liv-graphiteLight shadow-2xl p-3 animate-float"
            style={{ animationDelay: "1s" }}
          >
            <div className="w-16 h-1.5 bg-black/40 rounded-full mx-auto mb-4" />
            <div className="bg-liv-black rounded-[1.5rem] h-full p-4 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <Logo className="h-7 w-7 rounded-full" />
                <Wifi size={14} className="text-gray-500" />
              </div>
              <p className="text-white text-sm font-semibold mb-1">
                Agendamento confirmado
              </p>
              <p className="text-xs text-gray-500 mb-4">Hoje, 15:30</p>

              <div className="space-y-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="bg-liv-graphite rounded-lg p-2.5 flex items-center gap-2 border border-white/5"
                  >
                    <div className="w-7 h-7 rounded-full bg-liv-gold/20 flex items-center justify-center">
                      <Sparkles size={12} className="text-liv-gold" />
                    </div>
                    <div className="h-2 bg-white/10 rounded-full flex-1" />
                  </div>
                ))}
              </div>

              <div className="mt-auto bg-liv-gold text-liv-black text-center text-xs font-semibold py-3 rounded-xl">
                Confirmar
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}