// ============================================================
//  EDIT THIS FILE — all website content lives here.
//  Anything left as an empty string "" or empty list [] is hidden.
// ============================================================

window.SITE = {
  name: "Yufei Wang",
  title: "M.S. in Software Engineering",
  affiliation: "Carnegie Mellon University",
  location: "Mountain View, CA",
  photo: "assets/img/headshot.jpg", // square image; initials are shown if missing
  seeking: "", // optional one-line banner, e.g. "Applying to Ph.D. programs for Fall 2027"

  bio: [
    "I am a Master of Science in Software Engineering student at **Carnegie Mellon University**. I received my B.S. in Computer and Information Science & Statistics from **The Ohio State University**.",
    "My research interests are in biomedical informatics and computational biology. I focus on building and applying statistical and machine learning methods that combine clinical, molecular, imaging, and biomarker data for disease characterization, outcome prediction, and personalized medicine.",
  ],

  interests: [
    "Biomedical Informatics",
    "Computational Biology",
    "Cancer Informatics",
    "Machine Learning",
    "Statistical Modeling",
    "Software Engineering",
  ],

  links: {
    email: "yufeiwa2@andrew.cmu.edu",
    cv: "", // set to "assets/docs/cv.pdf" once you're ready to publish your CV
    github: "https://github.com/gradse",
    linkedin: "https://www.linkedin.com/in/yufei-wang22/",
    scholar: "",
    twitter: "",
  },

  news: [], // optional: { date: "Sep 2026", text: "..." }

  education: [
    {
      degree: "M.S. in Software Engineering",
      school: "Carnegie Mellon University",
      years: "Jan 2026 – May 2027",
      detail: "GPA 3.7/4.0",
    },
    {
      degree: "B.S. in Computer & Information Science and Statistics",
      school: "The Ohio State University",
      years: "Aug 2021 – May 2025",
      detail: "*Summa cum laude* · GPA 3.9/4.0",
    },
  ],

  experience: [
    {
      role: "Graduate Research Assistant",
      org: "Integrated Innovation Institute, CMU · Prof. Catherine Fang",
      years: "Aug 2026 – Present",
      detail: "Interpretable machine learning for EEG-based dementia classification.",
    },
    {
      role: "Undergraduate Research Assistant",
      org: "Biomedical Informatics, OSU · Prof. Xia Ning",
      years: "Jan – May 2025",
      detail: "Evaluation tools for protein–ligand generative modeling.",
    },
    {
      role: "Undergraduate Research Assistant",
      org: "Biomedical Informatics, OSU · Prof. Xiaokui Mo",
      years: "May – Dec 2024",
      detail: "DNA methylation and HPV status analysis in HNSCC.",
    },
    {
      role: "Software Engineering Intern",
      org: "Hi-Tech Talents LLC · Remote",
      years: "Aug – Dec 2023",
      detail: "Built a C# automation tool for staged feature rollouts across Dogfood, SIP, and PROD environments.",
    },
    {
      role: "Undergraduate Teaching Assistant",
      org: "OSU · Discrete Structures; CaBi Data Science Bootcamp",
      years: "2022 – 2024",
      detail: "",
    },
  ],

  // Research and Projects share the same fields.
  // `image` is optional (e.g. "assets/img/projects/eeg.png"); `badge` text is shown when there is no image.
  // `links`: `code` (GitHub repo) goes on the title; the rest become buttons: poster, results, paper, demo, slides ...
  research: [
    {
      title: "Interpretable ML for EEG-Based Dementia Classification",
      badge: "EEG",
      year: "2026 – Present",
      context: "CMU · Prof. Catherine Fang",
      description: "Developing interpretable machine-learning representations of resting-state EEG to distinguish Alzheimer's disease and frontotemporal dementia from healthy controls, and linking the learned features to clinically meaningful frequency bands and scalp regions.",
      tags: ["Machine Learning", "Biomedical"],
      image: "assets/img/projects/eeg/cover-tsne.jpg",
      links: {},
    },
    {
      title: "Generative Modeling for Binding Molecule Generation",
      badge: "MolGen",
      year: "2025",
      context: "OSU · Prof. Xia Ning",
      description: "Evaluation tools for a protein–ligand generative modeling pipeline, including steric clash detection, bond-length analysis, and PyMOL visualization. Includes PyTorch workflows for processing large batches of generated conformations and a study of flow-matching methods for molecular generation.",
      tags: ["Machine Learning", "Biomedical"],
      image: "assets/img/projects/molgen/cover-pocket.jpg",
      figures: [
        { src: "assets/img/projects/molgen/1-pocket.jpg", caption: "Generated ligand in its target protein pocket (PyMOL render)" },
        { src: "assets/img/projects/molgen/2-pocket.jpg", caption: "Another generated ligand in its protein pocket (PyMOL render)" },
        { src: "assets/img/projects/molgen/3-clash-correlation.jpg", caption: "Steric clashes per complex: generated molecules vs. known ligands (TargetDiff, Pearson r = 0.45)" },
        { src: "assets/img/projects/molgen/4-bond-length.jpg", caption: "Double-bond length distributions of generated molecules across models vs. training data" },
      ],
      links: {},
    },
    {
      title: "DNA Methylation & HPV Status in Head and Neck Squamous Cell Carcinoma",
      badge: "HNSCC",
      year: "2024",
      context: "OSU · Prof. Xiaokui Mo · Best Poster Award",
      description: "R/Python workflows for clinical and DNA methylation data covering preprocessing, HPV-based patient stratification, and statistical testing. Estimated epigenetic age with Bioconductor and compared HPV-related differences in epigenetic aging. Won the **Best Poster Award** among 22 students.",
      tags: ["Statistics", "Biomedical"],
      image: "assets/img/projects/hnscc/cover-volcano.jpg",
      // Figures open in a click-to-enlarge gallery.
      figures: [
        { src: "assets/img/projects/hnscc/1-volcano.jpg", caption: "Differentially methylated genes, HPV-positive vs. HPV-negative (volcano plot)" },
        { src: "assets/img/projects/hnscc/2-survival.jpg", caption: "Kaplan–Meier overall survival by HPV status (p = 0.059)" },
        { src: "assets/img/projects/hnscc/3-network.jpg", caption: "Gene interaction network of differentially methylated genes (QIAGEN IPA)" },
      ],
      links: {
        code: "https://github.com/gradse/HNSCC",
        poster: "https://github.com/gradse/HNSCC/blob/main/poster/HNSCC_Poster.pdf",
      },
    },
  ],

  projects: [
    {
      title: "CivicSnap: Ask Mountain View",
      badge: "CivicSnap",
      year: "2026",
      context: "NewsBreak × CMU-SV ECE Hackathon · 5th Place",
      description: "Installable phone app (PWA) that turns a photo of a neighborhood problem into a city service request. A multimodal LLM classifies the photo, filters out non-city matters, stops the flow for emergencies, and fills Mountain View's Ask MV form, showing where every field's value came from. The resident reviews one screen and taps once. Built with Next.js, React, TypeScript, Zod, Turf.js and MapLibre.",
      tags: ["LLM Agent", "Mobile / PWA"],
      image: "",
      links: { code: "https://github.com/yjiao3-cmu-S26/NewsBreak-Hackathon-AskMountainView/tree/yufei-dev" },
      details: window.FEATURES.civicsnap, // "Features" button — edit in data-features.js
      screens: [
        { src: "assets/img/projects/civicsnap/01-home.jpg", caption: "Home: one action — take a photo of the problem" },
        { src: "assets/img/projects/civicsnap/02-analysis.jpg", caption: "Analysis: the vision model classifies the photo, keeping what it can see apart from what it is guessing" },
        { src: "assets/img/projects/civicsnap/03-form.jpg", caption: "The city's Ask MV form, filled in by the agent — every field shows where its value came from" },
        { src: "assets/img/projects/civicsnap/04-dashboard.jpg", caption: "My reports: grouped by what the resident can do next" },
        { src: "assets/img/projects/civicsnap/05-emergency.jpg", caption: "Emergency: the 311 flow stops and points to 911 and PG&E instead" },
        { src: "assets/img/projects/civicsnap/06-out-of-scope.jpg", caption: "Out of scope: non-city issues are filtered out, with the right agency to contact" },
      ],
    },
    {
      title: "STAT-MiniBank",
      badge: "MiniBank",
      year: "2026 – Present",
      context: "Dataset version control & analysis platform",
      description: "Full-stack analytics platform (React, TypeScript, FastAPI, SQLAlchemy, PostgreSQL) with immutable dataset versioning for reproducible analysis. Offers 100+ no-code statistical, ML, and text-mining tools. Runs on AWS with Docker, Terraform, and JWT authentication.",
      tags: ["Full-stack", "Statistics", "Cloud"],
      image: "assets/img/projects/minibank/cover-collage.jpg",
      figuresLabel: "screens",
      note: "Public release coming soon",
      details: window.FEATURES.minibank, // "Features" button — edit in data-features.js
      figures: [
        { src: "assets/img/projects/minibank/1-version-history.jpg", caption: "Dataset version control: immutable versions with notes (original → median-imputed → derived column), with preview and restore" },
        { src: "assets/img/projects/minibank/2-t-test.jpg", caption: "Statistical testing: the app picks Welch's t-test automatically and explains why (tumor radius, malignant vs. benign)" },
        { src: "assets/img/projects/minibank/3-boxplot.jpg", caption: "Data exploration: grouped boxplots by diagnosis" },
        { src: "assets/img/projects/minibank/4-ml-pipeline.jpg", caption: "Reusable ML pipeline: a 12-step wizard with readiness checks, stratified split and cross-validation" },
        { src: "assets/img/projects/minibank/5-model-evaluation.jpg", caption: "Saved model evaluation: Random Forest with test and cross-validation metrics" },
        { src: "assets/img/projects/minibank/6-model-comparison.jpg", caption: "Model comparison across saved evaluations, with the best value in each column highlighted" },
      ],
      links: { code: "", demo: "" },
    },
    {
      title: "Emergency Social Network (ESN)",
      badge: "ESN",
      year: "2026",
      context: "Carnegie Mellon University",
      description: "Real-time communication platform (Node.js, Express, Socket.IO, PostgreSQL) for public alerts and private messaging during emergencies. Designed with OOAD/UML using Observer and MVC patterns, with REST APIs, unit and integration tests, and CI.",
      tags: ["Full-stack", "Software Engineering"],
      image: "",
      links: {},
      note: "Course project · source code private per academic integrity policy · available on request",
      details: window.FEATURES.esn, // "Features" button — edit in data-features.js
      // Phone screenshots: shown on the card and in a click-to-enlarge gallery.
      screens: [
        { src: "assets/img/projects/esn/01-public.jpg", caption: "Public chat: community-wide messages with each user's safety status" },
        { src: "assets/img/projects/esn/02-private-list.jpg", caption: "Private messages: conversation list with unread counts" },
        { src: "assets/img/projects/esn/03-private-chat.jpg", caption: "Private chat: one-to-one messaging in real time" },
        { src: "assets/img/projects/esn/04-directory.jpg", caption: "Directory: who is online and their current status" },
        { src: "assets/img/projects/esn/05-announcements.jpg", caption: "Announcements: alerts published by coordinators" },
        { src: "assets/img/projects/esn/06-safety.jpg", caption: "Safety hub: hazards, contacts, supplies and plans" },
        { src: "assets/img/projects/esn/07-hazards.jpg", caption: "Hazards: live earthquake and wildfire events, sorted by distance" },
        { src: "assets/img/projects/esn/08-profile.jpg", caption: "Profile: account info and status updates" },
      ],
    },
  ],

  // Use **Your Name** to bold yourself in the author list. `role` (optional) describes your contribution.
  // The first link goes on the title; any further links (code, slides …) become buttons.
  publications: [
    {
      authors: "Yan, F., Wu, A., **Wang, Y.**, et al.",
      title: "Cancer-related microangiopathic hemolytic anemia (CR-MAHA) in a metastatic breast cancer patient with a germ-line ATM single nucleotide variant and an ESR1 fusion variant: insights from a case report on early diagnosis and improved outcomes",
      venue: "Frontiers in Oncology, 16, 2026",
      role: "Co-wrote the original draft; review and editing.",
      links: { doi: "https://doi.org/10.3389/fonc.2026.1755142" },
    },
    {
      authors: "Husain, M., Sirineni, P., Hansotia, K., McMahon, A., **Wang, Y.**, Mo, X., Fetzer, E., Chen, J. L., Liebner, D. A., Tinoco, G.",
      title: "Predictive Value of Neutrophil-to-Lymphocyte Ratio in Immunotherapy Outcomes in Advanced Sarcoma",
      venue: "Connective Tissue Oncology Society (CTOS) Annual Meeting, 2024 · Poster P244",
      role: "Data analysis and clinical demographic tables summarizing patient characteristics (sex, age, disease stage, lines of therapy, histology).",
      links: { abstract: "https://ctos2024.eventscribe.net/ajaxcalls/PosterInfo.asp?PosterID=691437" },
    },
  ],

  awards: [
    { year: "2026", text: "5th Place — NewsBreak x CMU-SV ECE Hackathon" },
    { year: "2025", text: "*Summa cum laude*, The Ohio State University" },
    { year: "2024", text: "Best Poster Award — Biomedical Informatics Summer Internship, The Ohio State University" },
  ],

  skills: [
    { label: "Languages", items: "Python, R, SQL, SAS, Java, TypeScript, JavaScript, C#, C" },
    { label: "ML & Libraries", items: "PyTorch, scikit-learn, XGBoost, Bioconductor, Node.js, Express.js, FastAPI, SQLAlchemy" },
    { label: "Data & Tools", items: "PostgreSQL, SQLite, Git, Docker, AWS, Terraform, RStudio, JMP, Elasticsearch" },
    { label: "Statistics", items: "Inference, hypothesis testing, regression, ANOVA, survival analysis, multivariate analysis, experimental design" },
  ],
};
