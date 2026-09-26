const schedule = [
  { week: "01", topic: "Foundations of MARL", detail: "Markov games, agents, rewards, and joint policies", tag: "Foundations" },
  { week: "02", topic: "Game theory essentials", detail: "Normal-form games, equilibria, and best responses", tag: "Theory" },
  { week: "03", topic: "Independent learners", detail: "Non-stationarity, coordination, and credit assignment", tag: "Learning" },
  { week: "04", topic: "Centralized training", detail: "CTDE, value factorization, and decentralized execution", tag: "Methods" },
  { week: "05", topic: "Value-based MARL", detail: "VDN, QMIX, monotonic mixing, and extensions", tag: "Methods" },
  { week: "06", topic: "Policy gradients", detail: "Multi-agent actor-critic and counterfactual baselines", tag: "Methods" },
  { week: "07", topic: "Communication", detail: "Learning when, what, and with whom to communicate", tag: "Coordination" },
  { week: "08", topic: "Opponent modelling", detail: "Adapting to strategic and learning agents", tag: "Reasoning" },
  { week: "09", topic: "Cooperative exploration", detail: "Intrinsic rewards and coordinated discovery", tag: "Exploration" },
  { week: "10", topic: "Mean-field methods", detail: "Scaling learning to large agent populations", tag: "Scale" },
  { week: "11", topic: "Offline & model-based MARL", detail: "Learning from fixed data and learned dynamics", tag: "Advanced" },
  { week: "12", topic: "Generalization & ad hoc teams", detail: "Zero-shot coordination and population learning", tag: "Advanced" },
  { week: "13", topic: "Safety and social dilemmas", detail: "Robustness, incentives, and responsible deployment", tag: "Practice" },
  { week: "14", topic: "Project presentations", detail: "Experiments, findings, and open research questions", tag: "Projects" },
];

const outcomes = [
  ["01", "Formulate", "Model multi-agent problems as stochastic games and select useful solution concepts."],
  ["02", "Implement", "Build and evaluate core cooperative MARL algorithms in modern environments."],
  ["03", "Diagnose", "Reason about non-stationarity, partial observability, and multi-agent credit assignment."],
  ["04", "Research", "Read current papers critically and turn an open question into a reproducible experiment."],
];

