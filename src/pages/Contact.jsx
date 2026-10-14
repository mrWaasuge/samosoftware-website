import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: 'General Inquiry',
        message: ''
    })
    const [status, setStatus] = useState('idle')
    const [params] = useSearchParams()

    useEffect(() => {
        const product = params.get('product')
        if (!product) return

        const plan = params.get('plan')
        const intent = params.get('intent') === 'subscribe' ? 'subscribe to' : 'request a demo of'
        const message = plan
            ? `I would like to ${intent} ${product} on the ${plan} plan.`
            : `I would like to ${intent} ${product}.`

        setFormData((prev) => ({
            ...prev,
            service: 'Software Subscription',
            message,
        }))
    }, [params])

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('sending')

        try {
            const res = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    from_name: formData.name,
                    from_email: formData.email,
                    service: formData.service,
                    message: formData.message
                })
            })

            if (res.ok) {
                setStatus('success')
                setFormData({ name: '', email: '', service: 'General Inquiry', message: '' })
            } else {
                setStatus('error')
            }
        } catch (err) {
            setStatus('error')
        }
    }

    const inputStyle = {
        width: '100%',
        padding: '0.75rem',
        borderRadius: '8px',
        border: '1px solid var(--color-border)',
        backgroundColor: 'var(--color-bg-primary)',
        color: 'var(--color-text-primary)',
        fontFamily: 'inherit'
    }

    return (
        <div className="contact-page">
            <section className="page-hero hero-contact scene scene-contact" style={{ minHeight: '50vh' }}>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <h1 style={{ fontSize: 'var(--font-size-4xl)', marginBottom: 'var(--spacing-sm)' }}>Get in Touch</h1>
                    <p style={{ color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        Ready to start your next project? We'd love to hear from you.
                    </p>
                </div>
            </section>

            <section className="scene scene-contact" style={{ paddingTop: 0 }}>
                <div className="container">
                    <div className="paired-cards paired-cards-wide">

                        {/* Contact Info */}
                        <div className="info-card">
                            <h2 style={{ marginBottom: 'var(--spacing-md)' }}>Contact Information</h2>
                            <p style={{ marginBottom: 'var(--spacing-lg)' }}>
                                Fill out the form or reach us via email. We usually respond within 24 hours.
                            </p>

                            <div style={{ marginBottom: 'var(--spacing-md)' }}>
                                <h4 style={{ color: 'var(--color-accent)', marginBottom: '0.25rem' }}>Email Us</h4>
                                <a href="mailto:samosoftware1@gmail.com">
                                    samosoftware1@gmail.com
                                </a>
                            </div>

                            <div style={{ marginBottom: 'var(--spacing-md)' }}>
                                <h4 style={{ color: 'var(--color-accent)', marginBottom: '0.25rem' }}>Call Us</h4>
                                <a href="tel:+613502123">
                                    613502123
                                </a>
                            </div>

                            <div style={{ marginBottom: 'var(--spacing-md)' }}>
                                <h4 style={{ color: 'var(--color-accent)', marginBottom: '0.25rem' }}>Office Hours</h4>
                                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                            </div>

                            <div style={{ marginTop: 'var(--spacing-lg)' }}>
                                <h4 style={{ marginBottom: 'var(--spacing-sm)' }}>Follow Us</h4>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <a href="#" className="text-accent">LinkedIn</a>
                                    <a
                                        href="https://www.facebook.com/share/19Kz3kXHLn/?mibextid=wwXIfr"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-accent"
                                    >
                                        Facebook
                                    </a>
                                    <a
                                        href="https://www.instagram.com/samo_softskill?igsi=Y3MybWswZW92ZHQ5"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-accent"
                                    >
                                        Instagram
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="info-card">
                            <form
                                className="contact-form"
                                onSubmit={handleSubmit}
                            >
                                <div className="form-group" style={{ marginBottom: 'var(--spacing-md)' }}>
                                    <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="from_name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        required
                                        style={inputStyle}
                                    />
                                </div>

                                <div className="form-group" style={{ marginBottom: 'var(--spacing-md)' }}>
                                    <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="from_email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        required
                                        style={inputStyle}
                                    />
                                </div>

                                <div className="form-group" style={{ marginBottom: 'var(--spacing-md)' }}>
                                    <label htmlFor="service" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Service Interested In</label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        style={inputStyle}
                                    >
                                        <option value="General Inquiry">General Inquiry</option>
                                        <option value="Static Website">Static Website</option>
                                        <option value="Dynamic Website">Dynamic Website</option>
                                        <option value="SamoBiz / Business System">SamoBiz / Business System</option>
                                        <option value="Specialized Systems">Specialized Systems</option>
                                        <option value="Mobile Application">Mobile Application</option>
                                        <option value="Hospital Management System (Homas)">Hospital Management System (Homas)</option>
                                        <option value="Data Analytics & Dashboard">Data Analytics & Dashboard</option>
                                        <option value="Software Subscription">Software Subscription</option>
                                    </select>
                                </div>

                                <div className="form-group" style={{ marginBottom: 'var(--spacing-md)' }}>
                                    <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your project..."
                                        required
                                        style={inputStyle}
                                    ></textarea>
                                </div>

                                {/* Status Messages */}
                                {status === 'success' && (
                                    <p style={{ color: '#10b981', marginBottom: 'var(--spacing-sm)', fontWeight: 500 }}>
                                        ✅ Message sent! We'll get back to you soon.
                                    </p>
                                )}
                                {status === 'error' && (
                                    <p style={{ color: '#ef4444', marginBottom: 'var(--spacing-sm)', fontWeight: 500 }}>
                                        ❌ Something went wrong. Please try again.
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    style={{ width: '100%' }}
                                    disabled={status === 'sending'}
                                >
                                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
