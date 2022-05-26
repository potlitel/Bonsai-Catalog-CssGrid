import { BonsaisGrid } from './BonsaisGrid'
import { Footer } from './Footer';

export function BonsaiMainView() {
  return (
    <div>
      <header>
        <h1> Bonsais </h1>
      </header>
      <main>
        <BonsaisGrid />
      </main>
        <Footer />
    </div>
  );
}
