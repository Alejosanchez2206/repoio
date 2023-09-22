import "./imagen.css";
import Image from "next/image";
export default function Imagen() {
    return (
        <div>
            <Image
                width={2000}
                height={1900}
                className="imgandroid"
                src="/android.png"
            />
        </div>
    )
}
