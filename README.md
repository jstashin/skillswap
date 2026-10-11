# SkillSwap — A Local Skill Exchange Platform

SkillSwap is a responsive web application where users can explore local skill listings, discover providers, and view learning opportunities. It includes Firebase authentication, protected skill details, and user profile management.

## Live Website

🌐 [Visit SkillSwap](https://skill-swap-skill.netlify.app/)



## Main Features

- **Responsive Layout:** Adapts to mobile, tablet, and desktop screens.
- **Skill Listings:** Browse skills with images, prices, ratings, and available slots.
- **Protected Skill Details:** Logged-in users can view provider information and detailed skill descriptions.
- **Firebase Authentication:** Sign up and log in using email/password or Google.
- **Password Recovery:** Request a password reset email.
- **Profile Management:** View your profile and update your name and photo URL.
- **Session Booking Form:** Submit your name and email to display a success notification.
- **Interactive Homepage:** Includes an autoplay slider, popular skills, top-rated providers, and scroll animations.

> The booking form currently demonstrates the submission flow.
> Bookings are not saved to a database or sent to providers.

## Technology Stack

| Technology | Purpose |
|------------|---------|
| React | Component-based user interface |
| Vite | Development server and production build |
| React Router | Navigation and protected routes |
| Firebase Authentication | Authentication and profile management |
| Tailwind CSS | Responsive styling |
| DaisyUI | UI components |
| Netlify | Hosting |

## Dependencies

### Application Dependencies

- `react` and `react-dom` — UI rendering
- `react-router` and `react-router-dom` — Routing
- `firebase` — Authentication
- `tailwindcss` and `@tailwindcss/vite` — Styling and Vite integration
- `swiper` — Homepage slider
- `aos` — Scroll animations
- `animate.css` — CSS animation library
- `react-toastify` — Toast notifications
- `react-icons` — Icons

### Development Dependencies

- `vite`
- `@vitejs/plugin-react`
- `daisyui`
- `eslint` and `@eslint/js`
- `eslint-plugin-react-hooks`
- `eslint-plugin-react-refresh`
- `@types/react` and `@types/react-dom`
- `globals`

## Run Locally

### 1. Prerequisites

Install Node.js 22.12+ and npm.

### 2. Clone the Repository

```bash
git clone https://github.com/jstashin/skillswap.git
cd skillswap
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Firebase

Create a Firebase project and register a web app.

In Firebase Authentication, enable:

- Email/Password
- Google

Add `localhost` to Authentication → Settings → Authorized domains if it is not already listed.

Create a `.env.local` file in the project root and add your Firebase web app configuration:

```env
VITE_apiKey=your_api_key
VITE_authDomain=your_project.firebaseapp.com
VITE_projectId=your_project_id
VITE_storageBucket=your_storage_bucket
VITE_messagingSenderId=your_messaging_sender_id
VITE_appId=your_app_id
```

Use these exact variable names because they match the Firebase configuration in the source code.

### 5. Start the Development Server

```bash
npm run dev
```

Open the local URL shown in your terminal.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Create the production build in `dist` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Data Source

Skill listings are loaded from `public/skillsData.json`.
Firebase handles authentication and user profile information.

## Deployment

For deployment on Netlify:

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- Add the Firebase environment variables in Netlify.
- Add your deployed domain to Firebase Authentication's authorized domains.

The repository includes `public/_redirects` for client-side routing.

## Relevant Links

- [Live Website](https://skill-swap-skill.netlify.app/)
- [GitHub Repository](https://github.com/jstashin/skillswap)
- [Developer GitHub](https://github.com/jstashin)
