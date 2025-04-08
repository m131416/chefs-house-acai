import { DivCarouselItem } from './styles';

export const CarouselItem = ({ children, imagem, onClick }) => {
  return (
    <DivCarouselItem
      style={{
        backgroundImage: `url(${imagem})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      onClick={onClick} 
    >
      {children}
    </DivCarouselItem>
  );
};
