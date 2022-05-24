import { useParams } from "react-router-dom"
export function BonsaiDetails() {
    let { id } =useParams();
    return <div> Hola { id }</div>
}