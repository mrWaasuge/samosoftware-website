const About = () => {
    return (
        <div className="about-page">
            <section className="page-hero hero-about scene scene-work">
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <h1 style={{ fontSize: 'var(--font-size-4xl)', marginBottom: 'var(--spacing-sm)' }}>About Us</h1>
                    <p style={{ color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto' }}>We are a team of builders, developers, designers, and creatives focused on delivering real results for our clients.</p>
                </div>
            </section>

            <section className="scene scene-work">
                <div className="container">
                    <div className="paired-cards">
                        <div className="info-card">
                            <h2 style={{ fontSize: 'var(--font-size-3xl)', marginBottom: 'var(--spacing-md)' }}>Built From the Ground Up</h2>
                            <p style={{ marginBottom: 'var(--spacing-md)' }}>SamoSoftware started with a straightforward goal: give businesses access to quality digital work without the runaround. We've worked with clients from Somalia and beyond, across e-commerce, education, finance, and media.</p>
                            <p>Whether you're launching your first product or improving an existing one, we focus on understanding your situation first, then building something that actually fits.</p>
                        </div>
                        <div className="info-card">
                            <h3 style={{ color: 'var(--color-accent)', marginBottom: 'var(--spacing-sm)' }}>Our Vision</h3>
                            <p style={{ marginBottom: 'var(--spacing-lg)' }}>To be the go-to digital partner for businesses in Somalia and East Africa, known for solid work and honest collaboration.</p>

                            <h3 style={{ color: 'var(--color-accent)', marginBottom: 'var(--spacing-sm)' }}>Our Values</h3>
                            <ul style={{ listStyle: 'none' }}>
                                <li style={{ marginBottom: '0.5rem' }}>✨ <strong>Quality:</strong> We ship work we're proud to put our name on.</li>
                                <li style={{ marginBottom: '0.5rem' }}>🤝 <strong>Honesty:</strong> Straight talk, no hidden costs, no surprises.</li>
                                <li style={{ marginBottom: '0.5rem' }}>🚀 <strong>Curiosity:</strong> We keep learning so our clients stay ahead.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="scene scene-work" style={{ textAlign: 'center' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'var(--spacing-lg)' }}>
                        <div>
                            <div style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--color-accent)' }}>50+</div>
                            <p>Projects Delivered</p>
                        </div>
                        <div>
                            <div style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--color-accent)' }}>20+</div>
                            <p>Happy Clients</p>
                        </div>
                        <div>
                            <div style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--color-accent)' }}>5+</div>
                            <p>Years Experience</p>
                        </div>
                        <div>
                            <div style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--color-accent)' }}>100%</div>
                            <p>Commitment</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
