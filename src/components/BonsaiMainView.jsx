import { BonsaisGrid } from './BonsaisGrid'
import { Footer } from './Footer';
import { Header } from './Header';

export function BonsaiMainView() {
  return (
    <div>
      <header>
        {/*<h1> Bonsais </h1>*/}
        <Header />
      </header>
      <main>
        <BonsaisGrid />
      </main>
        <Footer />
    </div>
  );
}
