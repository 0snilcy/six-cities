import { Link } from 'react-router-dom';
function NotFoundScreen() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
        textAlign: 'center',
      }}
    >
      <p>
        <b>404. PAGE NOT FOUND</b>
      </p>
      <Link to="/">
        <p style={{ color: '#4481c3' }}>Вернуться на главный экран</p>
      </Link>
    </div>
  );
}
export default NotFoundScreen;
