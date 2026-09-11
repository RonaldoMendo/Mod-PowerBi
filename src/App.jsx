import { useState } from 'react'
import './App.css'
import descansoImg from '../public/descanso.jpg' // o '/descanso.jpg' si la dejas en public

const ESTUDIANTES_MORNING = [
  { id: 1, nombre: "Barriere García Aldo Enrique", archivo: "/morning/ENRIQUE.png" },
  { id: 2, nombre: "De Jesus Ortega Elias Josue", archivo: "/morning/ELIAS.png" },
  { id: 3, nombre: "Figueroa Henríquez Stephanie Michelle", archivo: "/morning/STEPHANIE.png" },
  { id: 4, nombre: "Flamenco Rivera Christhoper Wilfredo", archivo: "/morning/CHRISTHOPER.png" },
  { id: 5, nombre: "González Díaz Javier Edgardo", archivo: "/morning/JAVIER.png" },
  { id: 6, nombre: "Granados Marenco Danilo Antonio", archivo: "/morning/DANILO.png" },
  { id: 7, nombre: "Guerra Arévalo Ashly Lissette", archivo: "/morning/ASHLY.png" },
  { id: 8, nombre: "Guerrero Rivas Adriana Valeria", archivo: "/morning/ADRIANA.png" },
  { id: 9, nombre: "Guevara Moreno Elmer Mauricio", archivo: "/morning/ELMER.png" },
  { id: 10, nombre: "Hernández Alvarado Josué David", archivo: "/morning/JOSUÉ.png" },
  { id: 11, nombre: "Hernández González Fátima Gabriela", archivo: "/morning/FÁTIMA.png" },
  { id: 12, nombre: "Hernández Guzman Cristofher Gerar", archivo: "/morning/GERAR.png" },
  { id: 13, nombre: "López Franco Leonardo Fabricio", archivo: "/morning/LEONARDO.png" },
  { id: 14, nombre: "López Guardado Daniela Patricia", archivo: "/morning/DANIELA.png" },
  { id: 15, nombre: "Marin Mejia Ingrid Tatiana", archivo: "/morning/INGRID.png" },
  { id: 16, nombre: "Martínez Belloso Jennifer Stefany", archivo: "/morning/JENNIFER.png" },
  { id: 17, nombre: "Mendez Avalos Marilyn Janella", archivo: "/morning/MARILYN.png" },
  { id: 18, nombre: "Méndez Hernández Alan Ismael", archivo: "/morning/ALAN.png" },
  { id: 19, nombre: "Menjívar Melara Mateo Antonio", archivo: "/morning/MATEO MENJIVAR.png" },
  { id: 20, nombre: "Monterroza Castillo Natalia Melissa", archivo: "/morning/NATALIA.png" },
  { id: 21, nombre: "Orellana Arriaza José Mateo", archivo: "/morning/MATEO ORELLANA.png" },
  { id: 22, nombre: "Pineda Pimentel Madelinne Beatriz", archivo: "/morning/PIMENTEL.png" },
  { id: 23, nombre: "Quijada Pérez Keiry Alexandra", archivo: "/morning/KEIRY.png" },
  { id: 24, nombre: "Ramírez Hernández Keyli Tatiana", archivo: "/morning/KEYLI.png" },
  { id: 25, nombre: "Reyes Marroquín Rocio de los Ángeles", archivo: "/morning/ROCIO.png" },
  { id: 26, nombre: "Rivas Peña Brayan Ernesto", archivo: "/morning/BRAYAN.png" },
  { id: 27, nombre: "Rodríguez Salinas Yoselin Guadalupe", archivo: "/morning/JOSELIN.png" },
  { id: 28, nombre: "Rosales Cornejo Johanna Alejandra", archivo: "/morning/JOHANNA.png" },
  { id: 29, nombre: "Sánchez Rivera Débora Alexandra", archivo: "/morning/DÉBORA.png" },
  { id: 30, nombre: "Tovar Jovel Carlos Ezequiel", archivo: "/morning/TOVAR.png" },
  { id: 31, nombre: "Zarpate Aguilar Briseyda Marisela", archivo: "/morning/BRISEYDA.png" },
]

