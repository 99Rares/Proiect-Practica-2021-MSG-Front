export interface OwnerDetails{
  firstName: string,
  lastName: string,
  phoneNumber: string,
  urlStatisticsChart: string,
}
 export interface PictureDetails{
   url: string
 }

export interface ApartmentDetails{
  titleApart: string,
  transactionType: string,
  propertyType: string,
  city: string,
  neighbourhood: string,
  price: number,
  nrRooms: number,
  surface: number,
  yearConstruction: number,
  description: string,
  owner: OwnerDetails,
  pictures: PictureDetails[]
}
