import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { ArrowLeft, CheckCircle, Calendar, User, Code } from 'lucide-react'

const ProjectDetails = () => {
    const { id } = useParams()
    const project = projects.find(p => p.id === id)

    if (!project) {
        return (
            <div className="container" style={{ paddingTop: 'calc(var(--header-height) + var(--spacing-2xl))', textAlign: 'center' }}>
                <h2>Project Not Found</h2>
                <Link to="/portfolio" className="btn btn-primary" style={{ marginTop: 'var(--spacing-md)' }}>Back to Portfolio</Link>
            </div>
        )
    }

    return (
        <div className="project-details-page">
            <section className="scene scene-work" style={{ paddingTop: 'calc(var(--header-height) + var(--spacing-xl))', paddingBottom: 'var(--spacing-xl)' }}>
                <div className="container">
                    <Link to="/portfolio" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: 'var(--spacing-md)', color: 'var(--color-text-secondary)' }}>
                        <ArrowLeft size={16} /> Back to Portfolio
                    </Link>
                    <span style={{ display: 'block', color: 'var(--color-accent)', fontWeight: 600, marginBottom: 'var(--spacing-xs)' }}>{project.category}</span>
                    <h1 style={{ fontSize: 'var(--font-size-4xl)', marginBottom: 'var(--spacing-lg)' }}>{project.title}</h1>
                </div>
            </section>

            <section className="scene scene-work">
                <div className="container">
                    <img
                        src={project.image}
                        alt={project.title}
                        style={{ width: '100%', maxHeight: '500px', objectFit: 'cover', borderRadius: '12px', marginBottom: 'var(--spacing-2xl)' }}
                    />

                    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 'var(--spacing-2xl)' }}>

                        {/* Main Content */}
                        <div className="project-main-content">
                            <h2 style={{ fontSize: 'var(--font-size-2xl)', marginBottom: 'var(--spacing-md)' }}>Project Overview</h2>
                            <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-xl)', lineHeight: 1.8 }}>{project.overview}</p>

                            <h2 style={{ fontSize: 'var(--font-size-2xl)', marginBottom: 'var(--spacing-md)' }}>How it Helps (The Solution)</h2>
                            <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-xl)', lineHeight: 1.8 }}>{project.solution}</p>

                            <h2 style={{ fontSize: 'var(--font-size-2xl)', marginBottom: 'var(--spacing-md)' }}>Business Benefits</h2>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {project.benefits.map((benefit, index) => (
                                    <li key={index} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem', color: 'var(--color-text-secondary)' }}>
                                        <CheckCircle size={20} color="var(--color-accent)" style={{ flexShrink: 0 }} />
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Sidebar Info */}
                        <div>
                            <div style={{ backgroundColor: 'var(--color-bg-secondary)', padding: 'var(--spacing-lg)', borderRadius: '12px', border: '1px solid var(--color-border)', position: 'sticky', top: 'calc(var(--header-height) + 2rem)' }}>
                                <h3 style={{ marginBottom: 'var(--spacing-md)', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>Project Info</h3>

                                <div style={{ marginBottom: 'var(--spacing-md)' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem', color: 'var(--color-text-primary)', fontWeight: 500 }}>
                                        <User size={18} /> Client
                                    </div>
                                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>{project.info.client}</p>
                                </div>

                                <div style={{ marginBottom: 'var(--spacing-md)' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem', color: 'var(--color-text-primary)', fontWeight: 500 }}>
                                        <Calendar size={18} /> Date
                                    </div>
                                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>{project.info.date}</p>
                                </div>

                                <div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem', color: 'var(--color-text-primary)', fontWeight: 500 }}>
                                        <Code size={18} /> Technologies
                                    </div>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
                                        {project.info.technologies.map((tech, i) => (
                                            <span key={i} style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', color: 'var(--color-accent)', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem' }}>{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="scene scene-contact" style={{ textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ marginBottom: 'var(--spacing-md)' }}>Have a Similar Project?</h2>
                    <p style={{ marginBottom: 'var(--spacing-lg)', color: 'var(--color-text-secondary)' }}>Let's discuss how we can bring your ideas to life.</p>
                    <Link to="/contact" className="btn btn-primary">Start a Conversation</Link>
                </div>
            </section>
        </div>
    )
}

export default ProjectDetails
