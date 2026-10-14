import { useEffect, useId, useState } from 'react'
import { Check, X } from 'lucide-react'

const WHATSAPP_NUMBER = '252613502123'

const PRODUCTS = [
    {
        id: 'smc',
        name: 'SMC',
        title: 'School Management System',
        tagline: 'Smart, all-in-one education and campus administration software.',
        modules: ['Attendance', 'Fee Collection', 'Exams & Marks', 'Student Portal'],
        tiers: [
            {
                id: 'basic',
                name: 'Basic Plan',
                trial: true,
                monthly: 0,
                cta: 'Start Free Trial',
                features: [
                    '1 Branch',
                    '1 User',
                    'Up to 50 Students',
                    'Up to 8 Teachers',
                    'Fee Payment Tracking',
                    'Exam Records',
                ],
            },
            {
                id: 'standard',
                name: 'Standard Plan',
                monthly: 75,
                popular: true,
                cta: 'Subscribe Now',
                features: [
                    '2 Users',
                    'Student & Staff Attendance',
                    'Marks & Grading Module',
                    'Fee Collection & Invoicing',
                    'Teacher Management',
                ],
            },
            {
                id: 'pro',
                name: 'Pro Plan',
                monthly: 135,
                cta: 'Get Pro Plan',
                features: [
                    'Full Features & Unlimited Access',
                    'Multi-branch support',
                    'Unlimited Students & Staff',
                    'Complete Exam Analytics & Custom Reporting',
                ],
            },
        ],
    },
    {
        id: 'samopiz',
        name: 'Samopiz',
        title: 'POS & Business Management System',
        tagline: 'Fast cloud Point of Sale, inventory tracking, and multi-store retail management.',
        modules: ['POS Checkout', 'Inventory', 'Receipts', 'Multi-branch'],
        tiers: [
            {
                id: 'basic',
                name: 'Basic Plan',
                trial: true,
                monthly: 0,
                cta: 'Start Free Trial',
                features: [
                    '1 User',
                    'Up to 30 Products',
                    'Real-time POS Billing',
                    'Basic Inventory Tracking',
                ],
            },
            {
                id: 'standard',
                name: 'Standard Plan',
                monthly: 75,
                popular: true,
                cta: 'Subscribe Now',
                features: [
                    '2 Users',
                    '2 Branches',
                    'Up to 50 Products (or extended inventory)',
                    'POS Billing & Stock Alerts',
                    'Daily Sales Reporting',
                ],
            },
            {
                id: 'pro',
                name: 'Pro Plan',
                monthly: 135,
                cta: 'Get Pro Plan',
                features: [
                    'Full Access',
                    'Unlimited Products & Branches',
                    'Multi-warehouse Inventory',
                    'Advanced Accounting & Tax Reports',
                ],
            },
        ],
    },
    {
        id: 'homas',
        name: 'Homas',
        title: 'Hospital Management System',
        tagline: 'Modern healthcare, patient admission, pharmacy, and clinic operations system.',
        modules: ['Patient Admission', 'Pharmacy', 'Appointments', 'Clinic Billing'],
        tiers: [
            {
                id: 'basic',
                name: 'Basic Plan',
                trial: true,
                monthly: 0,
                cta: 'Start Free Trial',
                features: [
                    '1 User',
                    'Up to 25 Patients',
                    'Patient Admission',
                    'Pharmacy Module',
                    'Basic Inventory & Accounting',
                    'Up to 3 Medical Services',
                    'Profit Tracking',
                ],
            },
            {
                id: 'standard',
                name: 'Standard Plan',
                monthly: 75,
                popular: true,
                cta: 'Subscribe Now',
                features: [
                    '10 Users',
                    'Up to 45 Patients',
                    'Up to 6 Medical Services',
                    'Full Pharmacy & Medicine Inventory',
                    'Accounting & Invoicing',
                ],
            },
            {
                id: 'pro',
                name: 'Pro Plan',
                monthly: 135,
                cta: 'Get Pro Plan',
                features: [
                    'Full Features',
                    'Unlimited Patients & Staff',
                    'Multi-department Clinic Workflows',
                    'Comprehensive Laboratory, Pharmacy & Financial Audits',
                ],
            },
        ],
    },
]

const currency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
})

const quoteFor = (product, tier, cycle) => {
    if (tier.trial) return '14 Days Free Trial ($0)'
    if (cycle === 'annual') return `${currency.format(tier.monthly * 10)} / year`
    return `${currency.format(tier.monthly)} / month`
}

const whatsAppHref = (product, tier, cycle, intent) => {
    const text = `Hello SamoSoftware, I would like to ${intent} ${product.name} (${product.title}) on the ${tier.name}. Billing: ${quoteFor(product, tier, cycle)}.`
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}

