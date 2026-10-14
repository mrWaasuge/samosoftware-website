import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

const Portfolio = () => {
    return (
        <div className="portfolio-page">
            <section className="page-hero hero-portfolio scene scene-work">
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <h1 style={{ fontSize: 'var(--font-size-4xl)', marginBottom: 'var(--spacing-sm)' }}>Our Work</h1>
                    <p style={{ color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto' }}>A showcase of our recent projects and digital solutions delivered to happy clients.</p>
                </div>
            </section>

            <section className="scene scene-work">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 'var(--spacing-lg)' }}>
                        {projects.map((project) => (
                            <div key={project.id} className="project-card" style={{ backgroundColor: 'var(--color-bg-secondary)', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--color-border)' }}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{ width: '100%', height: '200px', objectFit: 'cover', backgroundColor: '#334155' }}
                                />
                                <div style={{ padding: 'var(--spacing-lg)' }}>
                                    <span style={{ display: 'inline-block', backgroundColor: 'rgba(59, 130, 246, 0.1)', color: 'var(--color-accent)', padding: '0.25rem 0.75rem', borderRadius: '999px', fontSize: '0.8rem', marginBottom: 'var(--spacing-sm)' }}>{project.category}</span>
                                    <h3 style={{ marginBottom: 'var(--spacing-xs)' }}>{project.title}</h3>
                                    <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-md)', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{project.overview}</p>
                                    <Link to={`/portfolio/${project.id}`} className="text-accent" style={{ fontWeight: 600 }}>View Case Study →</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Portfolio
