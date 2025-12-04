import { useBookingStore } from '../store/bookingStore';
import { useNavigate } from 'react-router-dom';

export default function Confirm() {
  const { booking } = useBookingStore();
  const navigate = useNavigate();
  const { service, date, time } = booking;
  if (!service || !date || !time) {
    return <div style={{ textAlign: 'center', padding: '2rem' }}>خطا: اطلاعات رزرو ناقص است.</div>;
  }
  const formattedDate = new Date(date).toLocaleDateString('fa-IR');
  const handleConfirm = () => {
    alert('رزرو با موفقیت ثبت شد!');
    navigate('/');
  };

  return (
    <div style={{
      maxWidth: '600px',
      margin: '0 auto',
      padding: '2rem',
      fontFamily: 'sans-serif'
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '2rem',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        marginBottom: '1.5rem',
        textAlign: 'center'
      }}>
        <div style={{
          width: '80px',
          height: '80px',
          backgroundColor: '#28a745',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1rem'
        }}>
          <span style={{ fontSize: '2rem', color: 'white' }}>✅</span>
        </div>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: '600',
          marginBottom: '0.5rem',
          color: '#2c3e50'
        }}>
          رزرو شما ثبت شد!
        </h2>
        <p style={{
          fontSize: '1rem',
          color: '#7f8c8d',
          marginBottom: '1rem'
        }}>
          جزئیات رزرو شما در ایمیل شما ارسال خواهد شد.
        </p>
      </div>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '1.5rem',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        marginBottom: '1.5rem'
      }}>
        <h3 style={{
          fontSize: '1.2rem',
          fontWeight: '600',
          marginBottom: '0.5rem',
          color: '#2c3e50'
        }}>
          جزئیات رزرو
        </h3>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '0.5rem',
          padding: '0.5rem',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px'
        }}>
          <span style={{ fontWeight: '500' }}>سرویس:</span>
          <span>{service.name}</span>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '0.5rem',
          padding: '0.5rem',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px'
        }}>
          <span style={{ fontWeight: '500' }}>تاریخ:</span>
          <span>{formattedDate}</span>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '0.5rem',
          padding: '0.5rem',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px'
        }}>
          <span style={{ fontWeight: '500' }}>ساعت:</span>
          <span>{time}</span>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '0.5rem',
          padding: '0.5rem',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px'
        }}>
          <span style={{ fontWeight: '500' }}>هزینه:</span>
          <span>{service.price.toLocaleString()} تومان</span>
        </div>
      </div>
      <button
        onClick={handleConfirm}
        style={{
          width: '100%',
          padding: '1rem',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '1.1rem',
          fontWeight: '600',
          transition: 'background-color 0.2s ease',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#007BFF'}
      >
        بازگشت به صفحه اصلی
      </button>
    </div>
  );
}