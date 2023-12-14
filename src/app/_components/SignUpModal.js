export default function SignUpModal() {
    const createAccount = (e) => {
        e.preventDefault();
        console.log('계정생성');
    }

    return (
        <form onSubmit={createAccount}>
            <input type="text" placeholder="E-Mail"/>
            <input type="password" placeholder="Password"/>
            <input type="text" placeholder="Mobile"/>
        </form>
    )
}