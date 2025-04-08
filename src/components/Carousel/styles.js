import styled from 'styled-components';

export const CarouselContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
`;

export const Inner = styled.div`
  white-space: nowrap;
  transition: transform 0.3s;
  padding: 0 60px;

  @media (max-width: 576px) {
    padding: 0 10px;
  }
`;


export const DivCarouselItem = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1 / 1;
  width: 150px;
  height: 150px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  color: #ffffff;
  margin: 25px;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
  transition: transform 0.2s ease;
  cursor: pointer;

  &:before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 16px;
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
  }

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 576px) {
    width: 120px;
    height: 120px;
    margin: 5px;
  }
`;


export const Indicadores = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Prev = styled.button`
  position: absolute;
  left: 20px;
  background: black;
  border: none;
  color: white;
  border-radius: 50px;
  font-size: 2rem;
  cursor: pointer;
  z-index: 2;
  padding: 0px;
  height: 40px;
  width: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
    padding-bottom: 5px;
`;

export const Next = styled.button`
  position: absolute;
  right: 20px;
  background: black;
  border: none;
  color: white;
  border-radius: 50px;
  font-size: 2rem;
  cursor: pointer;
  z-index: 2;
    padding: 0px;
  height: 40px;
  width: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 5px;
`;