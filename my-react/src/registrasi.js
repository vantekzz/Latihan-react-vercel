import React from "react";

function Registrasi() {
    const [email, setEmail] = React.useState("");
    const [nama, setNama] = React.useState("");
    const [hp, setHp] = React.useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // kirim ke server
        alert(`
            Nama: ${nama}
            Email: ${email}
            Hp: ${hp}
        `);
        console.log(`
            Nama: ${nama}
            Email: ${email}
            Hp: ${hp}
        `);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nama:
                <input
                    type="text"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                />
            </label>
            <label>
                Email:
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <label>
                Hp:
                <input
                    type="text"
                    value={hp}
                    onChange={(e) => setHp(e.target.value)}
                />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}

export default Registrasi;