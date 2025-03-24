import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { fakeMenu} from "../fakeData/fakeMenu"

export const getUser = async (idUser) => {

    const docRef = doc(db, "users", idUser); 

    const docSnapshot = await getDoc(docRef);
        
        
    if(docSnapshot.exists()){

        const userReceived = docSnapshot.data();
        return userReceived;
    }
}

export const createUser = (username) => {

    const docRef = doc(db, "users", username);
    
    const data = {
        username: username,
        menu: fakeMenu.SMALL,
    }
    setDoc(docRef, data);

}

export const authentificate = async (idUser) => {
    const existingUser = await getUser(idUser);
    
    if(!existingUser) {
      createUser(idUser)
    }
}