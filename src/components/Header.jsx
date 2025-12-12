// src/components/Header.jsx
import "../css/header.css";

export default function Header() {
    return (
        <header className="header container-fluid d-flex justify-content-between align-items-center">
            <h1 className="m-0">LDA Public DB</h1>
            <button className="btn btn-light fw-bold px-4">Entrar</button>
        </header>
    );
}