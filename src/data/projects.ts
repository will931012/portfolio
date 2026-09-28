import type { Project, ProjectCategory } from '../types'

/**
 * Project content lives here so it can be edited without touching components.
 *
 * To add a screenshot: put the image in /public/projects/ and set
 *   image: { src: '/projects/your-file.webp', alt: 'Describe what the screenshot shows' }
 *
 * To add links: replace null with the full URL, e.g. github: 'https://github.com/…'
 *
 * Order matters: projects render in this order. Keep the number of non-featured,
 * non-compact projects even so the two-column grid has no gaps.
 */
export const projects: Project[] = [
  {
    slug: 'mlb-prediction',
    title: 'MLB Prediction & Live Analysis Platform',
    tagline:
      'Baseball analytics that turn team form, pitching matchups, and game context into calibrated win probabilities.',
    goal: 'Estimate the outcome of an MLB game from the factors that actually move it, and show the reasoning behind each number instead of just a pick.',
    problem:
      'The information that matters before a game is spread across standings, pitcher logs, and team stats. This platform brings those signals into one place and turns them into a probability you can weigh against your own read of the matchup.',
    features: [
      'XGBoost model that compares recent team form, starting pitchers, and game-level factors',
      'Calibrated win probabilities, so a 60% forecast is meant to hold up as 60% over many games',
      'Side-by-side matchup view for both teams and their starters',
      'React interface designed for scanning a full slate of games quickly',
    ],
    planned: [
      'Live-game probability updates as the score and game state change',
      'Video-based contact-quality analysis of batted balls',
    ],
    stack: ['React', 'Python', 'XGBoost', 'Data visualization'],
    categories: ['ai', 'web'],
    platform: 'web',
    featured: true,
    links: { github: null, demo: null },
    image: null,
  },
  {
    slug: 'compassion-and-love-pos',
    title: 'Compassion and Love POS System',
    tagline:
      'A multi-store point-of-sale web app built around the day-to-day work of running a shop.',
    goal: 'Replace slow, manual checkout, labeling, and end-of-day counts with a point-of-sale system shaped around how the stores actually operate.',
    problem:
      'Off-the-shelf POS software is often expensive and rigid for small stores. Building it in-house meant checkout, inventory, receipts, labels, and closing the register could all work the way the staff already do.',
    features: [
      'Multi-store setup: staff pick their store location before starting a session',
      'Camera barcode scanning to ring up products quickly',
      'Sales screen with a cart and receipt generation',
      'Inventory management with search and bulk CSV/Excel import',
      'Printable product labels with barcodes',
      'Automated end-of-day register closing, with the report sent by email',
      'Dashboard with sales statistics and charts',
    ],
    stack: ['React', 'Vite', 'Tailwind CSS', 'Express', 'SQLite', 'PostgreSQL', 'Recharts', 'Railway'],
    categories: ['web', 'commerce'],
    platform: 'web',
    links: {
      github: 'https://github.com/will931012/POSLaBodeguita',
      demo: 'https://pos-la-bodeguita.vercel.app',
    },
    image: {
      src: '/projects/compassion-and-love-pos.webp',
      alt: 'POS location picker listing three stores: Compassion & Love, Compassion & Love (Productos de Belleza), and La Bodeguita',
    },
  },
  {
    slug: 'jue-church',
    title: 'Jesucristo Única Esperanza Church Website',
    tagline:
      'A bilingual website for a Miami church, with the latest sermon, service times, events, and visitor information.',
    goal: 'Help a local church welcome first-time visitors and keep its members connected during the week.',
    problem:
      'Church updates posted on social media get buried quickly. The site gives the congregation one reliable place for the latest sermon, weekly service times, events, and groups, in both Spanish and English.',
    features: [
      'Spanish and English versions with language-specific routes (/es and /en)',
      'Latest Sunday sermon featured up front, linking to the full video on YouTube',
      'Weekly schedule with service, prayer, and youth meeting times and location',
      'Pages for planning a visit, events, groups, the church’s vision, and giving',
      'Per-page SEO metadata, a sitemap, and robots.txt',
      'Subtle scroll animations with Motion',
    ],
    stack: ['React', 'Vite', 'Tailwind CSS', 'React Router', 'Motion'],
    categories: ['web'],
    platform: 'web',
    links: {
      github: 'https://github.com/will931012/jueChurchWeb',
      demo: 'https://jue-church-web.vercel.app',
    },
    image: {
      src: '/projects/jue-church.webp',
      alt: 'Church homepage featuring the latest Sunday sermon, "No More Lies," with a button to watch it on YouTube',
    },
  },
  {
    slug: 'imparables-plumbing',
    title: 'Imparables Plumbing Website',
    tagline:
      'A bilingual website for a Miami-Dade plumbing company, built to turn visitors into service calls.',
    goal: 'Give a local plumbing company a professional web presence that makes it easy for homeowners to find the right service and get in touch fast.',
    problem:
      'When a pipe bursts, people search on their phone and call whichever company looks trustworthy first. The site puts services, service areas, reviews, and a one-tap phone number up front, in English and Spanish.',
    features: [
      'English and Spanish versions of the site',
      'Service sections for emergency plumbing, drain cleaning, water heaters, leak detection, repiping, and more',
      'Click-to-call phone number and “Schedule Service” calls to action throughout',
      'Sections for past work, reviews, service areas, and the company’s background',
      'Deployed on Vercel with a custom domain',
    ],
    stack: ['React', 'Vite', 'Tailwind CSS', 'Vercel'],
    categories: ['web'],
    platform: 'web',
    featured: true,
    links: { github: null, demo: 'https://www.imparablesplumbingmiami.com' },
    image: {
      src: '/projects/imparables-plumbing.webp',
      alt: 'Imparables Plumbing homepage with the headline “Fast, Reliable Plumbing When You Need It Most” and a Schedule Service button',
    },
  },
  {
    slug: 'promag',
    title: 'ProMag — Construction Project Management',
    tagline:
      'A project-management workspace for MG3 Group to keep construction projects, contractors, and paperwork organized.',
    goal: 'Give a construction company one place to manage its projects instead of scattered spreadsheets and email threads.',
    problem:
      'Construction projects produce a steady stream of RFIs, submittals, and contractor details that are easy to lose track of. ProMag keeps them organized in one workspace behind a secure sign-in.',
    features: [
      'Workspace sign-in with individual user accounts',
      'RFI and submittal trackers',
      'Directories for contractors, subcontractors, and engineers and architects of record',
      'Product list management',
      'React + TypeScript frontend backed by a REST API and PostgreSQL database',
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Express', 'PostgreSQL', 'Railway'],
    categories: ['web'],
    platform: 'web',
    links: {
      github: 'https://github.com/will931012/mg3-promag-0.01',
      demo: 'https://mg3-promag-0-01.vercel.app',
      demoNote: 'Sign-in required',
    },
    image: {
      src: '/projects/promag.webp',
      alt: 'ProMag sign-in screen for MG3 Group with the tagline “Manage sites, teams, budgets, and schedules in one command center”',
    },
  },
  {
    slug: 'ecommerce-inventory',
    title: 'E-Commerce & Inventory Platform',
    tagline:
      'A full-stack storefront with the inventory, order, and wholesale tools a real shop runs on.',
    goal: 'Give a small business one system for selling online and managing the stock behind it.',
    problem:
      'Retail orders, wholesale orders, stock counts, and product photos often live in separate spreadsheets and apps. This platform keeps them in one place so the storefront and the back office stay in sync.',
    features: [
      'Inventory management that tracks stock across the product catalog',
      'Order handling from checkout through fulfillment',
      'Wholesale workflows that run alongside regular retail orders',
      'Admin dashboard for products, orders, and sales analytics',
      'JWT authentication for customer accounts and protected admin routes',
      'Product image uploads and delivery through Cloudinary',
    ],
    stack: ['React', 'Vite', 'Tailwind CSS', 'Express', 'PostgreSQL', 'JWT', 'Cloudinary'],
    categories: ['web', 'commerce'],
    platform: 'web',
    links: { github: null, demo: null },
    image: null,
  },
  {
    slug: 'multi-location-ios-pos',
    title: 'Multi-Location iOS POS App',
    tagline: 'A native SwiftUI point-of-sale app for businesses that run more than one location.',
    goal: 'Bring point-of-sale to iOS with support for several store locations in a single app.',
    problem:
      'A business with multiple locations needs each store handled on its own while staff use the same app everywhere. This app starts with location and user selection, then gives staff sales, inventory, and receipts in one place.',
    features: [
      'Store location selection, followed by user selection and PIN sign-in',
      'Sales screen with a cart, product search, and a quick-entry keypad',
      'Camera barcode scanning with CodeScanner',
      'Inventory views with product details and a low-stock list',
      'Receipt history and receipt printing support',
      'Credentials stored securely in the iOS Keychain',
      'Networking with Alamofire against a REST API',
    ],
    stack: ['Swift', 'SwiftUI', 'Alamofire', 'KeychainAccess', 'CodeScanner'],
    categories: ['mobile', 'commerce'],
    platform: 'mobile',
    links: { github: 'https://github.com/will931012/PineroPOSiOSApp', demo: null },
    image: null,
  },
  {
    slug: 'black-oaths',
    title: 'Black Oaths Member Portal',
    tagline:
      'A member portal with State ID sign-in, separate member and admin areas, and an Express + PostgreSQL backend.',
    goal: 'Give the Black Oaths group a simple way for members to register and sign in, and for admins to manage access.',
    problem:
      'The group needed a lightweight way to register members and control who can see what. The portal ties each account to a State ID and separates the member and admin experiences.',
    features: [
      'Registration and sign-in with a State ID, validated by the backend',
      'Separate member and admin areas with route-level access control',
      'Contribution form for members',
      'Live access stats: total users, active sessions, and recent sign-ups',
      'Server-side Discord integration',
      'REST API built with Express and PostgreSQL',
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Radix UI', 'Express', 'PostgreSQL'],
    categories: ['web'],
    platform: 'web',
    links: {
      github: 'https://github.com/will931012/boweb',
      demo: 'https://boweb.vercel.app',
      demoNote: 'Sign-in required',
    },
    image: {
      src: '/projects/black-oaths.webp',
      alt: 'Black Oaths access screen with the group’s logo and a State ID sign-in form',
    },
  },
  {
    slug: 'inventory-shopify-manager',
    title: 'Inventory Shopify Manager',
    tagline:
      'The foundation of an embedded Shopify app for managing a store’s products and inventory from inside the Shopify admin.',
    goal: 'Let a Shopify merchant manage products and stock from inside the Shopify admin instead of switching between tools.',
    problem:
      'Stores that restock from supplier spreadsheets end up doing a lot of manual editing in the Shopify admin. This app sets up the base for handling that work inside Shopify itself.',
    features: [
      'Embedded Shopify app using App Bridge and Polaris UI components',
      'Shopify OAuth sign-in with sessions stored through Prisma',
      'Server-side inventory module',
      'Webhook handling for app uninstalls',
    ],
    stack: ['React', 'Remix', 'TypeScript', 'Prisma', 'PostgreSQL', 'Shopify Polaris', 'Shopify App Bridge'],
    categories: ['web', 'commerce'],
    platform: 'web',
    status: 'Early stage',
    links: {
      github: 'https://github.com/will931012/inventory-mng-shopify',
      demo: 'https://inventory-mng-shopify.vercel.app',
    },
    image: {
      src: '/projects/inventory-shopify-manager.webp',
      alt: 'Inventory Shopify Manager landing card with buttons to open the dashboard or install the app on a store',
    },
  },
  {
    slug: 'property-inspection',
    title: 'Property Inspection App',
    tagline: 'A field tool for completing four-point and wind-mitigation inspections from a phone.',
    goal: 'Make residential inspections faster to complete on site with a structured, step-by-step workflow instead of paper forms.',
    problem:
      'Four-point and wind-mitigation inspections are common requirements for Florida homeowners insurance, and they involve the same checklists on every job. A mobile-first workflow keeps the inspector moving through each section while still at the property.',
    features: [
      'Guided four-point inspection workflow covering roof, electrical, plumbing, and HVAC',
      'Wind-mitigation inspection workflow',
      'Mobile-first layout designed for use in the field',
    ],
    stack: [],
    categories: ['mobile'],
    platform: 'mobile',
    links: { github: null, demo: null },
    image: null,
  },

  // ── More repositories (compact cards) ──────────────────────────────────────
  {
    slug: 'miami-fragrances-theme',
    title: 'Miami Fragrances Storefront Theme',
    tagline:
      'A customized Shopify theme with a Sephora-inspired visual style and merchandising flow for a fragrance store.',
    goal: 'Give an online fragrance store a polished storefront that feels like a major beauty retailer.',
    problem:
      'Stock Shopify themes look generic. This theme restyles the store with its own visual system and a homepage built around how shoppers browse fragrances.',
    features: [
      'Restyled storefront with a Sephora-inspired, Miami-themed visual system',
      'Homepage restructured into a merchandising flow',
      'Product cards with badges, quick-add, hover depth, and a consistent 4:5 image ratio',
      'Contrast fixes across the header, footer, and newsletter form',
      'Subtle homepage motion',
    ],
    stack: ['Shopify Liquid', 'CSS', 'JavaScript'],
    categories: ['web', 'commerce'],
    platform: 'web',
    compact: true,
    links: { github: 'https://github.com/will931012/miamiFragancesShopify', demo: null },
    image: null,
  },
  {
    slug: 'grace-essences-theme',
    title: 'Grace Essences Shopify Theme',
    tagline: 'Shopify theme work for a store expanding from fragrances into jewelry and clothing.',
    goal: 'Extend a fragrance store’s Shopify storefront to support new product categories.',
    problem:
      'When the store added jewelry and clothing, the theme needed new templates and navigation so shoppers could find them.',
    features: [
      'New Jewelry and Clothing category templates',
      'Three-card homepage hero linking to Fragrances, Jewelry, and Clothing',
      'Homepage category cards and mobile menu items for the new categories',
    ],
    stack: ['Shopify Liquid', 'CSS'],
    categories: ['web', 'commerce'],
    platform: 'web',
    compact: true,
    links: { github: 'https://github.com/will931012/graceessences.shopify', demo: null },
    image: null,
  },
  {
    slug: 'price-list-normalizer',
    title: 'Supplier Price List Normalizer',
    tagline: 'A Node.js script that turns raw supplier spreadsheets into clean, priced product lists.',
    goal: 'Cut the manual work of preparing supplier fragrance price lists for sale.',
    problem:
      'Supplier spreadsheets use their own product codes and messy descriptions, and every price needs a markup before it can be listed. Doing that by hand across a full catalog is slow and error-prone.',
    features: [
      'Reads and writes Excel files with the xlsx library',
      'Applies tiered price markups based on the supplier price',
      'Maps supplier product codes to readable types such as “Tester Box” or “Body Mist”',
      'Cleans up product descriptions, such as stripping country-of-origin tags',
    ],
    stack: ['Node.js', 'JavaScript', 'xlsx'],
    categories: ['commerce'],
    platform: 'code',
    compact: true,
    links: { github: 'https://github.com/will931012/normalizer-xlsx', demo: null },
    image: null,
  },
]

export const categoryLabels: Record<ProjectCategory, string> = {
  web: 'Web & Full-Stack',
  mobile: 'Mobile',
  ai: 'AI & Data',
  commerce: 'Retail & Commerce',
}
