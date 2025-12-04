import { useNavigate } from 'react-router-dom';
import type { Service } from '../types';
import { useBookingStore } from '../store/bookingStore';

const mockServices: Service[]=
[
  {id:'1',name:'چکاپ عمومی',duration:30,price:150000},
  {id:'2',name:'مشاوره تخصصی',duration:45,price:250000},
  {id:'3',name:'آنالیز خون',duration:20,price:90000},
  {id:'4',name:'چکاپ کامل',duration:55,price:500000},
  {id:'5',name:'آزمایش اسپرم',duration:125,price:825000},
];
export default function SelectService() {
  const { setService } = useBookingStore();
  const navigate = useNavigate();

  const handleSelect = (service: Service) => {
    setService(service);
    navigate('/pick-time');
  };

  return (
    <div style={{
      maxWidth: '900px',
      margin: '0 auto',
      padding: '2rem',
      fontFamily: 'sans-serif',
    }}>
      <h2 style={{
        fontSize: '2rem',
        fontWeight: '600',
        marginBottom: '1.5rem',
        textAlign: 'center',
        color: '#d86f24ff'
      }}>
        سرویس مورد نظر خود را انتخاب کنید
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1.5rem',
      }}>
        {mockServices.map((service) => (
          <div
            key={service.id}
            onClick={() => handleSelect(service)}
            style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '1.5rem',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              cursor: 'pointer',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              border: '2px solid transparent',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
              e.currentTarget.style.border = '2px solid #13b726ff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
              e.currentTarget.style.border = '2px solid transparent';
            }}
          >
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              marginBottom: '0.5rem',
              color: '#2c3e50'
            }}>
              {service.name}
            </h3>
            <p style={{
              fontSize: '0.9rem',
              color: '#7f8c8d',
              marginBottom: '0.5rem'
            }}>
              ⏱️ {service.duration} دقیقه
            </p>
            <p style={{
              fontSize: '1.1rem',
              fontWeight: '700',
              color: '#099a21ff'
            }}>
              {service.price.toLocaleString()} تومان
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}