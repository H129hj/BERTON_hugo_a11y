import { useEffect, useRef } from 'react'

type Props = { onClose: () => void }

const FOCUSABLE = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'

export default function Modal({ onClose }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  // Au montage on mémorise le bouton qui a ouvert la modale et on met le focus
  // dedans. À la fermeture on rend le focus à ce bouton.
  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null
    ref.current?.querySelector<HTMLElement>(FOCUSABLE)?.focus()
    return () => opener?.focus()
  }, [])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key !== 'Tab' || !ref.current) return

      const items = ref.current.querySelectorAll<HTMLElement>(FOCUSABLE)
      const first = items[0]
      const last = items[items.length - 1]

      // On boucle : Shift+Tab sur le premier va au dernier, Tab sur le dernier va au premier
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  return (
    <div className="modal-overlay">
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="m-title" ref={ref}>
        <h2 id="m-title">Préférences avancées</h2>
        <label htmlFor="lang">Langue</label>
        <select id="lang">
          <option>Français</option>
          <option>English</option>
        </select>
        <button onClick={onClose}>Fermer</button>
      </div>
    </div>
  )
}
