const corsOptions = {
  origin: [
    "https://cha-turrr-client.vercel.app",
    "https://cha-turrr-client-ndcnenzg0-sujals-projects-46f211ea.vercel.app",
    "https://vercel.com/sujals-projects-46f211ea/cha-turrr-client/52mduPCa2EyZ1JJkr5CnMyjrMNh7",
     "http://localhost:5173",
     "http://localhost:4173",
    process.env.CLIENT_URL,
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};


const CHATUR_TOKEN = "chatur-token";

export { corsOptions, CHATUR_TOKEN };
