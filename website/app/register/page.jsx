"use client";

import styles from "./page.module.css";

export default function RegisterPage() {
  return (
    <div className={styles.container}>
      {/* Logo */}
      <img src="/logo.png" alt="Logo" />

      {/* Page Title */}
      <h2 className="font-jersey" style={{ color: "var(--primary)" }}>
        Team Registration
      </h2>

      <p style={{ marginBottom: "30px" }}>
        AR Treasure Hunt Event
      </p>

      {/* Main Box */}
      <div
        className={styles.formBox}
        style={{
          textAlign: "center",
          padding: "40px 20px",
        }}
      >
        {/* Closed Title */}
        <h1
          className="font-jersey"
          style={{
            fontSize: "48px",
            color: "var(--dark)",
            marginBottom: "12px",
            lineHeight: "1.1",
          }}
        >
          Registration
          <br />
          Closed
        </h1>

        {/* Description */}
        <p
          style={{
            fontSize: "14px",
            color: "#6f6a60",
            maxWidth: "420px",
            margin: "0 auto 30px",
          }}
        >
          Thank you for your overwhelming interest!
          <br />
          Team registrations are now officially closed.
        </p>

        {/* Mascot */}
        <img
          src="/mascot-char.png"
          alt="Mascot"
          style={{
            width: "220px",
            margin: "0 auto",
            display: "block",
            opacity: 0.95,
          }}
        />

        {/* Info */}
        <div
          style={{
            marginTop: "24px",
            fontSize: "13px",
            color: "#8b4513",
            fontWeight: "600",
          }}
        >
          🚫 No further registrations are accepted
        </div>
      </div>

      {/* Mountain Footer */}
      <div className={styles.footerImage}>
        <img src="/mountain.png" alt="Mountain" />
      </div>
    </div>
  );
}
