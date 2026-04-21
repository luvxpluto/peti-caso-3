const particles = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: `${8 + ((index * 17) % 84)}%`,
  top: `${12 + ((index * 29) % 72)}%`,
  delay: `${(index % 6) * 0.7}s`,
  duration: `${7 + (index % 5)}s`,
}))

function FloatingParticles() {
  return (
    <div className="floating-particles" aria-hidden="true">
      {particles.map((particle) => (
        <span
          key={particle.id}
          style={{
            left: particle.left,
            top: particle.top,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          }}
        />
      ))}
    </div>
  )
}

export default FloatingParticles