const emptyForm = { name: '', email: '', phone: '', organization: '' }

const Subscriptions = () => {
    const [productId, setProductId] = useState(PRODUCTS[0].id)
    const [cycle, setCycle] = useState('monthly')
    const [modal, setModal] = useState(null)
    const [form, setForm] = useState(emptyForm)
    const [status, setStatus] = useState('idle')
    const titleId = useId()
    const product = PRODUCTS.find((item) => item.id === productId) ?? PRODUCTS[0]

    const openModal = (mode, tier) => {
        setForm(emptyForm)
        setStatus('idle')
        setModal({ mode, tier })
    }

    const closeModal = () => setModal(null)

    useEffect(() => {
        if (!modal) return undefined
        const onKey = (event) => {
            if (event.key === 'Escape') closeModal()
        }
        document.body.style.overflow = 'hidden'
        window.addEventListener('keydown', onKey)
        return () => {
            document.body.style.overflow = ''
            window.removeEventListener('keydown', onKey)
        }
    }, [modal])

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!modal) return
        setStatus('sending')

        const intent = modal.mode === 'demo'
            ? 'request a demo of'
            : modal.tier.trial
                ? 'start a free trial of'
                : 'subscribe to'

        try {
            const res = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    from_name: form.name,
                    from_email: form.email,
                    service: 'Software Subscription',
                    message: [
                        `${form.name} would like to ${intent} ${product.name} (${product.title}).`,
                        `Plan: ${modal.tier.name}.`,
                        `Billing: ${quoteFor(product, modal.tier, cycle)}.`,
                        form.organization ? `Organization: ${form.organization}.` : '',
                        form.phone ? `Phone: ${form.phone}.` : '',
                    ].filter(Boolean).join(' '),
                }),
            })
            setStatus(res.ok ? 'success' : 'error')
        } catch {
            setStatus('error')
        }
    }

    return (
        <div className="subscriptions-page">
            <section className="page-hero hero-subscriptions scene scene-plans">
                <div className="container">
                    <p className="eyebrow">Rentable systems</p>
                    <h1>Software you can subscribe to</h1>
                    <p className="hero-lead">
                        SMC, Samopiz, and Homas are ready to rent. Start with a 14-day trial, or choose Standard and Pro by the month or the year.
                    </p>
                </div>
            </section>

            <section id="software-plans" className="plans-section scene scene-plans">
                <div className="container">
                    <div className="product-switch" role="tablist" aria-label="Rentable systems">
                        {PRODUCTS.map((item) => {
                            const selected = item.id === product.id
                            return (
                                <button
                                    key={item.id}
                                    type="button"
                                    role="tab"
                                    id={`tab-${item.id}`}
                                    aria-selected={selected}
                                    aria-controls="system-panel"
                                    className={`product-tab${selected ? ' is-active' : ''}`}
                                    onClick={() => setProductId(item.id)}
                                >
                                    <span className="product-tab-name">{item.name}</span>
                                    <span className="product-tab-title">{item.title}</span>
                                </button>
                            )
                        })}
                    </div>

                    <div
                        className="system-banner"
                        id="system-panel"
                        role="tabpanel"
                        aria-labelledby={`tab-${product.id}`}
                    >
                        <div className="system-banner-copy">
                            <p className="eyebrow">{product.title}</p>
                            <h2>{product.name}</h2>
                            <p>{product.tagline}</p>
                            <ul className="module-list">
                                {product.modules.map((module) => (
                                    <li key={module}>{module}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="billing-toggle" role="group" aria-label="Billing period">
                            <button
                                type="button"
                                className={cycle === 'monthly' ? 'is-on' : ''}
                                aria-pressed={cycle === 'monthly'}
                                onClick={() => setCycle('monthly')}
                            >
                                Monthly
                            </button>
                            <button
                                type="button"
                                className={cycle === 'annual' ? 'is-on' : ''}
                                aria-pressed={cycle === 'annual'}
                                onClick={() => setCycle('annual')}
                            >
                                Annual
                                <span className="save-pill">2 months free</span>
                            </button>
                        </div>
                    </div>

                    <div className="plans-grid">
                        {product.tiers.map((tier) => {
                            const annual = cycle === 'annual' && !tier.trial
                            const yearPrice = tier.monthly * 10
                            const fullYear = tier.monthly * 12

                            return (
                                <article key={tier.id} className={`plan-card${tier.popular ? ' is-popular' : ''}`}>
                                    {tier.popular && <span className="plan-badge">Most popular</span>}
                                    {tier.trial && <span className="plan-trial-tag">Trial</span>}
                                    <h3>{tier.name}</h3>
                                    <div className="plan-price-block" key={`${product.id}-${tier.id}-${cycle}`}>
                                        {tier.trial ? (
                                            <>
                                                <p className="plan-trial-label">14 Days Free Trial</p>
                                                <div className="plan-price-row">
                                                    <span className="plan-price">$0</span>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="plan-price-row">
                                                    <span className="plan-price">
                                                        {currency.format(annual ? yearPrice : tier.monthly)}
                                                    </span>
                                                    <span className="plan-cadence">{annual ? '/ year' : '/ month'}</span>
                                                </div>
                                                {annual && (
                                                    <p className="plan-saving">
                                                        <s>{currency.format(fullYear)}</s>
                                                        {' '}2 months free · save {currency.format(fullYear - yearPrice)}
                                                    </p>
                                                )}
                                            </>
                                        )}
                                    </div>
                                    <ul className="plan-features">
                                        {tier.features.map((feature) => (
                                            <li key={feature}>
                                                <Check size={18} aria-hidden="true" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="plan-actions">
                                        <button type="button" className="btn btn-primary" onClick={() => openModal('subscribe', tier)}>
                                            {tier.cta}
                                        </button>
                                        <button type="button" className="btn btn-outline" onClick={() => openModal('demo', tier)}>
                                            Request Demo
                                        </button>
                                        <button type="button" className="plan-whatsapp" onClick={() => openModal('whatsapp', tier)}>
                                            Subscribe / WhatsApp Contact
                                        </button>
                                    </div>
                                </article>
                            )
                        })}
                    </div>
                </div>
            </section>

            {modal && (
                <div className="plan-modal-root">
                    <button type="button" className="plan-modal-backdrop" aria-label="Close dialog" onClick={closeModal} />
                    <div className="plan-modal" role="dialog" aria-modal="true" aria-labelledby={titleId}>
                        <div className="plan-modal-head">
                            <div>
                                <p className="eyebrow">{product.name}</p>
                                <h2 id={titleId}>
                                    {modal.mode === 'demo' && 'Request Demo'}
                                    {modal.mode === 'whatsapp' && 'Subscribe / WhatsApp Contact'}
                                    {modal.mode === 'subscribe' && modal.tier.cta}
                                </h2>
                            </div>
                            <button type="button" className="plan-modal-close" aria-label="Close" onClick={closeModal}>
                                <X size={20} />
                            </button>
                        </div>

                        <p className="plan-modal-summary">
                            {product.title} · {modal.tier.name} · {quoteFor(product, modal.tier, cycle)}
                        </p>

                        {modal.mode === 'whatsapp' ? (
                            <div className="plan-modal-whatsapp">
                                <p>Continue on WhatsApp with this plan already written into the message.</p>
                                <a
                                    className="btn btn-primary"
                                    href={whatsAppHref(
                                        product,
                                        modal.tier,
                                        cycle,
                                        modal.tier.trial ? 'start a free trial of' : 'subscribe to'
                                    )}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Open WhatsApp
                                </a>
                            </div>
                        ) : (
                            <form className="plan-modal-form" onSubmit={handleSubmit}>
                                <label>
                                    Full name
                                    <input
                                        required
                                        value={form.name}
                                        onChange={(event) => setForm({ ...form, name: event.target.value })}
                                    />
                                </label>
                                <label>
                                    Email
                                    <input
                                        type="email"
                                        required
                                        value={form.email}
                                        onChange={(event) => setForm({ ...form, email: event.target.value })}
                                    />
                                </label>
                                <label>
                                    Phone
                                    <input
                                        required
                                        value={form.phone}
                                        onChange={(event) => setForm({ ...form, phone: event.target.value })}
                                    />
                                </label>
                                <label>
                                    Organization
                                    <input
                                        value={form.organization}
                                        onChange={(event) => setForm({ ...form, organization: event.target.value })}
                                    />
                                </label>

                                {status === 'success' && (
                                    <p className="plan-modal-status is-ok">Request sent. We will follow up shortly.</p>
                                )}
                                {status === 'error' && (
                                    <p className="plan-modal-status is-bad">
                                        The request could not be sent from here. Use WhatsApp and we will pick it up there.
                                    </p>
                                )}

                                <div className="plan-modal-actions">
                                    <button type="submit" className="btn btn-primary" disabled={status === 'sending' || status === 'success'}>
                                        {status === 'sending' ? 'Sending...' : modal.mode === 'demo' ? 'Request Demo' : modal.tier.cta}
                                    </button>
                                    <a
                                        className="btn btn-outline"
                                        href={whatsAppHref(
                                            product,
                                            modal.tier,
                                            cycle,
                                            modal.mode === 'demo'
                                                ? 'request a demo of'
                                                : modal.tier.trial
                                                    ? 'start a free trial of'
                                                    : 'subscribe to'
                                        )}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        WhatsApp instead
                                    </a>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Subscriptions
