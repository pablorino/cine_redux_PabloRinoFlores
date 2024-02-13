import React from 'react';
import { useSelector } from 'react-redux';

function Tickets() {

    let tickets = useSelector(state => state.tickets.tickets);
    console.log(tickets);

    return (
        <div className="container mx-auto py-8 px-32">
            <div>
                <h2 className="text-3xl font-semibold mb-4">Tickets</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {tickets.map((ticket, index) => (
                        <div
                            key={index}
                            className="relative bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 mb-10 mt-10"
                        >
                            <h3 className="text-lg font-bold p-4">{ticket.title}</h3>
                            <div className="p-4">
                                <p className="text-sm">Fecha: {ticket.date}</p>
                                <p className="text-sm">Hora: {ticket.time}</p>
                                <p className="text-sm">Número de entradas: {ticket.numTickets}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Tickets;
