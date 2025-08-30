# Not Defteri - Modern Not Alma Uygulaması

Modern ve kullanışlı bir not defteri web uygulaması. Next.js, Clerk, Supabase ve Prisma kullanılarak geliştirilmiştir.

## Özellikler

- 🔐 **Kullanıcı Yönetimi**: Clerk ile güvenli giriş/çıkış
- 📝 **Not Alma**: Hızlı ve kolay not alma
- 📁 **Klasör Organizasyonu**: Notları klasörlere ayırma
- 🔍 **Arama**: Notlarda hızlı arama
- 📌 **Sabitleme**: Önemli notları sabitleme
- 📦 **Arşivleme**: Notları arşivleme
- 🎨 **Renkli Notlar**: Notlara renk atama
- 📱 **Responsive Tasarım**: Mobil uyumlu arayüz

## Teknolojiler

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Veritabanı**: PostgreSQL (Supabase)
- **ORM**: Prisma
- **Authentication**: Clerk
- **UI Components**: shadcn/ui, Radix UI, Lucide React
- **Styling**: Tailwind CSS, CSS Animations
- **State Management**: React Hooks
- **Form Handling**: React Hook Form (implicit)
- **Icons**: Lucide React
- **Theme Management**: next-themes
- **Rendering**: Server-Side Rendering (SSR), Client-Side Rendering (CSR)
- **API**: RESTful API Routes
- **Middleware**: Clerk Middleware

## Kurulum

1. **Projeyi klonlayın**
```bash
git clone <repository-url>
cd not-defteri2
```

2. **Bağımlılıkları yükleyin**
```bash
npm install
```

3. **Environment değişkenlerini ayarlayın**
`.env` dosyası oluşturun ve aşağıdaki değişkenleri ekleyin:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/notdefteri"

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

4. **Veritabanını ayarlayın**
```bash
npx prisma generate
npx prisma db push
```

5. **Uygulamayı çalıştırın**
```bash
npm run dev
```

## Kullanım

1. **Kayıt Olun**: Ana sayfada "Kayıt Ol" butonuna tıklayın
2. **Giriş Yapın**: E-posta ve şifrenizle giriş yapın
3. **Not Alın**: "Yeni Not" butonuna tıklayarak not oluşturun
4. **Düzenleyin**: Notları düzenleyin, sabitleyin, arşivleyin
5. **Organize Edin**: Notları klasörlere ayırın

## API Endpoints

### Notlar
- `GET /api/notes` - Tüm notları getir
- `POST /api/notes` - Yeni not oluştur
- `GET /api/notes/[id]` - Tekil not getir
- `PUT /api/notes/[id]` - Not güncelle
- `DELETE /api/notes/[id]` - Not sil

### Klasörler
- `GET /api/folders` - Tüm klasörleri getir
- `POST /api/folders` - Yeni klasör oluştur

### Kullanıcı
- `GET /api/user` - Kullanıcı bilgilerini getir

## Veritabanı Şeması

### User
- `id`: Benzersiz kullanıcı ID'si
- `clerkId`: Clerk kullanıcı ID'si
- `email`: E-posta adresi
- `name`: Kullanıcı adı
- `createdAt`: Oluşturulma tarihi
- `updatedAt`: Güncellenme tarihi

### Folder
- `id`: Benzersiz klasör ID'si
- `name`: Klasör adı
- `description`: Klasör açıklaması
- `color`: Klasör rengi
- `userId`: Kullanıcı ID'si
- `createdAt`: Oluşturulma tarihi
- `updatedAt`: Güncellenme tarihi

### Note
- `id`: Benzersiz not ID'si
- `title`: Not başlığı
- `content`: Not içeriği
- `isPinned`: Sabitlenmiş mi?
- `isArchived`: Arşivlenmiş mi?
- `color`: Not rengi
- `userId`: Kullanıcı ID'si
- `folderId`: Klasör ID'si (opsiyonel)
- `createdAt`: Oluşturulma tarihi
- `updatedAt`: Güncellenme tarihi

## Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## İletişim

Sorularınız için issue açabilir veya pull request gönderebilirsiniz.
