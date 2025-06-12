import './ContadorClicks.css';

export function ContadorClicks({ clicks, setClicks, ganador }) {
  return (
    <div className={`ContadorClicks ${ganador ? 'ganador' : ''}`}  >
      <div className="ContadorClicks-contador"   >Número de clicks: {clicks}</div>
      <div className="ContadorClicks-lienzo" onClick={() => setClicks(clicks + 1)}>
      </div>
    </div>
  )
}