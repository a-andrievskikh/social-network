import preloader from 'assets/images/preloader.svg'

export const Preloader = () => {
  return (
    <div style={{ position: 'absolute', top: '30vh', left: '50vh' }}>
      <img src={preloader} alt={'preloader'} />
    </div>
  )
}