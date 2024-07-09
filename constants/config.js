const corsOptions = {
  origin: [
    "https://cha-turrr-client.vercel.app",
    "https://cha-turrr-client-14qli4sue-sujals-projects-46f211ea.vercel.app",
    "https://cha-turrr-client-sujals-projects-46f211ea.vercel.app",
    "https://cha-turrr-client-git-master-sujals-projects-46f211ea.vercel.app",
    process.env.CLIENT_URL,
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};


const CHATUR_TOKEN = "chatur-token";

export { corsOptions, CHATUR_TOKEN };
