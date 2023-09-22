import { data } from "@/app/data"
export default function Forminfo() {
    return (
        <>
            <h1 className='tituloApp'>{data.tituloApp}</h1>
            <h1 className='AppName'>{data.AppName}</h1>
            <h1 className='AppNameTitle'>{data.AppVersion}</h1>
            <h1 className='AppDescription'>{data.Description}</h1>
        </>
    )
}
