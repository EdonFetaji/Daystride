import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import api from '../../axios/axios';

const Register = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({username: '', email: '', password: ''});
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const res = await api.post('/register/', form);
            if (res.status === 201) {
                navigate('/login');
            } else {
                setError('Unexpected response from server');
            }
        } catch (err) {
            setError('Registration failed. Try a different username or check your connection.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-700 text-gray-100">
            <div className="bg-gray-800 p-6 rounded-md w-full max-w-md shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-yellow-400">Register</h2>
                {error && <p className="text-red-400 text-sm mb-2">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        className="w-full p-2 rounded bg-gray-900 text-gray-100 border border-gray-600"
                        type="text"
                        placeholder="Username"
                        value={form.username}
                        onChange={(e) => setForm({...form, username: e.target.value})}
                        required
                    />
                    <input
                        className="w-full p-2 rounded bg-gray-900 text-gray-100 border border-gray-600"
                        type="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={(e) => setForm({...form, email: e.target.value})}
                        required
                    />
                    <input
                        className="w-full p-2 rounded bg-gray-900 text-gray-100 border border-gray-600"
                        type="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={(e) => setForm({...form, password: e.target.value})}
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-yellow-300 text-black py-2 rounded font-semibold hover:bg-yellow-400 transition"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
