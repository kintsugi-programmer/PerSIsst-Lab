Frontend:
1. Next.js: React-based framework for easy enhanced functionality.
2. Tailwind CSS: Utility-first framework for responsive design.

Backend:
1. Next.js API routes: Handle submissions, blogs, student info, publications, news.
2. MongoDB/PostgreSQL: Store blog posts, student data, publications, news as needed.
3. Blog Storage: JSON (dev) / Database (prod) for fast development and dynamic production content.
4. Form Management: Database storage, JSON for pre-filled data and config.

DevOps:
1. Apache 2: Serve the Next.js application.
2. Let's Encrypt: Provide HTTPS configuration.
3. NixOS: Manage configs and dependencies reproducibly.
4. Ubuntu server: Host Apache 2 and SSL setup.



PS C:\Users\Siddhant bali\OneDrive\Documents\GitHub\PerSIsst-Lab\v1> npm install bcrypt mongodb mongoose next-auth
The folder structure you've provided represents the PerSIsst Lab project you're working on. Here's a brief breakdown of the key directories and files:

1. **Root Directory:**
   - `app`, `components`, `data`, `lib`, `models`, `roughapp`, `styles` — The main directories for organizing the app's structure.
   - Configuration files like `jsconfig.json`, `next.config.mjs`, `tailwind.config.js`, etc.

2. **App Directory:**
   - `app`: Contains the main sections of your Next.js project, including routes for "about," "beyond," "blogs," "members," "opportunities," and "research."
   - Example files include `Lab.jsx`, `Collaborators.jsx`, `AluminiStories.jsx`, and `page.jsx`, reflecting different aspects of the site (about the lab, opportunities, etc.).

3. **Components Directory:**
   - `Nav.jsx`, `Footer.jsx`: Likely header and footer components for the website.

4. **Data Directory:**
   - `example.json`: Placeholder for some dataset.

5. **Lib Directory:**
   - `mongodb.js`: Contains MongoDB connection logic or related functionality.

6. **Models Directory:**
   - `User.js`: Defines the data model for user-related information.

7. **Roughapp Directory:**
   - This appears to be an early or alternate version of the app, containing files like `globals.css`, `layout.js`, `page.js`, and custom fonts.

8. **Styles Directory:**
   - `globals.css`: Global CSS styles for the app.

