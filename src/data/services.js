import {
    BarChart3,
    Building2,
    HeartPulse,
    LayoutTemplate,
    Newspaper,
    Smartphone,
    Store,
} from 'lucide-react'

export const enterpriseServices = [
    {
        title: 'Static Website',
        badge: 'Web',
        icon: LayoutTemplate,
        summary: 'A fast public site for a portfolio, profile, or company that needs a clear first impression.',
        points: ['Custom Portfolio', 'Modern Profile', 'Corporate Landing Pages', 'Fast & Lightweight'],
    },
    {
        title: 'Dynamic Website',
        badge: 'Portals',
        icon: Newspaper,
        summary: 'Sites that publish, sell, and update themselves as your content and catalog change.',
        points: ['News Portals', 'Web Blogs', 'Interactive Portals', 'E-commerce Platforms'],
    },
    {
        title: 'SamoBiz / Business System',
        badge: 'Retail',
        icon: Store,
        summary: 'Cloud tools for the counter, the stock room, and the daily books of a retail business.',
        points: ['Cloud POS', 'Retail Store Management', 'Inventory Tracking', 'Daily Expense Accounting'],
    },
    {
        title: 'Specialized Systems',
        badge: 'ERP',
        icon: Building2,
        summary: 'Industry systems shaped around how schools, hospitals, hotels, and pharmacies actually work.',
        points: ['Schools', 'Hospitals', 'Hotels', 'Pharmacies'],
    },
    {
        title: 'Mobile Application',
        badge: 'Apps',
        icon: Smartphone,
        summary: 'iOS and Android apps built for speed and for people who come back to them.',
        points: ['Native iOS & Android', 'Cross-platform', 'High engagement', 'Fast performance'],
    },
    {
        title: 'Hospital Management System (Homas)',
        badge: 'Healthcare',
        icon: HeartPulse,
        summary: 'Admission, scheduling, pharmacy stock, and clinic billing in one hospital system.',
        points: ['Patient Admission & Records', 'Doctor Scheduling', 'Pharmacy Stock', 'Billing & Clinic Audits'],
    },
    {
        title: 'Data Analytics & Dashboard',
        badge: 'Insights',
        icon: BarChart3,
        summary: 'Live numbers for leadership: financial KPIs, custom reports, and charts that stay current.',
        points: ['Real-time Business Intelligence', 'Financial KPI Metrics', 'Custom Reporting', 'Charts'],
    },
]
