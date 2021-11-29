import React from 'react'

const LoginForm = () => {
    return (
        <form className='login-form'>
            <div className='form-control'>
                <label>Username/Email</label>
                <input type='text' placeholder='abc@email.com' />
            </div>
            <div className='form-control'>
                <label>Password</label>
                <input type='password' />
            </div>

            <input className='form-control form-control-submit' type='submit' value='Log In' />
        </form>
    )
}

export default LoginForm
