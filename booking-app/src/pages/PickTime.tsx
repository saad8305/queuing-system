import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBookingStore } from '../store/bookingStore';

export default function PickTime() {
  const { booking, setDate, setTime } = useBookingStore();
  const { service: selectedService } = booking;
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const generateTimeSlots = () => {
    const slots: string[] = [];
    let hour = 8;
    while (hour < 18) {
      slots.push(`${hour.toString().padStart(2, '0')}:00`);
      slots.push(`${hour.toString().padStart(2, '0')}:30`);
      hour += 1;
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();
  const handleConfirmTime = () => {
    if (!selectedDate || !selectedTime) {
      alert('لطفاً تاریخ و ساعت را انتخاب کنید.');
      return;
    }
    navigate('/confirm');
  };
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setSelectedDate(today);
    setDate(today);
  }, [setDate]);
  useEffect(() => {
    if (!selectedService) {
      navigate('/select-service');
    }
  }, [selectedService, navigate]);

  if (!selectedService) {
    return null;
  }
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
        marginBottom: '1.5rem'
      }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: '600',
          marginBottom: '0.5rem',
          color: '#2c3e50'
        }}>
          انتخاب تاریخ و ساعت
        </h2>
        <p style={{
          fontSize: '1rem',
          color: '#7f8c8d',
          marginBottom: '1rem'
        }}>
          سرویس: <strong>{selectedService.name}</strong>
        </p>
      </div>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '1.5rem',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        marginBottom: '1.5rem'
      }}>
        <label htmlFor="date" style={{
          display: 'block',
          fontSize: '0.9rem',
          fontWeight: '600',
          marginBottom: '0.5rem',
          color: '#2c3e50'
        }}>
          تاریخ رزرو:
        </label>
        <input
          type="date"
          id="date"
          value={selectedDate}
          onChange={(e) => {
            setSelectedDate(e.target.value);
            setDate(e.target.value);
          }}
          min={new Date().toISOString().split('T')[0]}
          style={{
            width: '100%',
            padding: '0.75rem',
            border: '1px solid #ddd',
            borderRadius: '8px',
            fontSize: '1rem',
            transition: 'border-color 0.2s ease'
          }}
          onFocus={(e) => e.currentTarget.style.borderColor = '#3498db'}
          onBlur={(e) => e.currentTarget.style.borderColor = '#ddd'}
        />
      </div>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '1.5rem',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        marginBottom: '1.5rem'
      }}>
        <label style={{
          display: 'block',
          fontSize: '0.9rem',
          fontWeight: '600',
          marginBottom: '0.5rem',
          color: '#2c3e50'
        }}>
          ساعت رزرو:
        </label>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
          gap: '0.5rem',
          marginTop: '0.5rem'
        }}>
          {timeSlots.map((time) => (
            <button
              key={time}
              type="button"
              onClick={() => {
                setSelectedTime(time);
                setTime(time);
              }}
              style={{
                padding: '0.5rem',
                border: '1px solid #ddd',
                borderRadius: '8px',
                backgroundColor: selectedTime === time ? '#3498db' : 'white',
                color: selectedTime === time ? 'white' : '#333',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                fontSize: '0.9rem'
              }}
              onMouseEnter={(e) => {
                if (selectedTime !== time) {
                  e.currentTarget.style.backgroundColor = '#ecf0f1';
                  e.currentTarget.style.borderColor = '#bdc3c7';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedTime !== time) {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.borderColor = '#ddd';
                }
              }}
            >
              {time}
            </button>
          ))}
        </div>
      </div>
      <button
        onClick={handleConfirmTime}
        disabled={!selectedDate || !selectedTime}
        style={{
          width: '100%',
          padding: '1rem',
          backgroundColor: selectedDate && selectedTime ? '#28a745' : '#ccc',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: selectedDate && selectedTime ? 'pointer' : 'not-allowed',
          fontSize: '1.1rem',
          fontWeight: '600',
          transition: 'background-color 0.2s ease',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }}
        onMouseEnter={(e) => {
          if (selectedDate && selectedTime) {
            e.currentTarget.style.backgroundColor = '#218838';
          }
        }}
        onMouseLeave={(e) => {
          if (selectedDate && selectedTime) {
            e.currentTarget.style.backgroundColor = '#28a745';
          }
        }}
      >
        ✅ تأیید زمان و ادامه
      </button>
    </div>
  );
}