import { useParams } from "react-router-dom"
import { Footer } from "./Footer";
import { Header } from "./Header";
export function BonsaiDetails() {
    let { id } =useParams();
    return (
        <div>
            <Header />
            <div> Hola { id }</div>
            <Footer />
        </div>
    );
}