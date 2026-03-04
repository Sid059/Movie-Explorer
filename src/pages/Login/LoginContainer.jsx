import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import { mockUsers } from '../../data/mockUsers';
import Login from './Login';

// Validation functions
const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return 'Email is required';
    if (!emailRegex.test(email)) return 'Please enter a valid email address';
    return '';
};

const validatePassword = (password) => {
    if (!password) return 'Password is required';
    if (password.length < 8) return 'Password must be at least 8 characters';
    return '';
};


//function to find user by credentials
const findUserByCredentials = (email, password) => {
    return mockUsers.find(
        user => user.email === email && user.password === password
    );
};

export default function LoginContainer() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    
    const navigate = useNavigate();
    const location = useLocation();
    const { login } = useAppContext();
    
    const from = location.state?.from?.pathname || '/';
    
    const handleEmailChange = ({ target }) => {
        const { value }= target;
        setEmail(value);
        setEmailError(validateEmail(value));
    };
    
    const handlePasswordChange = ({ target }) => {
        const { value }= target;
        setPassword(value);
        setPasswordError(validatePassword(value));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        
        // Validate all fields
        const emailValidation = validateEmail(email);
        const passwordValidation = validatePassword(password);
        
        setEmailError(emailValidation);
        setPasswordError(passwordValidation);
        
        if (emailValidation || passwordValidation) {
            return; // Stop if validation fails
        }
        
        // Find user in mock database
        const user = findUserByCredentials(email, password);
        
        if (user) {
            // Login successful - store user info (excluding password)
            const { password: _, ...userWithoutPassword } = user;
            login(userWithoutPassword);
            navigate(from, { replace: true });
        } else {
            setError('Invalid email or password');
        }
    };
    
    return (
        <Login 
            email={email}
            password={password}
            error={error}
            emailError={emailError}
            passwordError={passwordError}
            onEmailChange={handleEmailChange}
            onPasswordChange={handlePasswordChange}
            onSubmit={handleSubmit}
        />
    );
}