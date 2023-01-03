import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import { PerdidosInterface } from '../models/interfaces/perdidos.interface';
import {EncontradosInterface} from "../models/interfaces/encontrados.interface";

@Injectable({
  providedIn: 'root'
})
export class EncontradosService {
  encontradosRef!: AngularFirestoreCollection<EncontradosInterface>;

  constructor(private db: AngularFirestore) {
    this.encontradosRef = db.collection("/encontrados");
  }

  getAll(): AngularFirestoreCollection<EncontradosInterface> {
    return this.encontradosRef;
  }

  create(encontrado: EncontradosInterface): any {
    return this.encontradosRef.add({ ...encontrado });
  }

  update(id: string, data: any): Promise<void> {
    return this.encontradosRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.encontradosRef.doc(id).delete();
  }
}
