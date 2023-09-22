import Forminfo from "@/componentes/Informacion/forminfo"
import Button from "@/componentes/Button/button"
import Imagen from "@/componentes/Imagen/imagen"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className='contenedorglobal'>
        <div className='contenedorderecho'>
          <Forminfo />
          <div className="Appbutton">
            <Button />
          </div>
          <label className="disponibilidad">Disponible solo para android</label>
        </div>
        <div className='contenedorizquierdo'>
          <Imagen />
        </div>
      </div>
    </main>
  )
}
