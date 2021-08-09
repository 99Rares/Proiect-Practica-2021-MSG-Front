import {LongUser} from "../../users/model/users.data";
import {ApartmentDetails} from "../../apartments/model/apartment.data";

export interface WishlistData {
  id: number;
  user: LongUser;
  apartment: ApartmentDetails;
}
