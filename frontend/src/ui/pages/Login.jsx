import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useAuth} from '../../contexts/AuthContext';
import {TextInput, PasswordInput, Button, Title, Paper, Container} from '@mantine/core';

const Login = () => {
    const navigate = useNavigate();
    const {login} = useAuth();
    const [credentials, setCredentials] = useState({username: '', password: ''});
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await login(credentials.username, credentials.password);
            navigate('/dashboard');
        } catch (err) {
            setError('Invalid credentials or server error');
        }
    };

    return (
        <Container size={420} my={40}>
            <Title align="center" className="text-cyan-400 text-3xl font-bold">
                Welcome back
            </Title>
            <Paper withBorder shadow="md" p={30} mt={30} radius="md" className="bg-slate-800 text-gray-100">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <TextInput
                        label="Username"
                        name="username"
                        placeholder="Your username"
                        value={credentials.username}
                        onChange={handleChange}
                        required
                        className="text-white"
                    />
                    <PasswordInput
                        label="Password"
                        name="password"
                        placeholder="Your password"usu
                        value={credentials.password}
                        onChange={handleChange}
                        required
                        className="text-white"
                    />
                    {error && <div className="text-red-400 text-sm">{error}</div>}
                    <Button fullWidth type="submit" className="bg-cyan-400 text-black hover:bg-cyan-300">
                        Login
                    </Button>
                </form>
            </Paper>
        </Container>
    );
};

export default Login;

