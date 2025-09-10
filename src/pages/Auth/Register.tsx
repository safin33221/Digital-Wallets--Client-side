import RegisterForm from '@/components/Modules/Auth/RegisterForm';
import image from '../../assets/images/7194068.jpg';
export default function Register() {
    return (
        <div className='grid grid-cols-2 min-h-screen'>
            <div className='  m-auto col-span-2 md:col-span-1 w-full  '>
                <RegisterForm />
            </div>
            <div className=' hidden md:block md:col-span-1 grow-1 h-full'>
                <img src={image} alt="" className='h-full' />


            </div>
        </div>
    );
};
