// Imagen central: una vista compuesta del producto (tablero, matriz y calendario)
// dentro de un marco tipo ventana, en lugar de una fotografía de stock.
export default function ProductVisual() {
  return (
    <div className="product-visual" role="img" aria-label="Vista del producto ViveBien: tablero de tareas, matriz de priorización y calendario de bloques de tiempo">
      <div className="product-visual__bar">
        <span />
        <span />
        <span />
        <p>app.vivebien.pe</p>
      </div>

      <div className="product-visual__grid">
        <div className="mockup-board">
          <p className="mockup-label">Tablero</p>
          <div className="mockup-board__col">
            <span className="mockup-card" />
            <span className="mockup-card" />
          </div>
          <div className="mockup-board__col">
            <span className="mockup-card mockup-card--wide" />
          </div>
          <div className="mockup-board__col">
            <span className="mockup-card" />
          </div>
        </div>

        <div className="mockup-matrix">
          <p className="mockup-label">Prioridades</p>
          <div className="mockup-matrix__grid">
            <span className="mockup-matrix__cell mockup-matrix__cell--q1" />
            <span className="mockup-matrix__cell mockup-matrix__cell--q2" />
            <span className="mockup-matrix__cell mockup-matrix__cell--q3" />
            <span className="mockup-matrix__cell mockup-matrix__cell--q4" />
          </div>
        </div>

        <div className="mockup-calendar">
          <p className="mockup-label">Bloques de tiempo</p>
          <span className="mockup-calendar__block mockup-calendar__block--a" />
          <span className="mockup-calendar__block mockup-calendar__block--b" />
          <span className="mockup-calendar__block mockup-calendar__block--c" />
          <span className="mockup-calendar__block mockup-calendar__block--d" />
        </div>
      </div>
    </div>
  )
}
