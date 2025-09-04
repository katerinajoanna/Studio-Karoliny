const ContactForm: React.FC = () => {
    return (
        <div className="max-w-md mx-auto my-10 p-6 font-malayalam border border-spacing-11 rounded-md shadow-lg">
            <h2 className="text-2xl text-textPrimary font-bold mb-4">Formularz Kontaktowy</h2>

            <form action="#" method="POST">
                <div className="text-textSecondary mb-4">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Imię:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">E-mail:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required
                    />
                </div>

                <div className="mb-6">
                    <label
                        htmlFor="message"
                        className="block text-gray-700 text-sm font-bold mb-2">Wiadomość:
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                    </textarea>
                </div>

                <div>
                    {/* <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white/95 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Wyślij
                    </button> */}

                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 active:bg-blue-800 text-white/95 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-200">
                        Wyślij
                    </button>


                </div>
            </form>
        </div>
    )
};

export default ContactForm;