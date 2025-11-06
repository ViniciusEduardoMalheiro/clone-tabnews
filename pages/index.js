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

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Minha Carta de Amor</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Poppins:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Blinker:wght@100;200;300;400;600;700;800;900&family=Indie+Flower&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <main className="page">
        <div className="float-hearts">
          <span className="heart h1">💖</span>
          <span className="heart h2">💖</span>
          <span className="heart h3">💖</span>
        </div>

        <header className="header">
          <h1>Para Você, meu amor, Daniele</h1>
        </header>

        <section className="card">
          <label className="paper">
            <h3>
              Minha menina, estou fazendo essa cartinha para testar um projeto
              meu, mas quero aproveitar e falar sobre o quanto eu amo você e
              você é especial no meu coração, uma carta online não consegue
              demonstrar o quanto eu amo você. Só quero desejar um ótimo
              restante de dia para você, e falar que você pode contar comigo
              para qualquer problema ou fase dificil que tiver passando, sou seu
              apoio emocional e físico, sempre te amarei minha eterna
              namorada...
              <br></br>
              <br></br>
              Ass: Vinicius, seu grande amor.
            </h3>
          </label>
        </section>

        <footer className="footer">
          <small>
            Toque no coração para animar 💖 — Responsivo para mobile
          </small>
        </footer>
      </main>

      <style jsx>{`
        :root {
          --bg1: #c03f59ff;
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
          font-family: "Blinker";
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

        .float-hearts > span {
          color: #530013ff;
        }

        .heart {
          position: absolute;
          font-size: 28px;
          opacity: 70%;
          animation: float 6s ease-in-out infinite;
        }

        .heart h1 {
          color: #ff6f91ff;
        }

        .heart h2 {
          background-color: #ff9671ff;
        }

        .heart h3 {
          color: #ff9671ff;
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
          color: #441526ff;
        }

        .card h3 {
          color: #5a324bff;
          font-family: "Indie Flower", cursive;
        }

        @keyframes float {
          0% {
            transform: translateY(0) scale(1);
            opacity: 70%;
          }
          50% {
            transform: translateY(-18px) scale(1.05);
            opacity: 70%;
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
        .header h3 {
          color: #8e0034ff;
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
