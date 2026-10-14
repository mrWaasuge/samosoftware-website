import { Link } from 'react-router-dom'
import { enterpriseServices } from '../data/services'

const Services = () => {
    return (
        <div className="services-page">
            <section className="page-hero hero-services scene scene-services">
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <h1 style={{ fontSize: 'var(--font-size-4xl)', marginBottom: 'var(--spacing-sm)' }}>Enterprise Technology Services</h1>
                    <p style={{ color: 'var(--color-text-secondary)', maxWidth: '640px', margin: '0 auto' }}>
                        Websites, business systems, mobile apps, hospital operations, and analytics, built to run in production.
                    </p>
                </div>
            </section>

            <section className="brand-section scene scene-services">
                <div className="container">
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

            <section className="scene scene-contact" style={{ textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ marginBottom: 'var(--spacing-md)' }}>Need a Custom Solution?</h2>
                    <p style={{ marginBottom: 'var(--spacing-lg)', color: 'var(--color-text-secondary)' }}>We are ready to discuss your unique project requirements.</p>
                    <Link to="/contact" className="btn btn-primary">Get a Free Consultation</Link>
                </div>
            </section>
        </div>
    )
}

export default Services
