function SimpleCard({ index, title, desc, link }) {
  const handleClick = (link) => {
    // navigate(link);
  };
  return (
    <div className='px-16 cursor-pointer hover:text-sky-700 shadow p-4 rounded-lg' onClick={() => handleClick(link)}>
      <h1 className='text-4xl font-extrabold mb-3.5'>0{index}</h1>
      <h2 className='text-3xl font-semibold mb-2.5'>{title}</h2>
      <p className='text-sm text-gray-500 mb-4 '>{desc}</p>
    </div>
  );
}

export default SimpleCard;
