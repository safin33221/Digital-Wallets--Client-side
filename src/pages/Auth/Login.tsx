import LoginForm from '@/components/Modules/Auth/LoginForm';
import image from '../../assets/images/6280661.jpg';
export default function Login() {
    return (
        <div className='grid md:grid-cols-2 min-h-screen'>
            <div className='md:block md:col-span-1 hidden h-full '>

                <img src={image} alt="" className='h-full' />

            </div>

            <div className='  m-auto md:col-span-1 w-full '>
                <LoginForm />
            </div>
        </div>
    );
};
