const rawAppwriteUrl = import.meta.env.VITE_APPWRITE_URL ?? "";
const appwriteUrl = String(rawAppwriteUrl).trim();

if (appwriteUrl.includes("localhost") || appwriteUrl.includes("127.0.0.1")) {
  console.warn(
    "Appwrite is using localStorage for session management. Increase your security by adding a custom domain as your API endpoint."
  );
}

const conf = {
  appwriteUrl,
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteDatabaseId: String(import.meta.env.VITE_DATABASE_ID),
  appwriteCollectionId: String(import.meta.env.VITE_COLLECTION_ID),
  appwriteBucketId: String(import.meta.env.VITE_BUCKET_ID),
};

export default conf


