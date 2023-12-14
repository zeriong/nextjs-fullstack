export default function SignInModal() {
    const signIn = (e) => {
        e.preventDefault();
        console.log('로그인!');
    }

    return (
        <form onSubmit={signIn}>
            <input type="text" placeholder="E-Mail"/>
            <input type="password" placeholder="Password"/>
        </form>
    )
}