import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {useAuth} from '../../context';
import Input from '../Input/Input';

import './SignInBox.css';

interface SignInForm {
  email: string,
  password: string
}

interface SignInBoxProps {
  onSignIn?: (form: SignInForm) => void
}

const SignInBox = ({onSignIn}: SignInBoxProps) => {
  const {handleSubmit, control, formState: {errors}} = useForm<SignInForm>({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const {signIn} = useAuth();

  const handleSignIn = async (form: SignInForm) => {
    const {email, password} = form;
    await signIn(email, password);
    onSignIn && onSignIn(form);
  };

  return (
    <form
      className="SignInBox card"
    >
      <Controller
        name="email"
        rules={{required: 'Email is required'}}
        control={control}
        render={({field}) => (
          <Input
            type="text"
            label="E-mail"
            error={errors?.email?.message}
            {...field}
          />
        )}
      />
      <Controller
        name="password"
        rules={{required: 'Password is required'}}
        control={control}
        render={({field}) => (
          <Input
            type="password"
            label="Password"
            error={errors?.password?.message}
            {...field}
          />
        )}
      />
      <div className="SignInBox__buttons">
        <button
          className="flat"
          type="submit"
          onClick={handleSubmit(handleSignIn)}
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default SignInBox;
