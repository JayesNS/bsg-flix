import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {useAuth} from '../../context';

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
      className="SignInBox"
    >
      <Controller
        name="email"
        rules={{required: 'Email is required'}}
        control={control}
        render={({field, fieldState: {invalid}}) => (
          <input
            type="text"
            placeholder="E-mail"
            style={{borderColor: invalid ? 'red' : 'grey'}}
            {...field}
          />
        )}
      />
      {errors.email && <>{errors.email.message}</>}
      <Controller
        name="password"
        rules={{required: 'Password is required'}}
        control={control}
        render={({field, fieldState: {invalid}}) => (
          <input
            type="password"
            placeholder="Password"
            style={{borderColor: invalid ? 'red' : 'grey'}}
            {...field}
          />
        )}
      />
      {errors.password && <>{errors.password.message}</>}
      <div className="SignInBox__buttons">
        <button
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
