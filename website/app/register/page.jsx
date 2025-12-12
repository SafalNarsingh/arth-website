"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [teamCode, setTeamCode] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

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

  const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPhoneValid = (phone) =>
    /^[0-9]{10,15}$/.test(phone.replace(/[\s\-\+\(\)]/g, ""));

  const validateStep = () => {
    let err = {};
    if (step === 1) {
      if (!form.teamName.trim()) err.teamName = "Team name is required";
      if (!form.leaderName.trim()) err.leaderName = "Leader name is required";
      if (!form.leaderCollege.trim()) err.leaderCollege = "College is required";
      if (!form.leaderEmail.trim()) {
        err.leaderEmail = "Email is required";
      } else if (!isEmailValid(form.leaderEmail)) {
        err.leaderEmail = "Invalid email format";
      }
      if (!form.leaderPhone.trim()) {
        err.leaderPhone = "Phone is required";
      } else if (!isPhoneValid(form.leaderPhone)) {
        err.leaderPhone = "Invalid phone (10-15 digits)";
      }
    }
    if (step === 2) {
      if (!form.member1Name.trim()) err.member1Name = "Name is required";
      if (!form.member1College.trim())
        err.member1College = "College is required";
      if (!form.member1Email.trim()) {
        err.member1Email = "Email is required";
      } else if (!isEmailValid(form.member1Email)) {
        err.member1Email = "Invalid email format";
      }
      if (!form.member1Phone.trim()) {
        err.member1Phone = "Phone is required";
      } else if (!isPhoneValid(form.member1Phone)) {
        err.member1Phone = "Invalid phone (10-15 digits)";
      }
    }
    if (step === 3) {
      if (!form.member2Name.trim()) err.member2Name = "Name is required";
      if (!form.member2College.trim())
        err.member2College = "College is required";
      if (!form.member2Email.trim()) {
        err.member2Email = "Email is required";
      } else if (!isEmailValid(form.member2Email)) {
        err.member2Email = "Invalid email format";
      }
      if (!form.member2Phone.trim()) {
        err.member2Phone = "Phone is required";
      } else if (!isPhoneValid(form.member2Phone)) {
        err.member2Phone = "Invalid phone (10-15 digits)";
      }
    }
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const next = () => validateStep() && setStep(step + 1);
  const back = () => setStep(step - 1);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(teamCode);
    alert("Team code copied to clipboard!");
  };

  const submit = async () => {
    if (!validateStep()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    const backendData = {
      teamName: form.teamName.trim(),
      leader: {
        name: form.leaderName.trim(),
        college: form.leaderCollege.trim(),
        email: form.leaderEmail.trim().toLowerCase(),
        phone: form.leaderPhone.trim(),
      },
      members: [
        {
          name: form.member1Name.trim(),
          college: form.member1College.trim(),
          email: form.member1Email.trim().toLowerCase(),
          phone: form.member1Phone.trim(),
        },
        {
          name: form.member2Name.trim(),
          college: form.member2College.trim(),
          email: form.member2Email.trim().toLowerCase(),
          phone: form.member2Phone.trim(),
        },
      ],
    };

    console.log("📤 Sending to backend:", backendData);

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(backendData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Registration failed");
      }

      console.log("✅ Registration successful!", result);

      // Set team code and move to step 4
      setTeamCode(result.data.teamCode);
      setStep(4);
    } catch (error) {
      console.error("❌ Registration error:", error);
      setSubmitStatus({
        type: "error",
        message: error.message || "Registration failed. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setForm({
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
    setStep(1);
    setTeamCode("");
    setSubmitStatus(null);
    setShowThankYou(false);
  };

  const handleFinish = () => {
    setShowThankYou(true);
  };

  return (
    <div className={styles.container}>
      {/* Logo */}
      <img src="/logo.png" alt="Logo" />

      {/* Page Title */}
      <h2>Team Registration</h2>
      <p>Register your team for AR Treasure Hunt Event</p>

      {/* Form Box */}
      <div className={styles.formBox}>
        {!showThankYou ? (
          <>
            <button className={styles.registerBtn}>Register your team</button>

            {/* Step Indicator */}
            <div className={styles.steps}>
              {[1, 2, 3, 4].map((n) => (
                <div
                  key={n}
                  className={`${styles.circle} ${
                    step >= n ? styles.active : ""
                  }`}
                >
                  {n}
                </div>
              ))}
            </div>

            {/* Error Alert */}
            {submitStatus && submitStatus.type === "error" && (
              <div
                style={{
                  padding: "12px 16px",
                  borderRadius: "8px",
                  marginBottom: "20px",
                  fontSize: "13px",
                  textAlign: "center",
                  background: "#f8d7da",
                  color: "#721c24",
                  border: "1px solid #f5c6cb",
                }}
              >
                {submitStatus.message}
              </div>
            )}

            {/* ===== STEP 1 ===== */}
            {step === 1 && (
              <div className={styles.fade}>
                <h3 className={styles.title}>Team Details</h3>

                <div className={styles.field}>
                  <label>Team Name *</label>
                  <input
                    type="text"
                    name="teamName"
                    value={form.teamName}
                    onChange={handleChange}
                    placeholder="Enter team name"
                  />
                  {errors.teamName && (
                    <div className={styles.errorMsg}>{errors.teamName}</div>
                  )}
                </div>

                <h4>Team Leader</h4>

                <div className={styles.field}>
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="leaderName"
                    value={form.leaderName}
                    onChange={handleChange}
                    placeholder="Enter full name"
                  />
                  {errors.leaderName && (
                    <div className={styles.errorMsg}>{errors.leaderName}</div>
                  )}
                </div>

                <div className={styles.field}>
                  <label>College/Institution *</label>
                  <input
                    type="text"
                    name="leaderCollege"
                    value={form.leaderCollege}
                    onChange={handleChange}
                    placeholder="Enter college name"
                  />
                  {errors.leaderCollege && (
                    <div className={styles.errorMsg}>
                      {errors.leaderCollege}
                    </div>
                  )}
                </div>

                <div className={styles.field}>
                  <label>Email *</label>
                  <input
                    type="email"
                    name="leaderEmail"
                    value={form.leaderEmail}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                  />
                  {errors.leaderEmail && (
                    <div className={styles.errorMsg}>{errors.leaderEmail}</div>
                  )}
                </div>

                <div className={styles.field}>
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    name="leaderPhone"
                    value={form.leaderPhone}
                    onChange={handleChange}
                    placeholder="9801234567"
                  />
                  {errors.leaderPhone && (
                    <div className={styles.errorMsg}>{errors.leaderPhone}</div>
                  )}
                </div>

                <button onClick={next} className={styles.nextBtn}>
                  Next
                </button>
              </div>
            )}

            {/* ===== STEP 2 ===== */}
            {step === 2 && (
              <div className={styles.fade}>
                <h3 className={styles.title}>Team Member Details</h3>
                <h4>Team Member 1</h4>

                <div className={styles.field}>
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="member1Name"
                    value={form.member1Name}
                    onChange={handleChange}
                    placeholder="Enter full name"
                  />
                  {errors.member1Name && (
                    <div className={styles.errorMsg}>{errors.member1Name}</div>
                  )}
                </div>

                <div className={styles.field}>
                  <label>College *</label>
                  <input
                    type="text"
                    name="member1College"
                    value={form.member1College}
                    onChange={handleChange}
                    placeholder="Enter college name"
                  />
                  {errors.member1College && (
                    <div className={styles.errorMsg}>
                      {errors.member1College}
                    </div>
                  )}
                </div>

                <div className={styles.field}>
                  <label>Email *</label>
                  <input
                    type="email"
                    name="member1Email"
                    value={form.member1Email}
                    onChange={handleChange}
                    placeholder="member1@example.com"
                  />
                  {errors.member1Email && (
                    <div className={styles.errorMsg}>{errors.member1Email}</div>
                  )}
                </div>

                <div className={styles.field}>
                  <label>Phone *</label>
                  <input
                    type="tel"
                    name="member1Phone"
                    value={form.member1Phone}
                    onChange={handleChange}
                    placeholder="9801234567"
                  />
                  {errors.member1Phone && (
                    <div className={styles.errorMsg}>{errors.member1Phone}</div>
                  )}
                </div>

                <div className={styles.btnRow}>
                  <button onClick={back} className={styles.backBtn}>
                    Back
                  </button>
                  <button onClick={next} className={styles.nextBtn}>
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* ===== STEP 3 ===== */}
            {step === 3 && (
              <div className={styles.fade}>
                <h3 className={styles.title}>Team Member Details</h3>
                <h4>Team Member 2</h4>

                <div className={styles.field}>
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="member2Name"
                    value={form.member2Name}
                    onChange={handleChange}
                    placeholder="Enter full name"
                  />
                  {errors.member2Name && (
                    <div className={styles.errorMsg}>{errors.member2Name}</div>
                  )}
                </div>

                <div className={styles.field}>
                  <label>College *</label>
                  <input
                    type="text"
                    name="member2College"
                    value={form.member2College}
                    onChange={handleChange}
                    placeholder="Enter college name"
                  />
                  {errors.member2College && (
                    <div className={styles.errorMsg}>
                      {errors.member2College}
                    </div>
                  )}
                </div>

                <div className={styles.field}>
                  <label>Email *</label>
                  <input
                    type="email"
                    name="member2Email"
                    value={form.member2Email}
                    onChange={handleChange}
                    placeholder="member2@example.com"
                  />
                  {errors.member2Email && (
                    <div className={styles.errorMsg}>{errors.member2Email}</div>
                  )}
                </div>

                <div className={styles.field}>
                  <label>Phone *</label>
                  <input
                    type="tel"
                    name="member2Phone"
                    value={form.member2Phone}
                    onChange={handleChange}
                    placeholder="9801234567"
                  />
                  {errors.member2Phone && (
                    <div className={styles.errorMsg}>{errors.member2Phone}</div>
                  )}
                </div>

                <div className={styles.btnRow}>
                  <button
                    onClick={back}
                    className={styles.backBtn}
                    disabled={isSubmitting}
                  >
                    Back
                  </button>
                  <button
                    onClick={submit}
                    className={styles.nextBtn}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Registering..." : "Create Team"}
                  </button>
                </div>
              </div>
            )}

            {/* ===== STEP 4 - SUCCESS ===== */}
            {step === 4 && (
              <div className={styles.fade}>
                <h3
                  className={styles.title}
                  style={{ color: "var(--primary)", fontSize: "20px" }}
                >
                  Your Team Code
                </h3>
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "13px",
                    color: "#6f6a60",
                    marginBottom: "18px",
                  }}
                >
                  Share this code with your team members
                </p>

                <div
                  style={{
                    background: "var(--bg)",
                    padding: "20px",
                    borderRadius: "12px",
                    textAlign: "center",
                    marginBottom: "16px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "32px",
                      fontWeight: "bold",
                      color: "var(--dark)",
                      letterSpacing: "4px",
                      marginBottom: "12px",
                      fontFamily: "monospace",
                    }}
                  >
                    {teamCode}
                  </div>
                  <button
                    onClick={copyToClipboard}
                    style={{
                      background: "transparent",
                      border: "2px solid var(--primary)",
                      color: "var(--primary)",
                      padding: "8px 16px",
                      borderRadius: "6px",
                      fontSize: "12px",
                      cursor: "pointer",
                      fontWeight: "600",
                    }}
                  >
                    📋 Copy Code
                  </button>
                </div>

                <div
                  style={{
                    background: "#fff8e1",
                    padding: "12px",
                    borderRadius: "8px",
                    fontSize: "12px",
                    color: "#856404",
                    textAlign: "center",
                    marginBottom: "20px",
                  }}
                >
                  Keep this code safe!
                  <br />
                  This code will be used to participate in Round 1
                </div>

                <button
                  onClick={handleFinish}
                  className={styles.nextBtn}
                  style={{ width: "100%" }}
                >
                  Finish
                </button>
              </div>
            )}
          </>
        ) : null}
      </div>

      {/* ===== THANK YOU SCREEN (FULL PAGE OVERLAY) ===== */}
      {showThankYou && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "var(--bg)",
            zIndex: 1000,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <div style={{ maxWidth: "600px", textAlign: "center" }}>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "700",
                color: "#8b4513",
                marginBottom: "10px",
              }}
            >
              Successfully Registered!
            </h3>
            <h2
              className="font-jersey"
              style={{
                fontSize: "56px",
                fontWeight: "normal",
                color: "var(--primary)",
                lineHeight: "1.1",
                marginBottom: "40px",
              }}
            >
              See You
              <br />
              At The Event
            </h2>

            {/* Clouds */}
            <div style={{ position: "relative", minHeight: "300px" }}>
              <img
                src="/cloud.png"
                alt="Cloud"
                style={{
                  position: "absolute",
                  left: "5%",
                  top: "0px",
                  width: "100px",
                  opacity: 0.8,
                }}
              />
              <img
                src="/cloud.png"
                alt="Cloud"
                style={{
                  position: "absolute",
                  right: "5%",
                  top: "20px",
                  width: "90px",
                  opacity: 0.7,
                }}
              />

              {/* Mascot */}
              <img
                src="/mascot-char.png"
                alt="Mascot"
                style={{
                  width: "220px",
                  margin: "0 auto",
                  display: "block",
                  position: "relative",
                  zIndex: 2,
                }}
              />

              <img
                src="/cloud.png"
                alt="Cloud"
                style={{
                  position: "absolute",
                  left: "10%",
                  bottom: "40px",
                  width: "95px",
                  opacity: 0.6,
                }}
              />
              <img
                src="/cloud.png"
                alt="Cloud"
                style={{
                  position: "absolute",
                  right: "12%",
                  bottom: "60px",
                  width: "85px",
                  opacity: 0.7,
                }}
              />
            </div>
          </div>

          {/* Mountain Image */}
          <div
            style={{
              position: "fixed",
              bottom: 0,
              left: 0,
              right: 0,
              width: "100%",
            }}
          >
            <img
              src="/mountains.png"
              alt="Mountain"
              style={{
                width: "100%",
                display: "block",
              }}
            />
          </div>
        </div>
      )}

      {/* Mountain Image */}
      <div className={styles.footerImage}>
        <img src="/mountain.png" alt="Mountain" />
      </div>

      {/* Footer */}
    </div>
  );
}
