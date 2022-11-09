import SignUpForm from '../../components/SignUpForm/SignUpForm.component';
import SignInForm from '../../components/SignInForm/SignInForm.component';

import './Authentication.styles.scss';

const Authentication = () => {
  return (
    <div className="authentication-container">
      <div className="authentication-title">
        <h1>Sign In Page</h1>
      </div>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
