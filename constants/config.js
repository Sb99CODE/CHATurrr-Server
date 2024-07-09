const corsOptions = {
  origin: [
    "https://cha-turrr-client.vercel.app",
    "https://cha-turrr-client-14qli4sue-sujals-projects-46f211ea.vercel.app",
    "https://cha-turrr-client-sujals-projects-46f211ea.vercel.app",
    "https://cha-turrr-client-git-master-sujals-projects-46f211ea.vercel.app",
     "http://localhost:5173",
     "http://localhost:4173",
    process.env.CLIENT_URL,
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};


const CHATUR_TOKEN = "chatur-token";

export { corsOptions, CHATUR_TOKEN };
