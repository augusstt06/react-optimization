import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main>
      <h2>Optimization for React project</h2>
      <section>
        <button>
          <Link to='/input'>Input Component</Link>
        </button>
      </section>
    </main>
  );
}
