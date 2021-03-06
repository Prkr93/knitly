import React, {useEffect} from 'react';

const Inspirations = (props) => {
  let inspiration = props.inspirations.map((patternContainer, index) => {
    let pattern = [];
    for (const row in patternContainer) {
      let rowContainer = [];
      patternContainer[row].forEach((stitch, index) => {
        let patternStitch = React.createElement('article', {className: `stitch ${stitch}`, key: index})
        rowContainer.push(patternStitch);
      });
      let patternRow = React.createElement('section', { className: `row ${row}`, key: row }, rowContainer)
      pattern.push(patternRow);
    }
    return (<section key={index} className='pattern'>{pattern}</section>)
  });

  useEffect(() => {
    props.getInspired();
  }, [props]);

  return (
    <div className='inspirations'>{inspiration}</div>
  )
}

export default Inspirations;
