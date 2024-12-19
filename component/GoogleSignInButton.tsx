import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';
import { FC, ReactNode } from 'react';


interface GoogleSignInButtonProps {
  children: ReactNode;
}
const GoogleSignInButton: FC<GoogleSignInButtonProps> = ({ children }) => {
  const loginWithGoogle =async () => {
    try{
      await signIn('google', { callbackUrl: 'http://localhost:3000/admin' });

    }
    catch(error){
      console.log(error)
    } finally{

    }
  }


  return (
    <Button onClick={loginWithGoogle} className='w-full'>
      {children}
    </Button>
  );
};

export default GoogleSignInButton;