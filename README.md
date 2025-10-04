# ALXNE E-Commerce Platform

A modern, full-featured e-commerce platform built with React, TypeScript, Supabase, and Stripe.

## Features

### Customer Features
- Browse products with real-time pricing and sales
- Shopping cart with persistent storage
- Secure authentication (email/password)
- Stripe checkout integration
- Order history and tracking
- License key delivery system
- Product reviews and ratings
- Wishlist functionality
- User notifications
- Profile management

### Admin Features
- Complete product management (CRUD)
- Sales campaigns with automatic discounts
- Order and customer management
- Real-time analytics dashboard
- Invoice generation
- Notification system
- Activity logging
- Role-based access control

## Tech Stack

### Frontend
- **React 18** with TypeScript
- **React Router v7** for navigation
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Vite** for blazing fast builds

### Backend
- **Supabase** (PostgreSQL database)
  - Row Level Security (RLS)
  - Real-time capabilities
  - Authentication
  - Edge Functions
- **Stripe** for payment processing
  - Checkout sessions
  - Webhook handling
  - Product/price sync

## Quick Start

### Prerequisites
- Node.js 18+
- Supabase account (free tier: https://supabase.com)
- Stripe account (optional, for payments: https://stripe.com)

### Installation

1. **Clone and install:**
   ```bash
   git clone <your-repo>
   cd alxne-web
   npm install
   ```

2. **Setup Supabase:**
   - Create project at https://supabase.com
   - Go to SQL Editor
   - Run migrations from `supabase/migrations/` in order
   - Get API credentials from Settings > API

3. **Configure environment:**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=your_project_url
   VITE_SUPABASE_ANON_KEY=your_anon_key
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```
   Visit http://localhost:5173

5. **Create admin user:**
   - Sign up through the website
   - Get user UUID from Supabase dashboard
   - Run in SQL Editor:
     ```sql
     INSERT INTO admin_users (id, email, role)
     VALUES ('your-uuid', 'admin@example.com', 'super_admin');
     ```
   - Access admin at `/admin/login`

## Documentation

- **[SETUP_GUIDE.md](./SETUP_GUIDE.md)** - Detailed setup instructions
- **[PTERODACTYL_DEPLOYMENT.md](./PTERODACTYL_DEPLOYMENT.md)** - Deploy to Pterodactyl Panel
- **[MIGRATION_SUMMARY.md](./MIGRATION_SUMMARY.md)** - Architecture overview

## Stripe Integration (Optional)

1. Get API keys from Stripe Dashboard
2. Add to `.env`:
   ```env
   STRIPE_SECRET_KEY=sk_test_...
   STRIPE_PUBLISHABLE_KEY=pk_test_...
   ```
3. Sync products to Stripe:
   ```bash
   curl -X POST https://your-project.supabase.co/functions/v1/stripe-handler/sync-products
   ```
4. Setup webhook in Stripe Dashboard:
   - URL: `https://your-project.supabase.co/functions/v1/stripe-handler/webhook`
   - Event: `checkout.session.completed`

## Project Structure

```
├── src/
│   ├── components/       # React components
│   │   └── admin/       # Admin-specific components
│   ├── contexts/        # Auth and app contexts
│   ├── pages/          # Page components
│   │   └── admin/      # Admin pages
│   ├── services/       # API services (Supabase)
│   └── utils/          # Helper functions
├── supabase/
│   └── migrations/     # Database migrations
└── public/             # Static assets
```

## Available Scripts

```bash
npm run dev         # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Lint code
npm run typecheck  # Type check
```

## Database Schema

### Core Tables
- `products` - Product catalog
- `orders` - Customer orders
- `licenses` - License keys
- `reviews` - Product reviews
- `sales_campaigns` - Discount campaigns
- `user_profiles` - User information
- `wishlists` - User wishlists
- `notifications` - User notifications
- `admin_users` - Admin access control

All tables have Row Level Security (RLS) enabled with appropriate policies.

## Deployment

### Self-Hosting on Pterodactyl Panel

See **[PTERODACTYL_DEPLOYMENT.md](./PTERODACTYL_DEPLOYMENT.md)** for complete deployment instructions.

Quick summary:
1. Create Node.js server on Pterodactyl
2. Upload files and run `npm install`
3. Configure `.env` with production values
4. Run `npm run build`
5. Start with `npm run preview`

### Other Hosting Options

This application can be deployed to:
- Vercel
- Netlify
- Railway
- Render
- Any Node.js hosting

## Security

- ✅ Row Level Security on all database tables
- ✅ Admin-only access controls
- ✅ Secure authentication with Supabase Auth
- ✅ Environment variable protection
- ✅ HTTPS enforcement in production
- ✅ SQL injection protection
- ✅ XSS protection

## Production Checklist

Before going live:
- [ ] Run all database migrations
- [ ] Configure environment variables
- [ ] Create admin user
- [ ] Add products
- [ ] Test checkout flow
- [ ] Setup Stripe webhooks
- [ ] Enable SSL certificate
- [ ] Test all admin features
- [ ] Review security settings
- [ ] Configure domain

## Support

For issues related to:
- **Supabase**: https://supabase.com/docs
- **Stripe**: https://stripe.com/docs
- **React**: https://react.dev
- **Deployment**: See PTERODACTYL_DEPLOYMENT.md

## License

Private - All Rights Reserved

---

**Ready to Deploy?** Follow the [PTERODACTYL_DEPLOYMENT.md](./PTERODACTYL_DEPLOYMENT.md) guide!
