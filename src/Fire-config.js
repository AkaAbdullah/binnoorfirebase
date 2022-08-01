import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDOwpjqxDUqsonpH0RJzWk0L1omEj3KNTk',
  authDomain: 'newbinnoor-ca98d.firebaseapp.com',
  projectId: 'newbinnoor-ca98d',
  storageBucket: 'newbinnoor-ca98d.appspot.com',
  messagingSenderId: '893629759963',
  appId: '1:893629759963:web:a135756f510418cea167fe',
  measurementId: 'G-HXRFSZLQMR',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const collectionRef = collection(db, 'users')
export const orderCollection = collection(db, 'orders')
export const productCollectionRef = collection(db, 'products')

// getDocs(collectionRef)
//   .then((snapshot) => {
//     let users = []
//     snapshot.docs.forEach((doc) => {
//       users.push({ ...doc.data(), id: doc.id })
//     })
//     console.log(users)
//   })
//   .catch((err) => {
//     console.log(err.message)
//   })
