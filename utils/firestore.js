// utils/firestore.js
import { doc, getDoc, setDoc, updateDoc, increment } from "firebase/firestore";
import { db } from "./firebase"; // Import Firestore instance


// Function to get the view count of a blog post
export async function getBlogViewCount(slug) {
    
  try {
    const docRef = doc(db, "blogViews", slug);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data().views;
    } else {
      // If document does not exist, initialize with 0 views
      await setDoc(docRef, { views: 0 });
      return 0;
    }
  } catch (error) {
    console.error("Error getting document:", error);
  }
}

// Function to increment the view count of a blog post
export async function incrementBlogViewCount(slug) {
  try {
    const docRef = doc(db, "blogViews", slug);
    await updateDoc(docRef, {
      views: increment(1)
    });
  } catch (error) {
    console.error("Error updating document:", error);
  }
}
