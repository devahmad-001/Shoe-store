import { Silder } from "./imgslider/imgslider"
import { Ads } from "./ads/ads"
export function Body({ a3 }) {
  return <div>
    <Silder />
    <Ads array={a3} />
  </div>
}