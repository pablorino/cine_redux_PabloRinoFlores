import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { setTickets } from '../store/slices/ticketsSlice';
import { useDispatch } from 'react-redux';

export async function loader({ params }) {
    const name = params.name;
    const foto = params.foto;
    return {
        name, foto
    };
}

function Formulario() {
    const { name, foto } = useLoaderData();


    const [showModal, setShowModal] = useState(false);

    const handleReservarClick = () => {
            setShowModal(true);
    };


    const dispatch=useDispatch()

    const añadirTicket = (e) => {
        e.preventDefault();
        dispatch(setTickets(formData));
        setShowModal(false);
    }

    const [formData, setFormData] = useState({
        title:name,
        date: '',
        time: '',
        numTickets: 1,
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
    };

    return (
        <div className="container w-1/2 mx-auto py-8">
            <h1 className="text-3xl font-bold mb-4">Reservar entradas para {name}</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="date" className="block text-lg font-medium text-gray-700 mb-2">Fecha:</label>
                    <input type="date" id="date" className="border border-gray-300 rounded px-4 py-2 w-full" onChange={handleChange} value={formData.date} required />
                </div>
                <div className="mb-4">
                    <label htmlFor="time" className="block text-lg font-medium text-gray-700 mb-2">Hora:</label>
                    <input type="time" id="time" className="border border-gray-300 rounded px-4 py-2 w-full" onChange={handleChange} value={formData.time} required />
                </div>
                <div className="mb-4">
                    <label htmlFor="numTickets" className="block text-lg font-medium text-gray-700 mb-2">Número de Tickets:</label>
                    <input type="number" id="numTickets" min="1" max="10" className="border border-gray-300 rounded px-4 py-2 w-full" onChange={handleChange} value={formData.numTickets} required />
                </div>
                <button onClick={handleReservarClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Reservar</button>
            </form>
            {showModal && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
                <div className="bg-white p-8 rounded-lg relative">
                    <button onClick={() => setShowModal(false)} className="absolute top-0 right-0 m-4 text-gray-600 hover:text-gray-800 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <h2 className="text-xl font-bold mb-4">Ingresa tus datos bancarios</h2>
                    
                    <form className="text-center">
                        <div className="mb-4">
                            <label htmlFor="cardNumber" className="block text-lg font-medium text-gray-700 mb-2">Número de tarjeta:</label>
                            <input type="text" id="cardNumber" className="border border-gray-300 rounded px-4 py-2 w-full" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="expiryDate" className="block text-lg font-medium text-gray-700 mb-2">Fecha de caducidad:</label>
                            <input type="text" id="expiryDate" className="border border-gray-300 rounded px-4 py-2 w-full" placeholder="MM/AA" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="cvv" className="block text-lg font-medium text-gray-700 mb-2">CVV:</label>
                            <input type="text" id="cvv" className="border border-gray-300 rounded px-4 py-2 w-full" required />
                        </div>
                        
                        <button type="submit" onClick={añadirTicket} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto block">Enviar</button>
                    </form>
                </div>
            </div>
            )}
        </div>
    );
}

export default Formulario;
