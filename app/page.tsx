"use client";

import { useMemo, useState } from "react";

const topNavigation = [
  "Home",
  "Calendar",
  "Course Notes",
  "Lectures",
  "Guests",
  "Homeworks",
  "Exams",
  "Poster Session",
  "Resources",
];

const sideNavigation = [
  { label: "Home", children: ["Welcome"] },
  { label: "Calendar" },
  { label: "Course Notes", children: ["Introduction to RL", "Value-Based Methods", "Policy-Based Methods", "Advanced Topics", "Model-Based Methods", "Bandits"] },
  { label: "Lectures", children: ["Week 1", "Week 2", "Week 3", "Week 4"] },
  { label: "Guests" },
  { label: "Homeworks" },
  { label: "Exams" },
  { label: "Poster Session" },
  { label: "Resources" },
];

const tableOfContents = [
  ["course-description", "Course Description"],
  ["instructor", "Instructor"],
  ["guests", "Guests"],
  ["schedule", "Schedule"],
  ["grading", "Grading"],
  ["head-assistants", "Head Assistants"],
  ["teaching-assistants", "Teaching Assistants"],
];

const marlBookUrl = "https://www.marl-book.com/";

function Placeholder({ text = "To be announced." }: { text?: string }) {
  return <p className="placeholder">{text}</p>;
}

