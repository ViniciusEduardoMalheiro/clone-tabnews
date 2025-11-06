import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [text, setText] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("minhaCarta") || "";
    setText(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("minhaCarta", text);
  }, [text]);

  function handleCopy() {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      alert("Carta copiada para a área de transferência 💌");
    }
  }

  function handleDownload() {
    const blob = new Blob([text || ""], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "minha-carta.txt";
    a.click();
    URL.revokeObjectURL(url);
  }

  function handleClear() {
    if (confirm("Tem certeza que quer limpar a carta?")) {
      setText("");
      localStorage.removeItem("minhaCarta");
    }
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Minha Carta de Amor</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Poppins:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="page">
        <div className="float-hearts" aria-hidden="true">
          <span className="heart h1">❤</span>
          <span className="heart h2">❤</span>
          <span className="heart h3">❤</span>
        </div>

        <header className="header">
          <h1>Para Você, meu amor</h1>
          <p className="subtitle">
            Escreva aqui sua carta — ela ficará salva no seu navegador.
          </p>
        </header>

        <section className="card">
          <label className="paper">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Querida...,"
              aria-label="Escreva sua carta"
            />
          </label>

          <div className="actions">
            <button onClick={handleCopy} className="btn primary">
              💌 Copiar carta
            </button>
            <button onClick={handleDownload} className="btn">
              📥 Baixar
            </button>
            <button onClick={handleClear} className="btn danger">
              🧽 Limpar
            </button>
          </div>
        </section>

        <footer className="footer">
          <small>
            Toque no coração para animar 💖 — Responsivo para mobile
          </small>
        </footer>
      </main>

      <style jsx>{`
        :root {
          --bg1: #fff5f7;
          --bg2: #ffeef8;
          --accent: #e76b8a;
          --accent-2: #ff9bb3;
          --paper: rgba(255, 255, 255, 0.9);
        }

        * {
          box-sizing: border-box;
        }
        body,
        html,
        #__next {
          height: 100%;
          margin: 0;
          font-family: "Poppins", system-ui, -apple-system, "Segoe UI", Roboto,
            "Helvetica Neue", Arial;
        }

        .page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding: 48px;
          background: radial-gradient(
              1200px 400px at 10% 10%,
              rgba(255, 155, 190, 0.12),
              transparent
            ),
            linear-gradient(135deg, var(--bg1), var(--bg2));
          background-attachment: fixed;
          position: relative;
        }

        .float-hearts {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .heart {
          position: absolute;
          font-size: 28px;
          opacity: 0.12;
          animation: float 6s ease-in-out infinite;
        }
        .h1 {
          left: 10%;
          top: 18%;
          animation-duration: 7s;
          transform: rotate(-10deg);
        }
        .h2 {
          right: 8%;
          top: 40%;
          animation-duration: 5.5s;
          transform: rotate(8deg);
        }
        .h3 {
          left: 50%;
          top: 70%;
          animation-duration: 9s;
          transform: rotate(-4deg);
        }

        @keyframes float {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.14;
          }
          50% {
            transform: translateY(-18px) scale(1.05);
            opacity: 0.22;
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: 0.14;
          }
        }

        .header {
          text-align: center;
          margin-bottom: 18px;
          color: #6b2740;
        }
        .header h1 {
          margin: 0;
          font-family: "Playfair Display", serif;
          font-size: 36px;
          letter-spacing: 0.6px;
          color: #6b2740;
        }
        .subtitle {
          margin: 6px 0 0;
          color: #8a5268;
          font-size: 14px;
        }

        .card {
          width: 820px;
          max-width: 100%;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.75),
            rgba(255, 250, 245, 0.8)
          );
          border-radius: 18px;
          padding: 28px;
          box-shadow: 0 12px 40px rgba(107, 39, 64, 0.12);
          display: flex;
          flex-direction: column;
          align-items: stretch;
          gap: 14px;
          backdrop-filter: blur(4px);
        }

        .paper {
          display: block;
          border-radius: 12px;
          padding: 18px;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.95),
            rgba(255, 250, 240, 0.95)
          );
          border: 1px solid rgba(230, 120, 140, 0.14);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6);
        }

        textarea {
          width: 100%;
          min-height: 320px;
          max-height: 70vh;
          resize: vertical;
          border: none;
          outline: none;
          background: transparent;
          font-family: "Playfair Display", serif;
          font-size: 18px;
          line-height: 1.6;
          color: #3f2a33;
        }

        .actions {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: flex-end;
        }

        .btn {
          background: transparent;
          border: 1px solid rgba(107, 39, 64, 0.12);
          color: #6b2740;
          padding: 10px 14px;
          border-radius: 10px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.18s ease;
        }
        .btn.primary {
          background: linear-gradient(90deg, var(--accent), var(--accent-2));
          color: white;
          border: none;
          box-shadow: 0 6px 18px rgba(231, 107, 138, 0.18);
        }
        .btn.danger {
          background: transparent;
          border-color: rgba(255, 90, 90, 0.12);
          color: #9b2e3e;
        }

        .btn:hover {
          transform: translateY(-3px);
        }

        .footer {
          margin-top: 18px;
          color: #8a5268;
          font-size: 13px;
          text-align: center;
        }

        /* Responsividade mobile */
        @media (max-width: 640px) {
          .page {
            padding: 20px;
          }
          .header h1 {
            font-size: 28px;
          }
          textarea {
            min-height: 260px;
            font-size: 16px;
          }
          .card {
            padding: 16px;
            border-radius: 14px;
          }
          .actions {
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
}
