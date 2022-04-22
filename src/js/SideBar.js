import StitchOptions from "./StitchOptions";
import MirrorMode from "./MirrorMode";

const SideBar = () => {
  return (
    <section className='side-bar'>
      <StitchOptions />
      <MirrorMode />
      {/* <SavePattern /> */}
    </section>
  )
}

export default SideBar;