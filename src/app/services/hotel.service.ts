import { Injectable } from '@angular/core';
import { Hotel } from '../models/hotel.model';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor() { }
  public getHotels():Hotel[]{
    return [
      {
        id:1,
        nom: "Hotel Silmandé",
        imgUrl:"assets/hotel-room.jpg",
        prix:230,
        description: "L’Hôtel Sopatel Silmandé est entouré d’un très grand parc privé. Il bénéficie d’une vue spectaculaire sur le lac et le barrage voisin. A votre arrivée vous découvrirez par un jardin luxuriant des fleurs, palmiers, fontaines et cascades. ",
        rating:2
      },
      {
        id:2,
        nom: "Hotel Palm Beach",
        imgUrl:"assets/window.jpg",
        prix:205,
        description: "Découvrez pourquoi l'Hotel Palm Beach est l'hôtel préféré des voyageurs visitant Ouagadougou. Offrant un grand confort et un excellent rapport qualité-prix, il propose un cadre un économique et un large éventail de services conçus pour les voyageurs comme vous.",
        rating:5
      },
      {
        id:3,
        nom: "Bravia Hotel",
        imgUrl:"assets/indoors.jpg",
        prix:180,
        description: "Bravia Hotel Ouagadougou est situé en centre-ville, à deux minutes de l’aéroport international et non loin des grandes institutions administratives et privées. Son immeuble de huit étages, culmine dans le nouvel espace d’affaires, en plein cœur de la ville de Ouagadougou.",
        rating:3.5
      },
      {
        id:4,
        nom: "Hotel Royal Beach",
        imgUrl:"assets/the-interior.jpg",
        prix:130,
        description: "Expérience Fort, le Royal Beach Hotel propose cent quarante chambres, dont des suites toutes climatisées, quatorze au niveau septembre, toutes non-fumeurs ; avec écran plat ; mini-bar; téléphone; salle de bain; internet haut débit etc.",
        rating:4
      }
      
    ]
  }
}
