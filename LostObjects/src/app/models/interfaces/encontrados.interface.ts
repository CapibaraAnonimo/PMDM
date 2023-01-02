import firebase from "firebase/compat";
import GeoPoint = firebase.firestore.GeoPoint;

export interface EncontradosInterface {
  id: string;
  usuario: string;
  localizacion: GeoPoint;
}
