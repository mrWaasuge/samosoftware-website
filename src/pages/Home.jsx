import { Link } from 'react-router-dom'
import { MapPin } from 'lucide-react'
import { enterpriseServices } from '../data/services'

const DashboardPreview = () => (
    <figure className="hero-frame" aria-label="Enterprise dashboard preview">
        <div className="dash">
            <div className="dash-bar">
                <span className="dash-dots" aria-hidden="true">
                    <i /><i /><i />
                </span>
                <strong>SamoCloud</strong>
                <span className="dash-live">Live</span>
            </div>
            <div className="dash-kpis">
                <div>
                    <span>Revenue</span>
                    <strong>$48.2k</strong>
                </div>
                <div>
                    <span>Orders</span>
                    <strong>1,284</strong>
                </div>
                <div>
                    <span>Branches</span>
                    <strong>12</strong>
                </div>
            </div>
            <div className="dash-body">
                <div className="dash-chart" aria-hidden="true">
                    <span style={{ height: '42%' }} />
                    <span style={{ height: '68%' }} />
                    <span style={{ height: '54%' }} />
                    <span style={{ height: '86%' }} />
                    <span style={{ height: '63%' }} />
                    <span style={{ height: '94%' }} />
                </div>
                <ul className="dash-list">
                    <li><em>SMC</em><span>Attendance synced</span></li>
                    <li><em>SamoBiz</em><span>POS online</span></li>
                    <li><em>Homas</em><span>Pharmacy stock</span></li>
                </ul>
            </div>
        </div>
    </figure>
)

const Home = () => {
    return (
        <div className="home-page">
            <section className="hero hero-modern scene scene-hero">
                <div className="container hero-grid">
                    <aside className="hero-brand-card">
                        <img src="/assets/logo-light.svg" alt="SamoSoftware" />
                    </aside>
                    <div className="hero-stage">
                        <div className="hero-copy">
                            <p className="hero-badge">
                                <span className="hero-dot" aria-hidden="true" />
                                SamoSoftware Digital Solutions
                            </p>
                            <h1>Building the Future of Digital Technology.</h1>
                            <p className="hero-lead">
                                Your reliable technology partner for high-performance Web Systems, SaaS Platforms, Mobile Apps, and Enterprise Cloud Automation.
                            </p>
                            <div className="hero-buttons">
                                <Link to="/services" className="btn btn-primary">Explore Services</Link>
                                <Link to="/subscriptions" className="btn btn-ghost">Explore Software Plans</Link>
                            </div>
                            <p className="hero-location">
                                <MapPin size={16} aria-hidden="true" />
                                Mogadishu, Somalia
                            </p>
                        </div>
                        <DashboardPreview />
                    </div>
                </div>
            </section>

            <section id="services" className="brand-section scene scene-services">
                <div className="container">
                    <div className="section-title">
                        <h2>Enterprise Technology Services</h2>
                        <p>Seven systems and services for websites, operations, healthcare, and reporting.</p>
                    </div>
                    <div className="services-grid enterprise-grid">
                        {enterpriseServices.map((service) => {
                            const Icon = service.icon
                            return (
                                <article key={service.title} className="service-card enterprise-card">
                                    <div className="enterprise-card-top">
                                        <div className="service-icon"><Icon size={26} /></div>
                                        <span className="service-kicker">{service.badge}</span>
                                    </div>
                                    <h3>{service.title}</h3>
                                    <p>{service.summary}</p>
                                    <ul className="service-points">
                                        {service.points.map((point) => (
                                            <li key={point}>{point}</li>
                                        ))}
                                    </ul>
                                </article>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section className="scene scene-why">
                <div className="container">
                    <div className="section-title">
                        <h2>Why Choose SamoSoftware?</h2>
                        <p>We deliver excellence in every line of code and every system we ship.</p>
                    </div>
                    <div className="why-grid">
                        <div>
                            <h3>We Get Things Done</h3>
                            <p>No long waits, no vague updates. We set clear timelines, communicate openly, and deliver what we promise, on time and built to last.</p>
                        </div>
                        <div>
                            <h3>Built for Growth</h3>
                            <p>Every project we ship is fast, secure, and structured to handle more users as your business grows, with no rebuilding from scratch later.</p>
                        </div>
                        <div>
                            <h3>One Team, Full Service</h3>
                            <p>Websites, business systems, mobile apps, and analytics. One team that understands how the pieces fit together.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="software-plans" className="scene scene-plans">
                <div className="container">
                    <div className="section-title">
                        <h2>Software & Plans</h2>
                        <p>Rent SMC, Samopiz, or Homas by the month or the year, or start with a 14-day trial.</p>
                    </div>
                    <div className="suite-grid">
                        <article className="service-card">
                            <h3>SMC</h3>
                            <p>Smart, all-in-one education and campus administration software.</p>
                        </article>
                        <article className="service-card">
                            <h3>Samopiz</h3>
                            <p>Fast cloud point of sale, inventory tracking, and multi-store retail management.</p>
                        </article>
                        <article className="service-card">
                            <h3>Homas</h3>
                            <p>Modern healthcare, patient admission, pharmacy, and clinic operations.</p>
                        </article>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: 'var(--spacing-lg)' }}>
                        <Link to="/subscriptions" className="btn btn-primary">View Subscription Plans</Link>
                    </div>
                </div>
            </section>

            <section className="scene scene-contact" style={{ textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: 'var(--font-size-3xl)', marginBottom: 'var(--spacing-md)' }}>Ready to Start Your Project?</h2>
                    <p style={{ marginBottom: 'var(--spacing-lg)', color: 'var(--color-text-secondary)' }}>Let's discuss how we can help you achieve your digital goals.</p>
                    <Link to="/contact" className="btn btn-primary">Contact Us Today</Link>
                </div>
            </section>
        </div>
    )
}

export default Home
