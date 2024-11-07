type ParallaxImageProps = {
  imageUrl: string;
};

export const ParallaxImage = ({imageUrl}: ParallaxImageProps) => (
  <div
    className="parallax-section -mx-4"
    style={{ backgroundImage: `url(${imageUrl})` }}
  ></div>
);
