'use client';

export default function SignUpModal({ setIsSignUpModal }) {
    const closeModal = () => setIsSignUpModal(false);
    const createAccount = (e) => {
        e.preventDefault();
        closeModal();
    }

    return (
        <>
            <div className="opacity-50 bg-black fixed w-full h-full z-10" onClick={closeModal}/>
            <form onSubmit={createAccount}
                  className="fixed flex flex-col gap-3 z-20 bg-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-4">
                <input type="text" placeholder="E-Mail"/>
                <input type="password" placeholder="Password"/>
                <input type="text" placeholder="Mobile"/>
                <button type="submit" className="bg-sky-300">Create Account</button>
            </form>
        </>
    )
}