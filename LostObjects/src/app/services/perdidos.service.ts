import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import { PerdidosInterface } from '../models/interfaces/perdidos.interface';

@Injectable({
  providedIn: 'root'
})
export class PerdidosService {
  perdidosRef!: AngularFirestoreCollection<PerdidosInterface>;

  constructor(private db: AngularFirestore) {
    this.perdidosRef = db.collection("/perdidos");
  }

  getAll(): AngularFirestoreCollection<PerdidosInterface> {
    return this.perdidosRef;
  }

  create(perdido: PerdidosInterface): any {
    return this.perdidosRef.add({ ...perdido });
  }

  update(id: string, data: any): Promise<void> {
    return this.perdidosRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.perdidosRef.doc(id).delete();
  }
}
