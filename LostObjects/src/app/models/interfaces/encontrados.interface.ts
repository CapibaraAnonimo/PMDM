import firebase from "firebase/compat";
import GeoPoint = firebase.firestore.GeoPoint;

export interface EncontradosInterface {
  usuario: string;
  lat: number;
  lng: number;
}
