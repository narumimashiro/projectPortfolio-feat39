import styles from '@/styles/components/prsk/PrskSortBar.module.sass'

// MyComponents
import PrskUnit from '@/components/atoms/prsk/PrskUnit'

// common
import * as Def from '@/common/define'

const PrskSortBar = () => {

  return (
    <>
      <div className={styles.container}>
        <div className={styles['sort-tab']}> <PrskUnit unit={Def.allArtist}></PrskUnit></div>
        <div className={styles['sort-tab']}> <PrskUnit unit={Def.VirtualSinger}></PrskUnit></div>
        <div className={styles['sort-tab']}> <PrskUnit unit={Def.LeoNeed}></PrskUnit></div>
        <div className={styles['sort-tab']}> <PrskUnit unit={Def.MoreMoreJump}></PrskUnit></div>
        <div className={styles['sort-tab']}> <PrskUnit unit={Def.VividBadSquad}></PrskUnit></div>
        <div className={styles['sort-tab']}> <PrskUnit unit={Def.WonderlandsShowTime}></PrskUnit></div>
        <div className={styles['sort-tab']}> <PrskUnit unit={Def.NightcodeAt25}></PrskUnit></div>
        <div className={styles['sort-tab']}> <PrskUnit unit={Def.prskALL}></PrskUnit></div>
        <div className={styles['sort-tab']}> <PrskUnit unit={Def.Preset}></PrskUnit></div>
      </div>
    </>
  )
}
export default PrskSortBar