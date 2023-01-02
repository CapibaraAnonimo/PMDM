import {CollectionReference} from "@firebase/firestore";

export interface MatchsInterface {
  id: string;
  perdido: CollectionReference;
  encontrado: CollectionReference;
}
