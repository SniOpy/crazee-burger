import { getDoc, doc, setDoc } from "firebase/firestore"
import {db} from './firebase-config'

export const synchBothMenus  = async (userId, menuUpdated) => {

  const cachette = doc(db, "users", userId);
  
  const nourriture = {
    username: userId,
    menu: menuUpdated,
  }

  await setDoc(cachette, nourriture);
  
}

export const getMenus = async (idUser) => {

    const docRef = doc(db, "users", idUser); 

    const docSnapshot = await getDoc(docRef);
        
    if(docSnapshot.exists()){

        const menuReceived = docSnapshot.data();
        return menuReceived;
    }

    return null;
}
 