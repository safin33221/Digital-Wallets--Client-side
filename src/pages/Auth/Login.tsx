import LoginForm from '@/components/Modules/Auth/LoginForm';
import image from '../../assets/images/6280661.jpg';
import { useGetMeQuery } from '@/redux/features/user/user.api';
import { Navigate } from 'react-router';
export default function Login() {
    const { data } = useGetMeQuery(undefined)
    if (data?.data?.email) {
        return <Navigate to={`/`} />
    }
    return (
        <div className='grid md:grid-cols-2 min-h-screen max-md:px-5 mx-auto'>
            <div className='md:block md:col-span-1 hidden h-full '>

                <img src={image} alt="" className='h-full' />

            </div>

            <div className='  m-auto md:col-span-1 w-full '>
                <LoginForm />
            </div>
        </div>
    );
};
