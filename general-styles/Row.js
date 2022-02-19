function Row({ color, children }) {
  const bgcolor = {
    // bg: `${color}`,
    // bg: `bg-[${color}]`,
  };
  // console.log(bgcolor);
  // bg-[${color}]
  return <div className={`tws_row bg-${color}`}>{children}</div>;
}

export default Row;
