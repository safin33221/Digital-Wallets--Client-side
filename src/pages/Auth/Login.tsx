import LoginForm from '@/components/Modules/Auth/LoginForm';
import image from '../../assets/images/6280661.jpg';
export default function Login() {
    return (
        <div className='grid grid-cols-2'>
            <div className='col-span-1 '>
              
                <img src={image} alt="" className='' />

            </div>

            <div className='  m-auto col-span-1 w-full '>
                <LoginForm />
            </div>
        </div>
    );
};
