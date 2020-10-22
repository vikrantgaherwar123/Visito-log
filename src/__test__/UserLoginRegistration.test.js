import React from 'react';
import { render, fireEvent, } from '@testing-library/react';
import UserLoginRegistration from '../components/LoginAndRegistrations/UserLoginRegistration'
import { BrowserRouter as Router } from 'react-router-dom';
import { act } from 'react-dom/test-utils';


//test cases for login 
describe("Login render Page", () => {
  it('renders the Login page', () => {
    render(<Router><UserLoginRegistration /></Router>);
  });

  it('render 2 input components', () => {
    const { getByTestId } = render(<Router><UserLoginRegistration /></Router>);
    expect(getByTestId('useremail')).toBeInTheDocument();
    expect(getByTestId('password')).toBeInTheDocument();
  });

  it('render 6 input components', () => {
    const { getByTestId } = render(<Router><UserLoginRegistration /></Router>);
    expect(getByTestId('firstname')).toBeInTheDocument();
    expect(getByTestId('lastname')).toBeInTheDocument();
    expect(getByTestId('mobnumber')).toBeInTheDocument();
    expect(getByTestId('organization')).toBeInTheDocument();
    expect(getByTestId('orgemail')).toBeInTheDocument();
    expect(getByTestId('signuppassword')).toBeInTheDocument();
  });

  it('renders a login submit button', () => {
    const { getByTestId } = render(<Router><UserLoginRegistration /></Router>);
    expect(getByTestId("signIn_btn")).toBeInTheDocument();
  });

  it('renders a registration submit button', () => {
    const { getByTestId } = render(<Router><UserLoginRegistration /></Router>);
    expect(getByTestId("register_btn")).toBeInTheDocument();
  });

  it('click forgot password link', async () => {
    const { getByTestId } = render(<Router><UserLoginRegistration /></Router>);
    await act(async () => {
      fireEvent.click(getByTestId("forgotPwdLink"));
    })
    expect(getByTestId("forgotPwdLink").textContent).toMatch('Forgot your password?')
  });

  it('click sign up form link', async () => {
    const { getByTestId } = render(<Router><UserLoginRegistration /></Router>);
    await act(async () => {
      fireEvent.click(getByTestId("signUpLink"));
    })
    expect(getByTestId("signUpLink").textContent).toMatch('Sign up for an account')
  });

  it('click sign up form link', async () => {
    const { getByTestId } = render(<Router><UserLoginRegistration /></Router>);
    await act(async () => {
      fireEvent.click(getByTestId("signInLink"));
    })
    expect(getByTestId("signInLink").textContent).toMatch('Sign up for an account')
  });
});


describe("Form behaviour", () => {
  it('validate user inputs, empty inputs', async () => {
    const { getByTestId } = render(<Router><UserLoginRegistration /></Router>);

    await act(async () => {
      fireEvent.change(getByTestId('useremail').querySelector('input'), {
        target: { value: '' },
      });

      fireEvent.change(getByTestId('password').querySelector('input'), {
        target: { value: '' },
      })
    });

    await act(async () => {
      fireEvent.submit(getByTestId("signIn_btn"))
    });

    await expect(getByTestId("loginerrMsg").textContent).toBe('All fields are required');

    // expect(getByText("Password required")).toBeInTheDocument();
    // expect(onSubmit).toHaveBeenCalled();
  });


  it('validate user inputs, empty inputs', async () => {
    const { getByTestId } = render(<Router><UserLoginRegistration /></Router>);

    await act(async () => {
      fireEvent.change(getByTestId('firstname').querySelector('input'), {
        target: { value: '' },
      });
    
      fireEvent.change(getByTestId('lastname').querySelector('input'), {
        target: { value: '' },
      })
      fireEvent.change(getByTestId('mobnumber').querySelector('input'), {
        target: { value: '' },
      })
      fireEvent.change(getByTestId('organization').querySelector('input'), {
        target: { value: '' },
      })
      fireEvent.change(getByTestId('orgemail').querySelector('input'), {
        target: { value: '' },
      })
      fireEvent.change(getByTestId('signuppassword').querySelector('input'), {
        target: { value: '' },
      })
    });

    await act(async () => {
      fireEvent.submit(getByTestId("register_btn"))
    });

    await expect(getByTestId("regerrMsg").textContent).toBe('All fields are required');

    // expect(getByText("Password required")).toBeInTheDocument();
    // expect(onSubmit).toHaveBeenCalled();
  });

  

  it('validate user inputs, empty useremail', async () => {
    const { getByTestId } = render(<Router><UserLoginRegistration /></Router>);
    await act(async () => {
      fireEvent.change(getByTestId('useremail').querySelector('input'), {
        target: { value: '' },
      });

      fireEvent.change(getByTestId('password').querySelector('input'), {
        target: { value: 'Abcde123*' },
      })
    });

    await act(async () => {
      fireEvent.submit(getByTestId("signIn_btn"))
    });

    await expect(getByTestId("loginerrMsg").textContent).toBe('Email required');

  });

  

  it('validate user inputs, invalid organization orgemail', async () => {
    const { getByTestId } = render(<Router><UserLoginRegistration /></Router>);
    await act(async () => {
      fireEvent.change(getByTestId('orgemail').querySelector('input'), {
        target: { value: 'R' },
      });

      fireEvent.change(getByTestId('signuppassword').querySelector('input'), {
        target: { value: '' },
      })
    });

    await act(async () => {
      fireEvent.submit(getByTestId("register_btn"))
    });

    await expect(getByTestId("regerrMsg").textContent).toBe('Email format must be like yourname@example.com');

  });

  it('validate user inputs, empty password', async () => {
    const { getByTestId } = render(<Router><UserLoginRegistration /></Router>);
    await act(async () => {
      fireEvent.change(getByTestId('orgemail').querySelector('input'), {
        target: { value: 'yourname@example.com' },
      });

      fireEvent.change(getByTestId('signuppassword').querySelector('input'), {
        target: { value: '' },
      })
    });

    await act(async () => {
      fireEvent.submit(getByTestId("register_btn"))
    });

    await expect(getByTestId("regerrMsg").textContent).toBe('Password required.');

  });
  
})