export default function Home() {
  const [dark, setDark] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const items = [...topNavigation, ...tableOfContents.map(([, label]) => label)];
    return [...new Set(items)].filter((item) => item.toLowerCase().includes(query.toLowerCase()));
  }, [query]);

  return (
    <div className="site-shell" data-theme={dark ? "dark" : "light"}>
      <header className="material-header">
        <div className="header-inner">
          <button className="icon-button menu-button" aria-label="Open navigation" onClick={() => setDrawerOpen((value) => !value)}>☰</button>
          <a className="course-logo" href="#welcome" aria-label="Multi-Agent RL Course home">MARL</a>
          <div className="header-title">
            <strong>Multi-Agent RL Course</strong>
            <span>Welcome</span>
          </div>
          <div className="header-actions">
            <button className="icon-button" aria-label={dark ? "Switch to light mode" : "Switch to dark mode"} onClick={() => setDark((value) => !value)}>{dark ? "☀" : "◐"}</button>
            <button className="icon-button search-button" aria-label="Search" onClick={() => setSearchOpen(true)}>⌕</button>
          </div>
        </div>

        <nav className="tab-bar" aria-label="Course sections">
          <div className="tabs-inner">
            {topNavigation.map((item, index) => {
              const isBookLink = item === "Resources";
              return (
                <a
                  className={index === 0 ? "active" : ""}
                  href={isBookLink ? marlBookUrl : index === 0 ? "#welcome" : "#"}
                  key={item}
                  target={isBookLink ? "_blank" : undefined}
                  rel={isBookLink ? "noreferrer" : undefined}
                >
                  {item}{isBookLink && " ↗"}
                </a>
              );
            })}
          </div>
        </nav>
      </header>

      {searchOpen && (
        <div className="search-panel" role="dialog" aria-modal="true" aria-label="Search course site">
          <div className="search-panel-inner">
            <span aria-hidden="true">⌕</span>
            <input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search" aria-label="Search" />
            <button onClick={() => { setSearchOpen(false); setQuery(""); }} aria-label="Close search">×</button>
          </div>
          <div className="search-output">
            {!query ? <p>Type to start searching</p> : searchResults.length ? searchResults.map((item) => <a href="#" key={item} onClick={() => setSearchOpen(false)}>{item}</a>) : <p>No matching documents</p>}
          </div>
        </div>
      )}

      {drawerOpen && <button className="drawer-overlay" aria-label="Close navigation" onClick={() => setDrawerOpen(false)} />}

      <div className="page-grid">
        <aside className={`primary-sidebar ${drawerOpen ? "open" : ""}`} aria-label="Documentation navigation">
          <nav>
            {sideNavigation.map((item, index) => (
              <div className={`nav-group ${index === 0 ? "selected" : ""}`} key={item.label}>
                <a
                  href={item.label === "Resources" ? marlBookUrl : index === 0 ? "#welcome" : "#"}
                  target={item.label === "Resources" ? "_blank" : undefined}
                  rel={item.label === "Resources" ? "noreferrer" : undefined}
                >
                  {item.label}{item.label === "Resources" ? " ↗" : item.children && <span>›</span>}
                </a>
                {index === 0 && item.children && <div className="nav-children">{item.children.map((child) => <a className="current" href="#welcome" key={child}>{child}</a>)}</div>}
              </div>
            ))}
          </nav>
        </aside>

        <article className="course-content">
          <h1 id="welcome">Welcome</h1>
          <p>Welcome to the Multi-Agent Reinforcement Learning course at Sharif University of Technology.</p>

         <h2 id="course-description">Course Description</h2>
          <p>
          This graduate-level course, instructed by Prof. Mohammad Hossein Rohban and Moein Salimi, provides an introduction to Multi-Agent Reinforcement Learning (MARL). The course aims to familiarize students with the fundamental concepts, key challenges, and current research directions in MARL, while also giving them the opportunity to work on their own research projects. By the end of the course, students will have a solid understanding of the foundations of MARL and the major research problems currently being explored in the field.
          </p>

          <h2 id="instructor">Instructor</h2>
          <div className="instructor-grid">
            <div className="profile-card">
              <img
                className="profile-image"
                src="/images/mohammad-hossein-rohban.jpg"
                alt="Mohammad Hossein Rohban"
              />
              <div>
                <strong>Mohammad Hossein Rohban</strong>
                <span>Instructor</span>
              </div>
            </div>

            <div className="profile-card">
              <div className="avatar-placeholder" aria-hidden="true">MS</div>
              <div>
                <strong>Moein Salimi</strong>
                <span>Instructor</span>
              </div>
            </div>
          </div>

          <h2 id="guests">Guests</h2>
          <Placeholder />

          <h2 id="schedule">Schedule</h2>
          <div className="schedule-placeholder"><span>Schedule</span><strong>To be announced</strong></div>

          <h2 id="grading">Grading</h2>
          <div className="schedule-placeholder"><span>Schedule</span><strong>To be announced</strong></div>

          <h2 id="head-assistants">Head Assistants</h2>
          <div className="head-assistants-grid">
            <div className="head-assistant-card lead-assistant">
              <div className="staff-image-placeholder" aria-label="Image placeholder for Farbod Azimmohseni">FA</div>
              <div>
                <strong>Farbod Azimmohseni</strong>
                <span>Head Assistant</span>
              </div>
            </div>

            <div className="head-assistant-card">
              <div className="staff-image-placeholder" aria-label="Image placeholder">?</div>
              <div>
                <strong>Behnia Soleymani</strong>
                <span>Head Assistant (Project)</span>
              </div>
            </div>

            <div className="head-assistant-card">
              <div className="staff-image-placeholder" aria-label="Image placeholder">?</div>
              <div>
                <strong>Amir Qeysarbeigi</strong>
                <span>Head Assistant (Project)</span>
              </div>
            </div>

            <div className="head-assistant-card">
              <div className="staff-image-placeholder" aria-label="Image placeholder">?</div>
              <div>
                <strong>Ramtin Moslemi</strong>
                <span>Head Assistant (Quiz/Homework)</span>
              </div>
            </div>
          </div>

          <h2 id="teaching-assistants">Teaching Assistants</h2>
          <div className="teaching-assistants-grid">
            <div className="teaching-assistant-card">
              <div className="staff-image-placeholder" aria-label="Image placeholder for Amirhosein Rezaei">AR</div>
              <strong>Amirhosein Rezaei</strong>
            </div>
            <div className="teaching-assistant-card">
              <div className="staff-image-placeholder" aria-label="Image placeholder for Parsa Ghezelbash">PG</div>
              <strong>Parsa Ghezelbash</strong>
            </div>
            <div className="teaching-assistant-card">
              <div className="staff-image-placeholder" aria-label="Image placeholder for Soheil Sayah Varg">SSV</div>
              <strong>Soheil Sayah Varg</strong>
            </div>
            <div className="teaching-assistant-card">
              <div className="staff-image-placeholder" aria-label="Image placeholder for Narges Kari-Dolatabadi">NKD</div>
              <strong>Narges Kari-Dolatabadi</strong>
            </div>
            <div className="teaching-assistant-card">
              <div className="staff-image-placeholder" aria-label="Image placeholder for Amir Malek Hosseini">AMH</div>
              <strong>Amir Malek Hosseini</strong>
            </div>
            <div className="teaching-assistant-card">
              <div className="staff-image-placeholder" aria-label="Image placeholder for Arian Komaei koma">AKK</div>
              <strong>Arian Komaei koma</strong>
            </div>
          </div>


          <nav className="page-navigation" aria-label="Page navigation">
            <span />
            <a href="#">Next <small>Calendar</small><b>›</b></a>
          </nav>
        </article>

        <aside className="secondary-sidebar" aria-label="Table of contents">
          <nav>
            <a className="toc-title active" href="#welcome">Table of contents</a>
            {tableOfContents.map(([id, label]) => <a href={`#${id}`} key={id}>{label}</a>)}
          </nav>
        </aside>
      </div>

      <footer className="material-footer">
        <p>Made with Material for MkDocs</p>
        <a href="https://github.com/MARL-SUT/marl-sut.github.io" target="_blank" rel="noreferrer">GitHub</a>
      </footer>
    </div>
  );
}