const ESTUDIANTES_AFTERNOON = [
    { id: 1, nombre: "Alvarenga Guirola Roxana Beatriz", archivo: "/afternoon/1 BEATRIZ.png" },
  { id: 2, nombre: "Fernández Navarro Victoria Gabriela", archivo: "/afternoon/2 VICTORIA.png" },
  { id: 3, nombre: "Flores Landaverde Damaris Abigail", archivo: "/afternoon/3 DAMARIS.png" },
  { id: 4, nombre: "García Hurtado Andrea Liliana", archivo: "/afternoon/4 LILIANA.png" },
  { id: 5, nombre: "Henríquez Ávalos Adriana Lucia", archivo: "/afternoon/5 LUCIA.png" },
  { id: 6, nombre: "Hernández Guardado Hernán Mauricio", archivo: "/afternoon/6 HERNAN.png" },
  { id: 7, nombre: "GHerrera Márquez Camila Alexandra", archivo: "/afternoon/7 MARQUEZ.png" },
  { id: 8, nombre: "Marroquín Aguilar Emerson Alejandro", archivo: "/afternoon/8 EMERSON.png" },
  { id: 9, nombre: "Montiel López Chris Johansen", archivo: "/afternoon/9 CHRIS.png" },
  { id: 10, nombre: "Navarrete Mejía Kevin Fernando", archivo: "/afternoon/10 - FERNANDO.png" },
  { id: 11, nombre: "Orellana Montes Linsay Linneth", archivo: "/afternoon/11 LINSAY.png" },
  { id: 12, nombre: "Osorio Cruz Camila Nicole ", archivo: "/afternoon/12 OSORIO.png" },
  { id: 13, nombre: "Pérez Regalo Katherine Marisol", archivo: "/afternoon/13 KATHERINE.png" },
  { id: 14, nombre: "Ramírez Candido Monica Samanda ", archivo: "/afternoon/14 MONICA.png" },
  { id: 15, nombre: "Ramírez Serrano Oscar Adalberto ", archivo: "/afternoon/15 OSCAR.png" },
  { id: 16, nombre: "Ramos Aguirre Jeferson José ", archivo: "/afternoon/16 JEFF.png" },
  { id: 17, nombre: "Rauda Paiz Carmen Alejandra ", archivo: "/afternoon/17 CARMEN.png" },
  { id: 18, nombre: "Rivas Miranda David Alejandro", archivo: "/afternoon/18 DAVID.png" },
  { id: 19, nombre: "Rodríguez Pineda Elida Yamileth", archivo: "/afternoon/19 YAMI.png" },
  { id: 20, nombre: "Trejo Martínez Ángel Gabriel", archivo: "/afternoon/20 GABRIEL.png" },
  { id: 21, nombre: "Vásquez Borja Stefany Alicia", archivo: "/afternoon/21 STEFANY.png" },
]