const resources = [
  { mark: "N", title: "Course notes", copy: "Concise notes, key derivations, and reading guides organized by week.", status: "Coming soon" },
  { mark: "L", title: "Lecture materials", copy: "Slides, recordings, and supporting references for every session.", status: "Coming soon" },
  { mark: "C", title: "Code & environments", copy: "Starter notebooks, baselines, and reproducible experiment templates.", status: "GitHub" },
  { mark: "P", title: "Project guide", copy: "Milestones, proposal format, evaluation rubric, and report template.", status: "Coming soon" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="MARL at Sharif, home">
          <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
          <span>MARL<span className="brand-muted">@SUT</span></span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#overview">Overview</a>
          <a href="#schedule">Schedule</a>
          <a href="#resources">Resources</a>
          <a href="#staff">Staff</a>
        </nav>
        <a className="header-cta" href="https://github.com/MARL-SUT/marl-sut.github.io" target="_blank" rel="noreferrer">
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Graduate course · Sharif University of Technology</p>
          <h1>Multi-Agent<br /><em>Reinforcement</em> Learning</h1>
          <p className="hero-lede">How do intelligent agents learn to cooperate, compete, and communicate? Explore the theory and practice of learning in systems where every decision changes the game.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#schedule">Explore the syllabus <span aria-hidden="true">↓</span></a>
            <a className="button button-secondary" href="#overview">About the course</a>
          </div>
          <div className="hero-metadata" aria-label="Course details">
            <div><span>TERM</span><strong>To be announced</strong></div>
            <div><span>LEVEL</span><strong>Graduate</strong></div>
            <div><span>FORMAT</span><strong>Lectures + project</strong></div>
          </div>
        </div>

        <div className="agent-field" aria-hidden="true">
          <div className="field-grid" />
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="connection line-one" /><div className="connection line-two" /><div className="connection line-three" />
          <div className="agent agent-a"><span>A₁</span></div><div className="agent agent-b"><span>A₂</span></div>
          <div className="agent agent-c"><span>A₃</span></div><div className="agent agent-d"><span>A₄</span></div>
          <div className="state-node">S<small>t</small></div>
          <div className="signal signal-one">r₁</div><div className="signal signal-two">π₂</div>
          <p className="field-caption"><span>FIG. 01</span> A shared world.<br />Many points of view.</p>
        </div>
      </section>

      <section className="announcement" aria-label="Course announcement">
        <span className="announcement-label">Course update</span>
        <p>The course site is taking shape. Dates, staff details, and enrollment information will be published here.</p>
        <a href="https://github.com/MARL-SUT/marl-sut.github.io" target="_blank" rel="noreferrer">Watch on GitHub <span aria-hidden="true">↗</span></a>
      </section>

      <section className="section overview-section" id="overview">
        <div className="section-kicker"><span>01</span><p>Course overview</p></div>
        <div className="overview-grid">
          <div className="section-heading"><p className="mini-label">WHY MARL?</p><h2>One agent learns.<br /><em>A society emerges.</em></h2></div>
          <div className="overview-copy">
            <p className="lead">Many important AI systems are not alone: they interact with teammates, opponents, institutions, and people.</p>
            <p>This course builds from reinforcement learning and game theory to the algorithms behind cooperative, competitive, and mixed multi-agent systems. Along the way, we study the central challenges that make MARL distinct: non-stationarity, partial observability, coordination, and credit assignment.</p>
            <p>The course combines mathematical foundations, paper discussions, implementation assignments, and an open-ended research project.</p>
          </div>
        </div>
        <div className="outcomes">
          {outcomes.map(([number, title, copy]) => <article className="outcome" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="section schedule-section" id="schedule">
        <div className="section-kicker light"><span>02</span><p>Weekly plan</p></div>
        <div className="schedule-header">
          <div><p className="mini-label">14 WEEKS · FROM PRINCIPLES TO PRACTICE</p><h2>Course <em>schedule</em></h2></div>
          <p>The sequence below is a proposed syllabus and may evolve with the class. Dates and materials will be added before the course begins.</p>
        </div>
        <div className="schedule-table" role="table" aria-label="Proposed fourteen-week course schedule">
          <div className="schedule-row schedule-labels" role="row"><span role="columnheader">Week</span><span role="columnheader">Topic</span><span role="columnheader">Focus</span><span role="columnheader">Track</span></div>
          {schedule.map((item) => <div className="schedule-row" role="row" key={item.week}><span className="week" role="cell">{item.week}</span><strong role="cell">{item.topic}</strong><span className="schedule-detail" role="cell">{item.detail}</span><span role="cell"><i className="tag">{item.tag}</i></span></div>)}
        </div>
      </section>

      <section className="section resources-section" id="resources">
        <div className="section-kicker"><span>03</span><p>Learning resources</p></div>
        <div className="resources-header">
          <div><p className="mini-label">THE COURSE TOOLKIT</p><h2>Everything you need<br />to <em>learn by doing.</em></h2></div>
          <p>Materials will be released progressively during the semester. The repository is the source of truth for code and updates.</p>
        </div>
        <div className="resource-grid">
          {resources.map((resource) => <article className="resource-card" key={resource.title}><div className="resource-mark">{resource.mark}</div><span className="resource-status">{resource.status}</span><h3>{resource.title}</h3><p>{resource.copy}</p>{resource.status === "GitHub" ? <a href="https://github.com/MARL-SUT/marl-sut.github.io" target="_blank" rel="noreferrer" aria-label="Open the course GitHub repository">Open repository <span aria-hidden="true">↗</span></a> : <span className="card-link muted">Available soon</span>}</article>)}
        </div>
      </section>

      <section className="section assessment-section" id="assessment">
        <div className="section-kicker"><span>04</span><p>Assessment</p></div>
        <div className="assessment-grid">
          <div><p className="mini-label">HOW THE COURSE WORKS</p><h2>Learn the ideas.<br /><em>Test them together.</em></h2></div>
          <div className="assessment-list">
            <article><span>01</span><div><h3>Paper discussions</h3><p>Read closely, question assumptions, and connect methods across the MARL literature.</p></div></article>
            <article><span>02</span><div><h3>Implementation assignments</h3><p>Translate equations into reliable agents and report what actually happens in experiments.</p></div></article>
            <article><span>03</span><div><h3>Research project</h3><p>Work in a small team on a focused question, then communicate the results clearly.</p></div></article>
          </div>
        </div>
        <p className="assessment-note">The final grading breakdown and submission policy will be announced with the official syllabus.</p>
      </section>

      <section className="section staff-section" id="staff">
        <div className="section-kicker light"><span>05</span><p>Course team</p></div>
        <div className="staff-grid">
          <div><p className="mini-label">MEET THE TEAM</p><h2>Here to help you<br /><em>think in systems.</em></h2></div>
          <div className="staff-placeholder"><div className="staff-avatar" aria-hidden="true"><span>+</span></div><div><span>COURSE STAFF</span><h3>To be announced</h3><p>Instructor and teaching assistant details will be published before enrollment opens.</p></div></div>
        </div>
      </section>

      <footer>
        <div className="footer-brand"><span className="brand-mark" aria-hidden="true"><i /><i /><i /></span><h2>MARL<span>@SUT</span></h2></div>
        <p>Multi-Agent Reinforcement Learning<br />Sharif University of Technology</p>
        <div className="footer-links"><a href="#overview">Overview</a><a href="#schedule">Schedule</a><a href="#resources">Resources</a><a href="https://github.com/MARL-SUT/marl-sut.github.io" target="_blank" rel="noreferrer">GitHub ↗</a></div>
        <div className="footer-bottom"><span>© 2026 MARL@SUT</span><span>Built for curious agents.</span></div>
      </footer>
    </main>
  );
}
