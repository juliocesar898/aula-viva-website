import React, { useState } from 'react';
import {
  Video,
  Mic,
  MicOff,
  VideoOff,
  Hand,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe2,
  Calendar,
  Smartphone,
  Wifi,
  Clock,
  Layers,
  HelpCircle,
  ExternalLink,
  Users,
  Award,
  ChevronRight,
  X,
  CreditCard,
  FileText,
  Send,
  BookOpen,
  Calculator,
  Languages,
  Check,
  AlertCircle
} from 'lucide-react';

export default function App() {
  // Currency & Rate state (Venezuela BCV)
  const [bcvRate, setBcvRate] = useState<number>(53.40);
  const [isEditingRate, setIsEditingRate] = useState<boolean>(false);
  const [currency, setCurrency] = useState<'USD' | 'VES'>('USD');

  // Interactive Meet Simulation state
  const [meetSubject, setMeetSubject] = useState<'english' | 'math'>('english');
  const [isMicMuted, setIsMicMuted] = useState<boolean>(false);
  const [isCamOff, setIsCamOff] = useState<boolean>(false);
  const [handRaised, setHandRaised] = useState<boolean>(false);

  // Interactive step demo
  const [activeStep, setActiveStep] = useState<number>(0);

  // Interactive subjects tab
  const [activeSubjectTab, setActiveSubjectTab] = useState<'english' | 'math'>('english');

  // FAQ Accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Modals state
  const [showDiagnosticModal, setShowDiagnosticModal] = useState<boolean>(false);
  const [diagnosticSubject, setDiagnosticSubject] = useState<'english' | 'math'>('english');
  const [diagnosticStep, setDiagnosticStep] = useState<number>(1);
  const [diagnosticAnswer1, setDiagnosticAnswer1] = useState<string>('');
  const [diagnosticAnswer2, setDiagnosticAnswer2] = useState<string>('');

  const [showCheckoutModal, setShowCheckoutModal] = useState<boolean>(false);
  const [selectedPlan, setSelectedPlan] = useState<'starter' | 'pro'>('pro');
  const [checkoutPaymentMethod, setCheckoutPaymentMethod] = useState<'pagomovil' | 'zinli' | 'binance'>('pagomovil');
  const [checkoutSuccess, setCheckoutSuccess] = useState<boolean>(false);

  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [loginSuccess, setLoginSuccess] = useState<boolean>(false);

  // Helper currency converter
  const formatPrice = (usdAmount: number) => {
    if (currency === 'VES') {
      const vesAmount = usdAmount * bcvRate;
      return `${vesAmount.toLocaleString('es-VE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} Bs.`;
    }
    return `$${usdAmount} USD`;
  };

  const getAlternativePrice = (usdAmount: number) => {
    if (currency === 'USD') {
      const vesAmount = usdAmount * bcvRate;
      return `≈ ${vesAmount.toLocaleString('es-VE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} Bs. a tasa oficial`;
    }
    return `≈ $${usdAmount} USD al mes`;
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans antialiased selection:bg-sky-100 selection:text-sky-900">
      
      {/* Informative Top Notification Banner */}
      <div className="bg-sky-50 border-b border-sky-100 text-sky-900 px-4 py-2 text-xs font-medium">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-sky-700">🇻🇪 Venezuela:</span>
            <span>Inscripciones abiertas para el ciclo semanal. Pagos directos en bolívares a Tasa Oficial BCV.</span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-slate-600">Tasa BCV del día:</span>
            {isEditingRate ? (
              <span className="flex items-center gap-1">
                <input
                  type="number"
                  step="0.1"
                  value={bcvRate}
                  onChange={(e) => setBcvRate(parseFloat(e.target.value) || 53.40)}
                  className="w-16 px-1 py-0.5 text-xs bg-white border border-sky-300 rounded text-slate-800 font-mono"
                />
                <button
                  onClick={() => setIsEditingRate(false)}
                  className="text-xs text-sky-700 font-semibold underline hover:text-sky-900"
                >
                  OK
                </button>
              </span>
            ) : (
              <button
                onClick={() => setIsEditingRate(true)}
                title="Haz clic para ajustar la tasa referencial"
                className="font-mono font-semibold text-sky-800 hover:underline flex items-center gap-1"
              >
                {bcvRate.toFixed(2)} Bs/$
                <span className="text-[10px] text-slate-500 font-normal">(editar)</span>
              </button>
            )}
            <span className="text-slate-300">|</span>
            <button
              onClick={() => setCurrency(currency === 'USD' ? 'VES' : 'USD')}
              className="text-sky-700 font-semibold hover:text-sky-900 transition-colors"
            >
              Ver en: <span className="underline">{currency === 'USD' ? 'Bolívares (Bs.)' : 'Dólares (USD)'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Modern Immigo-Inspired Navbar (Strict 3-zone contract) */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
          
          {/* Zone 1: Single text element wordmark */}
          <a href="#" className="flex items-center gap-2.5 whitespace-nowrap shrink-0 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 to-blue-600 flex items-center justify-center text-white shadow-sm shadow-sky-500/20 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-900">
              Aula<span className="text-sky-600">Viva</span>
            </span>
          </a>

          {/* Zone 2: 5 clean single-line navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            <a href="#como-funciona" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              ¿Cómo funciona?
            </a>
            <a href="#materias" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              Materias
            </a>
            <a href="#metodologia" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              Metodología
            </a>
            <a href="#precios" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              Precios
            </a>
            <a href="#faq" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              Preguntas Frecuentes
            </a>
          </nav>

          {/* Zone 3: 1 primary action cluster */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setShowLoginModal(true)}
              className="hidden sm:inline-flex px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors whitespace-nowrap shrink-0"
            >
              Iniciar sesión
            </button>
            <button
              onClick={() => {
                setSelectedPlan('pro');
                setShowCheckoutModal(true);
              }}
              className="px-5 py-2.5 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 active:bg-sky-700 rounded-xl shadow-sm shadow-sky-600/20 hover:shadow-sky-600/30 transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5"
            >
              <span>Comenzar</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
        {/* Subtle background ambient tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50/50 via-white to-[#F8FAFC] -z-10" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Value Proposition */}
            <div className="lg:col-span-6 space-y-7">
              {/* Clean unboxed kicker metadata */}
              <div className="flex items-center gap-2 text-xs font-semibold text-sky-800">
                <span className="text-sky-600">● En vivo por Google Meet</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span>Máximo 6 alumnos por sala</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span>Venezuela</span>
              </div>

              {/* Marquee Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] text-balance">
                Domina Inglés y Matemáticas en vivo con tutores expertos, <span className="text-sky-600">sin pagar fortunas</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                Olvídate de videos grabados aburridos. Entra a clases interactivas en grupos pequeños vía Google Meet con retroalimentación en directo y soporte de IA.
              </p>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                <button
                  onClick={() => {
                    const el = document.getElementById('precios');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 text-base font-semibold text-white bg-sky-600 hover:bg-sky-500 active:bg-sky-700 rounded-2xl shadow-md shadow-sky-600/25 transition-all text-center flex items-center justify-center gap-2"
                >
                  <span>Explorar membresías</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setShowDiagnosticModal(true)}
                  className="px-6 py-3.5 text-base font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200/90 rounded-2xl shadow-sm transition-all text-center flex items-center justify-center gap-2 hover:border-sky-300"
                >
                  <Sparkles className="w-4 h-4 text-sky-600" />
                  <span>Prueba diagnóstica gratuita</span>
                </button>
              </div>

              {/* Social proof & trust proofs adjacent */}
              <div className="pt-4 border-t border-slate-200/70">
                <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-medium text-slate-500">
                  <span className="font-semibold text-slate-800">1,500+ sesiones completadas</span>
                  <span aria-hidden="true" className="text-slate-300">·</span>
                  <span className="flex items-center gap-1.5 text-slate-700">
                    <ShieldCheck className="w-4 h-4 text-sky-600" />
                    Pagos locales a Tasa BCV
                  </span>
                  <span aria-hidden="true" className="text-slate-300">·</span>
                  <span>Sin permanencia mínima</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Google Meet Mockup with AI Live Feedback */}
            <div className="lg:col-span-6">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                
                {/* Simulated Meet Window Container */}
                <div className="bg-slate-900 rounded-3xl p-3 sm:p-4 shadow-2xl border border-slate-800 text-white relative overflow-hidden">
                  
                  {/* Meet Header Bar */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      <span className="font-mono text-slate-400 ml-2 hidden sm:inline">meet.google.com/aul-viva-ven</span>
                    </div>

                    {/* Room Subject Switcher */}
                    <div className="flex items-center gap-1 bg-slate-800/90 p-1 rounded-xl">
                      <button
                        onClick={() => setMeetSubject('english')}
                        className={`px-2.5 py-1 text-xs rounded-lg font-medium transition-all ${
                          meetSubject === 'english'
                            ? 'bg-sky-600 text-white shadow-sm'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Inglés en Vivo
                      </button>
                      <button
                        onClick={() => setMeetSubject('math')}
                        className={`px-2.5 py-1 text-xs rounded-lg font-medium transition-all ${
                          meetSubject === 'math'
                            ? 'bg-sky-600 text-white shadow-sm'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Matemáticas en Vivo
                      </button>
                    </div>
                  </div>

                  {/* 4-Participant Grid (Google Meet Layout) */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 aspect-[4/3] sm:aspect-[16/11]">
                    
                    {/* Participant 1: The Tutor */}
                    <div className="bg-slate-800/90 rounded-2xl relative overflow-hidden p-3 flex flex-col justify-between border border-slate-700/60">
                      <div className="flex items-center justify-between">
                        <span className="bg-sky-500/20 text-sky-300 text-[10px] font-semibold px-2 py-0.5 rounded-md border border-sky-400/30">
                          Tutor AulaViva
                        </span>
                        <div className="flex items-center gap-1">
                          <span className="w-1.5 h-3 bg-sky-400 animate-pulse rounded-full" />
                          <span className="w-1.5 h-4 bg-sky-400 animate-pulse delay-75 rounded-full" />
                          <span className="w-1.5 h-2 bg-sky-400 animate-pulse delay-150 rounded-full" />
                        </div>
                      </div>

                      {/* Tutor Center Avatar Graphic */}
                      <div className="my-auto text-center">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full bg-gradient-to-tr from-sky-600 to-indigo-600 flex items-center justify-center font-bold text-lg sm:text-xl text-white shadow-inner border-2 border-sky-400/50">
                          {meetSubject === 'english' ? 'VR' : 'CM'}
                        </div>
                        <p className="mt-2 text-xs font-semibold text-slate-200">
                          {meetSubject === 'english' ? 'Prof. Valentina R.' : 'Ing. Carlos Mendoza'}
                        </p>
                        <p className="text-[10px] text-slate-400">
                          {meetSubject === 'english' ? 'Especialista en Fonética' : 'Profesor de Cálculo UCV'}
                        </p>
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-slate-300">
                        <span className="truncate">Explicando en pizarra</span>
                        <Mic className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      </div>
                    </div>

                    {/* Participant 2: Student Andrea (Currently Speaking) */}
                    <div className="bg-slate-800/90 rounded-2xl relative overflow-hidden p-3 flex flex-col justify-between border-2 border-sky-500 shadow-md shadow-sky-500/20">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-sky-400 font-semibold flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
                          En uso de palabra
                        </span>
                      </div>

                      <div className="my-auto text-center">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full bg-gradient-to-tr from-pink-500 to-purple-600 flex items-center justify-center font-bold text-lg text-white">
                          AM
                        </div>
                        <p className="mt-2 text-xs font-semibold text-slate-200">Andrea M.</p>
                        <p className="text-[10px] text-slate-400">Caracas, VE</p>
                      </div>

                      <div className="bg-slate-900/80 rounded-lg p-1.5 text-[10px] text-sky-200 border border-slate-700/50">
                        {meetSubject === 'english' ? (
                          <span>&ldquo;I work remotely for a tech company...&rdquo;</span>
                        ) : (
                          <span>&ldquo;Entonces divido ambos términos entre 2x...&rdquo;</span>
                        )}
                      </div>
                    </div>

                    {/* Participant 3: Student David */}
                    <div className="bg-slate-800/90 rounded-2xl relative overflow-hidden p-3 flex flex-col justify-between border border-slate-700/60">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-slate-400 font-mono">Audio activo</span>
                      </div>

                      <div className="my-auto text-center">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto rounded-full bg-gradient-to-tr from-emerald-500 to-teal-700 flex items-center justify-center font-bold text-base text-white">
                          DS
                        </div>
                        <p className="mt-2 text-xs font-semibold text-slate-200">David S.</p>
                        <p className="text-[10px] text-slate-400">Valencia, VE</p>
                      </div>

                      <div className="flex items-center justify-between text-[10px] text-slate-400">
                        <span>Turno siguiente</span>
                        <MicOff className="w-3.5 h-3.5 text-slate-500" />
                      </div>
                    </div>

                    {/* Participant 4: Student Mariana */}
                    <div className="bg-slate-800/90 rounded-2xl relative overflow-hidden p-3 flex flex-col justify-between border border-slate-700/60">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-slate-400">Participante</span>
                      </div>

                      <div className="my-auto text-center">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto rounded-full bg-gradient-to-tr from-amber-500 to-orange-600 flex items-center justify-center font-bold text-base text-white">
                          MK
                        </div>
                        <p className="mt-2 text-xs font-semibold text-slate-200">Mariana K.</p>
                        <p className="text-[10px] text-slate-400">Maracaibo, VE</p>
                      </div>

                      <div className="flex items-center justify-between text-[10px] text-slate-400">
                        <span>Tomando notas</span>
                        <MicOff className="w-3.5 h-3.5 text-slate-500" />
                      </div>
                    </div>
                  </div>

                  {/* Google Meet Bottom Controls Bar */}
                  <div className="mt-3 pt-2.5 border-t border-slate-800 flex items-center justify-center gap-2 sm:gap-3">
                    <button
                      onClick={() => setIsMicMuted(!isMicMuted)}
                      className={`p-2 rounded-full transition-colors ${
                        isMicMuted ? 'bg-red-500 text-white' : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
                      }`}
                      title={isMicMuted ? 'Activar micrófono' : 'Silenciar micrófono'}
                    >
                      {isMicMuted ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                    </button>

                    <button
                      onClick={() => setIsCamOff(!isCamOff)}
                      className={`p-2 rounded-full transition-colors ${
                        isCamOff ? 'bg-red-500 text-white' : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
                      }`}
                      title={isCamOff ? 'Activar cámara' : 'Desactivar cámara'}
                    >
                      {isCamOff ? <VideoOff className="w-4 h-4" /> : <Video className="w-4 h-4" />}
                    </button>

                    <button
                      onClick={() => setHandRaised(!handRaised)}
                      className={`p-2 rounded-full transition-colors ${
                        handRaised ? 'bg-amber-500 text-slate-900 font-bold' : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
                      }`}
                      title="Pedir la palabra"
                    >
                      <Hand className="w-4 h-4" />
                    </button>

                    <button
                      className="p-2 rounded-full bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors"
                      title="Subtítulos en tiempo real"
                    >
                      <MessageSquare className="w-4 h-4" />
                    </button>

                    <div className="w-px h-5 bg-slate-700 mx-1" />

                    <div className="px-3 py-1 bg-red-600/90 text-white rounded-full text-xs font-semibold">
                      En vivo
                    </div>
                  </div>

                  {/* Floating AI Live Feedback Card (Prominent requirement) */}
                  <div className="mt-3 bg-white text-slate-900 rounded-2xl p-3.5 shadow-xl border border-sky-100 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div className="space-y-1 text-left flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold text-sky-700 uppercase tracking-wider">
                          AI Live Feedback en pantalla
                        </span>
                        <span className="text-[10px] text-slate-500 font-mono">Latencia 0.2s</span>
                      </div>
                      {meetSubject === 'english' ? (
                        <div>
                          <p className="text-xs font-semibold text-slate-800">
                            Corrección de fluidez: <span className="text-sky-700">&ldquo;I have worked&rdquo;</span> en lugar de &ldquo;I work since&rdquo;.
                          </p>
                          <p className="text-[11px] text-slate-500">
                            Fórmula sugerida: Present Perfect Continuous para acciones que continúan en el presente.
                          </p>
                        </div>
                      ) : (
                        <div>
                          <p className="text-xs font-semibold text-slate-800">
                            Validación de paso: <span className="text-sky-700">Multiplicar por -1 invierte la desigualdad</span>.
                          </p>
                          <p className="text-[11px] text-slate-500">
                            Atención: $-2x &gt; 8 \implies x &lt; -4$. El tutor lo resalta en la pizarra interactiva.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                </div>

                {/* Micro trust badge attached to demo */}
                <div className="mt-3 flex items-center justify-between px-2 text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Google Meet optimizado para conexiones de 2 Mbps
                  </span>
                  <span>Sin descargar software adicional</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 3: "¿Cómo funciona la sesión?" (Interactive Step-by-Step Demo) */}
      <section id="como-funciona" className="py-20 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
              Metodología AulaViva
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
              ¿Cómo es una sesión de 50 minutos en vivo?
            </h2>
            <p className="text-slate-600 text-base">
              Estructura pedagógica probada para máxima retención sin agotamiento mental, guiada por tutores y potenciada con IA.
            </p>
          </div>

          {/* Interactive Step Switcher Bar */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex p-1.5 bg-slate-100/90 rounded-2xl border border-slate-200 max-w-xl w-full">
              {[
                { label: '1. Lección Clave (15 min)', id: 0 },
                { label: '2. Práctica en Vivo (35 min)', id: 1 },
                { label: '3. Reporte de IA Post-Clase', id: 2 },
              ].map((step) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                    activeStep === step.id
                      ? 'bg-white text-sky-700 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {step.label}
                </button>
              ))}
            </div>
          </div>

          {/* Step Detail Display Cards */}
          <div className="grid lg:grid-cols-12 gap-8 items-center bg-[#F8FAFC] rounded-3xl p-6 sm:p-10 border border-slate-200/90">
            
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-sky-100 text-sky-800 text-xs font-semibold">
                <span>Paso {activeStep + 1} de 3</span>
              </div>

              {activeStep === 0 && (
                <>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Bloque 1: Lección clave y desbloqueo conceptual
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    El tutor va directo al grano con pizarra digital compartida en Google Meet. Cero rodeos de 40 minutos de diapositivas aburridas: se enseña exactamente la regla o fórmula que destraba el problema del día.
                  </p>
                  <ul className="space-y-2.5 text-sm text-slate-700">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-sky-600 shrink-0" />
                      <span>Explicación visual con pizarra dinámica interactiva</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-sky-600 shrink-0" />
                      <span>Ejemplos adaptados a contextos reales y laborales</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-sky-600 shrink-0" />
                      <span>Preguntas rápidas para chequear comprensión al instante</span>
                    </li>
                  </ul>
                </>
              )}

              {activeStep === 1 && (
                <>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Bloque 2: Práctica intensiva en grupos de 4 a 6 personas
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    Es tu momento de hablar o resolver en la pantalla. En salas pequeñas todos participan obligatoriamente. El tutor corrige tu pronunciación o tu despeje algebraico en el momento exacto en que cometes el error.
                  </p>
                  <ul className="space-y-2.5 text-sm text-slate-700">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-sky-600 shrink-0" />
                      <span>Simulaciones de entrevistas de trabajo y roleplay en inglés</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-sky-600 shrink-0" />
                      <span>Resolución guiada paso a paso de ejercicios de examen</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-sky-600 shrink-0" />
                      <span>Ambiente seguro y de apoyo mutuo para perder el miedo</span>
                    </li>
                  </ul>
                </>
              )}

              {activeStep === 2 && (
                <>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Bloque 3: Reporte personalizado con IA en tu WhatsApp
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    5 minutos después de terminar tu clase, nuestro motor inteligente procesa los momentos clave de tu sesión y te envía a WhatsApp tu resumen de errores corregidos, vocabulario nuevo y 3 ejercicios clave para reforzar.
                  </p>
                  <ul className="space-y-2.5 text-sm text-slate-700">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-sky-600 shrink-0" />
                      <span>Envío automático a tu WhatsApp sin tener que tomar notas apresuradas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-sky-600 shrink-0" />
                      <span>Mini-cuestionario de 3 minutos para consolidar la memoria</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-sky-600 shrink-0" />
                      <span>Métricas de progreso y vocabulario dominado semana a semana</span>
                    </li>
                  </ul>
                </>
              )}

              <div className="pt-2">
                <button
                  onClick={() => setShowDiagnosticModal(true)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 hover:text-sky-700 group"
                >
                  <span>Probar una clase diagnóstica sin compromiso</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Interactive Preview Canvas for the Selected Step */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl p-5 sm:p-7 shadow-sm border border-slate-200">
                {activeStep === 0 && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs text-slate-500">
                      <span className="font-semibold text-slate-700">Pizarra Digital en Directo</span>
                      <span className="font-mono bg-slate-100 px-2 py-0.5 rounded">Minuto 08:34</span>
                    </div>
                    <div className="bg-slate-900 rounded-xl p-5 text-white font-mono text-xs sm:text-sm space-y-3">
                      <div className="text-sky-400 font-semibold">// Regla de Oro: Present Perfect vs Past Simple</div>
                      <div className="bg-slate-800 p-3 rounded-lg border border-slate-700">
                        <p className="text-slate-300">
                          🔴 Incorrecto: &ldquo;I am working here since 2022.&rdquo;
                        </p>
                        <p className="text-emerald-400 mt-1">
                          🟢 Correcto: &ldquo;I have been working here since 2022.&rdquo;
                        </p>
                      </div>
                      <div className="text-slate-400 text-xs">
                        Tutor: &ldquo;Recuerden: &apos;since&apos; conecta el pasado con el presente. ¡Andrea, intenta con tu trabajo actual!&rdquo;
                      </div>
                    </div>
                  </div>
                )}

                {activeStep === 1 && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs text-slate-500">
                      <span className="font-semibold text-slate-700">Dinámica Grupal Activa (4 estudiantes)</span>
                      <span className="text-emerald-600 font-semibold">● Ronda de Práctica</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="bg-sky-50 border border-sky-200 rounded-xl p-3">
                        <div className="font-semibold text-sky-900">1. Andrea (Caracas)</div>
                        <p className="text-slate-600 mt-1 text-[11px]">Respondiendo pregunta de entrevista sobre gestión de clientes.</p>
                        <span className="text-[10px] text-sky-700 font-medium mt-2 inline-block">Feedback recibido: Excelente entonación</span>
                      </div>
                      <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                        <div className="font-semibold text-slate-800">2. David (Valencia)</div>
                        <p className="text-slate-600 mt-1 text-[11px]">Preparando contra-argumento técnico en inglés.</p>
                        <span className="text-[10px] text-slate-500 font-medium mt-2 inline-block">Próximo en hablar</span>
                      </div>
                      <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                        <div className="font-semibold text-slate-800">3. Mariana (Maracaibo)</div>
                        <p className="text-slate-600 mt-1 text-[11px]">Compartiendo pantalla con solución de integral definida.</p>
                        <span className="text-[10px] text-emerald-600 font-medium mt-2 inline-block">Paso validado por el profesor</span>
                      </div>
                      <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                        <div className="font-semibold text-slate-800">4. José (Puerto Ordaz)</div>
                        <p className="text-slate-600 mt-1 text-[11px]">Aplicando método de sustitución trigonométrica.</p>
                        <span className="text-[10px] text-slate-500 font-medium mt-2 inline-block">En cola de revisión</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeStep === 2 && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs text-slate-500">
                      <span className="font-semibold text-slate-700">Reporte de WhatsApp simulado</span>
                      <span className="text-emerald-600 font-semibold">Entregado 19:55 PM</span>
                    </div>
                    <div className="bg-[#EFEAE2] rounded-2xl p-4 sm:p-5 text-slate-800 shadow-inner font-sans text-xs sm:text-sm max-w-md mx-auto border border-emerald-200/60">
                      <div className="bg-white rounded-xl p-3.5 shadow-sm space-y-2.5">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-sky-800 text-xs">✨ AulaViva AI · Resumen de Clase</span>
                          <span className="text-[10px] text-slate-400">Hoy 19:55</span>
                        </div>
                        <p className="text-xs text-slate-700">
                          ¡Gran sesión hoy, Andrea! Aquí tienes tus puntos clave de la clase de <span className="font-semibold">Inglés Laboral</span>:
                        </p>
                        <div className="bg-amber-50 border border-amber-200/80 rounded-lg p-2 text-slate-800 text-[11px]">
                          <strong>Tu error corregido:</strong> Dijiste <em>&ldquo;I was agree&rdquo;</em> ➔ Se dice <strong>&ldquo;I agreed&rdquo;</strong> o <em>&ldquo;I agree&rdquo;</em> (el verbo es agree, no necesita to be).
                        </div>
                        <div className="bg-sky-50 border border-sky-200/80 rounded-lg p-2 text-slate-800 text-[11px]">
                          <strong>Nuevo vocabulario dominado:</strong>
                          <ul className="list-disc list-inside mt-0.5 space-y-0.5 text-slate-700">
                            <li><span className="font-medium">Trade-off:</span> Concesión o compromiso</li>
                            <li><span className="font-medium">Bottleneck:</span> Cuello de botella</li>
                          </ul>
                        </div>
                        <div className="pt-1 flex items-center justify-between text-[11px] text-sky-700 font-semibold">
                          <span>3 ejercicios rápidos de repaso ➔</span>
                          <span className="underline cursor-pointer">Abrir quiz</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Section 4: Materias y Enfoque Práctico */}
      <section id="materias" className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
              Programas Especializados
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
              Diseñado para resolver los mayores dolores educativos
            </h2>
            <p className="text-slate-600 text-base">
              Tanto si buscas conseguir un trabajo remoto en dólares como si necesitas aprobar cálculo universitario.
            </p>

            {/* Subject Selector Tabs */}
            <div className="flex justify-center pt-4">
              <div className="inline-flex p-1 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <button
                  onClick={() => setActiveSubjectTab('english')}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    activeSubjectTab === 'english'
                      ? 'bg-sky-600 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Languages className="w-4 h-4" />
                  <span>Inglés Conversacional y Laboral</span>
                </button>
                <button
                  onClick={() => setActiveSubjectTab('math')}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    activeSubjectTab === 'math'
                      ? 'bg-sky-600 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Calculator className="w-4 h-4" />
                  <span>Matemáticas Prácticas y Universitarias</span>
                </button>
              </div>
            </div>
          </div>

          {/* Tab 1: English Content */}
          {activeSubjectTab === 'english' && (
            <div className="grid lg:grid-cols-3 gap-6">
              
              <div className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-sm hover:border-sky-300 transition-all space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                  💼
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Inglés para Trabajo Remoto
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Prepárate para entrevistas técnicas, reuniones en Zoom, redacción de correos y negociación salarial con clientes internacionales desde Venezuela.
                </p>
                <div className="pt-2 text-xs text-slate-500 space-y-1.5 border-t border-slate-100">
                  <div className="font-semibold text-slate-700">Habilidades clave:</div>
                  <div>· Simulación de entrevistas en vivo</div>
                  <div>· Presentación de proyectos y demos</div>
                  <div>· Jerga laboral de tecnología y marketing</div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-sm hover:border-sky-300 transition-all space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                  🗣️
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Pérdida del Miedo Escénico
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Basta de quedarte mudo cuando te hablan en inglés. En nuestras salas de 4 a 6 personas el error es bienvenido y guiado con paciencia y técnicas de reducción de acento.
                </p>
                <div className="pt-2 text-xs text-slate-500 space-y-1.5 border-t border-slate-100">
                  <div className="font-semibold text-slate-700">Metodología oral:</div>
                  <div>· Desbloqueo conversacional sin juicio</div>
                  <div>· Fonética y enlaces entre palabras</div>
                  <div>· Roleplays espontáneos del día a día</div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-sm hover:border-sky-300 transition-all space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                  📈
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Niveles A1 a C1 con Diagnóstico
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Nunca te pondremos en una sala con personas en un nivel muy superior o inferior al tuyo. La evaluación diagnóstica asegura tu ritmo ideal.
                </p>
                <div className="pt-2 text-xs text-slate-500 space-y-1.5 border-t border-slate-100">
                  <div className="font-semibold text-slate-700">Incluye:</div>
                  <div>· Prueba diagnóstica individual</div>
                  <div>· Grupos homogéneos por objetivo</div>
                  <div>· Certificado de horas cursadas</div>
                </div>
              </div>

            </div>
          )}

          {/* Tab 2: Math Content */}
          {activeSubjectTab === 'math' && (
            <div className="grid lg:grid-cols-3 gap-6">
              
              <div className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-sm hover:border-sky-300 transition-all space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  📐
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Álgebra y Fundamentos Sólidos
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Despejes, factorización, polinomios, fracciones algebraicas y ecuaciones. Tapamos las lagunas que arrastras desde el bachillerato para que nada te frene.
                </p>
                <div className="pt-2 text-xs text-slate-500 space-y-1.5 border-t border-slate-100">
                  <div className="font-semibold text-slate-700">Temas frecuentes:</div>
                  <div>· Despejes sin equivocarse de signo</div>
                  <div>· Factorización y productos notables</div>
                  <div>· Sistemas de ecuaciones lineales</div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-sm hover:border-sky-300 transition-all space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                  ∫
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Cálculo Diferencial e Integral
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Límites, derivadas, optimización, integrales por partes y trigonometría. Especial para estudiantes universitarios de ingeniería, economía o ciencias.
                </p>
                <div className="pt-2 text-xs text-slate-500 space-y-1.5 border-t border-slate-100">
                  <div className="font-semibold text-slate-700">Enfoque UCV / USB / UCAB:</div>
                  <div>· Métodos de integración explicados sin saltos</div>
                  <div>· Resolución de guías y exámenes muestra</div>
                  <div>· Pizarra descargable en PDF al terminar</div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-sm hover:border-sky-300 transition-all space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
                  🎯
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Clínica de Dudas y Exámenes
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  ¿Tienes un parcial este viernes? Trae tus ejercicios específicos a la sala. El profesor los resuelve en vivo contigo hasta que comprendas la lógica.
                </p>
                <div className="pt-2 text-xs text-slate-500 space-y-1.5 border-t border-slate-100">
                  <div className="font-semibold text-slate-700">Modalidad:</div>
                  <div>· Envío previo de tus guías universitarias</div>
                  <div>· Corrección de errores en vivo</div>
                  <div>· Tips para no perder puntos por procedimiento</div>
                </div>
              </div>

            </div>
          )}

        </div>
      </section>

      {/* Section 5: Infraestructura y Cero Fricción para Venezuela */}
      <section id="metodologia" className="py-20 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
                Cero Fricción Técnica
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight text-balance">
                Pensado 100% para la realidad de Venezuela
              </h2>
              <p className="text-slate-600 leading-relaxed text-base">
                Sabemos lo frustrante que es que una plataforma requiera instalar programas pesados, consuma todos tus megas o se tranque con conexiones lentas. Con AulaViva todo funciona directo y ligero.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Wifi className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Bajo consumo de datos (2 Mbps suficiente)</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Google Meet optimiza el ancho de banda automáticamente. Funciona fluido con conexiones de fibra básica, Cantv o datos móviles Digitel y Movistar.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Sin instalar programas pesados</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Ingresa directo desde tu navegador Chrome en la laptop o con un toque desde la app de Google Meet en tu teléfono o tablet.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Sincronización con Google Calendar y WhatsApp</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Tu enlace de clase se agrega a tu calendario y te enviamos un aviso a WhatsApp 15 minutos antes para que no olvides tu sala.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Garantía ante fallas eléctricas</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Si se te va la luz o el internet en medio de tu sesión, no pierdes tu cupo. Puedes reprogramar en cualquier otro horario de la semana sin costo.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Clean graphic comparing AulaViva vs Traditional Courses */}
            <div className="lg:col-span-7">
              <div className="bg-[#F8FAFC] rounded-3xl p-6 sm:p-8 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-5">
                  ¿Por qué los estudiantes eligen AulaViva?
                </h3>

                <div className="space-y-3">
                  <div className="bg-white rounded-2xl p-4 border border-slate-200/80 flex items-start justify-between gap-4">
                    <div>
                      <div className="font-semibold text-slate-900 text-sm">Plataformas tradicionales de video grabado</div>
                      <p className="text-xs text-slate-500 mt-0.5">Tasa de abandono del 90%, nadie responde tus dudas, cero práctica oral.</p>
                    </div>
                    <span className="text-xs font-semibold text-red-600 bg-red-50 px-2.5 py-1 rounded-lg shrink-0">
                      Sin interacción
                    </span>
                  </div>

                  <div className="bg-white rounded-2xl p-4 border border-slate-200/80 flex items-start justify-between gap-4">
                    <div>
                      <div className="font-semibold text-slate-900 text-sm">Academias físicas en Venezuela</div>
                      <p className="text-xs text-slate-500 mt-0.5">Costos de transporte, cortes de luz en el camino, mensualidades de $60-$120.</p>
                    </div>
                    <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-lg shrink-0">
                      Costoso y rígido
                    </span>
                  </div>

                  <div className="bg-sky-50/70 rounded-2xl p-4 border-2 border-sky-500/40 flex items-start justify-between gap-4 shadow-sm">
                    <div>
                      <div className="font-bold text-sky-950 text-sm flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-sky-600" />
                        Membresía AulaViva
                      </div>
                      <p className="text-xs text-sky-900/80 mt-0.5">
                        Clases en vivo en grupos de 6, feedback de IA en WhatsApp, pagos en bolívares a Tasa BCV desde $15/mes.
                      </p>
                    </div>
                    <span className="text-xs font-bold text-white bg-sky-600 px-2.5 py-1 rounded-lg shrink-0">
                      La mejor opción
                    </span>
                  </div>
                </div>

                {/* Proof numbers */}
                <div className="grid grid-cols-3 gap-3 mt-6 pt-5 border-t border-slate-200 text-center">
                  <div>
                    <div className="text-xl sm:text-2xl font-extrabold text-slate-900 font-mono">98.4%</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Satisfacción reportada</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-extrabold text-slate-900 font-mono">6 máx.</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Alumnos por tutor</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-extrabold text-slate-900 font-mono">&lt; 5 min</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Reporte IA en WhatsApp</div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Section 6: Planes y Precios (Adaptados al mercado venezolano) */}
      <section id="precios" className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
              Membresías Mensuales Claras
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
              Precios accesibles con pagos locales a Tasa BCV
            </h2>
            <p className="text-slate-600 text-base">
              Sin sorpresas, sin comisiones ocultas y sin requerir tarjetas de crédito internacionales.
            </p>

            {/* Currency toggle control */}
            <div className="pt-2 flex items-center justify-center gap-3">
              <span className={`text-xs font-semibold ${currency === 'USD' ? 'text-slate-900' : 'text-slate-500'}`}>
                Dólares (USD)
              </span>
              <button
                onClick={() => setCurrency(currency === 'USD' ? 'VES' : 'USD')}
                className="w-12 h-6 bg-slate-300 rounded-full p-0.5 transition-colors duration-200 focus:outline-none"
                style={{ backgroundColor: currency === 'VES' ? '#0284C7' : '#94A3B8' }}
                aria-label="Alternar moneda"
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full shadow-sm transform transition-transform duration-200 ${
                    currency === 'VES' ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
              <span className={`text-xs font-semibold ${currency === 'VES' ? 'text-slate-900' : 'text-slate-500'}`}>
                Bolívares (VES - Tasa BCV: {bcvRate.toFixed(2)} Bs)
              </span>
            </div>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
            
            {/* Plan 1: Starter */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Plan Starter</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Ideal para avance constante semanal</p>
                  </div>
                  <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg">
                    2 clases / semana
                  </span>
                </div>

                <div className="pt-2">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-slate-900 tracking-tight font-mono">
                      {formatPrice(15)}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">/ mes</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    {getAlternativePrice(15)}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-3 text-sm text-slate-700">
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-sky-600 shrink-0" />
                    <span><strong>8 clases en vivo</strong> al mes (2 por semana)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>Salas reducidas de <strong>máximo 6 alumnos</strong></span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>Acceso a 1 materia a elegir (Inglés o Matemáticas)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>Reporte inteligente post-clase en WhatsApp</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>Reprogramación flexible por fallas de conexión</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => {
                    setSelectedPlan('starter');
                    setShowCheckoutModal(true);
                  }}
                  className="w-full py-3 px-4 text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 rounded-xl transition-colors text-center"
                >
                  Elegir Plan Starter
                </button>
              </div>
            </div>

            {/* Plan 2: Pro Ilimitado (Recommended) */}
            <div className="bg-white rounded-3xl p-8 border-2 border-sky-600 shadow-xl shadow-sky-600/10 flex flex-col justify-between relative overflow-hidden">
              {/* Popular Tag */}
              <div className="absolute top-0 right-0 bg-sky-600 text-white text-[11px] font-bold px-4 py-1 rounded-bl-xl uppercase tracking-wider">
                El Más Elegido
              </div>

              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Plan Pro Ilimitado</h3>
                    <p className="text-xs text-sky-700 font-medium mt-0.5">Acceso libre y aceleración total</p>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-slate-900 tracking-tight font-mono">
                      {formatPrice(25)}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">/ mes</span>
                  </div>
                  <p className="text-xs text-sky-700 font-medium mt-1">
                    {getAlternativePrice(25)}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-3 text-sm text-slate-700">
                  <div className="flex items-center gap-2.5 font-medium text-slate-900">
                    <Check className="w-4 h-4 text-sky-600 shrink-0" />
                    <span><strong>Clases en vivo ILIMITADAS</strong> mensuales</span>
                  </div>
                  <div className="flex items-center gap-2.5 font-medium text-slate-900">
                    <Check className="w-4 h-4 text-sky-600 shrink-0" />
                    <span><strong>Ambas materias:</strong> Inglés Y Matemáticas incluidas</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>Salas ultra-reducidas de 4 a 6 personas</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>Talleres intensivos de fin de semana (entrevistas / parciales)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>Pizarras descargables en PDF y resumen IA completo</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>Soporte prioritario directo con el tutor por WhatsApp</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => {
                    setSelectedPlan('pro');
                    setShowCheckoutModal(true);
                  }}
                  className="w-full py-3.5 px-4 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 active:bg-sky-700 rounded-xl shadow-md shadow-sky-600/20 transition-all text-center flex items-center justify-center gap-2"
                >
                  <span>Suscribirme al Plan Pro</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          {/* Payment Methods Section (Venezuela Specific) */}
          <div className="mt-14 max-w-3xl mx-auto bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm">
            <div className="text-center space-y-1 mb-5">
              <h4 className="text-sm font-bold text-slate-900">
                Métodos de pago aceptados en Venezuela
              </h4>
              <p className="text-xs text-slate-500">
                Paga en segundos con confirmación inmediata y activación de tu cuenta al instante
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 flex flex-col items-center justify-center">
                <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center mb-1 text-xs font-bold">
                  PM
                </div>
                <span className="text-xs font-bold text-slate-800">Pago Móvil</span>
                <span className="text-[10px] text-slate-500">A Tasa Oficial BCV</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 flex flex-col items-center justify-center">
                <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center mb-1 text-xs font-bold">
                  ZL
                </div>
                <span className="text-xs font-bold text-slate-800">Zinli</span>
                <span className="text-[10px] text-slate-500">En dólares directo</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 flex flex-col items-center justify-center">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center mb-1 text-xs font-bold">
                  BP
                </div>
                <span className="text-xs font-bold text-slate-800">Binance Pay</span>
                <span className="text-[10px] text-slate-500">USDT sin comisión</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 flex flex-col items-center justify-center">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-1 text-xs font-bold">
                  TB
                </div>
                <span className="text-xs font-bold text-slate-800">Bancos Nacionales</span>
                <span className="text-[10px] text-slate-500">Banesco / BDV / Mercantil</span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
              Historias de Éxito
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
              Venezolanos transformando su carrera y estudios
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-200/80 flex flex-col justify-between">
              <p className="text-sm text-slate-700 leading-relaxed italic">
                &ldquo;Trabajaba en soporte ganando poco. Después de dos meses en las salas de inglés laboral de AulaViva, preparé mi entrevista para una empresa en Utah y quedé contratado en $1,400/mes. La corrección en vivo me quitó el pánico.&rdquo;
              </p>
              <div className="pt-4 mt-4 border-t border-slate-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center text-sm">
                  DR
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Diego Ramos</h4>
                  <p className="text-[11px] text-slate-500">Desarrollador Web Freelance · Caracas</p>
                </div>
              </div>
            </div>

            <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-200/80 flex flex-col justify-between">
              <p className="text-sm text-slate-700 leading-relaxed italic">
                &ldquo;Cálculo 1 en la UCV me tenía al borde del colapso. En AulaViva el profesor Carlos va directo al paso a paso sin rodeos filosóficos. Aprobé el segundo parcial con 17/20. Vale cada centavo.&rdquo;
              </p>
              <div className="pt-4 mt-4 border-t border-slate-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-sm">
                  VC
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Valentina Colmenares</h4>
                  <p className="text-[11px] text-slate-500">Estudiante de Ingeniería UCV · Maracay</p>
                </div>
              </div>
            </div>

            <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-200/80 flex flex-col justify-between">
              <p className="text-sm text-slate-700 leading-relaxed italic">
                &ldquo;Poder pagar por Pago Móvil a tasa oficial del BCV es un alivio total. No tengo que estar buscando quién me venda saldo en Zelle ni pagando comisiones locas. La experiencia en Meet es comodísima.&rdquo;
              </p>
              <div className="pt-4 mt-4 border-t border-slate-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-sm">
                  MP
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Marcos Peña</h4>
                  <p className="text-[11px] text-slate-500">Diseñador Gráfico · Valencia</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Section 7: FAQ Accordion */}
      <section id="faq" className="py-20 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
              Resolvemos tus Dudas
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
              Preguntas Frecuentes
            </h2>
            <p className="text-slate-600 text-base">
              Todo lo que necesitas saber antes de tu primera sesión interactiva.
            </p>
          </div>

          {/* Accordion Component */}
          <div className="space-y-3">
            {[
              {
                q: '¿Cómo accedo a las clases?',
                a: 'Una vez completada tu inscripción, recibirás acceso a nuestro panel de estudiante donde eliges los horarios que mejor te convengan. Cada sesión se realiza a través de un enlace oficial de Google Meet que se sincroniza automáticamente con tu Google Calendar y te llega un recordatorio con link directo a tu WhatsApp 15 minutos antes de comenzar.'
              },
              {
                q: '¿Cómo pago en bolívares y cuál es la tasa de cambio?',
                a: 'Aceptamos Pago Móvil (C2P y transferencia inmediata con cualquier banco venezolano como Banesco, Mercantil, BDV, Provincial, etc.) estrictamente a la tasa oficial del Banco Central de Venezuela (BCV) del día de tu pago. No cobramos recargos ni comisiones ocultas.'
              },
              {
                q: '¿Qué pasa si pierdo una clase o se me va la luz o el internet?',
                a: 'Entendemos perfectamente la realidad de los servicios en Venezuela. Si tienes un corte de luz o tu conexión falla, puedes reprogramar tu sesión en cualquier otra sala de la semana sin penalización alguna. Además, siempre recibirás el resumen inteligente de IA con los ejercicios y teoría explicados en tu WhatsApp.'
              },
              {
                q: '¿Cuántos alumnos hay en cada sala?',
                a: 'Las salas tienen un límite estricto de 4 a 6 estudiantes. Esto asegura que el tutor pueda escucharte, darte la palabra continuamente y corregir tus errores de manera personalizada durante toda la clase.'
              },
              {
                q: '¿Puedo tomar tanto clases de Inglés como de Matemáticas?',
                a: '¡Sí! Con el Plan Pro Ilimitado ($25/mes) tienes acceso irrestricto a los dos programas. Puedes entrar a una clase de inglés laboral el lunes y a una de cálculo o álgebra el martes según tu propia planificación.'
              },
              {
                q: '¿Qué necesito técnicamente para participar?',
                a: 'Solo necesitas un teléfono celular, tablet o computadora con la app de Google Meet o el navegador Google Chrome, y una conexión a internet básica de al menos 2 Mbps (funciona excelente con datos móviles 4G o redes WiFi residenciales).'
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-sky-600 transition-colors"
                >
                  <span className="text-base">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      openFaqIndex === index ? 'rotate-180 text-sky-600' : ''
                    }`}
                  />
                </button>
                {openFaqIndex === index && (
                  <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Quick WhatsApp Contact CTA */}
          <div className="mt-10 text-center bg-sky-50 rounded-2xl p-6 border border-sky-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <h4 className="text-sm font-bold text-slate-900">¿Tienes una pregunta específica sobre tu nivel o pago?</h4>
              <p className="text-xs text-slate-600 mt-0.5">Nuestro equipo de soporte humano te responde en minutos por WhatsApp.</p>
            </div>
            <a
              href="https://wa.me/?text=Hola%2C%20quisiera%20informaci%C3%B3n%20sobre%20las%20clases%20en%20vivo%20de%20AulaViva"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-semibold shrink-0 flex items-center gap-2 shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chatear por WhatsApp</span>
            </a>
          </div>

        </div>
      </section>

      {/* CTA Final Pre-Footer */}
      <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-400">
            Comienza esta misma semana
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-balance">
            Desbloquea tu potencial en inglés y matemáticas hoy
          </h2>
          <p className="text-slate-300 text-base max-w-xl mx-auto">
            Únete a la nueva generación de estudiantes venezolanos que dominan habilidades de alta demanda con tutores reales.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => {
                setSelectedPlan('pro');
                setShowCheckoutModal(true);
              }}
              className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-white bg-sky-600 hover:bg-sky-500 active:bg-sky-700 rounded-2xl shadow-lg shadow-sky-600/30 transition-all flex items-center justify-center gap-2"
            >
              <span>Empezar con Plan Pro</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setShowDiagnosticModal(true)}
              className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-2xl transition-all"
            >
              Hacer prueba diagnóstica
            </button>
          </div>
        </div>
      </section>

      {/* Section 8: Modern Clean Footer */}
      <footer className="bg-white border-t border-slate-200/80 py-12 text-slate-600 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            
            {/* Col 1: Wordmark */}
            <div className="col-span-2 md:col-span-1 space-y-3">
              <a href="#" className="flex items-center gap-2 text-slate-900 font-bold text-lg">
                <div className="w-7 h-7 rounded-lg bg-sky-600 flex items-center justify-center text-white text-xs font-extrabold">
                  AV
                </div>
                <span>AulaViva</span>
              </a>
              <p className="text-slate-500 text-xs leading-relaxed">
                Plataforma EdTech de clases en vivo vía Google Meet para Venezuela. Grupos reducidos y retroalimentación inteligente.
              </p>
              <div className="text-[11px] text-slate-400">
                Pagos en Bs. a Tasa Oficial BCV
              </div>
            </div>

            {/* Col 2: Materias */}
            <div className="space-y-2.5">
              <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">Materias</h4>
              <ul className="space-y-2">
                <li><a href="#materias" className="hover:text-slate-900 transition-colors">Inglés Laboral</a></li>
                <li><a href="#materias" className="hover:text-slate-900 transition-colors">Inglés Conversacional</a></li>
                <li><a href="#materias" className="hover:text-slate-900 transition-colors">Álgebra y Funciones</a></li>
                <li><a href="#materias" className="hover:text-slate-900 transition-colors">Cálculo Diferencial e Integral</a></li>
              </ul>
            </div>

            {/* Col 3: Enlaces */}
            <div className="space-y-2.5">
              <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">Plataforma</h4>
              <ul className="space-y-2">
                <li><a href="#como-funciona" className="hover:text-slate-900 transition-colors">¿Cómo funciona?</a></li>
                <li><a href="#precios" className="hover:text-slate-900 transition-colors">Precios y Membresías</a></li>
                <li><a href="#faq" className="hover:text-slate-900 transition-colors">Preguntas Frecuentes</a></li>
                <li><button onClick={() => setShowDiagnosticModal(true)} className="hover:text-slate-900 transition-colors text-left">Test Diagnóstico</button></li>
              </ul>
            </div>

            {/* Col 4: Soporte */}
            <div className="space-y-2.5">
              <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">Soporte y Contacto</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://wa.me/?text=Hola%20AulaViva"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-emerald-600 font-semibold hover:text-emerald-700"
                  >
                    <span>Atención por WhatsApp</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li><span>Lunes a Sábado: 8:00 AM - 9:00 PM</span></li>
                <li><span>Caracas, Venezuela</span></li>
              </ul>
            </div>

          </div>

          <div className="pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
            <div>
              © {new Date().getFullYear()} AulaViva EdTech. Todos los derechos reservados.
            </div>
            <div className="flex items-center gap-4">
              <span className="hover:text-slate-600 cursor-pointer">Términos del Servicio</span>
              <span aria-hidden="true">·</span>
              <span className="hover:text-slate-600 cursor-pointer">Política de Privacidad</span>
              <span aria-hidden="true">·</span>
              <span>Hecho con dedicación para Venezuela 🇻🇪</span>
            </div>
          </div>
        </div>
      </footer>

      {/* MODAL 1: Diagnostic Test Modal (Interactive requirement) */}
      {showDiagnosticModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative">
            <button
              onClick={() => {
                setShowDiagnosticModal(false);
                setDiagnosticStep(1);
              }}
              className="absolute top-5 right-5 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {diagnosticStep === 1 && (
              <div className="space-y-5">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">Paso 1 de 2</span>
                  <h3 className="text-xl font-bold text-slate-900">Elige tu materia para el diagnóstico</h3>
                  <p className="text-xs text-slate-500">Evaluación rápida de 2 minutos para ubicarte en el grupo ideal.</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setDiagnosticSubject('english')}
                    className={`p-4 rounded-2xl border-2 text-left transition-all ${
                      diagnosticSubject === 'english'
                        ? 'border-sky-600 bg-sky-50/50'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <Languages className="w-6 h-6 text-sky-600 mb-2" />
                    <div className="font-bold text-slate-900 text-sm">Inglés</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Conversación & Laboral</div>
                  </button>

                  <button
                    onClick={() => setDiagnosticSubject('math')}
                    className={`p-4 rounded-2xl border-2 text-left transition-all ${
                      diagnosticSubject === 'math'
                        ? 'border-sky-600 bg-sky-50/50'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <Calculator className="w-6 h-6 text-sky-600 mb-2" />
                    <div className="font-bold text-slate-900 text-sm">Matemáticas</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Álgebra & Cálculo</div>
                  </button>
                </div>

                <button
                  onClick={() => setDiagnosticStep(2)}
                  className="w-full py-3 bg-sky-600 hover:bg-sky-500 text-white rounded-xl font-semibold text-sm transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Continuar a las preguntas</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {diagnosticStep === 2 && (
              <div className="space-y-5">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">Paso 2 de 2</span>
                  <h3 className="text-xl font-bold text-slate-900">
                    {diagnosticSubject === 'english' ? 'Diagnóstico de Inglés' : 'Diagnóstico de Matemáticas'}
                  </h3>
                  <p className="text-xs text-slate-500">Responde según lo que sepas, sin ayuda externa.</p>
                </div>

                {diagnosticSubject === 'english' ? (
                  <div className="space-y-4 text-xs">
                    <div className="space-y-2">
                      <p className="font-semibold text-slate-800">1. Completa la oración: &ldquo;If I ______ more time, I would join the meeting.&rdquo;</p>
                      <div className="grid grid-cols-2 gap-2">
                        {['have', 'had', 'would have', 'will have'].map((opt) => (
                          <button
                            key={opt}
                            onClick={() => setDiagnosticAnswer1(opt)}
                            className={`p-2.5 rounded-xl border text-left font-medium transition-all ${
                              diagnosticAnswer1 === opt ? 'border-sky-600 bg-sky-50 text-sky-900 font-bold' : 'border-slate-200'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="font-semibold text-slate-800">2. ¿Cuál es tu mayor objetivo?</p>
                      <div className="space-y-1.5">
                        {['Pasar entrevistas de trabajo en dólares', 'Hablar con clientes sin trabarme', 'Empezar desde cero con confianza'].map((opt) => (
                          <button
                            key={opt}
                            onClick={() => setDiagnosticAnswer2(opt)}
                            className={`w-full p-2.5 rounded-xl border text-left font-medium transition-all ${
                              diagnosticAnswer2 === opt ? 'border-sky-600 bg-sky-50 text-sky-900 font-bold' : 'border-slate-200'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4 text-xs">
                    <div className="space-y-2">
                      <p className="font-semibold text-slate-800">1. Al despejar x en $2(x - 3) = 10$, el resultado es:</p>
                      <div className="grid grid-cols-2 gap-2">
                        {['x = 8', 'x = 5', 'x = 7', 'x = 13'].map((opt) => (
                          <button
                            key={opt}
                            onClick={() => setDiagnosticAnswer1(opt)}
                            className={`p-2.5 rounded-xl border text-left font-medium transition-all ${
                              diagnosticAnswer1 === opt ? 'border-sky-600 bg-sky-50 text-sky-900 font-bold' : 'border-slate-200'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="font-semibold text-slate-800">2. ¿Qué nivel necesitas reforzar?</p>
                      <div className="space-y-1.5">
                        {['Álgebra básica y bachillerato', 'Cálculo universitario (Límites, Derivadas, Integrales)', 'Preparación para examen específico'].map((opt) => (
                          <button
                            key={opt}
                            onClick={() => setDiagnosticAnswer2(opt)}
                            className={`w-full p-2.5 rounded-xl border text-left font-medium transition-all ${
                              diagnosticAnswer2 === opt ? 'border-sky-600 bg-sky-50 text-sky-900 font-bold' : 'border-slate-200'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                <button
                  onClick={() => setDiagnosticStep(3)}
                  disabled={!diagnosticAnswer1 || !diagnosticAnswer2}
                  className="w-full py-3 bg-sky-600 disabled:opacity-50 hover:bg-sky-500 text-white rounded-xl font-semibold text-sm transition-colors"
                >
                  Ver resultado y agendar sala de prueba
                </button>
              </div>
            )}

            {diagnosticStep === 3 && (
              <div className="space-y-5 text-center py-2">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-slate-900">¡Diagnóstico completado!</h3>
                  <p className="text-xs text-slate-500">
                    Tu perfil encaja en el grupo: <span className="font-bold text-sky-700">{diagnosticSubject === 'english' ? 'Inglés B1 - Fluidez Laboral' : 'Álgebra Universitaria Nivel II'}</span>
                  </p>
                </div>

                <div className="bg-sky-50 rounded-2xl p-4 text-xs text-sky-900 border border-sky-100 text-left space-y-1.5">
                  <div className="font-bold">Próximos cupos disponibles en Google Meet:</div>
                  <div>📅 Martes 7:00 PM (Hora de Venezuela) · 4 cupos libres</div>
                  <div>📅 Jueves 8:00 PM (Hora de Venezuela) · 2 cupos libres</div>
                </div>

                <div className="space-y-2">
                  <button
                    onClick={() => {
                      setShowDiagnosticModal(false);
                      setShowCheckoutModal(true);
                    }}
                    className="w-full py-3 bg-sky-600 hover:bg-sky-500 text-white rounded-xl font-semibold text-sm transition-colors"
                  >
                    Reservar mi cupo con Plan Pro ($25/mes)
                  </button>
                  <button
                    onClick={() => setShowDiagnosticModal(false)}
                    className="w-full py-2 text-xs text-slate-500 hover:text-slate-800"
                  >
                    Cerrar y volver a la página
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

      {/* MODAL 2: Checkout & Enrollment Modal (Venezuela-ready) */}
      {showCheckoutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => {
                setShowCheckoutModal(false);
                setCheckoutSuccess(false);
              }}
              className="absolute top-5 right-5 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {!checkoutSuccess ? (
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">Inscripción Oficial</span>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Suscripción a AulaViva
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Pagos locales a Tasa Oficial BCV con activación en menos de 10 minutos.
                  </p>
                </div>

                {/* Plan Chooser in Modal */}
                <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-xl">
                  <button
                    onClick={() => setSelectedPlan('starter')}
                    className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all ${
                      selectedPlan === 'starter' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600'
                    }`}
                  >
                    Plan Starter ($15/m)
                  </button>
                  <button
                    onClick={() => setSelectedPlan('pro')}
                    className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all ${
                      selectedPlan === 'pro' ? 'bg-sky-600 text-white shadow-sm' : 'text-slate-600'
                    }`}
                  >
                    Plan Pro Ilimitado ($25/m)
                  </button>
                </div>

                {/* Amount details */}
                <div className="bg-sky-50 rounded-2xl p-4 border border-sky-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500 block">Total a pagar:</span>
                    <span className="text-2xl font-extrabold text-slate-900 font-mono">
                      {selectedPlan === 'pro' ? '$25 USD' : '$15 USD'}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-500 block">En Bolívares (Tasa BCV {bcvRate.toFixed(2)}):</span>
                    <span className="text-base font-bold text-sky-700 font-mono">
                      {selectedPlan === 'pro'
                        ? `${(25 * bcvRate).toLocaleString('es-VE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} Bs.`
                        : `${(15 * bcvRate).toLocaleString('es-VE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} Bs.`}
                    </span>
                  </div>
                </div>

                {/* Payment Method Selector */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 block">
                    Selecciona tu método de pago preferido:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'pagomovil', label: 'Pago Móvil (Bs.)' },
                      { id: 'zinli', label: 'Zinli ($ USD)' },
                      { id: 'binance', label: 'Binance Pay' },
                    ].map((m) => (
                      <button
                        key={m.id}
                        onClick={() => setCheckoutPaymentMethod(m.id as any)}
                        className={`py-2.5 px-2 rounded-xl border text-xs font-semibold transition-all ${
                          checkoutPaymentMethod === m.id
                            ? 'border-sky-600 bg-sky-50 text-sky-900 shadow-sm'
                            : 'border-slate-200 text-slate-600 hover:border-slate-300'
                        }`}
                      >
                        {m.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Payment Instructions Preview */}
                {checkoutPaymentMethod === 'pagomovil' && (
                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs space-y-1 font-mono text-slate-700">
                    <div className="font-bold text-slate-900 font-sans">Datos de Pago Móvil:</div>
                    <div>Banco: 0102 - Banco de Venezuela</div>
                    <div>Teléfono: 0414-1234567</div>
                    <div>Cédula: V-24.567.890</div>
                  </div>
                )}

                {checkoutPaymentMethod === 'zinli' && (
                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs space-y-1 font-mono text-slate-700">
                    <div className="font-bold text-slate-900 font-sans">Datos Zinli:</div>
                    <div>Correo Zinli: pagos@aulaviva.com</div>
                    <div>Beneficiario: AulaViva EdTech</div>
                  </div>
                )}

                {checkoutPaymentMethod === 'binance' && (
                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs space-y-1 font-mono text-slate-700">
                    <div className="font-bold text-slate-900 font-sans">Datos Binance Pay:</div>
                    <div>Binance Pay ID: 593820194</div>
                    <div>Moneda: USDT</div>
                  </div>
                )}

                {/* User form */}
                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">Nombre completo</label>
                    <input
                      type="text"
                      placeholder="Ej. Carlos Mendoza"
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:outline-none focus:border-sky-500"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">Número de WhatsApp (con código de área)</label>
                    <input
                      type="tel"
                      placeholder="Ej. +58 412 1234567"
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:outline-none focus:border-sky-500"
                    />
                  </div>
                </div>

                <button
                  onClick={() => setCheckoutSuccess(true)}
                  className="w-full py-3.5 bg-sky-600 hover:bg-sky-500 text-white rounded-xl font-semibold text-sm transition-colors shadow-md shadow-sky-600/20"
                >
                  Confirmar inscripción y recibir acceso a Meet
                </button>
              </div>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">¡Bienvenido a AulaViva!</h3>
                <p className="text-sm text-slate-600 max-w-sm mx-auto">
                  Hemos enviado a tu WhatsApp el enlace de acceso a la sala de Google Meet y la sincronización con tu calendario.
                </p>
                <div className="bg-sky-50 p-4 rounded-2xl text-xs text-sky-900 text-left space-y-1 border border-sky-100">
                  <div className="font-bold">Próximos pasos:</div>
                  <div>1. Revisa tu WhatsApp para confirmar tu horario.</div>
                  <div>2. Conéctate 5 minutos antes con auriculares.</div>
                  <div>3. ¡Disfruta tu primera sesión interactiva!</div>
                </div>
                <button
                  onClick={() => {
                    setShowCheckoutModal(false);
                    setCheckoutSuccess(false);
                  }}
                  className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-semibold text-xs transition-colors"
                >
                  Entendido, cerrar ventana
                </button>
              </div>
            )}

          </div>
        </div>
      )}

      {/* MODAL 3: Member Portal Login Demo */}
      {showLoginModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative">
            <button
              onClick={() => setShowLoginModal(false)}
              className="absolute top-5 right-5 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-5">
              <div className="space-y-1">
                <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">Portal Estudiantil</span>
                <h3 className="text-2xl font-bold text-slate-900">Ingresar a AulaViva</h3>
                <p className="text-xs text-slate-500">Accede a tus enlaces de Meet, resúmenes de IA y calendario de salas.</p>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">WhatsApp o Correo electrónico</label>
                  <input
                    type="text"
                    placeholder="Ej. +58 414 1234567 o tu@correo.com"
                    className="w-full px-3 py-2.5 text-xs border border-slate-300 rounded-xl focus:outline-none focus:border-sky-500"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Código de acceso</label>
                  <input
                    type="password"
                    placeholder="Ingresa tu contraseña o código de 6 dígitos"
                    className="w-full px-3 py-2.5 text-xs border border-slate-300 rounded-xl focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              {loginSuccess ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-3 rounded-xl text-xs font-semibold text-center">
                  ¡Acceso verificado! Redirigiendo a tu panel de salas...
                </div>
              ) : (
                <button
                  onClick={() => {
                    setLoginSuccess(true);
                    setTimeout(() => {
                      setShowLoginModal(false);
                      setLoginSuccess(false);
                    }, 1200);
                  }}
                  className="w-full py-3 bg-sky-600 hover:bg-sky-500 text-white rounded-xl font-semibold text-xs transition-colors shadow-md shadow-sky-600/20"
                >
                  Ingresar a mis clases
                </button>
              )}

              <div className="text-center text-xs text-slate-500 pt-1">
                ¿Aún no tienes membresía?{' '}
                <button
                  onClick={() => {
                    setShowLoginModal(false);
                    setSelectedPlan('pro');
                    setShowCheckoutModal(true);
                  }}
                  className="font-semibold text-sky-600 hover:underline"
                >
                  Inscríbete aquí
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
