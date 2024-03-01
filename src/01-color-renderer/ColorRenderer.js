import Color from './Color'

const colors = [{
  hex: '#91A6FF',
  name: 'Cornflower Blue'
},
{
  hex: '#FF88DC',
  name: 'Persian Pink'
},
{
  hex: '#80FF72',
  name: 'Screamin Green'
},
{
  hex: '#FF5154',
  name: 'Tart Orange'
}]

export default function ColorRenderer () {
  return (
    <>
    <h2>
      Color Renderer:
    </h2>
    {colors.map((color) => {
      return (
        <Color key={color.hex} hex={color.hex} name={color.name} />
      );
    })}
    </>
  )
}
