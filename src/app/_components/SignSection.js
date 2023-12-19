'use client';
import SignInModal from '@/app/_modals/SignInModal';
import SignUpModal from '@/app/_modals/SignUpModal';
import {useState} from 'react';

export default function SignSection() {
    // Style Constants
    const INPUT_STYLE = "border-2 border-gray-400 px-2 py-1 rounded mt-1 w-full";
    const SIGN_BUTTON_STYLE = "w-full py-3 bg-sky-300 rounded-xl";

    const [isSignInModal, setIsSignInModal] = useState(false);
    const [isSignUpModal, setIsSignUpModal] = useState(false);

    const onSignInModal = () => {
        setIsSignInModal(true);
        console.log('사인인~', isSignInModal)
    }
    const onSignUpModal = () =>{
        setIsSignUpModal(true);
        console.log('사인업!');
    }


    return (
        <>
            <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] flex flex-col gap-6 p-3">
                <h1 className="font-bold text-3xl">
                    Sign In to Your Email!
                </h1>
                <label>
                    <p>E-Mail</p>
                    <input placeholder="E-Mail" className={INPUT_STYLE}/>
                </label>
                <label>
                    <p>Password</p>
                    <input placeholder="Password" className={INPUT_STYLE}/>
                </label>

                <div className="flex gap-4 justify-around mt-4">
                    <button onClick={onSignInModal} className={SIGN_BUTTON_STYLE}>SignIn</button>
                    <button onClick={onSignUpModal} className={SIGN_BUTTON_STYLE}>SignUp</button>
                </div>
            </div>
            {isSignInModal ? <SignInModal setIsSignInModal={setIsSignInModal}/> : undefined}
            {isSignUpModal ? <SignUpModal setIsSignUpModal={setIsSignUpModal}/> : undefined}
        </>
    )
}