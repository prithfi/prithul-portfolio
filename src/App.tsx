import "./App.css";
function App() {
  return (
    <div className="portfolio">
      <a href="#about">About</a>
      <a href="#education">Education</a>
      <a href="#research">Research</a>
      <a href="#publications">Publications</a>
      <a href="#projects">Projects</a>
      <a href="#skills">Skills</a>
      <a href="#achievements">Achievements</a>
      <a href="#contact">Contact</a>

      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">PRITHFI</div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="#research">Research</a>
        </div>
      </nav>


      {/* Hero Section */}
<section className="hero">

  <div className="hero-content">

    <div className="hero-text">

      <p className="intro">
        ELECTRICAL & ELECTRONIC ENGINEERING
      </p>

      <h1>
        Prithfi Chowdhury Prithul
      </h1>

      <h2>
        Engineering Student & Aspiring Semiconductor Researcher
      </h2>

      <p className="description">
        I am an Electrical & Electronic Engineering student at
        Khulna University of Engineering & Technology (KUET),
        interested in semiconductor technology, VLSI design,
        electronics, and research.
      </p>

      <div className="hero-buttons">

  <a
  href="/CV.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="primary-button"
>
  View CV ↗
</a>

  <a href="#projects" className="secondary-button">
    Explore My Work
  </a>

</div>

      <div className="hero-links">

        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub ↗
        </a>

        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn ↗
        </a>

      </div>

    </div>

    <div className="hero-side">

      <div className="academic-card">

        <span>01</span>

        <h3>
          EEE
        </h3>

        <p>
          Electrical & Electronic Engineering
        </p>

      </div>

      <div className="academic-card">

        <span>02</span>

        <h3>
          VLSI
        </h3>

        <p>
          Semiconductor & Digital Design
        </p>

      </div>

      <div className="academic-card">

        <span>03</span>

        <h3>
          RESEARCH
        </h3>

        <p>
          Learning, building, and exploring
        </p>

      </div>

    </div>

  </div>

</section>


      {/* About Section */}
<section id="about" className="section about-section">

  <div className="section-heading">
    <p className="section-label">01 — ABOUT ME</p>
    <h2>Building my path in engineering.</h2>
  </div>

  <div className="about-grid">

    <div className="about-text">

      <p>
        I am an Electrical & Electronic Engineering student at
        Khulna University of Engineering & Technology (KUET),
        developing my foundation in electronics, programming,
        electrical systems, and engineering mathematics.
      </p>

      <p>
        My long-term goal is to explore advanced technologies
        in electronics and semiconductor engineering, while
        developing the skills necessary to contribute to meaningful
        research and engineering projects.
      </p>

      <p>
        This portfolio documents my academic journey, projects,
        technical skills, achievements, and research interests.
      </p>

    </div>


    <div className="about-highlights">

      <div className="highlight-card">
        <span>FIELD</span>
        <h3>Electrical & Electronic Engineering</h3>
      </div>

      <div className="highlight-card">
        <span>UNIVERSITY</span>
        <h3>KUET</h3>
      </div>

      <div className="highlight-card">
        <span>FOCUS</span>
        <h3>Electronics & Semiconductor Technology</h3>
      </div>

    </div>

  </div>

</section>


{/* Education Section */}
<section id="education" className="section">

  <div className="section-heading">
    <p className="section-label">02 — EDUCATION</p>
    <h2>Academic Journey</h2>
  </div>

  <div className="education-timeline">

    {/* KUET */}
    <div className="education-card">

      <div className="education-year">
        2025 — 2029
      </div>

      <div className="education-content">

        <div className="education-top">
          <div>
            <h3>Bachelor of Science in Electrical & Electronic Engineering</h3>
            <h4>Khulna University of Engineering & Technology</h4>
            <p>KUET · Khulna, Bangladesh</p>
          </div>

          <div className="education-result">
            <span>CGPA</span>
            <strong>3.82</strong>
            <small>/ 4.00</small>
          </div>
        </div>

        <div className="education-tags">
          <span>Electronics</span>
          <span>Electrical Engineering</span>
          <span>Digital Systems</span>
          <span>Programming</span>
          <span>Semiconductor Technology</span>
        </div>

      </div>

    </div>


    {/* HSC */}
    <div className="education-card">

      <div className="education-year">
        2024
      </div>

      <div className="education-content">

        <div className="education-top">
          <div>
            <h3>Higher Secondary Certificate</h3>
            <h4>Notre Dame College, Dhaka</h4>
            <p>Dhaka, Bangladesh</p>
          </div>

          <div className="education-result">
            <span>GPA</span>
            <strong>5.00</strong>
            <small>/ 5.00</small>
          </div>
        </div>

      </div>

    </div>

  </div>

</section>

{/* Research Interests */}
<section id="research" className="section">

  <div className="section-heading">
    <p className="section-label">03 — RESEARCH INTERESTS</p>
    <h2>Areas I'm exploring.</h2>
  </div>

  <div className="research-grid">

    <div className="research-card">
      <span>01</span>
      <h3>Semiconductor Technology</h3>
      <p>
        Exploring semiconductor devices, fabrication concepts,
        and the technologies behind modern computing hardware.
      </p>
    </div>

    <div className="research-card">
      <span>02</span>
      <h3>VLSI Design</h3>
      <p>
        Developing an interest in digital design, integrated
        circuits, hardware description languages, and chip design.
      </p>
    </div>

    <div className="research-card">
      <span>03</span>
      <h3>Electronics</h3>
      <p>
        Learning about electronic circuits, devices, systems,
        and their practical applications.
      </p>
    </div>

    <div className="research-card">
      <span>04</span>
      <h3>Hardware & Computing</h3>
      <p>
        Interested in the intersection of hardware engineering,
        computer architecture, and high-performance computing.
      </p>
    </div>

  </div>

</section>



{/* Projects Section */}
<section id="projects" className="section">

  <div className="section-heading">
    <p className="section-label">04 — PROJECTS & LAB WORK</p>
    <h2>Hands-on electronics experience.</h2>
  </div>

  <div className="projects-grid">

    {/* Project 01 */}
    <div className="project-card">
      <div className="project-number">01</div>

      <div className="project-content">
        <h3>Electronic Components & Measurement</h3>

        <p>
          Gained practical experience identifying electronic components,
          understanding their functions, and using laboratory instruments
          for electrical measurements and circuit testing.
        </p>

        <div className="project-tags">
          <span>Electronics</span>
          <span>Measurements</span>
          <span>Lab Instruments</span>
        </div>
      </div>
    </div>


    {/* Project 02 */}
    <div className="project-card">
      <div className="project-number">02</div>

      <div className="project-content">
        <h3>Diode Circuit Analysis</h3>

        <p>
          Studied the electrical behavior of semiconductor diodes through
          V-I characteristics and implemented rectifier circuits to
          understand AC-to-DC conversion.
        </p>

        <div className="project-tags">
          <span>Semiconductor Diodes</span>
          <span>V-I Characteristics</span>
          <span>Rectifiers</span>
        </div>
      </div>
    </div>


    {/* Project 03 */}
    <div className="project-card">
      <div className="project-number">03</div>

      <div className="project-content">
        <h3>Regulated DC Power Supply</h3>

        <p>
          Designed and implemented a regulated DC power supply by combining
          rectification, filtering, and voltage regulation stages to obtain
          a stable DC output.
        </p>

        <div className="project-tags">
          <span>Power Supply</span>
          <span>Rectification</span>
          <span>Voltage Regulation</span>
        </div>
      </div>
    </div>


    {/* Project 04 */}
    <div className="project-card">
      <div className="project-number">04</div>

      <div className="project-content">
        <h3>Wave-Shaping Circuits</h3>

        <p>
          Designed and analyzed clipper and clamper circuits using
          semiconductor diodes to study signal limiting, DC level shifting,
          and waveform modification.
        </p>

        <div className="project-tags">
          <span>Clipper Circuits</span>
          <span>Clamper Circuits</span>
          <span>Signal Processing</span>
        </div>
      </div>
    </div>


    {/* Project 05 */}
    <div className="project-card">
      <div className="project-number">05</div>

      <div className="project-content">
        <h3>BJT Amplifier Analysis</h3>

        <p>
          Investigated common-emitter, common-base, and common-collector
          transistor configurations to understand their characteristics,
          amplification behavior, and practical applications.
        </p>

        <div className="project-tags">
          <span>BJT</span>
          <span>Amplifiers</span>
          <span>CE · CB · CC</span>
        </div>
      </div>
    </div>


    {/* Project 06 */}
    <div className="project-card">
      <div className="project-number">06</div>

      <div className="project-content">
        <h3>Transistor-Based Circuit Design</h3>

        <p>
          Explored the design and implementation of transistor-based
          electronic circuits for practical applications, applying
          fundamental concepts of transistor operation and circuit analysis.
        </p>

        <div className="project-tags">
          <span>Transistors</span>
          <span>Circuit Design</span>
          <span>Analog Electronics</span>
        </div>
      </div>
    </div>

  </div>
</section>


{/* Technical Skills */}
<section id="skills" className="section">

  <div className="section-heading">
    <p className="section-label">05 — TECHNICAL SKILLS</p>
    <h2>Tools & technologies I'm learning.</h2>
  </div>

  <div className="skills-grid">

    {/* Programming */}
    <div className="skill-category">

      <div className="skill-category-header">
        <span>01</span>
        <h3>Programming</h3>
      </div>

      <div className="skill-list">
        <span>C</span>
        <span>C++</span>
        <span>Python</span>
        <span>MATLAB</span>
      </div>

    </div>


    {/* Electronics */}
    <div className="skill-category">

      <div className="skill-category-header">
        <span>02</span>
        <h3>Electronics</h3>
      </div>

      <div className="skill-list">
        <span>Circuit Analysis</span>
        <span>Analog Electronics</span>
        <span>Digital Electronics</span>
        <span>Electrical Machines</span>
      </div>

    </div>


    {/* Engineering Tools */}
    <div className="skill-category">

      <div className="skill-category-header">
        <span>03</span>
        <h3>Engineering Tools</h3>
      </div>

      <div className="skill-list">
        <span>MATLAB</span>
        <span>Simulink</span>
        <span>VS Code</span>
        <span>Git</span>
      </div>

    </div>


    {/* Hardware & Design */}
    <div className="skill-category">

      <div className="skill-category-header">
        <span>04</span>
        <h3>Hardware & Design</h3>
      </div>

      <div className="skill-list">
        <span>Digital Logic</span>
        <span>Computer Architecture</span>
        <span>VLSI Fundamentals</span>
        <span>Hardware Design</span>
      </div>

    </div>

  </div>

</section>

{/* Achievements Section */}
<section id="achievements" className="section">

  <div className="section-heading">
    <p className="section-label">06 — ACHIEVEMENTS</p>
    <h2>Milestones along the way.</h2>
  </div>

  <div className="achievements-list">

    {/* Achievement 01 */}
    <div className="achievement-card">

      <div className="achievement-year">
        2026
      </div>

      <div className="achievement-content">

        <h3>
          Add Your First Achievement
        </h3>

        <p className="achievement-organization">
          Organization / Institution
        </p>

        <p>
          Your achievement, competition, certification, workshop,
          academic milestone, or other accomplishment can be
          documented here.
        </p>

      </div>

    </div>


    {/* Achievement 02 */}
    <div className="achievement-card">

      <div className="achievement-year">
        2026
      </div>

      <div className="achievement-content">

        <h3>
          Add Your Next Achievement
        </h3>

        <p className="achievement-organization">
          Organization / Institution
        </p>

        <p>
          Add a short description explaining what you achieved
          and why it is significant.
        </p>

      </div>

    </div>

  </div>

</section>

    {/* Research & Publications */}
<section id="publications" className="section">

  <div className="section-heading">
    <p className="section-label">07 — RESEARCH & PUBLICATIONS</p>
    <h2>Research I'm working toward.</h2>
  </div>

  <div className="publication-intro">
    <p>
      My research journey is focused on developing deeper knowledge in
      electronics, semiconductor technology, VLSI design, and computer
      hardware. This section will document my research projects,
      publications, and academic contributions as they develop.
    </p>
  </div>

  <div className="publication-card">

  <div className="publication-number">
    01
  </div>

  <div className="publication-content">

    <span className="publication-status">
      CURRENT FOCUS
    </span>

    <h3>Building Toward Research</h3>

    <p>
      Currently developing my foundation in electronics, semiconductor
      technology, VLSI design, digital systems, and computer architecture
      with the goal of beginning formal research projects in these areas.
    </p>

    <div className="publication-tags">
      <span>Electronics</span>
      <span>Semiconductor Technology</span>
      <span>VLSI Design</span>
      <span>Computer Architecture</span>
    </div>

  </div>

</div>

</section>


      {/* Contact Section */}
<section id="contact" className="section contact-section">

  <div className="section-heading">
    <p className="section-label">CONTACT</p>
    <h2>Let's Connect</h2>
  </div>

  <p className="contact-intro">
    Interested in research, technology, or collaboration?
    Feel free to connect with me through any of the platforms below.
  </p>

  <div className="contact-links">

    <a
      href="mailto:prithul676@gmail.com"
      className="contact-card"
    >
      <div>
        <span>EMAIL</span>
        <h3>prithul676@gmail.com</h3>
      </div>
      <strong>↗</strong>
    </a>

    <a
      href="https://github.com/prithfi"
      target="_blank"
      rel="noopener noreferrer"
      className="contact-card"
    >
      <div>
        <span>GITHUB</span>
        <h3>github.com/prithfi</h3>
      </div>
      <strong>↗</strong>
    </a>

    <a
      href="https://www.linkedin.com/in/prithfi-chowdhury-prithul-9985261b7"
      target="_blank"
      rel="noopener noreferrer"
      className="contact-card"
    >
      <div>
        <span>LINKEDIN</span>
        <h3>Prithfi Chowdhury Prithul</h3>
      </div>
      <strong>↗</strong>
    </a>

  </div>

</section>


      {/* Footer */}
      <footer>
        <p>
          © 2026 Prithfi Chowdhury Prithul
        </p>
      </footer>

    </div>
  );
}

export default App;