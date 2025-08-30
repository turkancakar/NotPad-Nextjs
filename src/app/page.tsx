"use client";

import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";
import {
  Plus,
  Search,
  Star,
  Sparkles,
  Zap,
  Shield,
  Palette,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { useTheme } from "@/lib/theme-context";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { HomepageBreadcrumb } from "@/components/homepage-breadcrumb";

export default function Home() {
  const { currentTheme } = useTheme();
  
  return (
    <div className={`min-h-screen bg-gradient-to-br ${currentTheme.colors.background} relative overflow-hidden`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Header */}
      <header className={`fixed top-0 w-full z-50 ${currentTheme.colors.surface.replace('backdrop-blur-xl', 'backdrop-blur-2xl').replace('bg-white/80', 'bg-white/10').replace('bg-gray-800/80', 'bg-gray-800/10')} border-b ${currentTheme.colors.border} shadow-lg`}>
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
            <h1 className={`text-3xl font-bold bg-gradient-to-r ${currentTheme.colors.gradient.from} ${currentTheme.colors.gradient.via || ''} ${currentTheme.colors.gradient.to} bg-clip-text text-transparent`}>
              NotDefteri
            </h1>
          </div>

          <div className="flex items-center space-x-4">
            <ThemeSwitcher />
            
            <SignedIn>
              <Button asChild className={`relative overflow-hidden bg-gradient-to-r ${currentTheme.colors.button.primary} text-white shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 transform hover:scale-105`}>
                <a href="/dashboard" className="relative z-10">Dashboard&apos;a Git</a>
              </Button>
            </SignedIn>
            <SignedOut>
              <div className="flex items-center space-x-3">
                <SignInButton mode="modal">
                  <Button variant="outline" className={`${currentTheme.colors.button.secondary}`}>
                    Giriş Yap
                  </Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button className={`relative overflow-hidden bg-gradient-to-r ${currentTheme.colors.button.primary} text-white shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 transform hover:scale-105`}>
                    <span className="relative z-10">Ücretsiz Başla</span>
                  </Button>
                </SignUpButton>
              </div>
            </SignedOut>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16 relative z-10">
        {/* Breadcrumb */}
        <div className="container mx-auto px-6 mb-8">
          <HomepageBreadcrumb />
        </div>
        
        <div className="container mx-auto px-6">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <div className={`inline-flex items-center space-x-2 bg-gradient-to-r ${currentTheme.colors.gradient.from.replace('600', '100')} ${currentTheme.colors.gradient.via ? currentTheme.colors.gradient.via.replace('600', '100') : ''} ${currentTheme.colors.gradient.to.replace('600', '100')} border ${currentTheme.colors.border} rounded-full px-6 py-3 mb-8 shadow-lg backdrop-blur-sm`}>
              <Sparkles className={`h-5 w-5 ${currentTheme.colors.primary} animate-pulse`} />
              <span className={`text-sm font-semibold ${currentTheme.colors.textSecondary}`}>
                Yeni Nesil Not Alma Deneyimi
              </span>
            </div>

            {/* Hero Title */}
            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
              <span className={`bg-gradient-to-r ${currentTheme.colors.gradient.from} ${currentTheme.colors.gradient.via || ''} ${currentTheme.colors.gradient.to} bg-clip-text text-transparent animate-gradient`}>
                Düşüncelerinizi
              </span>
              <br />
              <span className={`bg-gradient-to-r ${currentTheme.colors.gradient.to} ${currentTheme.colors.gradient.via || ''} ${currentTheme.colors.gradient.from} bg-clip-text text-transparent animate-gradient`}>
                Hayata Geçirin
              </span>
            </h1>

            {/* Description */}
            <p className={`text-xl md:text-2xl ${currentTheme.colors.textSecondary} mb-12 leading-relaxed max-w-3xl mx-auto font-medium`}>
              Modern tasarım ve güçlü özelliklerle donatılmış not defteri uygulaması. 
              Fikirlerinizi organize edin, projelerinizi planlayın ve her yerden erişin.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
              <SignedOut>
                <SignUpButton mode="modal">
                  <Button className={`inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-11 rounded-md relative overflow-hidden bg-gradient-to-r ${currentTheme.colors.button.primary} text-white text-lg px-8 py-4 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 transform hover:scale-105 group`}>
                    <Plus className="mr-3 h-6 w-6 group-hover:rotate-90 transition-transform duration-300" />
                    Ücretsiz Başla
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <Button asChild className={`inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-11 rounded-md relative overflow-hidden bg-gradient-to-r ${currentTheme.colors.button.primary} text-white text-lg px-8 py-4 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 transform hover:scale-105 group`}>
                  <a href="/dashboard">
                    <Plus className="mr-3 h-6 w-6 group-hover:rotate-90 transition-transform duration-300" />
                    Dashboard&apos;a Git
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </Button>
              </SignedIn>
              <Button variant="outline" size="lg" className={`text-lg px-8 py-4 border-2 ${currentTheme.colors.button.secondary} transition-all duration-300 backdrop-blur-sm ${currentTheme.colors.surface} ${currentTheme.colors.text}`}>
                <Search className="mr-3 h-5 w-5" />
                Demo İncele
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="text-center group">
              <div className="relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${currentTheme.colors.gradient.from.replace('600', '400')} ${currentTheme.colors.gradient.to.replace('600', '400')} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                <div className={`relative ${currentTheme.colors.surface} rounded-2xl p-8 shadow-xl border ${currentTheme.colors.border} group-hover:shadow-2xl group-hover:scale-105 transition-all duration-500`}>
                  <div className={`text-5xl font-bold bg-gradient-to-r ${currentTheme.colors.gradient.from} ${currentTheme.colors.gradient.to} bg-clip-text text-transparent mb-3`}>10K+</div>
                  <div className={`${currentTheme.colors.textSecondary} font-medium`}>Aktif Kullanıcı</div>
                </div>
              </div>
            </div>
            <div className="text-center group">
              <div className="relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${currentTheme.colors.gradient.from.replace('600', '400')} ${currentTheme.colors.gradient.to.replace('600', '400')} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                <div className={`relative ${currentTheme.colors.surface} rounded-2xl p-8 shadow-xl border ${currentTheme.colors.border} group-hover:shadow-2xl group-hover:scale-105 transition-all duration-500`}>
                  <div className={`text-5xl font-bold bg-gradient-to-r ${currentTheme.colors.gradient.from} ${currentTheme.colors.gradient.to} bg-clip-text text-transparent mb-3`}>1M+</div>
                  <div className={`${currentTheme.colors.textSecondary} font-medium`}>Oluşturulan Not</div>
                </div>
              </div>
            </div>
            <div className="text-center group">
              <div className="relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${currentTheme.colors.gradient.from.replace('600', '400')} ${currentTheme.colors.gradient.to.replace('600', '400')} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                <div className={`relative ${currentTheme.colors.surface} rounded-2xl p-8 shadow-xl border ${currentTheme.colors.border} group-hover:shadow-2xl group-hover:scale-105 transition-all duration-500`}>
                  <div className={`text-5xl font-bold bg-gradient-to-r ${currentTheme.colors.gradient.from} ${currentTheme.colors.gradient.to} bg-clip-text text-transparent mb-3`}>99.9%</div>
                  <div className={`${currentTheme.colors.textSecondary} font-medium`}>Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-5xl font-bold bg-gradient-to-r ${currentTheme.colors.gradient.from} ${currentTheme.colors.gradient.via || ''} ${currentTheme.colors.gradient.to} bg-clip-text text-transparent mb-6`}>
              Neden NotDefteri?
            </h2>
            <p className={`text-xl ${currentTheme.colors.textSecondary} max-w-2xl mx-auto font-medium`}>
              Modern teknolojilerle geliştirilmiş, kullanıcı dostu arayüz ve güçlü özellikler
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="group relative">
              <div className={`absolute inset-0 bg-gradient-to-r ${currentTheme.colors.gradient.from.replace('600', '400')} ${currentTheme.colors.gradient.to.replace('600', '400')} rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
              <div className={`relative ${currentTheme.colors.surface} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border ${currentTheme.colors.border} group-hover:scale-105`}>
                <div className={`w-16 h-16 bg-gradient-to-br ${currentTheme.colors.gradient.from.replace('600', '500')} ${currentTheme.colors.gradient.via ? currentTheme.colors.gradient.via.replace('600', '500') : ''} ${currentTheme.colors.gradient.to.replace('600', '500')} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className={`text-2xl font-bold ${currentTheme.colors.text} mb-4`}>Hızlı ve Kolay</h3>
                <p className={`${currentTheme.colors.textSecondary} leading-relaxed`}>
                  Saniyeler içinde not alın, düzenleyin ve organize edin. Markdown desteği ile zengin içerik oluşturun.
                </p>
              </div>
            </div>
            
            <div className="group relative">
              <div className={`absolute inset-0 bg-gradient-to-r ${currentTheme.colors.gradient.from.replace('600', '400')} ${currentTheme.colors.gradient.to.replace('600', '400')} rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
              <div className={`relative ${currentTheme.colors.surface} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border ${currentTheme.colors.border} group-hover:scale-105`}>
                <div className={`w-16 h-16 bg-gradient-to-br ${currentTheme.colors.gradient.from.replace('600', '500')} ${currentTheme.colors.gradient.via ? currentTheme.colors.gradient.via.replace('600', '500') : ''} ${currentTheme.colors.gradient.to.replace('600', '500')} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Palette className="h-8 w-8 text-white" />
                </div>
                <h3 className={`text-2xl font-bold ${currentTheme.colors.text} mb-4`}>Kişiselleştirilebilir</h3>
                <p className={`${currentTheme.colors.textSecondary} leading-relaxed`}>
                  Notlarınızı renklerle organize edin, klasörlere ayırın ve size özel bir deneyim yaratın.
                </p>
              </div>
            </div>
            
            <div className="group relative">
              <div className={`absolute inset-0 bg-gradient-to-r ${currentTheme.colors.gradient.from.replace('600', '400')} ${currentTheme.colors.gradient.to.replace('600', '400')} rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
              <div className={`relative ${currentTheme.colors.surface} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border ${currentTheme.colors.border} group-hover:scale-105`}>
                <div className={`w-16 h-16 bg-gradient-to-br ${currentTheme.colors.gradient.from.replace('600', '500')} ${currentTheme.colors.gradient.via ? currentTheme.colors.gradient.via.replace('600', '500') : ''} ${currentTheme.colors.gradient.to.replace('600', '500')} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className={`text-2xl font-bold ${currentTheme.colors.text} mb-4`}>Güvenli ve Güvenilir</h3>
                <p className={`${currentTheme.colors.textSecondary} leading-relaxed`}>
                  Verileriniz güvenle saklanır, her cihazdan erişebilir ve otomatik yedekleme ile korunur.
                </p>
              </div>
            </div>
            
            <div className="group relative">
              <div className={`absolute inset-0 bg-gradient-to-r ${currentTheme.colors.gradient.from.replace('600', '400')} ${currentTheme.colors.gradient.to.replace('600', '400')} rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
              <div className={`relative ${currentTheme.colors.surface} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border ${currentTheme.colors.border} group-hover:scale-105`}>
                <div className={`w-16 h-16 bg-gradient-to-br ${currentTheme.colors.gradient.from.replace('600', '500')} ${currentTheme.colors.gradient.via ? currentTheme.colors.gradient.via.replace('600', '500') : ''} ${currentTheme.colors.gradient.to.replace('600', '500')} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Search className="h-8 w-8 text-white" />
                </div>
                <h3 className={`text-2xl font-bold ${currentTheme.colors.text} mb-4`}>Akıllı Arama</h3>
                <p className={`${currentTheme.colors.textSecondary} leading-relaxed`}>
                  Gelişmiş arama algoritması ile notlarınızı anında bulun, filtreleyin ve organize edin.
                </p>
              </div>
            </div>
            
            <div className="group relative">
              <div className={`absolute inset-0 bg-gradient-to-r ${currentTheme.colors.gradient.from.replace('600', '400')} ${currentTheme.colors.gradient.to.replace('600', '400')} rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
              <div className={`relative ${currentTheme.colors.surface} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border ${currentTheme.colors.border} group-hover:scale-105`}>
                <div className={`w-16 h-16 bg-gradient-to-br ${currentTheme.colors.gradient.from.replace('600', '500')} ${currentTheme.colors.gradient.via ? currentTheme.colors.gradient.via.replace('600', '500') : ''} ${currentTheme.colors.gradient.to.replace('600', '500')} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className={`text-2xl font-bold ${currentTheme.colors.text} mb-4`}>Önemli Notlar</h3>
                <p className={`${currentTheme.colors.textSecondary} leading-relaxed`}>
                  Önemli notlarınızı sabitleyin, arşivleyin ve öncelik sırasına göre organize edin.
                </p>
              </div>
            </div>
            
            <div className="group relative">
              <div className={`absolute inset-0 bg-gradient-to-r ${currentTheme.colors.gradient.from.replace('600', '400')} ${currentTheme.colors.gradient.to.replace('600', '400')} rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
              <div className={`relative ${currentTheme.colors.surface} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border ${currentTheme.colors.border} group-hover:scale-105`}>
                <div className={`w-16 h-16 bg-gradient-to-br ${currentTheme.colors.gradient.from.replace('600', '500')} ${currentTheme.colors.gradient.via ? currentTheme.colors.gradient.via.replace('600', '500') : ''} ${currentTheme.colors.gradient.to.replace('600', '500')} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className={`text-2xl font-bold ${currentTheme.colors.text} mb-4`}>Senkronizasyon</h3>
                <p className={`${currentTheme.colors.textSecondary} leading-relaxed`}>
                  Tüm cihazlarınızda senkronize çalışın, değişiklikleriniz anında güncellenir.
                </p>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="relative text-center rounded-3xl p-12 text-white overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-r ${currentTheme.colors.gradient.from} ${currentTheme.colors.gradient.via || ''} ${currentTheme.colors.gradient.to}`}></div>
            <div className={`absolute inset-0 bg-gradient-to-r ${currentTheme.colors.gradient.from}/50 ${currentTheme.colors.gradient.via ? currentTheme.colors.gradient.via + '/50' : ''} ${currentTheme.colors.gradient.to}/50 backdrop-blur-sm`}></div>
            <div className="relative z-10">
              <h2 className="text-5xl font-bold mb-6 text-gray-800">Hemen Başlayın</h2>
              <p className="text-xl mb-8 opacity-90 font-medium text-gray-800">
                Ücretsiz hesap oluşturun ve not alma deneyiminizi değiştirin
              </p>
              <SignedOut>
                <SignUpButton mode="modal">
                  <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-4 shadow-2xl hover:shadow-white/25 transition-all duration-500 transform hover:scale-105">
                    <Plus className="mr-3 h-6 w-6" />
                    Ücretsiz Hesap Oluştur
                  </Button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-4 shadow-2xl hover:shadow-white/25 transition-all duration-500 transform hover:scale-105">
                  <a href="/dashboard">
                    <Plus className="mr-3 h-6 w-6" />
                    Dashboard&apos;a Git
                  </a>
                </Button>
              </SignedIn>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white py-12 relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-r ${currentTheme.colors.gradient.from.replace('600', '500')}/10 ${currentTheme.colors.gradient.to.replace('600', '500')}/10`}></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <h3 className={`text-2xl font-bold bg-gradient-to-r ${currentTheme.colors.gradient.from.replace('600', '400')} ${currentTheme.colors.gradient.to.replace('600', '400')} bg-clip-text text-transparent`}>
                NotDefteri
              </h3>
            </div>
            <p className="text-gray-300 mb-6 font-medium">
              Modern not alma deneyimi için tasarlandı
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
              <span>© 2024 NotDefteri. Tüm hakları saklıdır.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
