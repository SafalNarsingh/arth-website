"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function RegisterPage() {
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    teamName: "",
    leaderName: "",
    leaderCollege: "",
    leaderEmail: "",
    leaderPhone: "",

    member1Name: "",
    member1College: "",
    member1Email: "",
    member1Phone: "",

    member2Name: "",
    member2College: "",
    member2Email: "",
    member2Phone: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const isEmailValid = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isPhoneValid = (phone) =>
    /^[0-9]{10}$/.test(phone);

  const validateStep = () => {
    let err = {};

    if (step === 1) {
      if (!form.teamName) err.teamName = "Required";
      if (!form.leaderName) err.leaderName = "Required";
      if (!form.leaderCollege) err.leaderCollege = "Required";
      if (!isEmailValid(form.leaderEmail)) err.leaderEmail = "Invalid email";
      if (!isPhoneValid(form.leaderPhone)) err.leaderPhone = "Invalid phone";
    }

    if (step === 2) {
      if (!form.member1Name) err.member1Name = "Required";
      if (!form.member1College) err.member1College = "Required";
      if (!isEmailValid(form.member1Email)) err.member1Email = "Invalid email";
      if (!isPhoneValid(form.member1Phone)) err.member1Phone = "Invalid phone";
    }

    if (step === 3) {
      if (!form.member2Name) err.member2Name = "Required";
      if (!form.member2College) err.member2College = "Required";
      if (!isEmailValid(form.member2Email)) err.member2Email = "Invalid email";
      if (!isPhoneValid(form.member2Phone)) err.member2Phone = "Invalid phone";
    }

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const next = () => validateStep() && setStep(step + 1);
  const back = () => setStep(step - 1);

  const submit = () => {
    if (validateStep()) {
      alert("Team Registered Successfully ✅");
      console.log(form);
      // add your API call or further processing here
    }
  };

  return (
    <div className={styles.container}>
      {/* ===== LOGO + TITLE ===== */}
      <img src="/logo.png" alt="logo" height={60} />

      <h2>
        Team <span style={{ color: "#f4a024" }}>Registration</span>
      </h2>
      <p>Register your team for AR Treasure Hunt Event</p>

      {/* ===== FORM CARD ===== */}
      <div className={styles.formBox}>
        <button className={styles.registerBtn}>Register your team</button>

        {/* ===== STEP INDICATOR ===== */}
        <div className={styles.steps}>
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className={`${styles.circle} ${step === n ? styles.active : ""}`}
            >
              {n}
            </div>
          ))}
        </div>

        {/* ===== STEP 1 ===== */}
        {step === 1 && (
          <div className={styles.fade}>
            <h3 className={styles.title}>Team Details</h3>

            <div className={styles.field}>
              <label>Team Name *</label>
              <input
                name="teamName"
                value={form.teamName}
                onChange={handleChange}
                className={errors.teamName ? styles.errorInput : ""}
              />
              {errors.teamName && (
                <span className={styles.errorMsg}>{errors.teamName}</span>
              )}
            </div>

            <h4 style={{ color: "#f4a024" }}>Team Leader</h4>

            <div className={styles.field}>
              <label>Full Name *</label>
              <input
                name="leaderName"
                value={form.leaderName}
                onChange={handleChange}
                className={errors.leaderName ? styles.errorInput : ""}
              />
              {errors.leaderName && (
                <span className={styles.errorMsg}>{errors.leaderName}</span>
              )}
            </div>

            <div className={styles.field}>
              <label>College/Institution *</label>
              <input
                name="leaderCollege"
                value={form.leaderCollege}
                onChange={handleChange}
                className={errors.leaderCollege ? styles.errorInput : ""}
              />
              {errors.leaderCollege && (
                <span className={styles.errorMsg}>{errors.leaderCollege}</span>
              )}
            </div>

            <div className={styles.field}>
              <label>Email *</label>
              <input
                name="leaderEmail"
                value={form.leaderEmail}
                onChange={handleChange}
                className={errors.leaderEmail ? styles.errorInput : ""}
              />
              {errors.leaderEmail && (
                <span className={styles.errorMsg}>{errors.leaderEmail}</span>
              )}
            </div>

            <div className={styles.field}>
              <label>Phone Number *</label>
              <input
                name="leaderPhone"
                value={form.leaderPhone}
                onChange={handleChange}
                className={errors.leaderPhone ? styles.errorInput : ""}
              />
              {errors.leaderPhone && (
                <span className={styles.errorMsg}>{errors.leaderPhone}</span>
              )}
            </div>

            <button className={styles.nextBtn} onClick={next}>
              Next
            </button>
          </div>
        )}

        {/* ===== STEP 2 ===== */}
        {step === 2 && (
          <div className={styles.fade}>
            <h3 className={styles.title}>Team Member Details</h3>
            <h4 style={{ color: "#f4a024" }}>Team Member 1</h4>

            <div className={styles.field}>
              <label>Full Name *</label>
              <input
                name="member1Name"
                value={form.member1Name}
                onChange={handleChange}
                className={errors.member1Name ? styles.errorInput : ""}
              />
              {errors.member1Name && (
                <span className={styles.errorMsg}>{errors.member1Name}</span>
              )}
            </div>

            <div className={styles.field}>
              <label>College *</label>
              <input
                name="member1College"
                value={form.member1College}
                onChange={handleChange}
                className={errors.member1College ? styles.errorInput : ""}
              />
              {errors.member1College && (
                <span className={styles.errorMsg}>{errors.member1College}</span>
              )}
            </div>

            <div className={styles.field}>
              <label>Email *</label>
              <input
                name="member1Email"
                value={form.member1Email}
                onChange={handleChange}
                className={errors.member1Email ? styles.errorInput : ""}
              />
              {errors.member1Email && (
                <span className={styles.errorMsg}>{errors.member1Email}</span>
              )}
            </div>

            <div className={styles.field}>
              <label>Phone *</label>
              <input
                name="member1Phone"
                value={form.member1Phone}
                onChange={handleChange}
                className={errors.member1Phone ? styles.errorInput : ""}
              />
              {errors.member1Phone && (
                <span className={styles.errorMsg}>{errors.member1Phone}</span>
              )}
            </div>

            <div className={styles.btnRow}>
              <button className={styles.backBtn} onClick={back}>
                Back
              </button>
              <button className={styles.nextBtn} onClick={next}>
                Next
              </button>
            </div>
          </div>
        )}

        {/* ===== STEP 3 ===== */}
        {step === 3 && (
          <div className={styles.fade}>
            <h3 className={styles.title}>Team Member Details</h3>
            <h4 style={{ color: "#f4a024" }}>Team Member 2</h4>

            <div className={styles.field}>
              <label>Full Name *</label>
              <input
                name="member2Name"
                value={form.member2Name}
                onChange={handleChange}
                className={errors.member2Name ? styles.errorInput : ""}
              />
              {errors.member2Name && (
                <span className={styles.errorMsg}>{errors.member2Name}</span>
              )}
            </div>

            <div className={styles.field}>
              <label>College *</label>
              <input
                name="member2College"
                value={form.member2College}
                onChange={handleChange}
                className={errors.member2College ? styles.errorInput : ""}
              />
              {errors.member2College && (
                <span className={styles.errorMsg}>{errors.member2College}</span>
              )}
            </div>

            <div className={styles.field}>
              <label>Email *</label>
              <input
                name="member2Email"
                value={form.member2Email}
                onChange={handleChange}
                className={errors.member2Email ? styles.errorInput : ""}
              />
              {errors.member2Email && (
                <span className={styles.errorMsg}>{errors.member2Email}</span>
              )}
            </div>

            <div className={styles.field}>
              <label>Phone *</label>
              <input
                name="member2Phone"
                value={form.member2Phone}
                onChange={handleChange}
                className={errors.member2Phone ? styles.errorInput : ""}
              />
              {errors.member2Phone && (
                <span className={styles.errorMsg}>{errors.member2Phone}</span>
              )}
            </div>

            <button className={styles.nextBtn} onClick={submit}>
              Create Team
            </button>
          </div>
        )}
      </div>

      {/* ===== MOUNTAIN IMAGE ===== */}
      <div className={styles.footerImage}>
        <img src="/mountains.png" alt="mountains" />
      </div>

      {/* ===== FOOTER ===== */}
      <div className={styles.footer}>
        <div className={styles.left}>
          <p className={styles.title}>AR Treasure Hunt</p>
          <p>Contact:</p>
        </div>

        <div className={styles.centerBottom}>
          <p>artreasurehunt@gmail.com</p>
          <p>www.artreasurehunt.tech</p>
        </div>

        <div className={styles.right}>
          <p className={styles.post}>A POST EVENT OF</p>
          <p className={styles.event}>IT MEET 2025</p>
          <p className={styles.uni}>Kathmandu University</p>

          <p className={styles.memory}>RESTORE THE MEMORY</p>
        </div>
      </div>
    </div>
  );
}
