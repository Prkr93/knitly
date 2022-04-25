import React, {useEffect} from 'react';

const Inspirations = (props) => {
  let inspiration = props.inspirations.map(patternContainer => {
    console.log(patternContainer, '<<<pat')
    let pattern = [];
    for (const row in patternContainer) {
      let rowContainer = [];
      console.log(patternContainer[row])
      patternContainer[row].forEach((stitch, index) => {
        let patternStitch = React.createElement('article', {className: `stitch ${stitch}`, key: index})
        rowContainer.push(patternStitch);
      });
      let patternRow = React.createElement('section', { className: `row ${row}`, key: row }, rowContainer)
      pattern.push(patternRow);
    }
    return pattern
  });

  useEffect(() => {
    props.getInspired();
  }, []);

  return (
    <div>{inspiration}</div>
  )
}

export default Inspirations;
