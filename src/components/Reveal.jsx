import { useReveal } from '../hooks/useReveal'

export default function Reveal({ as: Tag = 'div', className = '', children, ...props }) {
  const ref = useReveal()
  return (
    <Tag ref={ref} data-reveal {...props} className={className}>
      {children}
    </Tag>
  )
}
