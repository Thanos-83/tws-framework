function Row({ color, children }) {
  const styles = {
    backgroundColor: `${color}`,
  };

  // bg-[${color}]
  return (
    <div className={`tws_row `} style={styles}>
      {children}
    </div>
  );
}

export default Row;
