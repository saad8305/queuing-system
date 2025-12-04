// src/App.tsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    document.body.style.backgroundColor = '#ffffffff';
    document.body.style.color = '#000000ff';
  }, []);

  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: '100vh',
      padding: '2rem',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        fontWeight: '600',
        marginBottom: '1rem',
        color: '#2c3e50'
      }}>
        سیستم رزرواسیون آنلاین
      </h1>
      <p style={{
        fontSize: '1.1rem',
        color: '#222658ff',
        marginBottom: '2rem'
      }}>
        برای شروع، یک سرویس انتخاب کنید.
      </p>
      <button
        onClick={() => navigate('/select-service')}
        style={{
          padding: '1rem 2rem',
          backgroundColor: '#db6f6fff',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '1.1rem',
          fontWeight: '600',
          transition: 'background-color 0.2s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#007BFF'}
      >
        شروع رزرو
      </button>
    </div>
  );
}

export default App;