import { useRecoilState } from 'recoil'

// recoil
import { prskUnitSelected } from '@/recoil/prskPlayList'

const PrskUnit = (props: {unit: string}) => {

  const [_, setSelectUnit] = useRecoilState(prskUnitSelected)

  return (
    <>
      <div onClick={() => setSelectUnit(props.unit)}>
        {props.unit}
      </div>
    </>
  )
}
export default PrskUnit