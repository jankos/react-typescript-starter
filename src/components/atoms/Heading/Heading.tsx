import * as React from 'react';

type HeadingProps = {
  text: string
}

const Heading: React.FunctionComponent<HeadingProps> = ({text}): JSX.Element => {
  return <h1 className="text-2xl font-bold">{text}</h1>
}

export default Heading;
