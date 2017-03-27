import React from 'react';
import TextInput from '../common/TextInput';
import { Link, IndexLink } from 'react-router';

const LoginForm = ({ user, onSave, onChange, saving }) => (
  <div className="test">
    <div className="login">
      <form>
        <h1>Login</h1>
        <TextInput
          name="email"
          placeholder="Username"
          required="required"
          onChange={onChange}
          value={user.email}
        />
        <TextInput
          name="password"
          type="password"
          placeholder="password"
          onChange={onChange}
          value={user.password}
          />
        <button
          type="submit"
          disabled={saving}
          onClick={onSave}
          className="btn btn-primary btn-block btn-large">{saving ? 'Logining in...' : 'Login'}
        </button>
        <Link to="/register" activeClassName="active"><span>Not a member? Sign up</span></Link>
      </form>
    </div>
  </div>
  );

LoginForm.propTypes = {
  onSave: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  user: React.PropTypes.object.isRequired,
  onChange: React.PropTypes.func.isRequired,
};

export default LoginForm;
