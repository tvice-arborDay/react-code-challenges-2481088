export default function Color ({ setBackgroundColor, hex, name }) {


  return (
    <button
      className='color-square'
      style={{ backgroundColor: hex }}
      onClick={() => setBackgroundColor(hex)}
    >
      <h2>{name}</h2>
    </button>
  )
}
