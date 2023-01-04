import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {MatchsInterface} from "../models/interfaces/matchs.interface";

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  matchRef!: AngularFirestoreCollection<MatchsInterface>;

  constructor(private db: AngularFirestore) {
    this.matchRef = db.collection("/matches");
  }

  getAll(): AngularFirestoreCollection<MatchsInterface> {
    return this.matchRef;
  }

  create(match: MatchsInterface): any {
    return this.matchRef.add({ ...match });
  }

  update(id: string, data: any): Promise<void> {
    return this.matchRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.matchRef.doc(id).delete();
  }
}
