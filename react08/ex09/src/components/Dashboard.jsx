import { useQuery } from '@tanstack/react-query';
import { useUIStore } from '../stores/useUIStore';
import { useAuth } from '../contexts/AuthContext';

function fetchProjects() {
  return fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(r => r.json());
}

export default function Dashboard() {
  const { data: projects, isLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects,
  });

  const sidebarOpen = useUIStore(s => s.sidebarOpen);
  const toggle = useUIStore(s => s.toggleSidebar);
  const { user } = useAuth();

  return (
    <div>
      <header>
        <button onClick={toggle}>{sidebarOpen ? 'close' : 'open'}</button>
        <span>{user ? user.name : 'guest'}</span>
      </header>
      <main>
        {isLoading ? <div>Loading…</div> :
          <ul>{projects.map(p => <li key={p.id}>{p.title}</li>)}</ul>}
      </main>
    </div>
  );
}
