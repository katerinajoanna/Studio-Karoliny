import React, { useEffect, useState } from 'react';
import { getOffers, createOffer, updateOffer, deleteOffer } from '../services/offersService';     // funkcje z fetch()
import type { Offer } from '../types/Offer';


const AdminPanel: React.FC = () => {
    const [offers, setOffers] = useState<Offer[]>([]);
    const [newOffer, setNewOffer] = useState<Offer>({ category: '', service: '', price: 0, description: '' });
    const [editingOffer, setEditingOffer] = useState<Offer | null>(null);

    useEffect(() => {
        loadOffers();
    }, []);

    const loadOffers = async () => {
        const data = await getOffers();
        setOffers(data);
    };

    const handleCreate = async () => {
        if (!newOffer.category || !newOffer.service) return alert('Wypełnij wymagane pola');
        await createOffer(newOffer);
        setNewOffer({ category: '', service: '', price: 0, description: '' });
        loadOffers();
    };

    const handleDelete = async (id: string | undefined) => {
        if (!id) return;
        if (window.confirm('Czy na pewno chcesz usunąć tę ofertę?')) {
            await deleteOffer(id);
            loadOffers();
        }
    };

    const handleEditStart = (offer: Offer) => {
        setEditingOffer({ ...offer });       // kopiuje dane oferty do edycji
    };

    const handleEditSave = async () => {
        if (!editingOffer || !editingOffer._id) return;
        await updateOffer(editingOffer._id, editingOffer);
        setEditingOffer(null);
        loadOffers();
    };

    return (
        <div className="p-6">
            <h1 className="text-4xl text-red-800 mb-4">Admin Panel</h1>

            {/* Tabela ofert */}
            <table className="table-auto border-collapse border border-gray-400 w-full">
                <thead>
                    <tr>
                        <th className="border p-2">Kategoria</th>
                        <th className="border p-2">Usługa</th>
                        <th className="border p-2">Cena</th>
                        <th className="border p-2">Opis</th>
                        <th className="border p-2">Akcje</th>
                    </tr>
                </thead>
                <tbody>
                    {offers.map((offer) => (
                        <tr key={offer._id}>
                            <td className="border p-2">{offer.category}</td>
                            <td className="border p-2">{offer.service}</td>
                            <td className="border p-2">{offer.price}</td>
                            <td className="border p-2">{offer.description}</td>
                            <td className="border p-2">
                                <button
                                    className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                                    onClick={() => handleEditStart(offer)}
                                >
                                    Edytuj
                                </button>
                                <button
                                    className="bg-red-500 text-white px-2 py-1 rounded"
                                    onClick={() => handleDelete(offer._id)}
                                >
                                    Usuń
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Formularz dodawania nowej oferty */}
            <div className="mt-6">
                <h2 className="text-2xl mb-2">Dodaj nową ofertę</h2>
                <input
                    className="border p-1 mr-2"
                    placeholder="Kategoria"
                    value={newOffer.category}
                    onChange={(e) => setNewOffer({ ...newOffer, category: e.target.value })}
                />
                <input
                    className="border p-1 mr-2"
                    placeholder="Usługa"
                    value={newOffer.service}
                    onChange={(e) => setNewOffer({ ...newOffer, service: e.target.value })}
                />
                <input
                    className="border p-1 mr-2"
                    placeholder="Cena"
                    type="number"
                    value={newOffer.price}
                    onChange={(e) => setNewOffer({ ...newOffer, price: +e.target.value })}
                />
                <input
                    className="border p-1 mr-2"
                    placeholder="Opis"
                    value={newOffer.description}
                    onChange={(e) => setNewOffer({ ...newOffer, description: e.target.value })}
                />
                <button
                    className="bg-green-500 text-white px-4 py-2 rounded"
                    onClick={handleCreate}
                >
                    Dodaj ofertę
                </button>
            </div>

            {/* Formularz edycji oferty */}
            {editingOffer && (
                <div className="mt-6 p-4 border rounded bg-gray-50">
                    <h2 className="text-2xl mb-2">Edytuj ofertę</h2>
                    <input
                        className="border p-1 mr-2"
                        placeholder="Kategoria"
                        value={editingOffer.category}
                        onChange={(e) => setEditingOffer({ ...editingOffer, category: e.target.value })}
                    />
                    <input
                        className="border p-1 mr-2"
                        placeholder="Usługa"
                        value={editingOffer.service}
                        onChange={(e) => setEditingOffer({ ...editingOffer, service: e.target.value })}
                    />
                    <input
                        className="border p-1 mr-2"
                        placeholder="Cena"
                        type="number"
                        value={editingOffer.price}
                        onChange={(e) => setEditingOffer({ ...editingOffer, price: +e.target.value })}
                    />
                    <input
                        className="border p-1 mr-2"
                        placeholder="Opis"
                        value={editingOffer.description}
                        onChange={(e) => setEditingOffer({ ...editingOffer, description: e.target.value })}
                    />
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                        onClick={handleEditSave}
                    >
                        Zapisz zmiany
                    </button>
                    <button
                        className="bg-gray-400 text-white px-4 py-2 rounded"
                        onClick={() => setEditingOffer(null)}
                    >
                        Anuluj
                    </button>
                </div>
            )}
        </div>
    );
};

export default AdminPanel;
