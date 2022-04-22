import StitchOptions from "./StitchOptions";
import MirrorMode from "./MirrorMode";

const SideBar = (props) => {
  return (
    <section className='side-bar'>
      <StitchOptions setStitchType={props.setStitchType} setStitchColor={props.setStitchColor} />
      <MirrorMode setMirrorMode={props.setMirrorMode} dimensions={props.dimensions} />
      {/* <SavePattern /> */}
    </section>
  )
}

export default SideBar;