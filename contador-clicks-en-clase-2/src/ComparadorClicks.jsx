import "./ComparadorClicks.css"
import { useEffect, useState } from "react";
import { ContadorClicks } from "./ContadorClicks";

export function ComparadorClicks({ onChange, izquierda, derecha, historial })  {
  const [clicksIzquierda, setClicksIzquierda] = useState(izquierda)
  const [clicksDerecha, setClicksDerecha] = useState(derecha)
  const [historialClicks, setHistorialClicks] = useState(historial || [])

  const ganador =
    (clicksIzquierda > clicksDerecha) ? 'izquierda' :
    (clicksDerecha > clicksIzquierda) ? 'derecha' :
    'empate'

    useEffect(() => {
      onChange({
        izquierda: clicksIzquierda,
        derecha: clicksDerecha,
        historial: historialClicks,
      });
    }, [clicksIzquierda, clicksDerecha, historialClicks]);

  const registrarClick = (lado) => {
    setHistorialClicks([...historialClicks, lado]); 
  };

  return (
    <div className="ComparadorClicks">
      <ContadorClicks
        clicks={clicksIzquierda}
        setClicks={(nuevoValor) => {
          setClicksIzquierda(nuevoValor);
          registrarClick("izquierda"); // Registrar click en el historial
        }}
        ganador={ganador === 'izquierda'}
      />
      <ContadorClicks
        clicks={clicksDerecha}
        setClicks={(nuevoValor) => {
          setClicksDerecha(nuevoValor);
          registrarClick("derecha"); // Registrar click en el historial
        }}
        ganador={ganador === 'derecha'}
      />
    </div>
  );
}