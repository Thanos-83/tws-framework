function RowContainer({ displayOption, children }) {
  return (
    <div
      className={`tws_row_container ${
        displayOption === 'flex'
          ? 'flex items-center justify-between'
          : displayOption === 'grid'
          ? 'grid grid-cols-12'
          : displayOption === 'grid-fit'
          ? 'grid grid-cols-fit items-center'
          : displayOption === 'grid-center'
          ? 'grid grid-cols-12 items-center'
          : 'block'
      }`}>
      {children}
    </div>
  );
}

export default RowContainer;
