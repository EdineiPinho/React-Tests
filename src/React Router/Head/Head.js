import React from 'react'

const Head = (props) => {
  React.useEffect(() => {
    document.title = "Neo | " + props.title;
    if (props.description) {
      if (document
        .querySelector('meta[name="description"]')) {
        document
          .querySelector('meta[name="description"]')
          .setAttribute('content', props.description)
      } else {
        let el = document.createElement('meta');
        el.setAttribute('name', 'description');
        el.setAttribute('content', props.description);
        document.head.appendChild(el);
      }
    };
  }, [props])

  return (
    <>
    </>
  )
}

export default Head