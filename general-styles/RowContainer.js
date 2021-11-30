function RowContainer({ displayOption, classNames, children }) {
  return (
    <div
      className={`tws_row_container  ${
        classNames !== undefined ? classNames : ''
      } ${
        displayOption === 'flex'
          ? 'flex items-center justify-between'
          : displayOption === 'grid'
          ? 'grid grid-cols-12 gap-8'
          : displayOption === 'grid-fit'
          ? 'grid grid-cols-fit items-center gap-8'
          : displayOption === 'grid-center'
          ? 'grid grid-cols-12 items-center gap-8'
          : 'block'
      }`}>
      {children}
    </div>
  );
}

export default RowContainer;
