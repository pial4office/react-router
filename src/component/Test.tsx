import { Link } from 'react-router-dom';

export default function Test() {
  return (
    <div style={{ padding: '10px' }}>
      <Link to="hello">hello without / before path</Link>
      <br />
      <Link to="/hello">hello with /</Link>
      <Link to="/hello" reloadDocument>
        hello with reload
      </Link>
      <br />
      <Link to="..">.. in link</Link>
    </div>
  );
}