function App() {
  const [screen, setScreen] = useState('start') // 'start' | 'bonfire' | 'letter' | 'selectTurno' | 'reconocimiento'
  const [turno, setTurno] = useState('') // 'morning' | 'afternoon'
  const [busqueda, setBusqueda] = useState('')

  // Selección automática de la lista según el turno seleccionado
  const listaActual = turno === 'morning' ? ESTUDIANTES_MORNING : ESTUDIANTES_AFTERNOON

  const estudiantesFiltrados = listaActual.filter(est =>
    est.nombre.toLowerCase().includes(busqueda.toLowerCase())
  )

  const seleccionarTurno = (turnoSeleccionado) => {
    setTurno(turnoSeleccionado)
    setBusqueda('')
    setScreen('reconocimiento')
  }

  return (
    <main className="container">
      {/* PANTALLA 1: INTERFAZ ARCADE DE INICIO */}
      {screen === 'start' && (
        <div className="arcade-card">
          <div className="top-bar">
            <span>HI-SCORE</span>
            <span className="score">123000</span>
            <div className="hearts">❤️❤️❤️❤️❤️</div>
          </div>

          <h1 className="title-start">CLICK TO CONTINUE</h1>
          <p className="subtitle">ARE YOU READY?</p>

          <div className="options">
            <button className="btn-option" onClick={() => setScreen('bonfire')}>
              YES ◀
            </button>
            <button
              className="btn-option"
              onClick={() => alert('¡Ey! No le creo, ¡Vamos! ¡YOU CAN DO IT!')}
            >
              NO
            </button>
          </div>
        </div>
      )}

      {/* PANTALLA 2: LA FOGATA DE DESCANSO */}
      {screen === 'bonfire' && (
        <div className="bonfire-card">
          <h2>Felicidades Soldado</h2>
          <p className="subtitle-bonfire">Has llegado al tramo final</p>

          <div className="image-container">
            <img src="/descanso.jpg" alt="Descanso junto a la fogata" />
          </div>

          <p className="quote">
            Descansa aquí un rato, sobreviviste a 11 de 12 módulos. Toma fuerzas para el nivel final.
          </p>

          <button className="btn-next" onClick={() => setScreen('letter')}>
            ¡Con mucho cariño lee esto ...! ▶
          </button>
        </div>
      )}

      {/* PANTALLA 3: TU MENSAJE PARA ELLOS */}
      {screen === 'letter' && (
        <div className="letter-card">
          <h2>✉️ De todo corazón para ustedes ...</h2>

          <div className="letter-content">
            <p>
              Sé que la carga académica entre el bachillerato y la beca durante estos 3 años ha sido inmensa. Ha habido días cansados y momentos duros, pero ya estamos a solo un paso.
            </p>
            <p>
              Wow, recuerdo como si fuera ayer. Mi primera clase con ustedes fue un 14 de Abril. Estaba muy nervioso, no sabía sus nombres, ahora puedo contar una historia, un momento de cada uno de ustedes que recordaré hasta el último día que nos veamos.
            </p>
            <p>
              Disfruten lo que queda, lo que viene en camino son las últimas aventuras juntos. Espero que puedan disfrutarlas, recuerden que aparte de ser su Teacher, soy su hermano ¡Supérate!, conozco o sé por todo lo que han pasado, por eso mi filosofía de ser el docente que me hubiera gustado tener.
            </p>
            <p>El ser docente le enseña a una persona a siempre sonreír, mostrar confianza y creer en que podemos alcanzar todo lo que nos proponemos, sino vean hasta donde han llegado, muchas personas se quedaron en el camino, compañeros como así Teachers. Es parte de crecer y darse cuenta que hay personas que solo dejan huellas y momentos que recordaremos por siempre</p>
            <p>
              <b>CON MUCHO CARIÑO, T-RONALDO</b>
            </p>
          </div>

          <div className="button-group">
            <button className="btn-reset" onClick={() => setScreen('start')}>
              🔄 Volver al inicio
            </button>
            <button className="btn-option highlight" onClick={() => setScreen('selectTurno')}>
              Ir a tu reconocimiento 💖
            </button>
          </div>
        </div>
      )}
      {/* PANTALLA 4: SELECCIÓN DE TURNO */}
      {screen === 'selectTurno' && (
        <div className="arcade-card">
          <h2 className="title-start">SELECT YOUR CLASS</h2>
          <p className="subtitle">¿A QUÉ TURNO PERTENECES?</p>

          <div className="options-vertical">
            <button className="btn-option-large" onClick={() => seleccionarTurno('morning')}>
              ☀️ TURNO MAÑANA (MORNING)
            </button>
            <button className="btn-option-large" onClick={() => seleccionarTurno('afternoon')}>
              🌙 TURNO TARDE (AFTERNOON)
            </button>
          </div>

          <button className="btn-reset" onClick={() => setScreen('letter')} style={{ marginTop: '20px' }}>
            ◀ Volver a la Carta
          </button>
        </div>
      )}

      {/* PANTALLA 5: LISTADO Y DESCARGA DE DIPLOMAS */}
      {screen === 'reconocimiento' && (
        <div className="students-card">
          <div className="top-bar">
            <span>TURNO: {turno.toUpperCase()}</span>
            <span>RECONOCIMIENTOS</span>
          </div>

          <h2 className="title-students">🏆 OBTÉN TU DIPLOMA</h2>
          <p className="subtitle-students">
            Busca tu nombre en la lista para descargar tu reconocimiento de Power BI:
          </p>

          <input
            type="text"
            placeholder="Buscar por nombre o apellido..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="search-input"
          />

          <div className="students-list">
            {estudiantesFiltrados.length > 0 ? (
              estudiantesFiltrados.map((est) => (
                <div key={est.id} className="student-item">
                  <span className="student-name">{est.nombre}</span>
                  <a
                    href={est.archivo}
                    download={`Diploma_PowerBI_${est.nombre.replace(/ /g, "_")}.png`}
                    className="btn-download"
                  >
                    ⬇ Descargar
                  </a>
                </div>
              ))
            ) : (
              <p className="no-results">No se encontró ningún estudiante en esta lista.</p>
            )}
          </div>

          <button className="btn-reset" onClick={() => setScreen('selectTurno')}>
            ◀ Cambiar de Turno
          </button>
        </div>
      )}
    </main>
  )
}

export default App  