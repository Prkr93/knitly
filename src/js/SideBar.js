import StitchOptions from "./StitchOptions";
import MirrorMode from "./MirrorMode";

const SideBar = (props) => {
  return (
    <section className='side-bar'>
      <StitchOptions setStitchType={props.setStitchType} setStitchColor={props.setStitchColor} />
      <MirrorMode
        setMirrorMode={props.setMirrorMode}
        rows={props.rows}
        divAndConq={props.divAndConq}
      />
    </section>
  )
}

export default SideBar;
