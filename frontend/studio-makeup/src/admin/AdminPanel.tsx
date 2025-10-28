import React, { useEffect, useState } from 'react';
import { getOffers, createOffer, updateOffer, deleteService, deleteCategory } from '../services/offersService';     // funkcje z fetch()
import type { Offer } from '../types/Offer';
import type { ServiceForm } from '../types/ServisForm';

const AdminPanel: React.FC = () => {
    const [offers, setOffers] = useState<Offer[]>([]);
    const [newService, setNewService] = useState<ServiceForm>({
        category: '',
        service: '',
        price: 0,
        description: '',
        duration: '',
    });
    const [editingOffer, setEditingOffer] = useState<ServiceForm | null>(null);

    useEffect(() => {
        loadOffers();
    }, []);

    const loadOffers = async () => {
        const data = await getOffers();
        setOffers(data);
    };

    const handleCreate = async () => {
        if (!newService.category || !newService.service) return alert('Wypełnij wymagane pola');
        await createOffer(newService);
        setNewService({ category: '', service: '', price: 0, description: '', duration: '' });
        loadOffers();
    };

    const handleDelete = async (serviceId: string | undefined) => {
        if (!serviceId)
            return;
        if (window.confirm('Czy na pewno chcesz usunąć tę usługę?')) {
            await deleteService(serviceId);
            loadOffers();
        }
    };

    // funkcja do usuwania calej kategorji
    const handleDeleteCategory = async (categoryId: string, categoryName: string) => {
        if (window.confirm(`Cy na pewno chcesz usunac cala kategorie "${categoryName} i wszystkie jej usługi?`)) {
            await deleteCategory(categoryId);
            loadOffers();
        }
    };

    const handleEditSave = async () => {
        if (!editingOffer) return;
        await updateOffer(editingOffer);
        setEditingOffer(null);
        loadOffers();
    };

    return (
        <div className="p-6">
            <h1 className="text-4xl text-red-800 mb-4">Admin Panel</h1>

            {/* Lista kategorii z usługami */}
            {offers.map((offer) => (
                <div key={offer._id} className="border rounded p-4 mb-4">
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="text-2xl font-bold">{offer.category}</h2>

                        {/* przycisk usuwania kategorii */}
                        <button
                            className="bg-red-500 text-white px-3 py-1 rounded"
                            onClick={() => offer._id && handleDeleteCategory(String(offer._id), offer.category)}
                        >
                            Usuń kategorię
                        </button>
                    </div>

                    {/* tabela usług */}
                    <table className="table-auto border-collapse border border-gray-400 w-full mb-2">
                        <thead>
                            <tr>
                                <th className="border p-2">Usługa</th>
                                <th className="border p-2">Cena</th>
                                <th className="border p-2">Opis</th>
                                <th className="border p-2">Czas trwania</th>
                                <th className="border p-2">Akcje</th>
                            </tr>
                        </thead>
                        <tbody>
                            {offer.services.map((srv) => (
                                <tr key={srv._id}>
                                    <td>{srv.service}</td>
                                    <td>{srv.price}</td>
                                    <td>{srv.description}</td>
                                    <td>{srv.duration || '-'}</td>
                                    <td>
                                        <button
                                            onClick={() =>
                                                setEditingOffer({
                                                    category: offer.category,
                                                    serviceId: srv._id,
                                                    service: srv.service,
                                                    price: srv.price,
                                                    description: srv.description,
                                                    duration: srv.duration || '',
                                                })
                                            }
                                            className="text-blue-600 mr-2"
                                        >
                                            Edytuj
                                        </button>
                                        <button
                                            onClick={() => handleDelete(srv._id)}
                                            className="text-red-600"
                                        >
                                            Usuń
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}

            {/* Formularz dodawania nowej oferty */}
            <div className="mt-6">
                <h2 className="text-2xl mb-2">Dodaj nową ofertę</h2>
                <input
                    className="border p-1 mr-2"
                    placeholder="Kategoria"
                    value={newService.category}
                    onChange={(e) => setNewService({ ...newService, category: e.target.value })}
                />
                <input
                    className="border p-1 mr-2"
                    placeholder="Usługa"
                    value={newService.service}
                    onChange={(e) => setNewService({ ...newService, service: e.target.value })}
                />
                <input
                    className="border p-1 mr-2"
                    placeholder="Cena"
                    type="number"
                    value={newService.price}
                    onChange={(e) => setNewService({ ...newService, price: +e.target.value })}
                />
                <input
                    className="border p-1 mr-2"
                    placeholder="Opis"
                    value={newService.description}
                    onChange={(e) => setNewService({ ...newService, description: e.target.value })}
                />
                <input
                    className="border p-1 mr-2"
                    placeholder="Czas trwania (np. 30 min)"
                    value={newService.duration || ''}
                    onChange={(e) => setNewService({ ...newService, duration: e.target.value })}
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
                    <input
                        className="border p-1 mr-2"
                        placeholder="Czas trwania"
                        value={editingOffer.duration}
                        onChange={(e) => setEditingOffer({ ...editingOffer, duration: e.target.value })}
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
