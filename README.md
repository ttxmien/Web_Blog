# 🌿 GanBenNgai - Personal Blog & Content Management

A personal blog for sharing articles, personal perspectives, and stories, fully powered by **Sanity CMS** for dynamic content management.

---

## 🚀 Demo & Deployment

- **Website**: [https://ganbenngai.vercel.app](https://ganbenngai.vercel.app)
- **CMS Studio**: [https://ganbenngai.sanity.studio](https://ganbenngai.sanity.studio)

---

## 🛠️ Tech Stack

- **Front-end**: HTML5, CSS3, JavaScript (ES6+)
- **Headless CMS**: Sanity.io (GROQ Query API)
- **Deployment**: Vercel (Front-end), Sanity Cloud (Studio GUI)

---

## 📁 Repository Structure

```text
Web_Blog/
├── GanBenNgai_Blog/       # Front-end source code & Sanity Studio
│   ├── Deploy/             # Sanity Studio configurations & Schemas
│   │   ├── schemaTypes/    # Content schemas (post, author, category...)
│   │   ├── sanity.config.js
│   │   └── sanity.cli.ts
│   ├── index.html          # Main blog layout
│   ├── index.js            # Article fetching & rendering via GROQ
│   └── post.js             # Detailed article view logic
└── README.md