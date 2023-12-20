'use client';

import {useRef, useState} from 'react';

export default function SignInModal({ setIsSignInModal }) {
    const passwordRef = useRef(null);

    const [emailTxt, setEmailTxt] = useState("");
    const [passwordTxt, setPasswordTxt] = useState("");

    const closeModal = () => setIsSignInModal(false);
    const signIn = (e) => {
        e.preventDefault();
        if (!passwordTxt) return passwordRef.current.focus();
        console.log('email: ', emailTxt, '\npassword: ', passwordTxt);
    };
    const setInputState = (e, setState) => setState(e.target.value);

    return (
        <>
            <div className="opacity-50 bg-black fixed w-full h-full z-10" onClick={closeModal}/>
            <form onSubmit={signIn} className="fixed flex flex-col gap-3 z-20 bg-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-4">
                <input
                    type="text"
                    placeholder="E-Mail"
                    onChange={(e) => setInputState(e, setEmailTxt)}
                    value={emailTxt}
                />
                <input
                    ref={passwordRef}
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setInputState(e, setPasswordTxt)}
                    value={passwordTxt}
                />
                <button type='submit' className='bg-sky-300'>Confirm</button>
            </form>
        </>
    )
}