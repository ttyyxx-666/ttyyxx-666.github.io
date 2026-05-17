// ─────────────────────────────────────────────────────────────────────────────
// config.js — Edit this file to personalize your academic homepage.
// No HTML/CSS knowledge required.
// ─────────────────────────────────────────────────────────────────────────────

const USER_CONFIG = {
  name:       "Tianyi Tao",
  initials:   "TT",
  role:       "PhD",
  university: "Fudan University",
  email:      "tytao20@fudan.edu.cn",
  bio:        "Mathematics",
  photo:      "photo.jpg",   // optional: path to your photo, e.g. "assets/photo.jpg"

  stats: [
    { value: "4",  label: "Publications" },
    { value: "200+", label: "Citations" },
    { value: "5+",   label: "Projects" },
  ],

  links: {
    scholar: "https://scholar.google.com/",
    github:  "https://github.com/",
    twitter: "",          // leave empty to hide
    cv:      "assets/cv.pdf",
  },

  publications: [
    {
      year:     2026,
      title:    "The nonrepetitive coloring of grids",
      authors:  "Tianyi Tao",
      venue:    "Discrete Mathematics",
      links:    { link: "https://doi.org/10.1016/j.disc.2025.114828" },
      abstract: "A brief summary of your paper's contributions and findings.",
    },
    {
      year:     2026,
      title:    "Water transport on a path: finding the strategy through its existence",
      authors:  "Tianyi Tao",
      venue:    "Advances and Applications in Discrete Mathematics",
      links:    {  link: "https://doi.org/10.17654/0974165825031" },
      abstract: "",
    },
    {
      year:     2025,
      title:    "On 1-11-representability and multi-1-11-representability of graphs",
      authors:  "Mohammed Alshammari, Sergey Kitaev, Chaoliang Tang, Tianyi Tao, and Junchi Zhang",
      venue:    "Utilitas Mathematica",
      links:    {  link: "https://doi.org/10.61091/um122-02" },
      abstract: "",
    },
    {
      year:     2026,
      title:    "Finding product and sum patterns in non-commutative settings",
      authors:  "Tianyi Tao and Ningyuan Yang",
      venue:    "Frontiers of Mathematics",
      links:    {  link: "https://doi.org/10.1007/s11464-024-0166-6" },
      abstract: "",
    },
  ],

  projects: [
    {
      name: "Project Name",
      desc: "Brief description of your project and its impact.",
      tags: ["Python", "PyTorch"],
      url:  "#",
    },
  ],

  news: [
    { date: "2025.01", badge: "New",   text: "Paper accepted at Conference 2025!" },
    { date: "2024.09", badge: "Award", text: "Received fellowship / award." },
  ],

  education: [
    { period: "2020–Present", degree: "Ph.D. in Computer Science", institution: "Your University" },
    { period: "2016–2020",    degree: "B.S. in Computer Science",  institution: "Your University" },
  ],

  experience: [
    { period: "Summer 2024", role: "Research Intern", institution: "Research Lab / Company" },
  ],
};
