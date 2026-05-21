'use client'

import { useState, useEffect } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getTimeLeft(deadline: number): TimeLeft {
  const diff = Math.max(0, deadline - Date.now())
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

export default function EstimatePopup() {
  const [visible, setVisible] = useState(false)
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 7, hours: 0, minutes: 0, seconds: 0 })
  const [deadline, setDeadline] = useState<number | null>(null)

  useEffect(() => {
    const dismissed = localStorage.getItem('popup_dismissed')
    if (dismissed) return

    let dl = parseInt(localStorage.getItem('popup_deadline') || '0', 10)
    if (!dl || dl < Date.now()) {
      dl = Date.now() + 7 * 24 * 60 * 60 * 1000
      localStorage.setItem('popup_deadline', String(dl))
    }
    setDeadline(dl)
    setTimeLeft(getTimeLeft(dl))

    const showTimer = setTimeout(() => setVisible(true), 3000)
    return () => clearTimeout(showTimer)
  }, [])

  useEffect(() => {
    if (!deadline || !visible) return
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(deadline))
    }, 1000)
    return () => clearInterval(interval)
  }, [deadline, visible])

  const dismiss = () => {
    setVisible(false)
    localStorage.setItem('popup_dismissed', '1')
  }

  if (!visible) return null

  const pad = (n: number) => String(n).padStart(2, '0')

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={dismiss} />

      <div className="relative bg-white rounded-sm shadow-2xl max-w-md w-full overflow-hidden">
        <div className="bg-charcoal px-6 py-5">
          <button
            onClick={dismiss}
            className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors text-xl leading-none"
            aria-label="Close"
          >
            ✕
          </button>
          <p className="text-amber font-heading font-semibold text-xs tracking-widest uppercase mb-1">Limited Time Offer</p>
          <h3 className="font-heading font-bold text-white text-2xl">
            This Week Only: Free On-Site Estimate
          </h3>
        </div>

        <div className="px-6 py-6">
          <p className="text-gray-mid text-sm leading-relaxed mb-6">
            One of our project leads will come to your home, walk through your vision,
            and give you a <strong className="text-charcoal">real estimate — completely free</strong>, no obligation, no pressure.
          </p>

          <p className="text-charcoal font-heading font-semibold text-sm mb-3">Offer expires in:</p>
          <div className="grid grid-cols-4 gap-3 mb-6">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Mins', value: timeLeft.minutes },
              { label: 'Secs', value: timeLeft.seconds },
            ].map((unit) => (
              <div key={unit.label} className="bg-charcoal rounded-sm py-3 text-center">
                <p className="font-heading font-bold text-amber text-2xl">{pad(unit.value)}</p>
                <p className="text-white/50 text-xs mt-1 font-body">{unit.label}</p>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            onClick={dismiss}
            className="btn-primary w-full block text-center"
          >
            Claim My Free Estimate
          </a>
          <p className="text-gray-mid text-xs text-center mt-3">
            No commitment required · Serving all of Santa Clara County
          </p>
        </div>
      </div>
    </div>
  )
}
