'use client';
export default function SignSection() {
    const onSignInModal = () => {
        console.log('사인인!')
    }
    const onSignUpModal = () =>{
        console.log('사인업!')
    }
    return (
        <div>
            <div className="flex gap-2">
                <button onClick={onSignInModal} className="px-3 py-2 bg-sky-300">SignIn</button>
                <button onClick={onSignUpModal} className="px-3 py-2 bg-sky-300">SignUp</button>
            </div>
        </div>
    )
}